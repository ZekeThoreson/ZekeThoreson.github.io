// const newbtn = document.querySelector('#js-new-quote');
// newbtn.addEventListener('click', getQuote);

// // const ansbtn = document.querySelector('#js-tweet');
// // ansbtn.addEventListener('click', displayAns);

// const liked = document.querySelector('.liked-section');
// liked.addEventListener('click',addLiked)

// let message = ""; // Global variable to store the current answer

// async function getQuote() {
//     try {
//         const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
//         const response = await fetch(endpoint);

//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         const json = await response.json();
//         message = json['message'];
//         displayQuote(json['message']);

//         // currentAuthor = json['quoteAuthor']; 
//     } catch (err) {
//         console.log(err);
//         alert('Failed to fetch new quote');
//     }
// }

// function addLiked(message){
//     const newLiked = document.createElement('p');
//     newLiked.textContent = message;
// }

// // function addLiked(message){
// //     const messageTxt = document.querySelector('#js-liked-text');
// //     messageTxt.textContent = message;
// // }

// function displayQuote(question) { 
//     const questionTxt = document.querySelector('#js-quote-text');
//     questionTxt.textContent = question;
//     const answerTxt = document.querySelector('#js-answer-text');
//     answerTxt.textContent = ''; // Clear the previous answer
// }

// // Initial call to load a question on page load
// getQuote();

const newbtn = document.querySelector('#js-new-quote');
newbtn.addEventListener('click', getQuote);

const likedbtn = document.querySelector('#js-liked-quote');
likedbtn.addEventListener('click', addLiked);

let message = ""; // Global variable to store the current quote

async function getQuote() {
    try {
        const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        message = json['message']; // Store the quote in the global variable
        displayQuote(json['message']);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function addLiked() {
    const newLiked = document.createElement('p');
    newLiked.textContent = message; // Use the global variable for the quote
    const likedSection = document.querySelector('.liked-section');
    likedSection.appendChild(newLiked); // Append the new element to the liked-section
}

function displayQuote(quote) { 
    const quoteTxt = document.querySelector('#js-quote-text');
    quoteTxt.textContent = quote;
}

// Initial call to load a quote on page load
getQuote();