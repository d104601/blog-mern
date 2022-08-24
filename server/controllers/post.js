const {User, Post, Comment} = require("../models");

const postController = {
    getPosts(req, res) {
        Post.find()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
    },
    getSinglePost(req, res) {
        Post.findOne({ _id: req.params.postId })
        .select('-__v')
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "Post does not exist" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    getUserPosts(req, res) {
        Post.find({ user: req.params.userId })
        .then((posts) => res.json(posts))
        .catch((err) => res.status(500).json(err));
    },
    addPost(req, res) {
        Post.create(req.body)
        .then(async (data) => {
            await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { posts: data._id }}
            );
            res.json(data);
        })
        .catch((err) => res.status(500).json(err));
    },
    updatePost(req, res) {
        Post.findOneAndUpdate(
            { _id: req.params.postId },
            req.body
        )
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No post with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    removePost(req, res) {
        Post.findOneAndDelete(
            { _id: req.params.postId }
        )
        .then((data) => {
            if(data) {
                return Comment.deleteMany(
                    { post: data._id }
                ).then(res.json(data));
            }
            else {
                res.status(404).json({ message: "No post with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    }
};

module.exports = postController;