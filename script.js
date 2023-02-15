
window.onload = function () {
const verseDisplay = document.getElementById("verse-display");
const verseReference = document.getElementById("book-reference");
const refreshButton = document.getElementById("new-verse");
const shareButton = document.querySelector("#shareButton");
// const newQuoteButton = document.querySelector("#new-quote");
const themeSwitch = document.querySelector(".theme-switch input");

themeSwitch.addEventListener("change", switchTheme);


async function getVerse() {
  const apiUrl = "https://labs.bible.org/api/?passage=random&type=json";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const verse = data[0].text;
    const book = data[0].bookname;
    const chapter = data[0].chapter;
    const verseNumber = data[0].verse;
    const reference = `${book} ${chapter}:${verseNumber}`;
    verseDisplay.innerHTML = `${verse} (${reference})`;
    verseReference.innerHTML = "~ " + `${reference}`;
  } catch (error) {
    console.error(error);
    document.getElementById("verse-display").innerHTML = "An error occurred, please try again later.";
  }
}


function switchTheme(){
  document.body.classList.toggle("dark")
}

function shareQuote() {
  // const quoteToShare = quote.innerText + " " + author.innerText;
  // const encodedQuote = encodeURIComponent(quoteToShare);
  // const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  // window.open(twitterUrl, "_blank");

const quoteToShare = verseDisplay.innerText + " " + verseReference.innerText;
const encodedQuote = encodeURIComponent(quoteToShare);
const whatsappUrl = `https://wa.me/?text=${encodedQuote}`;
window.open(whatsappUrl, "_blank");

}


getVerse();
refreshButton.addEventListener("click", getVerse);
shareButton.addEventListener("click",shareQuote)


}


