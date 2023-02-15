import axios from "axios";

const quoteContainer = document.querySelector(".quote-container");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuoteButton = document.querySelector("#new-quote");
const themeSwitch = document.querySelector(".theme-switch input");

newQuoteButton.addEventListener("click", getQuote);
themeSwitch.addEventListener("change", switchTheme);

function getQuote() {
    // axios
    //     .get("https://api.quotable.io/random")
    //     .then(function (response) {
    //         quote.textContent = response.data.content;
    //         author.textContent = "-" + response.data.author;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    fetch("https://quotes.rest/qod.json")
    .then(response => response.json())
    .then(data => {
      const quote = data.contents.quotes[0].quote;
      quoteDisplay.innerHTML = quote;
    })
    .catch(error => {
      console.error(error);
      quoteDisplay.innerHTML = "An error occurred, please try again later.";
    });
}

function switchTheme() {
    document.body.classList.toggle("dark");
}


getQuote();
refreshButton.addEventListener("click", getQuote);
