const router = require('express').Router();
const user = require('./user');
const post = require('./post');
const comment = require('./comment');

router.use('/post', post);
router.use('/user', user);
router.use('/comment', comment);

module.exports = router;