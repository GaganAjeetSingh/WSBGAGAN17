 const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();


const htmlPath = path.join(__dirname,'public');

app.use(express.static(htmlPath));

app.get('/',(req,res)=>{
    res.sendFile(`${htmlPath}/home.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${htmlPath}/about.html`)
})

app.get('/contact',(req,res)=>{
    res.sendFile(`${htmlPath}/contact.html`)

})

app.get('/read_rules',(req,res)=>{
    res.sendFile(`${htmlPath}/BCA,Bsc(II,III yr )FCS Syllabus 23-24_UPDATED.pdf`)

})


app.get('/*',(req,res)=>{
    res.sendFile(`${htmlPath}/error-404-page-not-found-vector-14463951.jpg`)

})


app.get('/*',(req,res)=>{
    res.sendFile(`${htmlPath}/404.html`)
})



app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});