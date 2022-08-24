const {User, Post, Comment} = require("../models");

const commentController = {
    getComments(req, res) {
        Comment.find()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
    },
    
    getCommentsByPost(req, res) {
        Comment.find({ post: req.params.postId })
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
    },
    addComment(req, res) {
        Comment.create(req.body)
        .then(async (data) => {
            await Post.findOneAndUpdate(
                { _id: req.body.postId },
                { $push: { comment: data._id }}
            );
            await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { comment: data._id }}
            );
            res.json(data);
        })
        .catch((err) => res.status(500).json(err));
    },
    updateComment(req, res) {
        Comment.findOneAndUpdate(
            { _id: req.params.commentId },
            req.body
        )
        .then((data) => {
            if(data) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No comment with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    },
    removeComment(req, res) {
        Comment.findOneAndDelete(
            { _id: req.params.commentId },
        )
        .then(async (data) => {
            if(data) {
                await Post.findOneAndUpdate(
                    { _id: data.post },
                    { $pull: { comment: data._id }}
                );
                await User.findOneAndUpdate(
                    { _id: data.user },
                    { $pull: { comment: data._id }}
                );
                res.json(data);
            }
            else {
                res.status(404).json({ message: "No comment with the id" });
            }
        })
        .catch((err) => res.status(500).json(err));
    }
}

module.exports = commentController;