const express = require('express')
const GetBlogs = require('../controller/getBlogs')
const PostBlog = require('../controller/postBlog')

const router = express.Router()

router.get('/blog/:id?', GetBlogs)  //make id optional
router.post('/blog/post', PostBlog)

module.exports = router