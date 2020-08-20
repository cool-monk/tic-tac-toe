const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    fullStatus: {
      type: Boolean,
    },
    players: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    gameBoard: [],
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", RoomSchema);
module.exports = Room;
