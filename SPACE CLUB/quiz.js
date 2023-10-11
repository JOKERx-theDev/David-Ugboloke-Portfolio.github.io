const questions =[
    {
        question: "What is the largest planet in our solar system?",

        answers: [
            {text:"Neptune" , correct:false},
            {text:"Uranus" , correct:false},
            {text:"Earth" , correct:false},
            {text:"Jupitar" , correct:true}
        ]
        ,
        Number: "1"
    }
    ,
    {
        question: "How many moons does Earth have?",

        answers: [
            {text:"2" , correct:false},
            {text:"1" , correct:true},
            {text:"4" , correct:false},
            {text:"6" , correct:false}
        ]
        ,
        Number: "2"
    }
    ,
    {
        question: "What planet is known as the Red Planet?",

        answers: [
            {text:"Mars" , correct:true},
            {text:"Pluto" , correct:false},
            {text:"Mercury" , correct:false},
            {text:"Venus" , correct:false}
        ]
        ,
        Number: "3"
    }
    ,
    {
        question: "What is the name of the Galaxy that contains our Solar System?",

        answers: [
            {text:"Andromeda Galaxy" , correct:false},
            {text:"Sombrero Galaxy" , correct:false},
            {text:"Milky-Way Galaxy" , correct:true},
            {text:"Triangulum Galaxy" , correct:false}
        ]
        ,
        Number: "4"
    },
    {
        question: "What the name of the cloest star to Earth?",

        answers: [
            {text:"Andromeda Galaxy" , correct:false},
            {text:"Sun" , correct:true},
            {text:"Alpha Centauri" , correct:false},
            {text:"Wolf" , correct:false}
        ]
        ,
        Number: "5"
    }
    ,
    {
        question: "Which planet has the most moon in our solar system?",

        answers: [
            {text:"Jupitar" , correct:true},
            {text:"Saturn" , correct:false},
            {text:"Venus" , correct:false},
            {text:"Pluto" , correct:false}
        ]
        ,
        Number: "6"
    },
    {
        question: "What is the name of the first artifical satellite launched into space?",

        answers: [
            {text:"Nigeriasat-1" , correct:false},
            {text:"GOES-16" , correct:false},
            {text:"Explorer I" , correct:false},
            {text:"Sputnik I" , correct:true}
        ]
        ,
        Number: "7"
    },
    {
        question: "What is the name of the region in space where gravity is so strong that nothing can escape?",

        answers: [
            {text:"Helo Space" , correct:false},
            {text:"Teleporter" , correct:false},
            {text:"Black Hole" , correct:true},
            {text:"No Man's Region" , correct:false}
        ]
        ,
        Number: "8"
    },
    {
        question: "What is the name of the spacecraft that successfully landed on Mars and sent back images?",

        answers: [
            {text:"Spirit" , correct:false},
            {text:" Curiosity" , correct:false},
            {text:"Opportunity" , correct:false},
            {text:"Sojourner" , correct:true}
        ]
        ,
        Number: "9"
    },
    {
        question: "What is the name of the spacecraft that carried humans to moon for the first time",

        answers: [
            {text:"Saturn V rocket" , correct:true},
            {text:"Falcon 9" , correct:false},
            {text:"Space X" , correct:false},
            {text:"Juno II" , correct:false}
        ]
        ,
        Number: "10"
    }
]

const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answers-button')
const nextButton = document.getElementById('next_btn')
const pageNo = document.getElementById("pageNo")
const pagination = document.getElementById("pagaination")

let currentQuestionIndex = 0;
let score = 0;
let currentNo = 0;
let Number = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    Number = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    pageNo.innerHTML = `${questionNo} / ${questions.length}`
    questionElement.innerHTML = currentQuestion.
    question;
    

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer)
    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true
    })
    nextButton.style.display ="block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display ="block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})
startQuiz()


  //HAM BURGER MENU//
  const hamburger = document.querySelector('.ham-burg')
  const navMenu = document.querySelector('.nav-menu')
  const body = document.querySelector(".body")

  hamburger.addEventListener ("click" , () =>{
    hamburger.classList.toggle("active-nav");
    navMenu.classList.toggle("is-active");
    body.classList.toggle("onscroll")
});