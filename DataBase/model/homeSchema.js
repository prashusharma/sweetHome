const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
    address : { type : String},
    price : { type : Number},
    oldPrice : { type : Number},
    mobile : { type : String},
    roomType : { type : String},
    maintainenceCharge : { type : Number},
    star : { type : Number},
    totalReview : { type : Number},
    verified : { type : Boolean},
    thumbnail : { type : String},
    pic : { type : String},
    
})



const homeModel = mongoose.model("homeInfo", homeSchema);

module.exports = homeModel;