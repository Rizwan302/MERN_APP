const mongoose = require('mongoose');

const connection_string = "mongodb+srv://rizwanahmedg2020:rizwanahmedg2020@cluster0.zodi414.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Run server MERN..."))
.catch((e)=>console.log("Error by ", e))