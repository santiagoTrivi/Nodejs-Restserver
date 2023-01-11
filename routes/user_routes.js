const {Router} = require('express');
const {userGet, userPost, userPut, userPatch, userDelete} = require('../controllers/user_controllers');
const {check} = require('express-validator');
const {fieldCheck} = require('../middlewares/check-fields');
const connected = require('../db/sql_connection');

const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', [check('email', 'invalid email').isEmail(),
                check('name', 'the name is required').not().isEmpty(),
                check('password', 'Weak password').isLength({min: 8}),
                //check('rol', 'Invalid rol').isIn(['admin', 'user'])], 
                ],
                fieldCheck ,userPost);

router.patch('/', userPatch)

router.delete('/', userDelete);

module.exports = router;