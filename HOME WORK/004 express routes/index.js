
const express = require ("express");

const app = express ();
app.get('/',(req,res)=>{
res.send("hello");
});

app.get('/home',(req,res)=>{
    res.send("HOME");
})
app.post('/home',(req,res)=>{
    res.send("home post")
});
app.listen(5200,()=>{
    console.log("server is runnig on 5200 port");
})
