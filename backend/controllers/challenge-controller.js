const { CronJob } = require("cron");
const { ErrorResponse, SuccessResponse } = require("../constant/Model");
const MockData = require("../data/mockSample/challenge.json");
const knex = require("knex")(require("../knexfile"));

const getAll = async (_req, res) => {
  try {
    const challengeAll = await knex("challenge")
                    .where({status : "1"})
                    .orderBy("created_at", "desc");
    res
      .status(200)
      .json(SuccessResponse(200, challengeAll, "Fetched Successfully"));
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

const post = async (req, res) => {
  try {
    const { title, description, contenturl, mediatype, duration } = req.body;
    if (!!title || !!description || !!contenturl || !!mediatype || !!duration) {
      const userInfo = await knex
        .select("id")
        .from("user")
        .where({ email: req.email })
        .first();

      const result = await knex("challenge").insert({
        title: title,
        description: description,
        contenturl: contenturl,
        mediatype: mediatype,
        duration: duration,
        status: true,
        user_id: userInfo.id,
      });
      const newChallengeId = result[0];
      const newChallengeObj = await knex("challenge").where({
        id: newChallengeId,
      });

      const date = Date.now();
      const expireIn = date + (duration * 60 * 1000);
      const job = new CronJob(new Date(expireIn), async () => {

        const post = await getPostByChallangeId(newChallengeId);
        
        await knex("challenge")
          .where({ id: newChallengeId })
          .update({ status: false });

        await knex('reward').insert({
            challenge_id: post.challenge_id,
            post_id: post.id,
            user_id: post.user_id
        })
      });

      job.start();

      res
        .status(200)
        .json(SuccessResponse(200, newChallengeObj, "Fetched Successfully"));
    } else {
      res.status(403).json(ErrorResponse(403, "Require field not entered!"));
    }
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

const getPostByChallangeId = async (_id) => {
  const res = await knex("post")
    .where({ challenge_id: _id })
    .orderBy("likes", "desc")
    .first();
  return res;
};


const getChallengeById = async (req, res) => {
    try {
        const getChallenge = await knex("challenge")
            .where({ id: req.params.challengeId }).first();
            
        res.status(200)
        .json(SuccessResponse(200, getChallenge, "Fetched Successfully"));

    } catch (error){
        res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
    }
}

module.exports = {
  getAll,
  post,
  getChallengeById
};
