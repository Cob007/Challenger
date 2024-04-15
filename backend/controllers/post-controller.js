const { ErrorResponse, SuccessResponse } = require("../constant/Model");
const MockData = require("../data/mockSample/challenge.json");
const knex = require("knex")(require("../knexfile"));

const getPostByChallengeId = async (_req, res) => {
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

const get = async (req, res) => {
  try {
    const allPost = await knex("post").where({
      challenge_id: req.params.challengeId,
    });
    res.status(200).json(SuccessResponse(200, allPost, "Fetched Successfully"));
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

const create = async (req, res) => {
  try {
    const { title, posturl } = req.body;

    if (!!title || !!posturl || !!likes) {
      const userInfo = await knex
        .select("id")
        .from("user")
        .where({ email: req.email })
        .first();

      //store to db
      const result = await knex("post").insert({
        title: title,
        posturl: posturl,
        likes: 0,
        challenge_id: req.params.challengeId,
        user_id: userInfo.id,
      });
      console.log(result);
      const newPostId = result[0];
      const newPostObj = await knex("post").where({ id: newPostId });

      res
        .status(200)
        .json(SuccessResponse(200, newPostObj, "Fetched Successfully"));
    } else {
      res.status(403).json(ErrorResponse(403, "Require field not entered!"));
    }
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

const vote = async (req, res) => {
  try {
    const userInfo = await knex
      .select("id")
      .from("user")
      .where({ email: req.email })
      .first();

    const getPost = await knex("post").where({ id: req.params.postId }).first();

    console.log(getPost.likes)
    console.log(getPost.likes+1)


    const re = await knex("post")
      .where({ id: req.params.postId })
      .update({
        likes: getPost.likes+1,
      });


    res.status(200).json(SuccessResponse(200, re, "Fetched Successfully"));
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

module.exports = {
  getPostByChallengeId,
  get,
  create,
  vote,
};
