const quoteDisplay = document.getElementById("quote-display");
const refreshButton = document.getElementById("refresh-button");

function getQuote() {
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

getQuote();
refreshButton.addEventListener("click", getQuote);



// const quoteDisplay = document.getElementById("quote-display");
// const refreshButton = document.getElementById("refresh-button");

// function getQuote() {
//   fetch("https://quotes.rest/qod.json")
//     .then(response => response.json())
//     .then(data => {
//       const quote = data.contents.quotes[0].quote;
//       quoteDisplay.innerHTML = quote;
//     })
//     .catch(error => {
//       console.error(error);
//       quoteDisplay.innerHTML = "An error occurred, please try again later.";
//     });
// }

// getQuote();
// refreshButton.addEventListener("click", getQuote);


// window.onload = function() {
//     const quoteDisplay = document.getElementById("quote-display");
//     const refreshButton = document.getElementById("refresh-button");
  
//     function getQuote() {
//       fetch("https://quotes.rest/qod.json")
//         .then(response => response.json())
//         .then(data => {
//           const quote = data.contents.quotes[0].quote;
//           quoteDisplay.innerHTML = quote;
//         })
//         .catch(error => {
//           console.error(error);
//           quoteDisplay.innerHTML = "An error occurred, please try again later.";
//         });
//     }
  
//     getQuote();
//     refreshButton.addEventListener("click", getQuote);
//   };
  

// window.onload = function () {
//     const quoteDisplay = document.getElementById("quote-display");
//     const refreshButton = document.getElementById("refresh-button");

//     function getQuote() {
//         fetch("https://quotes.rest/qod.json")
//             .then(response => response.json())
//             .then(data => {
//                 const quote = data.contents.quotes[0].quote;
//                 quoteDisplay.innerHTML = quote;
//             })
//             .catch(error => {
//                 console.error(error);
//                 quoteDisplay.innerHTML = "An error occurred, please try again later.";
//             });
//     }

//     getQuote();
//     refreshButton.addEventListener("click", getQuote);
// };
