const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  firebaseUID: { type: String, required: true },
  approved: { type: Boolean, default: false },
  role: { type: String, enum: ['member', 'admin'], required: true, default: 'member' },
  club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club' }
}, { timeStamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;