// Event listener for the Add Book


const dialog = document.querySelector("#dialog");
const showButton = document.querySelector(".addBOOk");
const Close = document.querySelector(".close")

Close.addEventListener('click', function () {
    dialog.close();
});

showButton.addEventListener('click', function () {
    dialog.showModal();
});


// Event PAge about me
const AboutMe = document.querySelector(".About")
const dialogAboutMe = document.querySelector(".AboutMe")
const CloseAboutMe = document.querySelector(".closeAboutMe")

AboutMe.addEventListener('click', function () {
    dialogAboutMe.showModal();
});

CloseAboutMe.addEventListener('click', function () {
    dialogAboutMe.close();
});


//Event Help dialog 
const DiaHelp = document.querySelector(".DiaHelp")
const CloseHelp = document.querySelector(".closeHelp")
const Help = document.querySelector(".Help")

Help.addEventListener('click', function () {
    DiaHelp.showModal();
});

CloseHelp.addEventListener('click', function () {
    DiaHelp.close();
});

// Event Contact Me
const ContactMe = document.querySelector(".ContactMe")
const closeContactMe = document.querySelector(".closeContactMe")
const Contact = document.querySelector(".Contact")

Contact.addEventListener('click', function () {
    ContactMe.showModal();
});

closeContactMe.addEventListener('click', function () {
    ContactMe.close();
});

// Event Dark mode 
const DarkMode = document.querySelector(".dark")
const side = document.querySelector(".side")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
const footerText = document.querySelector(".footerText")
const light = document.querySelector(".light")
const dark = document.querySelector(".dark")



DarkMode.addEventListener('click', function () {
    side.style.background = "#1A120B"
    main.style.background = "#3C2A21"
    footer.style.background = "#110901"
    footerText.style.color = "#F2EAD3"
    showButton.style.background = "#110901"
    light.style.background = "#110901"
    dark.style.background = "#110901"
    Help.style.background = "#110901"
    Contact.style.background = "#110901"
    AboutMe.style.background = "#110901"
});

// Event Light mode 
const LightMode = document.querySelector(".light")

LightMode.addEventListener('click', function () {
    side.style.background = "#3F2305"
    main.style.background = "#F5F5F5"
    footer.style.background = "#DFD7BF"
    footerText.style.color = "#3F2305"
    showButton.style.background = "#3F2305"
    light.style.background = "#3F2305"
    dark.style.background = "#3F2305"
    Help.style.background = "#3F2305"
    Contact.style.background = "#3F2305"
    AboutMe.style.background = "#3F2305"
});

// Event Add Book to array
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const Number = document.querySelector("#Number")
const BtnAddBook = document.querySelector(".BtnAddBook")
const PleaseFill = document.querySelector(".PleaseFill")
const closePleaseFill = document.querySelector(".closePleaseFill")
const ShowBookMain = document.querySelector(".ShowBookMain")
const BookName = document.querySelector(".BookName")
const BookAuthor = document.querySelector(".BookAuthor")
const BookPages = document.querySelector(".BookPages")
const Read = document.querySelector(".Read")
const Delete = document.querySelector(".Delete")


closePleaseFill.addEventListener('click', function () {
    PleaseFill.close();
});

const MyLibrary = [];
function AddBook() {
    if (title.value === "" || author.value === "" || Number.value === "") {
        PleaseFill.showModal();
    } else {
        const newBook = new Book(title.value, author.value, Number.value);
        MyLibrary.push(newBook);

        // Create HTML elements to display the new book
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";

        const bookTitle = document.createElement("h2");
        bookTitle.className = "BookTitle";
        bookTitle.textContent = newBook.title;

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = `By ${newBook.author}`;

        const bookPages = document.createElement("p");
        bookPages.textContent = `${newBook.pages} pages`;

        const readButton = document.createElement("button");
        readButton.textContent = "Un-Read"
        readButton.className = "read-button";
        readButton.style.background = "red"
        readButton.addEventListener("click", function () {
            if (readButton.textContent = "Un-Read") {
                readButton.textContent = "Read"
                readButton.style.background = "green"
            }
            else if (readButton.textContent = "Read") {
                readButton.textContent = "Un-Read"
                readButton.style.background = "red"
            }

        });


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            // const index = MyLibrary.findIndex((book) => book.title === newBook.title);
            // MyLibrary.splice(index, 1);
            bookCard.remove();
        });

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(readButton);
        bookCard.appendChild(deleteButton);

        ShowBookMain.appendChild(bookCard);

        title.value = "";
        author.value = "";
        Number.value = "";
        PleaseFill.close();
    }
}
// the constructor 
function Book(title, author, pages) {
    return {
        title,
        author,
        pages,
    };
}

BtnAddBook.addEventListener('click', AddBook);
