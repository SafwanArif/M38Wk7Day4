const mongoose = require("mongoose")
const Movie = require("./movieModels")

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.find({})
    } catch (error) {
        console.log(error)
    }
}

// Updates one
exports.updateMovie = async (title, newTitle) => {
    try {
        return Movie.findOneAndUpdate(title, newTitle)
    }
    catch (error){
        console.log(error)
    }
}

exports.deleteMovie = async (movieID) => {
    try {
        await Movie.deleteOne(movieID)
    } catch (error) {
        console.log(error)
    }
}