const ClubModel = require('../models/club');

class Club {

  async createClub(query = {}) {
    try {
      const club = new ClubModel(query);
      await club.save();
      return club;
    } catch (error) {
      throw new Error(error.message)
    }    
  }

  async updateClub(clubId, query = {}) {
    try {
      const updatedClub = await ClubModel.findByIdAndUpdate(clubId, query, { new: true })
      return updatedClub
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateClubWithNewMember(clubId, userId) {
    try {
      const updatedClub = await ClubModel.findByIdAndUpdate(
        clubId,
        { $push: { members: userId } },
        { new: true }
      );
      return updatedClub;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  async getClubs(query = {}) {
    try {
      const clubs = await ClubModel.find(query).exec()
      return clubs
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = new Club()