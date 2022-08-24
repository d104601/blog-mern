const router = require('express').Router();

const {
    getPosts,
    getSinglePost,
    getUserPosts,
    addPost,
    updatePost,
    removePost
} = require("../../controllers/post");

// api/post
router.route("/").get(getPosts).post(addPost);

// api/post/:id
router.route("/:postId").get(getSinglePost).put(updatePost).delete(removePost);

// api/post/user/:userId
router.route("/user/:userId").get(getUserPosts);

module.exports = router;
