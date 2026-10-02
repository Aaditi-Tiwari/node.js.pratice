require("dns").setServers(["8.8.8.8", "1.1.1.1"]);

// your existing code below (mongoose require, connectDB, etc.)


const mongoose = require("mongoose");


async function connectDB() {
      

    await mongoose.connect("mongodb+srv://yt-databse:gtDBipQfk5blU8re@yt-node-clustar.1sgerxe.mongodb.net/hello")

   console.log("connected  to DB ")
}

module.exports = connectDB