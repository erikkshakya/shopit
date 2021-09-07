const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    imageName: {
        type: String,
        required: false,
    },
    imageData: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Image", imageSchema)