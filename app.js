const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')

mongoose
    .connect(db, { userNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use(passport.initialize());
require('./config/passport')(passport)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));