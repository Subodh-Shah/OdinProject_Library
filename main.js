let bookLibrary = [];

function Book(name, author, pages, status = 'Reading') {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.status = status;
}

Book.prototype.changeStatus = function () {
	this.status = this.status === 'Reading' ? 'Completed' : 'Reading';
};


function addBookToLibrary() {
	
	let bookName = document.getElementById('bookName');
	let bookAuthor = document.getElementById('bookAuthor');
	let bookPages = document.getElementById('bookPages');
	let addBookBtn = document.getElementById('addButton');
	let addBookForm = document.getElementById('addBookForm');
	let storeBtn = document.getElementById('storeBtn');
	
	addBookBtn.addEventListener('click', () => {
		if (addBookForm.hasAttribute('hidden')) {
			addBookForm.removeAttribute('hidden');
			addBookBtn.innerText = 'Cancel';
		}
		else {
			addBookBtn.innerText = 'Add Book';
		    addBookForm.setAttribute('hidden', '');
			bookName.value = '';
			bookAuthor.value = '';
			bookPages.value = '';
		}
	});
	
	storeBtn.addEventListener('click', () => {
		let bookStatus = document.querySelector('input[name="bookStatus"]:checked');
		let getName = bookName.value;
		let getAuthor = bookAuthor.value;
		let getPages = Number(bookPages.value);
		let getStatus = bookStatus.value;
			
		if (typeof(getName) !== 'string' || typeof(getAuthor) !== 'string' || typeof(getPages) !== 'number' || typeof(getStatus) !== 'string') {
			alert('Enter correct information');
		} 
		
		else if (getName == '' || getAuthor == '' || getPages == '' || getStatus == ''){
			alert('Plese enter the information');
		}
		

		else {
			let newBook = new Book(getName, getAuthor, getPages, getStatus);
			bookLibrary.push(newBook);
			bookRenderer(bookLibrary);
			changeStatusOfBook();
			addBookBtn.innerText = 'Add Book';
			addBookForm.setAttribute('hidden', '');
			bookName.value = '';
			bookAuthor.value = '';
			bookPages.value = '';
			bookStatus.value = '';
		}
	});
}
	
function bookRenderer (bookLibrary) {
	let booksRecord = document.getElementById('booksRecord');
	booksRecord.innerHTML = `<tr>
						<th>Book Name</th>
						<th>Author</th>
						<th>Pages</th>
						<th>Status</th>
					</tr>`;
	bookLibrary.forEach((book, index) => {
		let bookName = book.name;
		let bookAuthor = book.author;
		let bookPages = book.pages;
		let bookStatus = book.status;
	
		let addedBook = document.createElement('tr');
		addedBook.innerHTML = `
		<tr>
			<td>${book.name}</td>
			<td>${book.author}</td>
			<td>${book.pages}</td>
			<td>
				<div class="status-section">
					<p class="status-text">${book.status}</p>
					<input type="checkbox" class="status-change-btn" data-index="${index}" ${book.status === 'Completed' ? 'checked' : ''}>
				</div>
			</td>
		</tr>`;
		booksRecord.appendChild(addedBook);
	});
}

function changeStatusOfBook() {
	let statusChange = [...document.getElementsByClassName('status-change-btn')];

	statusChange.forEach((checkbox) => {
		checkbox.addEventListener('change', () => {
			const index = parseInt(checkbox.dataset.index, 10);
			bookLibrary[index].changeStatus();
			bookRenderer(bookLibrary);
			changeStatusOfBook(); // Re-bind listeners after re-rendering
		});
	});
}


addBookToLibrary();




