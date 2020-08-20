const RoomModel = require("../Model/Room");

const addRoom = async (req, res, next) => {
  try {
    console.log("object");
    const data = await RoomModel.saveRoom(req.body.user, req.body.roomName);
    console.log(data);
    if (data) {
      console.log(data);
      res.send(data).status(200);
    } else {
      res.send("Could'n Add room.").status(400);
    }
  } catch (error) {
    res.send(JSON.stringify(error)).status(400);
  }
};

module.exports = {
  addRoom,
};
