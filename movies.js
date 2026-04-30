class Movie {
  #title;
  #cast;
  #description;
  #rating;

  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  updateRating(newRating) {
    this.#rating = newRating;
  }

  // Getter for title (needed for search)
  getTitle() {
    return this.#title;
  }

  displayInfo(prefix = "") {
    const movieDiv = document.getElementById("movie-info");

    movieDiv.innerHTML += `
      ${prefix}
      <p><strong>Title:</strong> ${this.#title}</p>
      <p><strong>Cast:</strong> ${this.#cast.join(", ")}</p>
      <p><strong>Description:</strong> ${this.#description}</p>
      <p><strong>Rating:</strong> ${this.#rating}</p>
      <br>
    `;
  }
}

const movie1 = new Movie(
  "The Shawshank Redemption",
  ["Tim Robbins", "Morgan Freeman"],
  "Two imprisoned men bond over a number of years, finding eventual redemption through acts of common decency.",
  9.3
);

movie1.displayInfo();

const movies = [];
movies.push(movie1);

function updateMovieRating(title, newRating) {
  for (let movie of movies) {
    if (movie.getTitle() === title) {
      movie.updateRating(newRating);

      movie.displayInfo("<h2>Updated rating:</h2>");
    }
  }
}

updateMovieRating("The Shawshank Redemption", 9.5);