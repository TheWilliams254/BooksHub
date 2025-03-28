const API_URL = "https://bookhub-server-waq9.onrender.com"; // ✅ Store API URL in a variable

document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();
});

function fetchBooks() {
    fetch(`${API_URL}/books`)
        .then(res => res.json())
        .then(books => {
            console.log("Books:", books);
            const bookList = document.getElementById("books");
            bookList.innerHTML = "";

            books.forEach(book => {
                const li = document.createElement("li");
                li.textContent = book.title;
                li.classList.add("book", "item");
                li.dataset.id = book.id;

                // Checking if book is available
                if (!book.available) {
                    li.classList.add("not-available");
                    li.textContent += " (Not Available)";
                }

                // Load book details when clicked
                li.addEventListener("click", () => loadBookDetails(book.id));

                bookList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching books:", error));
}
function loadBookDetails(bookId) {
    fetch(`${API_URL}/books/${bookId}`)
        .then(res => res.json())
        .then(book => {
            console.log("Book details:", book);
            document.getElementById("title").textContent = `Title: ${book.title}`;
            document.getElementById("genre").textContent = `Genre: ${book.type}`;
            document.getElementById("available").textContent = `Availability: ${book.available ? "Available" : "Not Available"}`;
        })
        .catch(error => console.error("Error loading book details:", error));
}
