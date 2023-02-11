const {Router} = require('express');
const {uploadfile} = require('../controllers/upload_controllers');
const router = Router();

router.post('/', uploadfile);


module.exports = router;