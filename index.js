const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const chat = require("./models/chat.js")


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


main()
    .then(() => { console.log("connection successful") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}
// chat1.save().then((res) => {
//     console.log(res);
// });




// index route 
app.get("/chats", async(req, res) => {
    let chats = await chat.find()
    console.log(chats);
    res.send("working")
});


app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});