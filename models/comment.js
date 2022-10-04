const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
  blogId: { type: String, required: true },
  name: { type: String, required: true },
  comment: { type: String, required: true },
},
{
    timestamps: true
})

module.exports = mongoose.model('comment', Comment)