const {Router} = require('express');
const { login } = require('../controllers/auth_controllers');
const router = Router();


router.post('/login', login);




module.exports = router;