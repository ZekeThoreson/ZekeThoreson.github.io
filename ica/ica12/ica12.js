const newbtn = document.querySelector ('#js-new-quote');
addEventListener('click',getQuote);

const ansbtn = document.querySelector('#js-tweet');
addEventListener('click', getAns);

let answer = "";

async function getQuote(){
    try{
        const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
        const response = await fetch(endpoint);

        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);
        const answer = json['answer'];

    }

        catch(err){
            console.log(err)
            alert('Failed to fetch new quote')
        }
}

async function getAns(){
    try{
        const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
        const response = await fetch(endpoint);

        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayAns(json['answer']);

    }

        catch(err){
            console.log(err)
            alert('Failed to fetch answer')
        }
}

function displayQuote(question){
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
}

function displayAns(answer){
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer;
}

getQuote();

getAns();