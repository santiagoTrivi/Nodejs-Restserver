const {Router} = require('express'); 
const { getCategory, postCategory, getCategoryByPk, deleteCategory } = require('../controllers/category_controllers');
const { validationjwt } = require('../middlewares/validationjwt');
const { validationRolJwt } = require('../middlewares/validationRolJwt');


const router = Router();




router.get('/', getCategory );

router.get('/:id', getCategoryByPk );


router.post('/' , [validationjwt, validationRolJwt], postCategory);


router.put('/:id');


router.delete('/:id', [validationjwt, validationRolJwt] , deleteCategory);






module.exports = router