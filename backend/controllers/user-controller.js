const { ErrorResponse, SuccessResponse } = require("../constant/Model");
const MockData = require("../data/mockSample/challenge.json");
const knex = require("knex")(require("./knexfile"));
const bcrypt = require("bcrypt");
const { uuid } = require("uuidv4");

const index = async (_req, res) => {
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

const register = async (req, res) => {
  try {
    const { firstname, lastname, username, email, password } = req.body;
    if (!!firstname || !!lastname || !!username || !!email || !!password) {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) throw err;
        await knex("user").insert({
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
          password: hash,
          id: uuid(),
        });
      });
      res
        .status(201)
        .json(SuccessResponse(201, data.data, "Fetched Successfully"));
    } else {
      res
        .status(403)
        .json(ErrorResponse(403, "Require field not entered!"));
    }
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    
    res
      .status(200)
      .json(SuccessResponse(200, data.data, "Fetched Successfully"));
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
