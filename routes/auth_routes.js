const {Router} = require('express');
const { Userlogin } = require('../controllers/auth_controllers');
const router = Router();


router.post('/login', Userlogin);




module.exports = router;