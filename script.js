let scoreEl = document.querySelector(".scoreEl")
let questionNumber = document.querySelector(".questionNumber")
let finalScore = document.getElementById("finalScore")
let container = document.querySelector(".container")
let containerTwo = document.querySelector(".containerTwo")
const resetBtn = document.getElementById("resetBtn")

score = 0

function addScore() {
    score = (score % 5) + 1;
    scoreEl.textContent = `Score: ${score}/5`
}

// Question #1
const formEl = document.querySelector(".formEl")
const question = document.getElementById("question")
const inputAns = document.getElementById("inputAns")
const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener('click', () => {
    if (inputAns.value == "andres bonifacio") {
        addScore()
    }

    questionNumber.textContent = `Question #2`
    formEl.style.display = "none"  // Hide question
    formElTwo.style.display = "flex" // Show next question
})

// Question #2
const formElTwo = document.querySelector(".formEl-two")
const questionTwo = document.getElementById("question-two")
const inputAnsTwo = document.getElementById("inputAns-two")
const submitBtnTwo = document.getElementById("submitBtn-two")

submitBtnTwo.addEventListener('click', () => {
    if (inputAnsTwo.value == "emilio jacinto") {
        addScore()
    }

    questionNumber.textContent = `Question #3`
    formElTwo.style.display = "none" // Hide question
    formElThree.style.display = "flex" // Show next question   
})

// Question #3
const formElThree = document.querySelector(".formEl-three")
const questionThree = document.getElementById("question-three")
const inputAnsThree = document.getElementById("inputAns-three")
const submitBtnThree = document.getElementById("submitBtn-three")

submitBtnThree.addEventListener('click', () => {
    if (inputAnsThree.value == "lupang hinirang") {       
        addScore()
    }

    questionNumber.textContent = `Question #4`
    formElThree.style.display = "none"  // Hide question
    formElFour.style.display = "flex" // Show next question
})

// Question #4
const formElFour = document.querySelector(".formEl-four")
const questionFour = document.getElementById("question-four")
const inputAnsFour = document.getElementById("inputAns-four")
const submitBtnFour = document.getElementById("submitBtn-four")

submitBtnFour.addEventListener('click', () => {
    if (inputAnsFour.value == "manila") {
        addScore()
    }

    questionNumber.textContent = `Question #5`
    formElFour.style.display = "none" // Hide question
    formElFive.style.display = "flex" // Show next question
})

// Question #5
const formElFive = document.querySelector(".formEl-five")
const questionFive = document.getElementById("question-five")
const inputAnsFive = document.getElementById("inputAns-five")
const submitBtnFive = document.getElementById("submitBtn-five")

submitBtnFive.addEventListener('click', () => {
    if (inputAnsFive.value == "cebu") {
        addScore()
    }

    container.style.display = "none"
    containerTwo.style.display = "flex"
    finalScore.textContent = `Congrats you got ${score} points!`
})



// Restart
resetBtn.addEventListener('click', function() {
    score = 0
    scoreEl.textContent = "Score: 0"
    questionNumber.textContent = `Question #1`
    container.style.display = "flex"
    containerTwo.style.display = "none"
    formEl.style.display = "flex"
    formElTwo.style.display = "none"
    formElThree.style.display = "none"
    formElFour.style.display = "none"
    formElFive.style.display = "none"
    inputAns.value = '';
    inputAnsTwo.value = '';
    inputAnsThree.value = '';
    inputAnsFour.value = '';
    inputAnsFive.value = '';
})
