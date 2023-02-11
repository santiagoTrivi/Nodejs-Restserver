const {generatorjwt} = require('./generator-jwt');
const {verify} = require('./googleVerify');
const {uploadFiles} = require('./upload-files');



module.exports = {
    generatorjwt,
    verify,
    uploadFiles
};