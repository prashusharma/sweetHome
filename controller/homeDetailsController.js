const Home = require("../DataBase/model/homeSchema");

const homeDetailsController = {
  createHome: async (req, res) => {
    const home = await Home.create({
      address: "Dharmshala Rohtas Bihar",
      price: 15000,
      oldPrice: 16000,
      mobile: "0055767010",
      roomType: "Bachelors/Family",
      maintainenceCharge: 1000,
      star: 5,
      totalReview: 120,
      verified: true,
      thumbnail: "./thumbnail.jpg",
      pic: "./pics.jpg",
    })
    // console.log(home);
    res.send(home)
  },

  findHome: async (req, res) => {
    const home = await Home.find();
    console.log("Finding Home" + home);
    res.send(home);
  },
};

module.exports = homeDetailsController;
