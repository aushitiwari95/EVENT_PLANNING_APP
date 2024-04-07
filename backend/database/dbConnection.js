import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect("mongodb+srv://codewithaushi:codewithaushi@cluster0.a0qrjtq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useUnifiedTopology: true,

        useNewUrlParser: true,
    
    })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((err) => {
        console.log("Some error occured while connecting to database:", err);
    })
}