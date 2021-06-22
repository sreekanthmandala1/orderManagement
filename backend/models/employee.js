const mongoose = require ('mongoose');

const employee = mongoose.model('employee',{
   name : {type:String},
   position: {type:String},
   dept : {type:String}
});

module.exports = employee;