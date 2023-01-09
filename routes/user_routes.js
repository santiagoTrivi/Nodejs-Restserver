const {Router} = require('express');
const {userGet, userPost, userPut, userPatch, userDelete} = require('../controllers/user_controllers');
const {check} = require('express-validator');

const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', [check('email', 'invalid email').isEmail()] ,userPost);

router.patch('/', userPatch)

router.delete('/', userDelete);

module.exports = router;