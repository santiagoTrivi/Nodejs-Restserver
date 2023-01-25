const {Router} = require('express'); 
const { getCategory, getCategories, postCategory } = require('../controllers/category_controllers');
const { validationjwt } = require('../middlewares/validationjwt');
const { validationRolJwt } = require('../middlewares/validationRolJwt');


const router = Router();




router.get('/', getCategory );

router.get('/:id', getCategories );


router.post('/' , [validationjwt, validationRolJwt], postCategory);


router.put('/:id');


router.delete('/:id' );






module.exports = router