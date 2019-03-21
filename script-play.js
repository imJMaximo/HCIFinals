// QUESTIONS

const questions = [
  {
    "question": "What is the smallest planet in the Solar System?",
    "answer1": "Neptune",
    "answer1Total": "0",
    "answer2": "Mercury",
    "answer2Total": "1",
    "answer3": "Venus",
    "answer3Total": "0"
  },
  {
    "question": "The sixth planet from the Sun features an extensive RING system, what is the name of this planet?",
    "answer1": "Earth",
    "answer1Total": "0",
    "answer2": "Mars",
    "answer2Total": "0",
    "answer3": "Saturn",
    "answer3Total": "1"
  },
  {
    "question":
      "What planet is closest in size to Earth?",
    "answer1": "Venus",
    "answer1Total": "1",
    "answer2": "Jupiter",
    "answer2Total": "0",
    "answer3": "Uranus",
    "answer3Total": "0"
  },
  {
    "question": "What planet is nicknamed the ‘Red Planet’?",
    "answer1": "Neptune.",
    "answer1Total": "0",
    "answer2": "Sun",
    "answer2Total": "0",
    "answer3": "Mars",
    "answer3Total": "1"
  },
  {
    "question": "How many planets are there in the Solar System?",
    "answer1": "6",
    "answer1Total": "0",
    "answer2": "9",
    "answer2Total": "0",
    "answer3": "8",
    "answer3Total": "1"
  },
  {
    "question":
      "Which of these planets is not a major planet in the solar system?",
    "answer1":
      "Uranus",
    "answer1Total": "0",
    "answer2": "Pluto",
    "answer2Total": "1",
    "answer3": "Saturn",
    "answer3Total": "0"
  },
  {
    "question": "What is the rotational period of Earth?",
    "answer1": "24 hours",
    "answer1Total": "1",
    "answer2": "1 year",
    "answer2Total": "0",
    "answer3": "12 hours",
    "answer3Total": "0"
  }
  /*{
    "question": "Where is the main asteroid belt in the Solar System?",
    "answer1": "Between Earth and Mars",
    "answer1Total": "0",
    "answer2": "Between Neptune and Saturn",
    "answer2Total": "0",
    "answer3": "Between Mars and Jupiter",
    "answer3Total": "1"
  }
  {
    "question": "How many moons does Mars have?",
    "answer1": "1",
    "answer1Total": "0",
    "answer2": "2",
    "answer2Total": "1",
    "answer3": "4",
    "answer3Total": "0"
  }
  {
    "question": "Which planet has the most moons?",
    "answer1": "Uranus",
    "answer1Total": "0",
    "answer2": "Saturn",
    "answer2Total": "0",
    "answer3": "Jupiter",
    "answer3Total": "1"
  }*/
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p>Your score states that:</p>
            <p>8 - 10: You're a genius!</p>
            <p>6 - 7: You pass!</p>
            <p>3 - 5: Study harder! </p>
            <p>0 - 2: Learn again and try harder!</p>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);