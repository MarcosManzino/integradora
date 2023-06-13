const mongoose= require('mongoose')

const CartSchema = new mongoose.Schema({ 
  date:{
    type:String,
    unique:true,
    required:true
  },
  products:{
        type:[
            {
              product:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'products'
               
              },
              quantity:{
              type: Number,                                  
              }
            }
          ]
      }
    
  });
  CartSchema.pre('find', function(){ 
    this.populate('products.product')
  })
  CartSchema.pre('findOne', function(){ 
    this.populate('products.product')
  })

const Cart= mongoose.model('cart', CartSchema)
module.exports = Cart