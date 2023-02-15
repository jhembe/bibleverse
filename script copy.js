
window.onload = function () {
const verseDisplay = document.getElementById("verse-display");
const refreshButton = document.getElementById("refresh-button");
const shareButton = document.querySelector("#shareButton");
// const newQuoteButton = document.querySelector("#new-quote");
const themeSwitch = document.querySelector(".theme-switch input");

themeSwitch.addEventListener("change", switchTheme);

async function getVerse() {
  const apiKey = "YOUR_API_KEY_HERE";
  const apiUrl = `https://api.biblebrain.com/v1/random?api_key=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const verse = data.data[0].text;
      const book = data.data[0].book;
      const chapter = data.data[0].chapter;
      const verseNumber = data.data[0].verse;
      const reference = `${book} ${chapter}:${verseNumber}`;
      verseDisplay.innerHTML = `${verse} (${reference})`;
    })
    .catch(error => {
      console.error(error);
      verseDisplay.innerHTML = "An error occurred, please try again later.";
    });
}

function switchTheme(){
  document.body.classList.toggle("dark")
}

function shareQuote() {
  // const quoteToShare = quote.innerText + " " + author.innerText;
  // const encodedQuote = encodeURIComponent(quoteToShare);
  // const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  // window.open(twitterUrl, "_blank");

const quoteToShare = quote.innerText + " " + author.innerText;
const encodedQuote = encodeURIComponent(quoteToShare);
const whatsappUrl = `https://wa.me/?text=${encodedQuote}`;
window.open(whatsappUrl, "_blank");

}


getVerse();
verseDisplay.addEventListener("click", getVerse);
shareButton.addEventListener("click",shareQuote)


}



// import axios from "axios";

// const quoteContainer = document.querySelector(".quote-container");
// const quote = document.querySelector(".quote");
// const author = document.querySelector(".author");
// const newQuoteBtn = document.querySelector("#new-quote");
// const shareBtn = document.querySelector("#shareButton");
// const themeSwitch = document.querySelector(".theme-switch input");

// async function getQuote() {
//   try {
//     const response = await axios.get("https://api.quotable.io/random");
//     quote.innerText = response.data.content;
//     author.innerText = `- ${response.data.author}`;
//   } catch (error) {
//     console.log("Whoops, no quote", error);
//   }
// }

// function switchTheme() {
//     document.body.classList.toggle("dark");
//   }

// function shareQuote() {
//   const quoteToShare = quote.innerText + " " + author.innerText;
//   const encodedQuote = encodeURIComponent(quoteToShare);
//   const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
//   window.open(twitterUrl, "_blank");
// }

//   getQuote();
//   refreshButton.addEventListener("click", getQuote);
//   shareButton.addEventListener("click", shareQuote);


window.onload = function () {
  const quoteContainer = document.querySelector(".quote-container");
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");
const refreshButton = document.querySelector("#new-quote");
const shareButton = document.querySelector("#shareButton");
  // const newQuoteButton = document.querySelector("#new-quote");
  const themeSwitch = document.querySelector(".theme-switch input");

  // newQuoteButton.addEventListener("click", getQuote);
  themeSwitch.addEventListener("change", switchTheme);

  async function getQuote() {
    axios
      // .get("https://api.polygon.io/v3/quotes/AAPL?apiKey=nAZ2wdrjT3oPzz0LI4iHAMVqCYTetMps")
      // .get("https://quotes.rest/qod.json?category=inspire")
      .get("https://api.quotable.io/random")
      .then(function (response) {
        // quote.innerHTML = "Hello there, this is the quote section";
        quote.innerHTML = response.data.content;
        // quote.innerHTML = response.data.contents.quotes.quote;
        // author.innerHTML = "-" + "Joseph Gabriel";
        author.innerHTML = "~ " + response.data.author;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function switchTheme() {
    document.body.classList.toggle("dark");
  }

  // function shareQuote() {
  //   if (navigator.share) {
  //     navigator.share({
  //       title: "Quote of the Day",
  //       text: quoteDisplay.innerHTML,
  //     })
  //       .then(() => console.log("Quote shared successfully"))
  //       .catch(error => console.error("Error sharing quote", error));
  //   } else {
  //     alert("Your device does not support sharing quotes. Please copy the text manually.");
  //   }
  // }



function shareQuote() {
  // const quoteToShare = quote.innerText + " " + author.innerText;
  // const encodedQuote = encodeURIComponent(quoteToShare);
  // const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  // window.open(twitterUrl, "_blank");

const quoteToShare = quote.innerText + " " + author.innerText;
const encodedQuote = encodeURIComponent(quoteToShare);
const whatsappUrl = `https://wa.me/?text=${encodedQuote}`;
window.open(whatsappUrl, "_blank");

}





  getQuote();
  refreshButton.addEventListener("click", getQuote);
  shareButton.addEventListener("click", shareQuote);
}