# Flatdango

Flatdango is a web application that allows users to view and purchase movie tickets. The project involves dynamically displaying movie details, updating ticket availability, and interacting with a backend server.

## Features
- Fetch and display a list of movies from a server.
- Show movie details including title, description, poster, and available tickets.
- Allow users to purchase tickets, reducing the available count dynamically.
- Update the user interface to reflect ticket sales.

## Technologies Used
- HTML
- CSS
- JavaScript
- JSON Server (Mock Backend)

## Setup Instructions
### Prerequisites
- Ensure you have Node.js installed on your machine.
- Install `json-server` globally if not already installed:
  ```sh
  npm install -g json-server
  ```

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/flatdango.git
   ```
2. Navigate to the project directory:
   ```sh
   cd flatdango
   ```
3. Start the JSON server to serve movie data:
   ```sh
   json-server --watch db.json
   ```
4. Open `index.html` in a web browser to interact with the application.

## API Endpoints
The project interacts with a mock API using `json-server`. Below are the main endpoints:

- **GET /films** - Fetch a list of all movies.
- **GET /films/:id** - Fetch details of a specific movie.
- **PATCH /films/:id** - Update ticket availability after purchase.

## How It Works
1. When the application loads, it fetches a list of movies and displays them in a sidebar.
2. Clicking on a movie updates the main display with movie details.
3. Clicking the "Buy Ticket" button decreases the available ticket count and updates the backend data.

## Future Enhancements
- Implement user authentication to track purchases.
- Add a search functionality to filter movies.
- Improve UI/UX with better styling and animations.

## License
This project is open-source and available under the [MIT License](LICENSE).

