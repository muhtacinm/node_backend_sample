const Comment = require('../models/comment')

getComments= async (req, res) => {
  //find comment based on the blogId
  await Comment.find({blogId: req.params.id}, (err, comment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!comment.length) {
      return res
        .status(404)
        .json({ success: false, error: `Comments not found` })
    }
    return res.status(200).json({ success: true, data: comment })
  }).catch(err => console.log(err))
}

module.exports = getComments