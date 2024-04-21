require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// signup api

app.post("/api/v1/signup", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO userlogin (username,password) values ($1,$2) returning *",
      [req.body.username, req.body.password]
    );

    res.status(200).json({
      status: "success",
      data: {
        details: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// login api
app.post("/api/v1/login", async (req, res) => {
  try {
    const results = await db.query(
      "select * from userlogin where username=$1 and password=$2",
      [req.body.username, req.body.password]
    );
    if (results.rows.length > 0) {
      return res.status(200).json({
        status: "success",
      });
    } else {
      return res.status(401).json({
        status: "error",
        message: "Invalid username or password",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// setting up server

const port = process.env.port || 3002;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
