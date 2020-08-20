var express = require("express");
var http = require("http");
var www = require("./www");

// Socket io
const socketIo = require("socket.io");

var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Database
const mongoose = require("mongoose");
var MONGO_URI = "mongodb://127.0.0.1/tictactoe";

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const roomRouter = require("./routes/room");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Mongodb connecdtions
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log(
        "Error in DB Connection : " + JSON.stringify(err, undefined, 2)
      );
    }
  }
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/rooms", roomRouter);

// Create Server
var server = http.createServer(app);
var io = require("socket.io")(server);
var port = process.env.PORT || "8080";

server.listen(port);
server.on("error", www.onError);
server.on("listening", www.onListening);

// Socket io connections
io.on("connection", (socket) => {
  socket.emit("receive", { message: "connected" });
  // console.log(socket);
  socket.on("send", (data) => {
    console.log(data);
    io.sockets.emit("receive", { message: data.message });
  });
});
