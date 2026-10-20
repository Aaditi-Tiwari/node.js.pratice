require("dns").setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose")




async function connectedDB(params) {
    
await mongoose.connect("mongodb+srv://yt-databse:gtDBipQfk5blU8re@yt-node-clustar.1sgerxe.mongodb.net/project-practice-1")

console.log('connect to db')
    
}

module.exports = connectedDB