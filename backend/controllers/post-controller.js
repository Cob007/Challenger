const {ErrorResponse, SuccessResponse } = require("../constant/Model")
const MockData = require("../data/mockSample/challenge.json")

const getPostByChallengeId = async (_req, res) =>{
    try {
        const data = {
            "data": MockData
        }
        res.status(200).json(SuccessResponse(200, data.data, 'Fetched Successfully'))
    } catch (error) {
        res.status(404).json(ErrorResponse(400, `Error Occurred!! Caused by ${error}`))
    }
}

const getPostByUserId = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}



module.exports = {
    getPostByChallengeId, 
    getPostByUserId
 }