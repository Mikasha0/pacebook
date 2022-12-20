const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const {validateToken} = require("../middlewares/AuthMiddleware")

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({
    where: {
      PostId: postId,
    },
  });
  res.json(comments);
});

router.post('/',validateToken, async (req, res) => {
    const postComment = req.body
    const username = req.user.username
    postComment.username = username
    await Comments.create(postComment);
    res.json(postComment);
})

router.delete("/:commentId", validateToken, async (req, res) => {
  const commentId = req.params.commentId;

  await Comments.destroy({
    where: {
      id: commentId,
    },
  });
  res.json("DELETED SUCCESSFULLY");
});

module.exports = router;
