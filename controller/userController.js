const userModel = require("../DataBase/model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userController = {
  createUser: async (req, res) => { 
    const salt = await bcrypt.genSalt();   //generating salt

    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;

    if(password != confirmPassword){   //Checking password and confirm password
      confirmPassword = '';
    }else{
      confirmPassword = "confirmed";
    }

    if (password != '') {       //Hashing Password
      password = await bcrypt.hash(req.body.password, salt);
    } 
    const newUser = new userModel({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          mobile: req.body.mobile,
          email: req.body.email,
          password,
          confirmPassword
    });
    
    try {
        const savedUser = await newUser.save();   //saving user to dataBase
        const token = await savedUser.createToken();
        res.cookie('id',token, { maxAge: 900000, httpOnly: true, secure:true }); //setting cookies
        res.status("200").json({"message": "success"});

    } 
    catch (err) {
      const sendErrArray = {};
      sendErrArray["message"] = "error";
      if(err.code == 11000)
      {
        sendErrArray["email"] = "Email already registered";
      }
      if(err.errors){
        Object.values(err.errors).forEach(element => { 
          sendErrArray[element.properties.path] = element.properties.message;
        });
      }

      

      res.status("200").json(sendErrArray);
      
    }
  },

  loginUser : async (req, res)=>{
    const user = await userModel.findOne({email : req.body.email});
   
    if(user){
      const result = await bcrypt.compare(req.body.password, user.password);
      if(result){
        const token = await user.createToken();
        res.cookie('id',token, { maxAge: 900000, httpOnly: true, secure:true });
        res.json({"message" : "success"})
      }
      else{
        res.json({"message" : ""})
      }
    }
    else{
      res.json({"message" : ""})
    }
    
    
  }








};

module.exports = userController;
