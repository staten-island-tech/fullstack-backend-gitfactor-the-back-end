const User = require("../Models/users");

exports.getUserData = async (req, res) => {
  try {
      const Users = await User.find();
      res.json(Users);
  } catch (error) {
      console.log(error);
  }
};

exports.createUserData = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(`You have saved the user ${user.name}.`);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateUserData = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const updates = Object.keys(req.body);
        updates.forEach(update => {
            user[update] = req.body[update]; //user's information = updated information
        });
        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteUserData = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) {
            res.status(404).send();
        }
        res.send(`${user.name} was deleted from the database.`)
    } catch (error) {
        console.log(error);
    }
};