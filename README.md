# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Thank you Beau Carnes and FreeCodeCamp for their [free tutorial](https://youtu.be/7CqJlxBYj-M).

## Notes

### Backend

- Create a folder called **backend** and run `npm init -y`
  - Usually you have two seperate folders for backend and frontend, each with their own `package.json`
- In backend folder run `npm i express cors mongoose dotenv nodemon`
  - **cors**: Cross origin resource sharing. Sometimes the browser will block data from an outside resource (Like your own MongoDB database). Cors makes sure it isn't blocked
    - `app.use(cors());`
  - **dotenv** - It pretty much just loads environment variables from a .env file into a process.env
    - `require("dotenv").config({path: "path/fileName"});` to access your .env file

#### Models

- Models are the design of each document.

```
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);
module.exports = User;
```

### Routers

- Routers handle Requests, and direct the traffic to where it needs to go

```
const router = require("express").Router();
let user = require("../models/user.model"); //Import relevent schema

router.route("/").get((req, res) => {
  User.find() //Returns promise of all users
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save() //SAVES DATA TO THE DATABASE
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));

modules.exports = router;
```

- `User.find()` returns promise of all users
- `User.findById()` returns a document by it's ID
- `User.findByIdAndDelete()` returns and deletes a document by it's ID
