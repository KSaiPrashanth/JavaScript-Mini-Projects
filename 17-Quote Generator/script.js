const api_url = "https://programming-quotesapi.vercel.app/api/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.textContent = data.quote;
  author.textContent = data.author;
}

getQuote(api_url);

function post() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ---- by " +
      author.innerHTML
  );
}
