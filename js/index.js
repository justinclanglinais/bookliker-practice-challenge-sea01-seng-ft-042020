const showDiv = document.getElementById("show-panel");
const list = document.getElementById("list");

document.addEventListener("DOMContentLoaded", function() {
    fetchBooks();
});

const allBooks = "http://localhost:3000/books";

function fetchBooks() {
    fetch(allBooks)
        .then(resp => resp.json())
        .then(data => {
            data.forEach(book => {
                renderBookList(book);
                bookCard(book);
            })
        });
};

function renderBookList(book) {
    let listItem = document.createElement("li");
    listItem.innerText = book.title;
    listItem.id = book.id;
    listItem.addEventListener("click", handleClick);
    list.appendChild(listItem);
};

function handleClick(event) {
    // console.log(event.target.id);
    let thisBook = document.getElementById(`${event.target.id}`);
    // console.dir(thisBook);
    let test = document.getElementById("show-panel");
    // console.log(test);
    for ( const div in test ) {
        if (div.id === thisBook.id) {
            div.style.display = "block"};
    }
};

function bookCard(book) {
    let newDiv = document.createElement("div");
    newDiv.id = book.id
    newDiv.style.display = "none";
    let title = document.createElement('h2');
    let image = document.createElement('img');
    let description = document.createElement('p');
    title.innerText = book.title;
    image.src = book.img_url;
    description.innerText = book.description;
    elements = [title, image, description];
    for (const element of elements) {
        newDiv.appendChild(element);
    };
    showDiv.appendChild(newDiv);
};