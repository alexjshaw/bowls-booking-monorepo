const userDatabase = require('../database/user')
const clubDatabase = require('../database/club')
const mongoose = require('mongoose')

const { sendDataResponse, sendErrorResponse } = require('../utils/responses')

const createUser = async (req, res) => {
  try {
    const query = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      club: new mongoose.Types.ObjectId(req.body.club),
      firebaseUID: req.body.firebaseUID,
      role: req.body.role
    }
    const newUser = await userDatabase.createUser(query)
    const updatedClub = await clubDatabase.updateClubWithNewMember(req.body.club, newUser._id);
    return sendDataResponse(res, 201, newUser, updatedClub)
  } catch (error) {
    return sendErrorResponse(res, 400, error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await userDatabase.getUser({ _id: userId })
    if (!user) {
      return sendErrorResponse(res, 500, 'No User Found')
    }
    return sendDataResponse(res, 200, user)
  } catch (error) {
    return sendErrorResponse(res, 400, error.message)
  }
}

module.exports = {
  createUser,
  getUserById
}