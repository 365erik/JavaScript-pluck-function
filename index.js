const { pluck } = require("./pluck");
const movies = require("./movies.json");

console.log(pluck(movies, "title"));
console.log(pluck(movies, "releaseDate"));
console.log(pluck(movies, "rating"));
console.log(pluck(movies, "mpar"));
