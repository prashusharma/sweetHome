const homeModel = require('../DataBase/model/homeSchema');


const homeController = {
    index : async (req, res) => {
        let homes =  await homeModel.find().limit(4); 
        res.render("index", {homes});
    }
}


module.exports = homeController;