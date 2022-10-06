const Blog = require('../models/blog')

getBlogs = async (req, res) => {
  
  //if ID is passed get blog by ID, if not get ALL blogs
  await Blog.find(req.params.id ? {id: req.params.id} : {}, (err, blog) => { 
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!blog.length) {
      return res
        .status(404)
        .json({ success: false, error: `Blog not found` })
    }
    return res.status(200).json({ success: true, data: blog })
  }).catch(err => console.log(err))
}

module.exports = getBlogs