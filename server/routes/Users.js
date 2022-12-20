const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken")
const {validateToken} = require("../middlewares/AuthMiddleware")

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      email: email,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.get("/", async (req, res) => {
  const Data = await Users.findAll();
  res.json(Data);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username: username } });

  if (!user)res.json({ error: "User does not exist" });

  await bcrypt.compare(password, user.password).then(async(match) => {
    if (!match) res.json({ error: "USERNAME OR PASSWORD INCORRECT" });

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantSecret"
    );
    res.json({token:accessToken, username:user.username, id:user.id});
  });
});

router.get('/auth', validateToken, (req, res) => {
  res.json(req.user);
})

module.exports = router;
