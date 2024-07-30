

const insertProduct = async(req,res)=>{

    try{
        const { name,description,price,mrp} = req.body;

        const thumnail = req.files.thumbnail[0].filename;

        const images = req.files.images.map((imgData)=>{
            return imgData.filename;

        });

        console.log(thumnail);
        console.log(images);


        const filesData = req.files;

        console.log(filesData);
        res.status(200).json({msg:"product insert success "});

    }
    catch(error){
        console.log(Object);
        res.status(500).json({msg:"internal server error "})


    }

    
};

module.exports =insertProduct
