const DOMAIN = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
const API_KEY = 'drQOwQvdG1feztAV8MvwGA1N4BCgwAqV';
const BASE_URL = `${DOMAIN}?api-key=${API_KEY}`;

// link api
async function bookInfo() {
  
  let chosenBook = `${BASE_URL}`
  try {
    let response = await axios.get(chosenBook)

    for (let i = 0; i < response.results.books.length; i++) {
      bookData(response.results.books[i])
    }
    return response
  } catch (err) {
    console.error(err)
  }
}

// button created
let button = document.querySelector(".book-info")
button.addEventListener('click', () => {
  bookInfo()

} ) 
// Show all book info

function allBookData(results) {
  let dataContainer = document.querySelector('#book')
  console.log(results);
  let bookStuff = `
  <div class ="newDiv">
  <h2 id="title">${results.books[i].title}
  <h2 id="author">${results.books[i].author}
  <h3 id="description">${results.books[i].description}
  <img src="${results.books[i].book_image}" id="cover"/>
  </div>
  `
  dataContainer.insertAdjacentElement('beforeend', bookStuff )
}
allBookData()
// randomize book selection
// Source used: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffledBooks(books) {
  for (let i = results.books.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1))
    [results.books[i], results.books[j]] = [results.books[j], results.books[i]]
  }
  console.log(shuffledBooks)
}
