const User = require("../Schema/Users");

const saveUser = async (username, email, password) => {
  const data = new User({
    username: username,
    email: email,
    password: password,
  });

  return await data.save();
};

const findById = async (id) => {
  return await User.findById(id).exec();
};

module.exports = {
  saveUser,
};
