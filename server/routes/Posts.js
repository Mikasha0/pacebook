const express = require('express');
const router = express.Router();
const {Posts,Likes} = require('../models');
const {validateToken} = require('../middlewares/AuthMiddleware')

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

router.delete('/:postId',validateToken,async (req, res) =>{
    const postId = req.params.postId;
    await Posts.destroy({where:{id:postId}})
    res.json("Deleted Successfully");
})

module.exports = router;