


const uploadFiles = (files, validextension = ['png', 'jpg', 'jpeg', 'gif'] ) =>{

    return new Promise((resolve, reject) => {

        let {arch} = files;
        const splitname = arch.name.split('.');
        const extension = splitname[ splitname.length - 1];


        if(!validextension.includes(extension)){
            return reject(`ERROR wrong extention. the valid extention are ${validextension}`);
        };
        
    
        let uploadPath;
        
        if (!req.files || Object.keys(req.files).length === 0 || !req.files.arch) {
            return reject(`No files were uploaded.`);
        }
        
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        const newFileName = uuid() + '.' + extension;
        uploadPath = path.join(__dirname , '../uploads/' , newFileName);
        
        // Use the mv() method to place the file somewhere on your server
        arch.mv(uploadPath, (err) => {
            if (err){
                return reject(err);
            }
            
            
            return resolve('File uploaded!' + uploadPath);
        });
    })
    
    
};

module.exports = {
    uploadFiles
};