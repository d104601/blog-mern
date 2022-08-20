const router = requier('express').Router();
const user = require('/user');
const post = require('/post');

router.use('/post', post);
router.use('/user', user);

module.exports = router;