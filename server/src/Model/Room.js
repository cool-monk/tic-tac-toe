const RoomSchema = require("../Schema/Room");

const saveRoom = async (user, room_name) => {
  const score = [1, 2, 3, 4, 5, 6, 7];
  const data = new RoomSchema({
    name: room_name,
    createdBy: user,
    players: [user],
    gameBoard: score,
  });
  console.log(data);
  await data.save((err, room) => {
    if (!err) {
      return data;
    } else {
      return err;
    }
  });
};

module.exports = {
  saveRoom,
};
