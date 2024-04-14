const { CronJob } = require("cron");
const { ErrorResponse, SuccessResponse } = require("../constant/Model");
const MockData = require("../data/mockSample/challenge.json");
const knex = require('knex')(require('../knexfile'))

const getAll = async (_req, res) => {
  try {
    const challengeAll = await knex('challenge');
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
    console.log(req.email);
    console.log(req.body);
    
    //convert duration to minutes 
    if (!!title || !!description || !!contenturl || !!mediatype || !!duration) {
        
        const userInfo = await knex.select('id').from('user').where({ email: req.email }).first()

        //store to db
        const result = await knex("challenge").insert({
            title: title,
            description: description,
            contenturl: contenturl,
            mediatype: mediatype,
            duration: duration, 
            status: true,
            user_id: userInfo.id
        });
        console.log(result)
        const newChallengeId = result[0]
        const newChallengeObj = await knex("challenge").where({ id: newChallengeId });

        //then create cron job
        const date = Date.now();
        const expireIn = (date + (duration * 60 * 1000));
        const job = new CronJob(new Date(expireIn),  () => {
            //update challenge status 
            //write to reward table
            
            //getPostByChallangeId = post sort by count

            //then create re

            const d = new Date();
            console.log('Specific date:', date, ', onTick at:', d);

        });

        //job.start();

      res
        .status(200)
        .json(SuccessResponse(200, newChallengeObj , "Fetched Successfully"));
    } else {
      res.status(403).json(ErrorResponse(403, "Require field not entered!"));
    }
  } catch (error) {
    res
      .status(404)
      .json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`));
  }
};

module.exports = {
  getAll,
  post,
};
