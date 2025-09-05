const question = document.querySelector(".questions")
const answers = document.querySelector(".answers")
const qtd = document.querySelector(".qtd")
const textFinish = document.querySelector(".finish span")
const content = document.querySelector(".content")
const contentFinish = document.querySelector(".finish")
const btnRestart = document.querySelector(".finish button")

import questions from "../js/questions"

let currentyQuestion = 0;
let questionsCorrect = 0;

btnRestart.onclick = () =>{
    content.style.display = "flex";
    contentFinish.style.display = "none"

    currentyQuestion = 0;
    questionsCorrect = 0;
    loadQuestion()
}

function finish(){
    textFinish.innerHTML = `Você acertou ${questionsCorrect}/${questions.length}`
    content.style.display = "none"
    contentFinish = "flex"
}

function nextQuestion(e){
    if(e.target.getAttribute("data-correct") == "true"){
        questionsCorrect++
    }

    if(currentyQuestion < questions.length -1){
        currentyQuestion++;
        loadQuestion()
    }else{
        finish()
    }
}

function loadQuestion(){
    qtd.innerHTML = `${currentyQuestion + 1}/${questions.length}`;
    const item = questions[currentyQuestion];
    answers.innerHTML = ""
    question.innerHTML = item.questions;

    item.answers.forEach((answer) =>{
        const div = document.createElement("div")

        div.innerText = `
            <button class "answers" data-correct="${answer.correct}">
            ${answer.option}
            </button>;`

            answer.appendChild(div)
    });

    document.querySelectorAll(".answers").forEach((item) =>{
        item.addEventListener("click", nextQuestion);
    })

}

loadQuestion()
