const User = require('../models/userSchema');
const sendToken = require('../utils/sendToken');

exports.postUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        sendToken(user, res);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.status(201).json({ users });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}