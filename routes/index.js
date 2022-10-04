const express = require('express')

//Blogs Controller
const GetBlogs = require('../controller/getBlogs')
const PostBlog = require('../controller/postBlog')

//Comments Controller
const PostComment = require('../controller/postComment')
const GetComments = require('../controller/getComments')

const router = express.Router()

//Blog Routes
router.get('/blog/:id?', GetBlogs)  //make id optional
router.post('/blog/post', PostBlog)

//Comment Routes
router.post('/blog/post/:id/comment', PostComment)
router.get('/blog/post/:id/comment', GetComments)

module.exports = router