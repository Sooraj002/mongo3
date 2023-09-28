const mongoose = require("mongoose");

main()
    .then(() => { console.log("connection successful") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

const chat = require("./models/chat.js")

let chats = [{
        from: "varun",
        to: "vivek",
        msg: "Send me your notes",
        created_at: new Date(),
    },
    {
        from: "abhi",
        to: "ansh",
        msg: "who is that",
        created_at: new Date(),
    },
    {
        from: "dhanu",
        to: "jayath",
        msg: "i want to buy new phone",
        created_at: new Date(),
    },
    {
        from: "Neha",
        to: "Priya",
        msg: "Send me your exam sheets",
        created_at: new Date(),
    }



]

chat.insertMany(chats);

// chat.save().then((res) => {
//     console.log(res);
// });