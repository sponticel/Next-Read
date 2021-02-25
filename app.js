const DOMAIN = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
const API_KEY = 'drQOwQvdG1feztAV8MvwGA1N4BCgwAqV';
const BASE_URL = `${DOMAIN}?api-key=${API_KEY}`;

// link api
async function bookInfo() {
  
  let chosenBook = `${BASE_URL}`
  try {
    let response = await axios.get(chosenBook)
    console.log(response.data.results.books[0].title)
    // console.log(response.results.books[i].title)
    for (let i = 0; i < response.data.results.book.title.length; i++) {
      bookData(response.results.book[i])
    }
    return response
  } catch (err) {
    console.error(err)
  }
}
// bookInfo()

let button = document.querySelector(".book-info")
// console.log(button)

button.addEventListener('click', () => {
  bookInfo()

} ) 


// randomize