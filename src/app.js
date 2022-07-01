require("./db/connection")
const mongoose = require("mongoose")
const yargs = require("yargs")
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movies/movieMethods")

const app = async (yargsObj) => {
    try { // create
        if (yargsObj.add) {
            await addMovie({ 
                title: yargsObj.title,
                actor: yargsObj.actor,
                rating: yargsObj.rating })
            console.log(await listMovies())
        } else if (yargsObj.list) { // read (list)
            console.log(await listMovies())
        } else if (yargsObj.update) { // update
            await updateMovie( {title: yargsObj.title} ,{ 
                title: yargsObj.newTitle, 
                actor: yargsObj.newActor,
                rating: yargsObj.newRating })
        } else if (yargsObj.delete) { //delete
            await deleteMovie({
                _id: yargsObj.id,
            })
        } else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect()
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv)