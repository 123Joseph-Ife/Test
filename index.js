const chats = document.querySelector(".chat");
const form = document.querySelector(".message-form");
const input = document.querySelector("#message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let answer;
    switch (input.value.toLowerCase()) {
        case "hi":
            answer = "Fine";
            chats.innerHTML += `
                <div class="message">
                    <div class="question">${input.value.toLowerCase()}</div>
                    <div class="answer">${answer}</div>
                </div>
            `
            break;
        case "what are you":
            answer = "am a chatbot built by a team of two developers just to answer simple questions";
            chats.innerHTML += `
                <div class="message">
                    <div class="question">${input.value.toLowerCase()}</div>
                    <div class="answer">${answer}</div>
                </div>
            `
            break;
    
        default:
            answer = "dude";
            chats.innerHTML += `
                <div class="message">
                    <div class="question">${input.value.toLowerCase()}</div>
                    <div class="answer">${answer}</div>
                </div>
            `
            break;
    }
})