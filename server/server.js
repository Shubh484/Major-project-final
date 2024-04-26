require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// signup api

// app.post("/api/v1/signup", async (req, res) => {
//   try {
//     const results = await db.query(
//       "INSERT INTO userlogin (username,password) values ($1,$2) returning *",
//       [req.body.username, req.body.password]
//     );

//     res.status(200).json({
//       status: "success",
//       data: {
//         details: results.rows[0],
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// sign up

app.post("/api/v1/signup", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO userinfo (firstname,lastname,phonenumber,email,housenumber,street,city,state,password,confirmpassword) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *",
      [
        req.body.firstname,
        req.body.lastname,
        req.body.phonenumber,
        req.body.email,
        req.body.housenumber,
        req.body.street,
        req.body.city,
        req.body.state,
        req.body.password,
        req.body.confirmpassword,
      ]
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
      "select * from userinfo where email=$1 and password=$2",
      [req.body.email, req.body.password]
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

// getting people information from the database

app.get("/api/v1/userdetail", async (req, res) => {
  try {
    const results = await db.query("select * from people");

    res.status(200).json({
      status: "success",
      data: {
        people: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// setting up server

const port = process.env.port || 3002;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
