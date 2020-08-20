const UserModel = require("../Model/Users");

const addUser = async (req, res, next) => {
  try {
    const data = await UserModel.saveUser(
      req.body.username,
      req.body.email,
      req.body.password
    );
    const userInfo = {
      id: data._id,
      username: data.username,
    };
    console.log(userInfo);
    if (userInfo) {
      res.send(userInfo).status(200);
    } else {
      res.send("Couldnot add user").status(400);
    }
  } catch (e) {
    return res.send(JSON.stringify(e)).status(400);
  }
};

const login = async (req, res, next) => {
  try {
    const clientUser = req.body.user;
    console.log(clientUser);
  } catch (error) {
    res.send(JSON.stringify(error));
  }
};

module.exports = {
  addUser,
  login,
};
