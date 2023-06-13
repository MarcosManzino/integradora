const express = require('express')
const {Router} = express
const router = new Router()

const Product = require('../../dao/models/products.model')

router.get('/', (req, res)=>{
    Product.find({}).lean()
        .then(pr=>{
            res.render('realTimeProducts', {
                products:pr,
                style:'realtimeproducts.css',
                title:'RealTimeProducts'
            }) 
        })
        .catch(err=>{
            res.status(500).send(
                console.log('Error loading product')
            )
        })
} )




module.exports= router