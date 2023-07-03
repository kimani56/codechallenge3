document.addEventListener('DOMContentLoaded', function() {
    const movieDetailsContainer = document.querySelector('.movie-details');
    const moviePoster = document.getElementById('movie-poster');
    const movieTitle = document.getElementById('movie-title');
    const movieRuntime = document.getElementById('movie-runtime');
    const movieShowtime = document.getElementById('movie-showtime');
    const movieAvailableTickets = document.getElementById('movie-available-tickets');
    const movieDescription = document.getElementById('movie-description');
    const ticketForm = document.getElementById('ticket-form');
    const ticketQuantityInput = document.getElementById('ticket-quantity');
  
    // Function to display movie details
    function displayMovieDetails(movie) {
      moviePoster.src = movie.poster;
      movieTitle.textContent = movie.title;
      movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
      movieShowtime.textContent = `Showtime: ${movie.showtime}`;
      movieAvailableTickets.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;
      movieDescription.textContent = movie.description;
    }
  
    // Function to fetch movie details from the server
    function fetchMovieDetails(movieId) {
      fetch(`/http://localhost:3000/films/${movieId}`)
        .then(response => response.json())
        .then(movie => displayMovieDetails(movie))
        .catch(error => console.log(error));
    }
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault();
      const ticketQuantity = parseInt(ticketQuantityInput.value);
      if (ticketQuantity > 0) {
        const availableTickets = parseInt(movieAvailableTickets.textContent.split(' ')[2]);
        if (ticketQuantity <= availableTickets) {
          const updatedAvailableTickets = availableTickets - ticketQuantity;
          movieAvailableTickets.textContent = `Available Tickets: ${updatedAvailableTickets}`;
          ticketQuantityInput.value = '';
        } else {
          alert('Not enough available tickets!');
        }
      } else {
        alert('Please enter a valid ticket quantity!');
      }
    }
  
    // Fetch movie data for the first movie when the page loads
    fetchMovieDetails(1);
  
    // Event listener for form submission
    ticketForm.addEventListener('submit', handleFormSubmit);
  });
  