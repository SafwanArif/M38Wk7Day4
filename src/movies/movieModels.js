const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        unique: true,
        required: true,
    },
    actor: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie