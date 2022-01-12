const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if(operation=="add"){
        movies.push(movie)
    }
    else{
            movieIndex=movies.indexOf(movie)
            if(movieIndex!=-1){
                movies=movies.splice(movieIndex, 1)
            }
    }
    return movies
}

module.exports = favouriteMovie;
