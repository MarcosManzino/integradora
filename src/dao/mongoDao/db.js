const mongoose= require('mongoose')

url= 'mongodb+srv://correadamian2019:<password>@cluster0.ecgm0fn.mongodb.net/'

class ManagerMongo {

    constructor (url){
        this.url = url
    } 
  
        connect(){
            return mongoose.connect(this.url+'ecommerce', {useUnifiedTopology:true, useNewUrlParser:true})
            .then(connect =>{ console.log ('conexion exitosa')})
            .catch(err=>{console.log(err)})
        }
    
}

module.exports=ManagerMongo