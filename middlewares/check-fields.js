const {validationResult} = require('express-validator');


const fieldCheck = (req, res, next) => {
    const output = validationResult(req);
    if(!output.isEmpty()){
        return res.status(400).json(output);
    }

    next(); // Another funtion that only will be executed if the  condition is not executed, meaning if 'return ' is never executed
}

module.exports ={
    fieldCheck
}