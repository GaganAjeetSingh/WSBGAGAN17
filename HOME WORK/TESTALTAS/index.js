
const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://gaganajeetb:0aD1A65sxPlA9nhb@gaganajeet.tojoyyv.mongodb.net/gagan_singh?retryWrites=true&w=majority&appName=GaganAjeet')

.then(()=>{
    console.log('bhai aaaa gaya data......... relax bro')
});

const userScheme = new  mongoose.Schema({

    name:String,
    email:String
});

const User = mongoose.model('users',userScheme)

const addUser = async()=>{
    const data = new User ({
        name:'gagan',
        email:'gaganajeetb@gmail.com'
    });

     const response = await User.find();

     console.log(response);
};

addUser();