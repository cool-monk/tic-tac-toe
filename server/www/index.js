// Handling error while server
const onError = (error) => {
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
};

// When connection is on
const onListening = () => {
  //   var addr = server.address();
  console.log(`Listening on: localhost:8080`);
};

module.exports = {
  onError,
  onListening,
};
