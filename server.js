const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cloudinary = require("cloudinary").v2;

// Always require and configure near the top
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connect to the database
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require("./config/checkToken"));

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
const ensureLoggedIn = require("./config/ensureLoggedIn");
// The following route is used for profiles-api and posts-api routes
app.use("/api/profiles", ensureLoggedIn, require("./routes/api/profiles"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
