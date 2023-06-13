const Product= require('../../dao/models/products.model')
const express = require('express')

const { Router } = express

const router = new Router()
 
router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/:pId', (req,res)=>{
    const pId = req.params.pId
    Product.find({}).lean()
    .then(pr=>{
        let prodFiltrado= pr.find((p)=> p._id == pId)
        console.log(prodFiltrado)
        console.log(typeof(prodFiltrado))
        if(!prodFiltrado){
            res.send(`<div style="margin-top:50px;margin-left:50px;border:solid red;width:80%;justify-content:center, display:flex;flex-direction:row;text-align: center;">
            <h1 style="color:red;padding:30px;">Producto no encontrado</h1>
            </div>`)
        }else{
            res.render('home', {
                products:[prodFiltrado],   
                style:'products.css',
                title:'Products'
            }) 
        }
    })
    .catch(err=>{
        res.status(500).send(
            console.log('Error loading product')
        )
    }) 
})

router.get('/', (req,res)=>{
    // let product = new ProductManager("./src/routes/products/Products.json");
    // let products = product.getProducts()
   
    let {limit} = req.query;
    let intLimit= parseInt(limit)
    if(!intLimit){
        Product.find({}).lean()
        .then(pr=>{
            res.render('home', {
                products:pr,
                style:'products.css',
                title:'Products'
            }) 
        })
        .catch(err=>{
            res.status(500).send(
                console.log('Error loading product')
            )
        })  
    }
    else{
        Product.find({}).lean()
        .then(pr=>{
            prod=[]
            for(let i=0; i < intLimit; i++){
            prod.push(pr[i])
            }
            res.render('home',{
                products:prod,
                style:'products.css',
                title:'Products'
            })
    })
    .catch(err=>{
        res.status(500).send(
            console.log('Error loading product')
        )
    }) 
    }
})

router.post('/', (req, res)=>{
    let data = req.body
    let product= new Product(data)
    product.save()
    .then(pr=>{
        res.status(201).send({
            msg:'product added successfully',
            data:data
        })
    })
    .catch(err=>{
        res.status(500).send(
            console.log('Error loading product')
        )
    })

})
 
router.put('/:pId', (req,res)=>{ 
   
    const pId = req.params.pId
    const data = req.body
    console.log(data)
    Product.updateOne({_id:pId},data)
    .then(pr =>{
        res.status(201).send({
            msg:'Product Update successfully',
            data:data
        })
    })
    .catch(err=>{
        res.status(500).send(
            console.log('Error Update product')
        )
    })
})

router.delete('/:pId', (req,res)=>{
    let pId = req.params.pId
    Product.deleteOne({_id:pId})
    .then(pr =>{
        res.status(201).send({
            msg:'Product Delete successfully',
            data:pr
        })
    })
    .catch(err=>{
        res.status(500).send(
            console.log('Error Delete product')
        )
    })
})

module.exports = router


