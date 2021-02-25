const DOMAIN = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
const API_KEY = 'drQOwQvdG1feztAV8MvwGA1N4BCgwAqV';
const BASE_URL = `${DOMAIN}?api-key=${API_KEY}`;

async function bookInfo() {
  
  let chosenBook = `${BASE_URL}`
  try {
    let response = await axios.get(chosenBook)
    console.log(response.results.books[0].title)
    
  } catch (err) {
    console.error(err)
  }
}
myJavascriptFunction()