document.addEventListener("DOMContentLoaded", function () {
    const movieDetailsContainer = document.getElementById("movie-details");
    const movieList = document.getElementById("films");
    const ticketForm = document.getElementById("ticket-form");
  
    // Fetch movie details for the first movie
    fetchMovieDetails(1);
  
    // Fetch movie list and populate the sidebar menu
    fetchMovieList();
  
    // Event listener for ticket form submission
    ticketForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const ticketQuantity = document.getElementById("ticket-quantity").value;
      const availableTickets = parseInt(movieDetailsContainer.dataset.availableTickets);
  
      if (ticketQuantity > 0 && ticketQuantity <= availableTickets) {
        const updatedTickets = availableTickets - ticketQuantity;
        updateAvailableTickets(updatedTickets);
      } else {
        alert("Invalid ticket quantity or sold out!");
      }
    });
  
    function fetchMovieDetails(movieId) {
      fetch(`http://localhost:3000/films/${movieId}`)
        .then((response) => response.json())
        .then((data) => {
          renderMovieDetails(data);
        })
        .catch((error) => console.log(error));
    }
  
    function renderMovieDetails(movie) {
      const moviePoster = document.getElementById("movie-poster");
      const movieTitle = document.getElementById("movie-title");
      const movieRuntime = document.getElementById("movie-runtime");
      const movieShowtime = document.getElementById("movie-showtime");
      const availableTickets = document.getElementById("available-tickets");
      const movieDescription = document.getElementById("movie-description");
  
      moviePoster.src = movie.poster;
      movieTitle.textContent = movie.title;
      movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
      movieShowtime.textContent = `Showtime: ${movie.showtime}`;
      availableTickets.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;
      movieDescription.textContent = movie.description;
    }
  
    function fetchMovieList() {
      fetch("http://localhost:3000/films")
        .then((response) => response.json())
        .then((data) => {
          renderMovieList(data);
        })
        .catch((error) => console.log(error));
    }
  
    function renderMovieList(movieListData) {
      movieListData.forEach((movie) => {
        const listItem = document.createElement("li");
        listItem.textContent = movie.title;
        listItem.classList.add("film-item");
        listItem.addEventListener("click", function () {
          fetchMovieDetails(movie.id);
        });
        movieList.appendChild(listItem);
      });
    }
  
    function updateAvailableTickets(updatedTickets) {
      const availableTickets = document.getElementById("available-tickets");
      availableTickets.textContent = `Available Tickets: ${updatedTickets}`;
    }
  });
  