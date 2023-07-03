FLATDANGO MOVIE TICKET PURCHASE APP
Flatdango is a web application that allows users to purchase movie tickets from the Flatiron Movie Theater. The app fetches movie data from a local server and provides a user-friendly interface for browsing movies and buying tickets.

Features
View the details of the first movie, including its poster, title, runtime, showtime, and available tickets.
See a menu of all movies on the left side of the page.
Buy tickets for a movie, with real-time updates on the available ticket count.


TECHNOLOGIES USED

HTML5
CSS3
JavaScript
Installation
Clone the GitHub repository: git clone https://github.com/your-username/flatdango.git
Navigate to the project directory: cd flatdango
Start a local HTTP server (e.g., using Python): python -m http.server
Open your web browser and visit http://localhost:8000 to access the application.
API Endpoints
The application fetches movie data from the local server using the following API endpoints:

GET /films/1: Retrieves the details of the first movie.
GET /films: Retrieves a list of all movies.
The server responds with JSON data containing movie details such as ID, title, runtime, capacity, showtime, tickets sold, description, and poster URL.

USAGE

When the page loads, you will see the details of the first movie, including the movie poster, title, runtime, showtime, and available tickets.
On the left side of the page, you will find a menu displaying all the available movies.
To buy a ticket for a movie, enter the desired quantity in the "Ticket Quantity" input field and click the "Buy Ticket" button.
The available ticket count will update in real-time, and if the showing is sold out, you will not be able to buy any more tickets.
Please note that this application does not persist ticket purchases. It is for demonstration purposes only.

CONTRIBUTING

Contributions to the Flatdango project are welcome! If you find any issues or have suggestions for improvement, please submit a pull request or open an issue on the GitHub repository.

LICENSE
This project is licensed under the MIT License.

