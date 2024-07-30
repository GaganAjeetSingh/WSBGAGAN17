
const mongoose = require('mongoose');
const express = require('express');

mongoose.connect('mongodb://localhost:27017/newmongoose')

.then(()=>{
    console.log('databse connetcted')
})
.catch((error)=>{
    console.log(error)
});

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:Number,
    email:{
        type:String,
        required:true,
        unique:true
    }
    
});

 const User = mongoose.model('users', userSchema);

const app = express();

app.use(express.json());

app.post('/insert_user', async(req,res)=>{

    try{

          const data = req.body;

         const userdata = new User(data);

        const response = await userdata.save();

        res.status(200).json({msg:'data aaa gaya bhai', data:response});


    }
    catch(error){
        console.log(error);

        if(error.code === 11000) return  res.status(400).json({msg:'bhai mail ek bar hee chalgyee dusri mail sa login kar'});

        res.status(500).json({msg:'bhai kuch galt details bar diya ha tuna sai sa chech kar....'});
    }
});

// app.get('/read-data',async(req,res)=>{

//     const response =  await user.find();
//     res.status(200).json({msg:'data fetched succefully' ,data : response});
// })


app.listen(5600,()=>{
    console.log('chill bhai server chal reha ha')
})