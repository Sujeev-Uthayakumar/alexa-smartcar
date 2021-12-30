const dotenv = require("dotenv");
const path = require("path");
const smartcar = require("smartcar");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const client = new smartcar.AuthClient({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URL,
  //   testMode: true,
});

function getClient() {
  return client;
}
module.exports = getClient;
