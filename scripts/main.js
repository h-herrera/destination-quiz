/*Code inspired by examples at:
https://www.sitepoint.com/simple-javascript-quiz/
https://jsfiddle.net/macloo/hpm5wzc3/ */

let form = document.querySelector('form');
let submit = document.querySelector("#submit");
let summary = document.querySelectorAll(".summary");
let grade = document.querySelector("#score");
let correct = 0;
let incorrect = 0; 
let wrong = "This is incorrect.";
let right = "This is correct.";
let message = document.querySelectorAll(".message");
let message1 = document.querySelector("#message1");
let message2 = document.querySelector("#message2");
let message3 = document.querySelector("#message3");
let message4 = document.querySelector("#message4");
let message5 = document.querySelector("#message5");
let message6 = document.querySelector("#message6");
let message7 = document.querySelector("#message7");
let message8 = document.querySelector("#message8");
let message9 = document.querySelector("#message9");
let message10 = document.querySelector("#message10");
let messasge11 = document.querySelector("#message11");
let message12 = document.querySelector("#message12");
let a1 = form.elements["area1"];
let a2 = form.elements["area2"];
let a3 = form.elements["area3"]; 
let a4 = form.elements["area4"];
let a5 = form.elements["area5"];
let a6 = form.elements["area6"];
let a7 = form.elements["area7"];
let a8 = form.elements["area8"];
let a9 = form.elements["area9"];
let a10 = form.elements["area10"];
let a11 = form.elements["area11"];
let a12 = form.elements["area12"];
const radio = document.querySelectorAll('.form-check-label')
const answers = {
    q1: "Canada",
    q2: "Guatemala",
    q3: "Denmark",
    q4: "Scotland",
    q5: "India",
    q6: "Laos",
    q7: "Australia",
    q8: "Tanzania",
    q9: "Australia",
    q10: "Peru",
    q11: "Uruguay",
    q12: "South Africa"
};

function hideAll() {
    summary.forEach(function (el) {
        el.style.display = 'none'
    });
    grade.style.display = 'none'
};

function showAll() {
    summary.forEach(function (el) {
        el.style.display = 'block'
    });
    grade.style.display = 'block'
};

function writeResults () {
    document.querySelector("#message1").textContent = message1
    document.querySelector("#message2").textContent = message2
    document.querySelector("#message3").textContent = message3
    document.querySelector("#message4").textContent = message4
    document.querySelector("#message5").textContent = message5
    document.querySelector("#message6").textContent = message6
    document.querySelector("#message7").textContent = message7
    document.querySelector("#message8").textContent = message8
    document.querySelector("#message9").textContent = message9
    document.querySelector("#message10").textContent = message10
    document.querySelector("#message11").textContent = message11
    document.querySelector("#message12").textContent = message12

};

function checkAnswers() {
    if (a1.value === answers.q1) {
        correct++;
        message1 = right;
    }else{
        message1 = wrong;
    }; 
    if (a2.value === answers.q2) {
        correct++;
        message2 = right;
    }else{
        message2 = wrong;
    }; 
    if (a3.value === answers.q3) {
        correct++;
        message3 = right;
    }else{
        message3 = wrong;
    }; 
    if (a4.value === answers.q4) {
        correct++;
        message4 = right;
    }else{
        message4 = wrong;
    }; 
    if (a5.value === answers.q5) {
        correct++;
        message5 = right;
    }else{
        message5 = wrong;
    }; 
    if (a6.value === answers.q6) {
        correct++;
        message6 = right;
    }else{
        message6 = wrong;
    }; 
    if (a7.value === answers.q7) {
        correct++;
        message7 = right;
    }else{
        message7 = wrong;
    }; 
    if (a8.value === answers.q8) {
        correct++;
        message8 = right;
    }else{
        message8 = wrong;
    }; 
    if (a9.value === answers.q9) {
        correct++;
        message9 = right;
    }else{
        message9 = wrong;
    }; 
    if (a10.value === answers.q10) {
        correct++;
        message10 = right;
    }else{
        message10 = wrong;
    }; 
    if (a11.value === answers.q11) {
        correct++;
        message11 = right;
    }else{
        message11 = wrong;
    }; 
    if (a12.value === answers.q12) {
        correct++;
        message12 = right;
    }else{
        message12 = wrong;
    }; 
};

hideAll();

form.onsubmit = (e) => {
    e.preventDefault()

showAll();

checkAnswers();

writeResults();

grade.textContent = `Your Score: ${correct} / 12`;

correct = 0;
incorrect = 0; 

radio.forEach(function(el) {
    el.disabled = true;
});

form.reset();
};