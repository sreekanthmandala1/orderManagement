const mongoose = require ('mongoose');

const orders = mongoose.model('orders',{
   OrderNumber: {type:Object},
   OrderDueDate: {type:Object},
   CustomerBuyerName: {type:Object},
   CustomerAddress: {type:Object},
   CustomerPhone: {type:Object},
   OrderTotal: {type:Object},

   
});

module.exports = orders;