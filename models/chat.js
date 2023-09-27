const mongoose = require("mongoose");

const chatschema = new mongoose.Schema({
    from: {
        type: String
    },
    to: {
        type: String
    },
    msg: {
        type: String

    },
    created_at: {
        type: Date
    }
})

const chat = mongoose.model("chat", chatschema);

module.exports = chat