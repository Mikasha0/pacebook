const express = require('express');
const router = express.Router();
const {Posts,Likes} = require('../models');
// const {validateToken} = require('../middlewares/')

router.get('/', async (req, res) => {
    const getPost = await Posts.findAll({include:[Likes]});
    res.json(getPost);
})

router.post('/', async (req,res) => {
    const post = req.body
    await Posts.create(post);
    res.json(post);
})

router.get('/click/:id', async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
})

module.exports = router;