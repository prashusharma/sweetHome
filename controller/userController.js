const userModel = require("../DataBase/model/userSchema");
const bcrypt = require("bcrypt");

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
        res.cookie('userId',savedUser._id, { maxAge: 900000, httpOnly: true }); //setting cookies
        res.status("200").json({"message": "success"});

    } 
    catch (err) {
      const sendErrArray = {};
      sendErrArray["message"] = "error";

      Object.values(err.errors).forEach(element => { 
        sendErrArray[element.properties.path] = element.properties.message;
      });

      res.status("200").json(sendErrArray);
      
    }
  },

  loginUser : async (req, res)=>{
    const user = await userModel.findOne({email : req.body.email});
   
    if(user){
      const result = await bcrypt.compare(req.body.password, user.password);
      if(result){

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
