/*
	Po wpisaniu tytułu i kliknięciu przycisku add
	tytuł książki ma się znaleźć w liście pod tytułem Books to read
*/

const wigetBook = (value) => {
	let addBook = document.querySelector("#addBook");
	let titlesToRead = document.querySelector("#titlesToRead"); // tu będziemy dodawać tytuły;
	let titlesToReadLi = document.querySelector("#titlesToRead li");
	
	let liBook = document.createElement("li");
	let divBook= document.createElement("div");
	let pTitle = document.createElement("p");
	let buttonDelete = document.createElement("button");
	buttonDelete.className = "delete box-w20-h100 btn btn-green flex flexCenter";
	buttonDelete.innerHTML = "DELETE";
	pTitle.innerHTML = value;
	pTitle.className = "margin-left-5 box-w80-h100 flex flexCenterAlign";
	liBook.className = 'box-w100-h25 flex flexColumn flexCenterAlign';
	divBook.className = "marginBottom-2 box-w80-h100 flex flexCenterAlign flexJustify beautyBorderLeft borderHover";
	
	divBook.appendChild(pTitle);
	divBook.appendChild(buttonDelete);
	liBook.appendChild(divBook);

	titlesToRead.insertBefore(liBook, titlesToRead.lastChild);

}

let add = document.querySelector("#add");

add.addEventListener('click', (event) => {
	let addBook = document.querySelector("#addBook");
	event.preventDefault();
	if(addBook.value.length > 4) {
		document.forms[1].children[0].style = "background-color: white;";
		document.forms[1].children[0].placeholder = "Add book";
		wigetBook(addBook.value);
		let inputToAddingBooks = document.querySelector("#foot input[type='text']");
		inputToAddingBooks.value = "";
		if(titlesToRead.children.length > 4 ) {
			titlesToRead.style = "overflow-y: scroll;";
		}

	}else {
		let inputToAddingBooks = document.querySelector("#foot input[type='text']");
		inputToAddingBooks.value = "";
		inputToAddingBooks.style = "background-color: #ffd1db;";
		inputToAddingBooks.placeholder = "Nie można dodać wpisu poniżej 4 liter";
		console.log("Nie można dodać wpisu poniżej 4 liter");
	}
});




const listOfBooks = document.querySelector("#titlesToRead");
listOfBooks.addEventListener('click', function(event) {
	const del = event.target;

	if(del.className == 'delete box-w20-h100 btn btn-green flex flexCenter') {
		let titlesToRead = document.querySelector("#titlesToRead");
		
		if(titlesToRead.children.length < 6 ) {
			console.log("here if: ", titlesToRead.children.length);
			titlesToRead.style = "";	
		}

		listOfBooks.removeChild(del.parentElement.parentElement);
		
	}

});
let searchForm = document.querySelector("#search");
let searchMe = document.querySelector("#search input");

searchForm.addEventListener("submit", function(event) {
	event.preventDefault();
});
searchForm.addEventListener("keyup", (event) => {
	
	const element = event.target.value.toLowerCase();
	const books = listOfBooks.getElementsByTagName("li");
	Array.from(books).forEach(function(book) {
		const findBook = book.firstElementChild.firstElementChild.textContent;
		if(findBook.toLowerCase().indexOf(element) != -1) {
			book.style.display = "flex";
		}else {
			book.style.display = "none";
		}
	});
});



/*let body = document.querySelector("body");
body.className = "flex flexCenter"
let scriptJS = document.querySelector("script");

let divMain = document.createElement("div");
divMain.id = "mainBox1";
divMain.className = 'flex flexCenter colorDivGreen  container50';

body.insertBefore(divMain, scriptJS);

let menuListArray = ["start", "galery", "about", "contact"];
let listChildren = Array.from(body.children);
const counter = (add) => {
	let long = add;
	function increment() {
		long--;
		return long;
	}
	return increment;
}

let letCount = counter(listChildren.length-1);
let create = 0;

for(let i = menuListArray.length-1; i >= 0; i--) {
	create = document.createElement("button");
	create.className = "btn delete colorDivGreen reverseColor";
	create.innerHTML = "<span class='del'> delete </span>"; 
	divMain.appendChild(create);
}

const list = document.querySelector("#mainBox1");

list.addEventListener('click', function(evenet) {
	if(event.target.className == 'del') {
		list.removeChild(event.target.parentElement);
	}
});

const formLogin = document.forms["loginForm"];
formLogin.addEventListener('submit', (event) => {
	event.preventDefault(); // chroń przed domyślnym zachowaniem
	const value = formLogin.querySelector("input[type='text']").value;
	const pElement = document.createElement("p");
	pElement.className = 'something';
	pElement.innerHTML = `${value}`;
	console.log(value);
	divMain.insertBefore(pElement, divMain.lastChild);
});


/*
for(let i = menuListArray.length; i > 0; i--) {
	ulTag = document.querySelector("#list1");
	liTag = document.createElement("li");
	liTag.className = 'flex flexCenter colorDivBlue reverseColor';
	liTag.innerHTML = `${menuListArray[i-1]}`;
	ulTag.insertBefore(liTag, ulTag.firstChild);
	liTag.addEventListener('click', (event) => {
		let c = letCount();
		console.log(c);
		body.removeChild(listChildren[c]);
		
		/*if(mainBox2.className == 'flex flexCenter colorDivBlue reverseColor') {
			mainBox2.className = 'flex flexCenter colorDivGreen reverseColor'
		}else {
			mainBox2.className = 'flex flexCenter colorDivBlue reverseColor';
		}
	});
}
*/