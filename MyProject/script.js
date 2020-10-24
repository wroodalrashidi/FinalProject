// Navbar , sroll smoothly

 document.addEventListener("DOMContentLoaded", () => {

    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
      

listOfLinks.forEach(function (link) {

link.addEventListener('click',  () => {

    listOfLinks.forEach( (link) => {
            if (link.classList.contains('highlighted')) {
              link.classList.remove('highlighted');
            }
          });

        link.classList.add('highlighted');
 
        let ref = link.href.split('#sectionLink');
        ref = "#section" + ref[1];
          
        if (isIE11) {
        window.scrollTo(0, document.querySelector(ref).offsetTop);
        } else {
        window.scroll({
        behavior: 'smooth',
        left: 0,

            top: document.querySelector(ref).offsetTop
            });
          }
        })
      })
    })

//    search bar
$("#searchInput").on('keyup', function() {
    var searchValue = $(this).val();
    searchAndFilter(searchValue)
  });
  
  function searchAndFilter(searchTerm) {
    if (searchTerm == '') {
      $("#categories li").hide()
    } else {
      $("#categories li").each(function() {
        var currentText = $(this).text();
        currentText = currentText.toUpperCase();
        searchTerm = searchTerm.toUpperCase();
        if (currentText.indexOf(searchTerm) >= 0) {
          $(this).show();
        }
      });
    }
  }
  
  $(document).ready(function() {
    $("#categories li").hide();
  });


  // Add to array
  var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("suggestion").value;
 alert("Your suggestion has been added");
 x++;
 document.getElementById("suggestion").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Suggestion " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

// Quiz

const questions = [
  {
    "question": "Age range?",
    "answer1": "under 18",
    "answer1Total": "1",
    "answer2": "18 - 30",
    "answer2Total": "2",
    "answer3": "over 30",
    "answer3Total": "3"
  },
  {
    "question": "I am very creative.",
    "answer1": "Agree",
    "answer1Total": "1",
    "answer2": "Neutral",
    "answer2Total": "2",
    "answer3": "Disagree",
    "answer3Total": "3"
  },
  {
    "question":
      "Which is more important?",
    "answer1": "Love",
    "answer1Total": "1",
    "answer2": "Money",
    "answer2Total": "3",
    "answer3": "Bothx",
    "answer3Total": "2"
  },
  {
    "question": "Best Sentence to describe you?",
    "answer1": "I work best with my hands.",
    "answer1Total": "3",
    "answer2": "I'm a patient person.",
    "answer2Total": "2",
    "answer3":
      "I love to learn and discover new things.",
    "answer3Total": "1"
  },
  {
    "question": "Do you follow instructions well?",
    "answer1": "Yes",
    "answer1Total": "1",
    "answer2": "Sometimes",
    "answer2Total": "2",
    "answer3": "Not really.",
    "answer3Total": "3"
  },
  {
    "question":
      "Do you get annoyed when things don't go your way?",
    "answer1":
      "YES, I hate it.",
    "answer1Total": "3",
    "answer2": "Depends on the situation.",
    "answer2Total": "2",
    "answer3": "No not really.",
    "answer3Total": "1"
  },
  {
    "question": "Are you an introvert or extrovert?",
    "answer1": "Introvert",
    "answer1Total": "1",
    "answer2": "Extrovert",
    "answer2Total": "2",
    "answer3": "A bit of both",
    "answer3Total": "3"
  }
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
            <p>Possible - What skill suits you the best, see below based on your results:</p>
            <p>15 - 21- Tutor</p>
            <p>10 - 15 - Programmer</p>
            <p>5 - 10 - Designer </p>
            <p>5 - Handy man</p>
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