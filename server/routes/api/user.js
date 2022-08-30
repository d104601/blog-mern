const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    addUser,
    updateUser,
    removeUser,
    login
} = require("../../controllers/user");

// import middleware
const { authMiddleware } = require('../../utils/auth');

router.route("/").get(getUsers).post(addUser);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(removeUser);


module.exports = router;
