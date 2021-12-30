const dotenv = require("dotenv");
const path = require("path");
const smartcar = require("smartcar");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const client = new smartcar.AuthClient({
  clientId: process.CLIENT_ID,
  clientSecret: process.CLIENT_SECRET,
  redirectUriL: process.REDIRECT_URL,
  testMode: true,
});
