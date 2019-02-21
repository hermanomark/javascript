// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;

    list.appendChild(row);
}

UI.prototype.showAlert = function(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Delete book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        if (confirm('Are you sure?')) {
            target.parentElement.parentElement.remove();
        }
    }
}

// Local storage function
function Store() {}

Store.getBooks = function() {
    let books;
    if(localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books')); 
    }

    return books;
}

Store.displayBooks = function() {
    const books = Store.getBooks();

    books.forEach(function(book) {
        const ui = new UI;
        
        // Add book to UI
        ui.addBookToList(book);
    });
}

Store.addBook = function(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
}

Store.removeBook = function(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index) {
        if (book.isbn === isbn) {
            books.splice(index, 1);
        }
    });

    localStorage.setItem('books', JSON.stringify(books));
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get forms values    
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // Instantuate a book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    console.log(ui);

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // Add book to LS
        Store.addBook(book);

        // Show success
        ui.showAlert('Book Added!', 'success');

        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {

    // Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    // Delete book from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show message
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});