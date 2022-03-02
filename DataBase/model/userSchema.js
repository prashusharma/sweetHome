const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const { isEmail } = require("validator")

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true, "Please enter your FirstName"],
        trim:true
    },
    lastName : {
        type : String,
        required : [true, "Please enter your LastName"],
        trim:true
    },
    mobile : {
        type : String,
        required : [true, "Please enter your Mobile"],
        maxLength : [10, "Please enter valid mobile number"],
        minLength : [10, "Please enter valid mobile number"],
        trim:true
    },
    email : {
        type : String,
        required : [true, "Please enter your email"],
        validate : [isEmail , "Enter a valid email"],
        trim:true,
        unique:[true, "Email already registered"]
    },
    password : {
        type : String,
        required : [true, "Please enter your Password"],
        trim:true
    },
    confirmPassword : {
        type : String,
        required : [true, "Password and Confirm Password not match"],
        trim:true
    },
    tokens : [
        {
            token: String
        }
    ]

})

userSchema.methods.createToken = async function(){
    const token = await jwt.sign({id:this._id}, "secret");
    this.tokens = this.tokens.concat({token});
    await this.save();
    return token;
}

const userModel = mongoose.model("registeredUser", userSchema);

module.exports = userModel;