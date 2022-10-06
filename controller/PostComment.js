const Comment = require('../models/comment')
const Blog = require('../models/blog')

postComment = async (req, res) => {
  const body = req.body
  const blogId = req.params.id

  //check if blog the comment is about exists
  const blog = await Blog.find({id:blogId});
  if(!blog.length){
    return res.status(400).json({
        success: false,
        error: 'Blog does not exist',
      })
  }

  //check if POST body has values
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a Comment',
    })
  }

  //get name and comment from
  const name = body.name
  const comment = body.comment

  //add name and comment to schema
  const newComment = new Comment({blogId: blogId, name: name, comment: comment})

  if (!newComment) {
    return res.status(400).json({ success: false, error: err })
  }

  newComment
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: newComment._id,
        message: 'Comment post created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Comment post not created!',
      })
    })
}

module.exports = postComment