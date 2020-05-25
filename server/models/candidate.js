const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  name: { type: String, required: true },
  phone: String,
  email: String,
  comment: String,
  status: { type: String, required: true }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
