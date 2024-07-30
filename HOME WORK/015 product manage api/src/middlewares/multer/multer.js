
const multer = require('multer');
const path = require('path');

const multerstorage = multer.diskStorage({
    destination:function(req,file,next) {
        next(null , path.join('src', 'uploads'));
        
    },
    filename:function(req,file,next){
        const newName = Date.now() + file.originalname;
        next(null , newName);
    }
});


const upload = multer({storage:multerstorage}).fields([
    {name : 'thumnail', maxCount:1},
    {name : 'images', maxCount:10}
]);

module.exports = upload;