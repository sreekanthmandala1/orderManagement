const express = require('express');
const router = express.Router();
const orders = require('../models/orders.js');
const ObjectId = require('mongoose').Types.ObjectId;
//get API
router.get('/',(req,res)=>{
    orders.find((err,doc)=>{
        if(err){
            console.log('Error in get data'+err)
        }else{
            res.send(doc);
        }
    })
});

//get single orders API
router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        orders.findById(req.params.id, (err,doc)=>{
            if(err){
                console.log('Error in get data'+err)
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('no record found with id' + req.params.id);
    }
    
});

//post API
router.post('/',(req,res)=>{
    let emp = new orders({
        OrderNumber :  req.body.OrderNumber,
        OrderDueDate :  req.body.OrderDueDate,
        CustomerBuyerName :  req.body.CustomerBuyerName,
        CustomerAddress :  req.body.CustomerAddress,
        CustomerPhone :  req.body.CustomerPhone,
        OrderTotal :  req.body.OrderTotal,
    });
    emp.save((err,doc)=>{
        if(err){
            console.log('Error in post data'+err)
        }else{
            res.send(doc);
        }
    })
});

//get put API
router.put('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let emp = {
            OrderNumber :  req.body.OrderNumber,
            OrderDueDate :  req.body.OrderDueDate,
            CustomerBuyerName :  req.body.CustomerBuyerName,
            CustomerAddress :  req.body.CustomerAddress,
            CustomerPhone :  req.body.CustomerPhone,
            OrderTotal :  req.body.OrderTotal,
        
        };
        orders.findByIdAndUpdate(req.params.id,{$set : emp}, {new : true},(err,doc)=>{
            if(err){
                console.log('Error in update data'+err)
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('no record found with id' + req.params.id);
    }
    
});


//get Delete API
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        orders.findByIdAndRemove(req.params.id, (err,doc)=>{
            if(err){
                console.log('Error in Delete data'+err)
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('no record found with id' + req.params.id);
    }
    
});



module.exports = router;
