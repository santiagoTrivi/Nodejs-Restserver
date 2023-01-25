const {Router} = require('express');
const { check } = require('express-validator');
const { Userlogin, googleSingIn } = require('../controllers/auth_controllers');
const {fieldCheck} = require('../middlewares/check-fields');
const router = Router();


router.post('/login', [check('email', 'invalid email').isEmail(),
check('password', 'the password is required').not().isEmpty(), ],
fieldCheck , Userlogin);

router.post('/google', [check('id_token', 'id toke required').not().isEmpty()],
fieldCheck , googleSingIn);



module.exports = router;