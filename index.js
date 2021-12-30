const express = require("express");
const requestRouter = require("./routers/auth.js");

const app = express();

const port = process.env.PORT || 3000;

app.use(requestRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

module.exports = app;
