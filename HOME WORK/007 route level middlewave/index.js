
const express = require ('express');

const router1 = express.Router();

const router2 = express.Router();

const router3 = express.Router();
const app = express();

const m1= (req,res,next)=>{
    console.log('m1 called');

    next();
}

const m2= (req,res,next)=>{
    console.log('m1 called');

    next();
}

const m3= (req,res,next)=>{
    console.log('m1 called');

    next();
}

router1.use(m1);
router2.use(m2);
router3.use(m3);



app.get('/',(req,res)=>{
    res.send('hello ')
});

app.get('/hellouser',(req,res)=>{
    res.send('user direct')
})



// router 1

router1.get('/user',(req,res)=>{
    res.send('r1-user-get')
});

router1.post('/user',(req,res)=>{
    res.send('r1-user-post')
});

router1.put('/user',(req,res)=>{
    res.send('r1-user-post')
});

router1.patch('/user',(req,res)=>{
    res.send('r1-user-patch')
});

router1.delete('/user',(req,res)=>{
    res.send('r1-user-delete')
});


// router 2

router2.get('/user',(req,res)=>{
    res.send('r1-user-get')
});

router2.post('/user',(req,res)=>{
    res.send('r1-user-post')
});

router2.put('/user',(req,res)=>{
    res.send('r1-user-post')
});

router2.patch('/user',(req,res)=>{
    res.send('r1-user-patch')
});

router2.delete('/user',(req,res)=>{
    res.send('r1-user-delete')
});

// router 3

router3.get('/user',(req,res)=>{
    res.send('r1-user-get')
});

router3.post('/user',(req,res)=>{
    res.send('r1-user-post')
});

router3.put('/user',(req,res)=>{
    res.send('r1-user-post')
});

router3.patch('/user',(req,res)=>{
    res.send('r1-user-patch')
});

router3.delete('/user',(req,res)=>{
    res.send('r1-user-delete')
});

app.use('route1',router1);
app.use('route2',router2);
app.use('route3',router3);



app.listen(5600,()=>{
    console.log('server is running on port 5600')
})