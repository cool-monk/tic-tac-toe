var express = require("express");
var http = require("http");

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Create Server
var server = http.createServer(app);
var port = process.env.PORT || "3000";

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// Handling error while server
function onError(error) {
  var bind = "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// When connection is on
function onListening() {
  var addr = server.address();
  console.log(`Listening on: localhost:${addr.port}`);
}
