
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

mongoose.connect('mongodb+srv://gaganajeetb:iOKk5PWE9WvtEMEc@gaganajeet.znbn1yh.mongodb.net/gagan_tsts_api?retryWrites=true&w=majority&appName=gaganajeet')
.then(()=>{
    console.log('database connected')
})
.catch((error)=>{
    console.log(error)
});


const app = express();

const upload = multer({storage:multer.diskStorage({
    destination:function(req,res,next){
        next(null,'uploads');
    },
    filename:function(req,res,next){
        console.log(req.file);
        next(null, 'image')
    }
})}).single('thumbnail')



app.use(express.json());

app.post('/insert_one_file',upload,async(res,req)=>{

    try{
        
        res.status(200).json({msg:"data insert successfully"});

    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"internal error"});
    }
})

app.listen(5100,()=>{
    console.log('server is running')
})