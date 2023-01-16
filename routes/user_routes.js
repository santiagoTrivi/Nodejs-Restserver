const {Router} = require('express');
const {userGet, userGetBYId, userPost, userPut, userPatch, userDelete} = require('../controllers/user_controllers');
const {check} = require('express-validator');
const {fieldCheck} = require('../middlewares/check-fields');
const {User,Rol} = require('../models/userData')

const router = Router();

router.get('/', userGet);
router.get('/:id', userGetBYId);

router.put('/:id', userPut);

router.post('/', [check('email', 'invalid email').isEmail(),
                check('name', 'the name is required').not().isEmpty(),
                check('password', 'Weak password').isLength({min: 8}),
                check('rol').custom( async (rol) =>{
                    const valid = await Rol.findOne({ where: { rol} });
                    console.log(valid);
                    if(!valid){
                        throw new Error('wrong rol');
                    }
                }),
                check('email').custom( async (email) =>{
                    const valid = await User.findOne({ where: { email} });
                    console.log(valid);
                    if(valid){
                        throw new Error('the email is already registered');
                    }
                })
                ],
                fieldCheck ,userPost);

router.patch('/', userPatch)

router.delete('/', userDelete);

module.exports = router;