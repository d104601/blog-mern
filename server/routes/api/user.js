const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    addUser,
    updateUser,
    removeUser,
} = require("../../controllers/user");

router.route("/").get(getUsers).post(addUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(removeUser);


module.exports = router;
