// Requiring Express.
const express = require("express");
// Requiring Morgan.
const morgan = require("morgan");
// Requiring CORS.
const cors = require("cors");
// Initializing express with variable "app".
const app = express();
// Requiring the routes index.js file.
const routes = require("./routes/index.js");
// Requiring Helmet.
const helmet = require("helmet");

/**
 * Enabling App usages.
 */

// Included the body-parser middleware so that the Express server is able to access content that is passed in the body of the HTTP request.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enabling middleware to allow server to access web_projects.json. To accept requests to the body in .json format.
app.use(express.json());
app.use(morgan("start"));
app.use(cors());

// Enabling app to use Helmet to secure the code.
app.use(helmet());

// Enabling the api app to use the routes index.js file.
app.use("/api", routes);

// Checking if the process is production mode and set for the index.html file from the build folder to be utilized, instead of the public folder.
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Specified to listen to port 8080's HTTP requests. Modified the port code in order to deploy the app to Heroku.
// Logging a response to the console to confirm that the server is listening to port 8080.
const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(
  "Navigate to http://localhost:8080/api. Server is listening on port",
  PORT
);

// If an error occurs, it gets passed to our error handler and a message will display stating that "Something Broke".
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});
