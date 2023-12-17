// import {createHTMLElem, callGpt} from './util.js';

const apiKey = "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";

function createHTMLElem(){

    //Primary area

    const resultBox = document.createElement("div");//biggest box that holds everything
        resultBox.id = "resultBox";
        resultBox.style.fontFamily = "Google Sans,arial,sans-serif";
        resultBox.style.backgroundColor = "#ffffff";
        resultBox.style.border = "2px solid #bababa";
        resultBox.style.borderRadius = "10px";
        resultBox.style.padding = "10px";
        resultBox.style.marginTop = "10px";
        resultBox.style.marginBottom = "20px";
        resultBox.style.display = "block";

    //Header Bar - Name and Logo
    const header = document.createElement("div");
        header.style.display = "block";

        //Textbox "SearchGPT"
        const heading = document.createElement("h1");
        heading.textContent = "SearchGPT";
        heading.style.fontSize = "22px";
        // heading.style.marginTop = "8px";

        const headerIcon = document.createElement("img");
        headerIcon.setAttribute("src", "data:image/png;base64,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");
        headerIcon.style.float = "right";
        headerIcon.style.marginTop = "-3px";

    //Box where gpt response is given
    const answerBox = document.createElement("div");
        answerBox.id = "AnswerBox";
        answerBox.style.paddingTop = "15px";
        // answerBox.style.color = "#535156";
        answerBox.className = "hgKElc";
        answerBox.style.lineHeight = "22px";

    
    header.appendChild(heading);
    heading.appendChild(headerIcon);


    resultBox.appendChild(header);
    resultBox.appendChild(answerBox);

    
    appendHTMLtoPage(resultBox);

    return resultBox;
}

function appendHTMLtoPage(item){
    const resultStatsElement = document.getElementById("center_col");

    if (resultStatsElement) {
        resultStatsElement.insertBefore(item, resultStatsElement.firstChild);
    }
    console.log("added box");

    var style = document.createElement('style');
    item.appendChild(style);
}

function makeGenerateButton(){

    //find box in 
    const resultBox = document.getElementById("resultBox");


    var button = document.createElement("button");
    button.id = "button";
    button.innerHTML = "Generate more";
    button.style.marginTop = "10px";
    button.style.padding = "5px";
    button.style.paddingLeft = "10px";
    button.style.paddingRight = "10px";
    button.style.borderRadius = "7px";
    button.style.fontSize = "14px";
    button.style.backgroundColor = "#dadada";
    button.style.border = "0";

    

    resultBox.appendChild(button);

    console.log("Button Added");
}

async function getGPT(query){
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: query }]
        }),
    });

    if (response.ok) {
        console.log("GPT Success.");
        const data = await response.json();
        return data.choices[0].message.content;
    } else {
        console.error(`GPT failed. Status:${response.status}`);
    }
}

async function callGpt(text){
    console.log("Calling GPT API...");
    const gptQuery = `You are a google search assistant. If the following search is a question, give a precise answer in under 3 sentences. If it asks to define something, define it in under 2 sentences. If it's anything else, give a short explanation of the topic (example person, place or thing) in under 3 sentences. Here's the question: '${text}'`;
    console.log(`gptQuery: ${gptQuery}`);
    
    return getGPT(gptQuery);
}

async function requestLongerResponse(originalrequest, gptAnswer){
    console.log("Calling GPT API...");
    const gptQuery = "This is a follow up to a past conversation with prompt: \n'" + `You are a google search assistant. If the following search is a question, give a precise answer in under 3 sentences. If it asks to define something, define it in under 2 sentences. If it's anything else, give a short explanation of the topic (example person, place or thing) in under 3 sentences. Here's the question: '${originalrequest}'` + " \n and you answered: \n" + `'${gptAnswer}` + " \n ' Now give a more detailed response to the same question without repeating anything, simply add on to what you've said before. Hard limit: 7 sentences. ";

    return getGPT(gptQuery);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeOutResult(text, element){
    const words = text.split(" ");//array
        
    for (let word of words){
        element.innerText += " " + word;
        await delay(30);
    }
}

(async() => {
    const searchBox = document.querySelector("textarea");
    console.log("SearchGPT Start");

    if (searchBox) {
        const elem = createHTMLElem("");
        
        const text = searchBox.textContent;
        const answerBox = document.getElementById("AnswerBox");
        
        answerBox.innerText = "Generating..."

        // const gptAnswer = "Hello, I am your AI assistant.";
        const gptAnswer = await callGpt(text); 

        answerBox.innerText = "";

        typeOutResult(gptAnswer, answerBox);

        delay(50);
        makeGenerateButton();

        const generateMoreButton = document.getElementById("button");
        
        generateMoreButton.onclick = async function() {
            generateMoreButton.innerText = "Generating..."
            
            const gptNewAnswer = await requestLongerResponse(text, gptAnswer);

            generateMoreButton.style.display='none'; //Hide button
            
            answerBox.innerText += "\n\n";

            typeOutResult(gptNewAnswer, answerBox);
        };
    }
})();
