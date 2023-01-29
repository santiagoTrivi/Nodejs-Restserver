
const { Category } = require("../models/categoryData");


const checkCategory = async (category) =>{
    const valid = await Category.findOne({ where: { category} });
    //console.log(valid.dataValues);
    if(!valid){
        throw new Error('wrong category');
    }

}


module.exports = {
    checkCategory
};