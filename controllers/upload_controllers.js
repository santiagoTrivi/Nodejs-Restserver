const { request, response } = require("express");
const { uuid } = require('uuidv4');
const path = require('path');


const uploadfile = (req = request, res = response) =>{

    let {arch} = req.files;
    const splitname = arch.name.split('.');
    const extension = splitname[ splitname.length - 1];

    const validextension = ['png', 'jpg', 'jpeg', 'gif'];

    if(!validextension.includes(extension)){
        return res.status(400).json({
            message: 'ERROR: invalid format'
        });
    };
    
   
    let uploadPath;
    
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.arch) {
        return res.status(400).json({message: 'No files were uploaded.'});
    }
    
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    const newFileName = uuid() + '.' + extension;
    uploadPath = path.join(__dirname , '../uploads/' , newFileName);
    
    // Use the mv() method to place the file somewhere on your server
    arch.mv(uploadPath, (err) => {
        if (err)
        return res.status(500).json({err});
        
        res.json({message: 'File uploaded!' + uploadPath});
    });
    
    
};

module.exports = {
    uploadfile
};