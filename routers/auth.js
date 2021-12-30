const express = require("express");

const client = require("../config/credential");
const router = express.Router();

let access;

router.get("/login", (req, res) => {
  const link = client().getAuthUrl(["read_vehicle_info"]);
  console.log(link);
  res.redirect(link);
});

router.get("/exchange", async function (req, res) {
  const code = req.query.code;
  access = await client.exchangeCode(code);
  console.log(access);
  res.sendStatus(200);
});
module.exports = router;
