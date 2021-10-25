# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Thank you Beau Carnes and FreeCodeCamp for their [free tutorial](https://youtu.be/7CqJlxBYj-M).

## Notes

- Create a folder called **backend** and run `npm init -y`
  - Usually you have two seperate folders for backend and frontend, each with their own `package.json`
- In backend folder run `npm i express cors mongoose dotenv nodemon`
  - **cors**: Cross origin resource sharing. Sometimes the browser will block data from an outside resource (Like your own MongoDB database). Cors makes sure it isn't blocked
    - `app.use(cors());`
  - **dotenv** - It pretty much just loads environment variables from a .env file into a process.env
    - `require("dotenv").config({path: "path/fileName"});` to access your .env file
