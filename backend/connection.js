const { default: mongoose } = require("mongoose");


const url = "mongodb+srv://ausaf98:<db_password>@cluster0.zlrvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});
module.exports = mongoose;