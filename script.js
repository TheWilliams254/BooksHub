document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();
});

function fetchBooks() {
    fetch("http://localhost:3000/books")
        .then(res => res.json())
        .then(books => {
            const bookList = document.getElementById("books");
            bookList.innerHTML = ""; 

            books.forEach(book => {
                const li = document.createElement("li");
                li.textContent = book.title;
                li.classList.add("book", "item");
                li.dataset.id = book.id;

                // Create a Select button
                const selectBtn = document.createElement("button");
                selectBtn.textContent = "Select";
                selectBtn.classList.add("select-btn");
                selectBtn.addEventListener("click", () => loadBookDetails(book));

                // Append the button to the book list item
                li.appendChild(selectBtn);
                bookList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching books:", error));
}

function loadBookDetails(book) {
    document.getElementById("title").textContent = book.title;
    document.getElementById("genre").textContent = book.type; 
    document.getElementById("available").textContent = book.available ? "Available" : "Not Available";
}
