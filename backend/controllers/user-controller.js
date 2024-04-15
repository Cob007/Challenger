const { ErrorResponse, SuccessResponse } = require("../constant/Model");
const MockData = require("../data/mockSample/challenge.json");
const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const { uuid } = require("uuidv4");
require("dotenv").config();
const jwt = require('jsonwebtoken')


const index = async (req, res) => {
  try {
    const getUser = await knex("user")
    .where({ "email": req.email })
    
    res
      .status(200)
      .json(SuccessResponse(200, getUser, "Fetched Successfully"));
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { firstname, lastname, username, email, password } = req.body;
    if (!!firstname || !!lastname || !!username || !!email || !!password) {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) throw err;
        const result = await knex("user").insert({
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
          password: hash
        });

        const newUserId = result[0];
        console.log(newUserId)
        const createdUser = await knex("user").where({ id: newUserId });
        console.log(createdUser)

        const token = jwt.sign({ email }, process.env.SECRET_KEY);
        const dataRes = {
          token: token,
          user: createdUser,
        };

        res
        .status(201)
        .json(SuccessResponse(201, dataRes , "Fetched Successfully"));
      });
      
    } else {
      res.status(403).json(ErrorResponse(403, "Require field not entered!"));
    }
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userRes = await knex.from("user").where({ email }).first();
    console.log(userRes);
    const hash = userRes.password;

    bcrypt.compare(password, hash, (err, result) => {
      if (err) throw err;
      if (result) {
        // Passwords match
        const token = jwt.sign({ email }, process.env.SECRET_KEY);
        const dataRes = {
          token: token,
          user: {
            userid: userRes.id,
            email: userRes.email,
            firstname: userRes.firstname,
            lastname: userRes.lastname,
          },
        };
        res
          .status(200)
          .json(SuccessResponse(200, dataRes, "Fetched Successfully"));
      } else {
        // Passwords do not match
        console.log("passwords dont match");
        res.status(404).json(ErrorResponse(404, "Password dont match!"));
      }
    });
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

const userById = async (_req, res) => {
  try {
    const data = {
      data: MockData,
    };
    res
      .status(200)
      .json(SuccessResponse(200, data.data, "Fetched Successfully"));
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

module.exports = {
  index,
  login,
  register,
  userById,
};
