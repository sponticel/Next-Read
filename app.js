const DOMAIN = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
const API_KEY = 'drQOwQvdG1feztAV8MvwGA1N4BCgwAqV';
const BASE_URL = `${DOMAIN}?api-key=${API_KEY}`;

// link api
async function bookInfo() {
  
  let chosenBook = `${BASE_URL}`
  try {
    removeBook()
    let response = await axios.get(chosenBook)
    const books = response.data.results.books
    allBookData(books)
    return response
  } catch (err) {
    console.error(err)
  }
}

// button created
let button = document.querySelector(".book-info")
  button.addEventListener('click', () => {
  bookInfo()
  refreshStars() 
   
  document.location += '#book'; return false;
}) 

function refreshStars() {
  let stars = document.querySelectorAll(".star")
  stars.forEach((star) => {
      star.checked = false
    })
}

// Show all book info
function allBookData(results) {
  let dataContainer = document.querySelector('#book')
  console.log(results);
  const randNum = (Math.floor(Math.random() * 16))
  const book = results[randNum]
    let bookStuff = `
    <div class ="newDiv">
    <h2 id="title">Title: ${book.title}
    <h2 id="author">Author: ${book.author}
    <h3 id="description">Description: ${book.description}
    <h2> </h2>
    <img src="${book.book_image}" id="cover"/>
    </div>
    `
    dataContainer.insertAdjacentHTML('beforeend', bookStuff)  
}


// removes last book
function removeBook() {
  let lessBooks = document.querySelector('#book')
    while (lessBooks.lastChild) {
    lessBooks.removeChild(lessBooks.lastChild)
  }
}

