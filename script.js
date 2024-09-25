const recommendedMovies1 = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "Memento",
];
const recommendedMovies2 = ["The Matrix", "Avatar", "Inception", "Titanic"];

const mergedMovies = recommendedMovies1.concat(recommendedMovies2);

let uniqueMovies = [];

for (let i = 0; i < mergedMovies.length; i++) {
  if (uniqueMovies.indexOf(mergedMovies[i]) === -1) {
    uniqueMovies.push(mergedMovies[i]);
  }
}

const reversedMovies = uniqueMovies.reverse();

const moviesString = reversedMovies.join(" | ");

console.log(moviesString);
