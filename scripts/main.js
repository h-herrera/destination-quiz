/*Code inspired by examples at:
https://www.sitepoint.com/simple-javascript-quiz/
https://jsfiddle.net/macloo/hpm5wzc3/ */

let form = document.querySelector('form');
let submit = document.querySelector("#submit");
let summary = document.querySelectorAll(".summary");
let grade = document.querySelector("#score");
let correct = 0;
let incorrect = 0; 
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

function checkAnswers() {
    if (a1.value === answers.q1) {
        correct++;
    }else {
        incorrect++;
    }; 
    if (a2.value === answers.q2) {
        correct++;
    }; 
    if (a3.value === answers.q3) {
        correct++;
    }; 
    if (a4.value === answers.q4) {
        correct++;
    }; 
    if (a5.value === answers.q5) {
        correct++;
    }; 
    if (a6.value === answers.q6) {
        correct++;
    }; 
    if (a7.value === answers.q7) {
        correct++;
    }; 
    if (a8.value === answers.q8) {
        correct++;
    }; 
    if (a9.value === answers.q9) {
        correct++;
    }; 
    if (a10.value === answers.q10) {
        correct++;
    }; 
    if (a11.value === answers.q11) {
        correct++;
    }; 
    if (a12.value === answers.q12) {
        correct++;
    }; 
};

hideAll();

form.onsubmit = (e) => {
    e.preventDefault()

showAll();

checkAnswers();

grade.textContent = `Your Score: ${correct} / 12`;

correct = 0;
incorrect = 0; 

radio.forEach(function(el) {
    el.disabled = true;
});

form.reset();
};