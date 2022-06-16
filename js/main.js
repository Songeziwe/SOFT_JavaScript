// get the input element
const inputElement = document.getElementById("searchInput");
const movieCards = [...document.getElementsByClassName("card")];
let filterdMovies = [];

// console.log(movieCards);

// let numbers = [1, 2, 4, 5].filter((item) => {})
// numbers[0]

// filter(callback)

// handle user input
function handleSearch() {
  const userInput = inputElement.value;

  filterdMovies = movieCards.filter(function(element) {
    let cardbody = [...element.children][1];
    let title = [...cardbody.children][0].textContent;  // title of each movie

    if(title === userInput){
      console.log(element);
    }
    return title.toLowerCase().includes(userInput.toLowerCase());
  });

  render(filterdMovies);
}

// render results to the DOM
function render(data) {
  // console.log(data);
  // 
  // resultsContainer.innerHTML = `${data[0]}`;

  createMovieCard(data[0])
}


function createMovieCard(movie) {
  // get the movie image
  const movieImage = [...movie.children][0].src;

  // get movie title
  const cardbody = [...movie.children][1];
  const movieTitle = [...cardbody.children][0].textContent;

  // get movie description
  const movieDescription = [...cardbody.children][1].textContent;
  
  
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = `
  <div class="card p-0 col-6">
    <img src="${movieImage}" class="card-img-top" alt="movie image"/>
    <div class="card-body">
      <h5 class="card-title">${movieTitle}</h5>
      <p class="card-text">${movieDescription}</p>
      <a href="#" class="btn btn-primary">READ MORE</a>
    </div>
  </div>
  `;

}

// Add event handlers
inputElement.addEventListener("keyup", handleSearch);


