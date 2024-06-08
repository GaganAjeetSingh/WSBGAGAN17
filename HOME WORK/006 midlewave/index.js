
const express = require('express');

const app = express();

const token = 'e5432';

const checkToken = (req,res,next)=>{
  
     const userToken = req.params.val;

     if(!userToken)
        {
            res.status(400).json({msg:'please add token'})
        }
        else if(userToken != token){

                res.status(401).json({msg:'invalid token'})
        }
        else{

            next();
        }
};

app.use(checkToken);


app.get('/user/:val?', (req,res)=>{
    
    res.status(200).json({msg:'api fetched success'});
})

app.get('/client/:val?',(req,res)=>{
    
    res.status(200).json({msg:'api fetched success'});
})


app.listen(5330,()=>{
    console.log('server is running on port 5330');
})