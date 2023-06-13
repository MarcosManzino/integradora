// Creamos Las Rutas
const express= require('express')
const {Router} = express   // Por medio de desestructuracion traemos el constructor de rutas de express

const router= new Router()  //instanciamos un router

router.get('/', (req,res)=> {
    const data={
        title:'Chat',
        message:'Ecommerce backend  Index',
        style:'chat.css'
    }
    res.render('chat',data)
    
})
// Exportamos
module.exports = router