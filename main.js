
let myLibrary = [];

function Book (name, author, pages, status){
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

Book.prototype.changeStatus = function (status) {
	let statusChangeBtn = document.getElementByClassName("status-change-btn");
	statusChangeBtn.addEventListener("click", () => {
		if (status = "Reading") {
			status = "Completed";
		}
		
		else{
			status = "Reading";
		}
	});				
}
			
function addBookToLibrary () {
	let addBookBtn = document.getElementById("addBookBtn");
	console.log(addBookBtn);
	addBookBtn.addEventListener('click', () => {
		
	})
	let bookName = document.getElementById("getName");
	let bookAuthor = document.getElementById("getAuthor");
	let bookPages = document.getElementById("getPages");
	let bookStatus = document.getElementById("getStatus");
	let newBook = new Book (bookName, bookAuthor, bookPages, bookStatus);
	myLibrary.push(newBook);
}
			
function bookRenderer (){}
console.log("HI!");
addBookToLibrary();