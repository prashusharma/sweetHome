const homeModel = require('../DataBase/model/homeSchema');
const mongoose = require("mongoose")

const detailsController = {
    index : async(req, res) => {
        let id = mongoose.Types.ObjectId(req.params.id);
        let home =  await homeModel.findById(id);

        res.render("detail", {home});
    }
}


module.exports = detailsController;