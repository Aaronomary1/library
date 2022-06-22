let myLibrary = []
let i = 0;
class Book{
    constructor(title, author, pages, read){
        this.title = title,
        this.author = author
        this.pages = pages,
        this.read = read
    }
}

function addBookToLibrary(title, author, pages, read) {
    var newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

document.getElementById("newBook").addEventListener("click", () =>{
    var modal = document.getElementById("modal-container");
    modal.style.display = "inherit";
});

document.getElementById("closeModal").addEventListener("click", () =>{
    var modal = document.getElementById("modal-container");
    modal.style.display = "none";
});

document.getElementById("bookForm").addEventListener("submit", (event) =>{
    event.preventDefault()
    var titleInput = document.getElementById("titleInput").value;
    var authorInput = document.getElementById("authorInput").value;
    var pagesInput = document.getElementById("pagesInput").value;
    var statusInput = "No";
    if(document.querySelector('input[type="checkbox"]:checked')){
        statusInput = document.querySelector('input[type="checkbox"]:checked').value;
    }
    addBookToLibrary(titleInput, authorInput, pagesInput, statusInput);

    let newBook = document.createElement("div");
    newBook.className = "bookCard";
    newBook.setAttribute("id", `book`)
    let title = document.createElement("h2");
    title.setAttribute("id", "title");
    newBook.appendChild(title);
    let author = document.createElement("p");
    author.setAttribute("id", "author");
    newBook.appendChild(author);
    let pages = document.createElement("p");
    pages.setAttribute("id", "pages");
    newBook.appendChild(pages);
    let status = document.createElement("button");
    status.setAttribute("class", "status");
    newBook.appendChild(status);
    let removeBook = document.createElement("button");
    removeBook.className = "removeBook";
    removeBook.setAttribute("id", `removebook-${i}`);
    newBook.appendChild(removeBook);
    title.innerHTML = `"${myLibrary[i].title}"`;
    author.innerHTML = "~ "+myLibrary[i].author;
    pages.innerHTML = `(${myLibrary[i].pages} pages)`;
    if (myLibrary[i].read == "No"){
        status.innerHTML = "I did not read this book! 😔";
    }
    if (myLibrary[i].read == "Yes") {
        status.innerHTML = "I read this book! ✔";
    }
    removeBook.innerHTML = "❌";
    document.getElementById("content").append(newBook);
    i++
});

let removeBooks = document.getElementsByClassName("removeBook");
document.getElementById("content").addEventListener("click", (event) =>{
    if (event.target.classList.contains("removeBook")) {
        event.target.parentElement.remove();
    }
    if (event.target.classList.contains("status")) {
        if (event.target.innerHTML == "I did not read this book! 😔"){
            event.target.innerHTML = "I read this book! ✔";
        }
        else{
            event.target.innerHTML = "I did not read this book! 😔";
        }
        
    }
});

/* Create NEW book code */

    /*
    let newBook = document.createElement("div");
    newBook.className = "bookCard";
    newBook.setAttribute("id", `book`)
    let title = document.createElement("h2");
    title.setAttribute("id", "title");
    newBook.appendChild(title);
    let author = document.createElement("p");
    author.setAttribute("id", "author");
    newBook.appendChild(author);
    let pages = document.createElement("p");
    pages.setAttribute("id", "pages");
    newBook.appendChild(pages);
    let status = document.createElement("button");
    status.setAttribute("class", "status");
    newBook.appendChild(status);
    let removeBook = document.createElement("button");
    removeBook.className = "removeBook";
    removeBook.setAttribute("id", `removebook-${i}`);
    newBook.appendChild(removeBook);
    title.innerHTML = `"${myLibrary[i].title}"`;
    author.innerHTML = "~ "+myLibrary[i].author;
    pages.innerHTML = `(${myLibrary[i].pages} pages)`;
    if (myLibrary[i].read == "No"){
        status.innerHTML = "I did not read this book! 😔";
    }
    if (myLibrary[i].read == "Yes") {
        status.innerHTML = "I read this book! ✔";
    }
    removeBook.innerHTML = "❌";
    document.getElementById("content").append(newBook);
    i++
    */