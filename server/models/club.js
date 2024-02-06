const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  website: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timeStamps: true })

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;