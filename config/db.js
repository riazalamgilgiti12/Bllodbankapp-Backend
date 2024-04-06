const mongoose = require('mongoose')

const connectDatabse= async () => {
    try{
        await mongoose.connect(process.env.mongo_url)
        console.log(`connected sucess ${mongoose.connection.host}`)
    }catch(error){
        console.log(`mongo databse error ${error}`)
    }

}
module.exports = connectDatabse