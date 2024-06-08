const express = require('express');
const {MongodgClient} = require ('mongodb');

const url ='mongodb://localhost:27017';

const client = new MongodgClient(url);

client.connect();


const app = express();

app.use(express.json());

app.get('/',(req,res)=>{

    try{

        res.status(200).json({msg:"hy........."})
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({msg:"internal server error, please try again agter 24 hour"})
    }  
});

app.post('/adddata',(req,res)=>{
    try{
        console.log(req.body);
         res.status(200).json({msg:"oooo hooooo"})
    }
    catch(err)
    {
        res.status(500).json({msg:"please try after you die "})
    }
})

app.listen(5000,()=>{
    console.log("server running on port 5000")
})