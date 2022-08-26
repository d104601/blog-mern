const { User, Post, Comment } = require("../models");
const { signToken } = require('../utils/auth');


const userController ={
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No user with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    async login (req, res) {
        const user = await User.findOne( {email: req.body.email} )
        if(!user) {
            res.status(400).json({message: "Incorrect Credentials"});
        }
        if(user.password != req.body.password) {
            res.status(400).json({message: "Incorrect Credentials"});
        }

        const token = signToken(user);
        res.status(200).json({token, user});
    },
    addUser(req, res) {
        User.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            req.body
        )
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No user with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    removeUser(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId }
        )
        .then((data) => {
            if(data) {
                return Post.deleteMany(
                    { user : req.params.userId}
                ).then(res.json(data));
            }
            else {
                res.status(404).json({ message: "No user with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    }
}

module.exports = userController;