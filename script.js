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
                li.addEventListener("click", () => loadBookDetails(book));

                bookList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching books:", error));
}

let selectedBook = null; // ✅ Store the selected book

function loadBookDetails(book) {
    selectedBook = book; // ✅ Save the selected book for ordering
    console.log("Book details:", book);

    document.getElementById("title").textContent = `Title: ${book.title}`;
    document.getElementById("type").textContent = `Genre: ${book.type}`;
    document.getElementById("available").textContent = `Availability: ${book.available ? "Available" : "Not Available"}`;
}

document.getElementById("orderButton").addEventListener("click", function () {
    if (!selectedBook) {
        alert("Please select a book first.");
        return;
    }

    if (!selectedBook.available) {
        alert(`Sorry, "${selectedBook.title}" is not available for ordering.`);
    } else {
        alert(`Order placed successfully for "${selectedBook.title}"!`);
        placeOrder(selectedBook);
    }
});

function placeOrder(book) {
    fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            bookId: book.id,
            title: book.title,
        }),
    })
    .then(res => res.json())
    .then(response => console.log("Order response:", response))
    .catch(error => console.error("Error placing order:", error));
}
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const clearButton = document.querySelector(".clear-btn");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before sending.");
            return;
        }

        console.log("Message Sent:", { name, email, message });
        alert(`Thank you, ${name}! Your message has been sent.`);

        contactForm.reset(); // Clears the form after submission
    });

    clearButton.addEventListener("click", function () {
        contactForm.reset(); // Clears form fields when "Clear" is clicked
    });
});
