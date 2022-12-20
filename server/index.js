const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const db = require("./models");
app.use(express.json());

const userRouter = require("./routes/Users")
app.use('/users',userRouter);

const postRouter = require("./routes/Posts")
app.use('/posts',postRouter);

const commentsRouter = require("./routes/Comments")
app.use('/comments',commentsRouter);

const likesRouter = require("./routes/Likes")
app.use('/likes',likesRouter);

db.sequelize.sync().then(()=>{
    app.listen(4000, ()=>{
        console.log("server running on port 4000")
    })
})

