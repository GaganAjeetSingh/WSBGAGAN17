
const express = require ('express');
const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client =  new MongoClient(url);

const database = async()=>{
    await client.connect();

    const db = await client.db('test_api');

    // const admincollection = await db.collection('admins');  //single collection send by this function

    return db;
}

    const insertdata = async ()=>{

     const db = await database();
     const admincollection = await db.collection('admins');

    const responce =  await admincollection.insertOne({
        name:'shourv',
        age:'66',
        contact:'666666',
        
     });

     console.log(responce);
}

     insertdata();

     const readData = async()=>{
        try{

            const db = await database();
            const collection = await db.collection('admins');
    
            const responce = await collection.find({name:"gagan"});
            console.log(responce)
        }
        catch(err)
        {
            console.log(err)
        }
       
     }

     readData();



const app = express ();
app.use(express.json());

app.listen(5600,()=>{
    console.log('bhai server chal reha ha relax ')
})