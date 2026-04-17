// 🔹 Question Bank (10)
const allQuestions = [
  {
    question: "What is HTML?",
    options: ["Programming Language", "Markup Language", "Database", "Operating System"],
    answer: 1
  },
  {
    question: "Which is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 1
  },
  {
    question: "Which language is used for logic in web development?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: 2
  },
  {
    question: "Which is not a data type in JavaScript?",
    options: ["String", "Number", "Boolean", "Character"],
    answer: 3
  },
  {
    question: "Which keyword is used to declare a variable?",
    options: ["int", "var", "define", "string"],
    answer: 1
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Color Style Sheet"],
    answer: 2
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "##", "<!-- -->", "**"],
    answer: 0
  },
  {
    question: "Which company developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
    answer: 1
  },
  {
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },
  {
    question: "Which is a JavaScript framework?",
    options: ["React", "Django", "Flask", "Spring"],
    answer: 0
  },
  {
    question: "Which tag is used for headings in HTML?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    answer: 1
  },
  {
    question: "Which method is used to print in console?",
    options: ["print()", "log()", "console.log()", "write()"],
    answer: 2
  },
  {
    question: "Which is used to store multiple values?",
    options: ["Variable", "Array", "Function", "Loop"],
    answer: 1
  },
  {
    question: "Which operator is used for comparison?",
    options: ["=", "==", "+", "%"],
    answer: 1
  },
  {
    question: "Which loop is used in JavaScript?",
    options: ["for", "while", "do-while", "All of the above"],
    answer: 3
  }
];

// 🔹 Shuffle & pick 5
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

let quiz = shuffleArray(allQuestions).slice(0, 5);

let currentIndex = 0;
let score = 0;


// 🔹 Load Question
function loadQuestion() {
  const q = quiz[currentIndex];
  document.getElementById("question").innerText = q.question;

  const buttons = document.querySelectorAll("#options button");

  buttons.forEach((btn, i) => {
    btn.innerText = q.options[i];
    btn.disabled = false;
    btn.style.background = "#ff7eb3";
  });
}


// 🔹 Check Answer
function checkAnswer(selected) {
  const correct = quiz[currentIndex].answer;
  const buttons = document.querySelectorAll("#options button");

  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    score++;
    buttons[selected].style.background = "green";
  } else {
    buttons[selected].style.background = "red";
    buttons[correct].style.background = "green";
  }
}


// 🔹 Next Question
function nextQuestion() {
  currentIndex++;

  if (currentIndex < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".container").innerHTML =
      `<h2>Your Score: ${score} / ${quiz.length}</h2>
       <button onclick="location.reload()">Restart</button>`;
  }
}


// 🔹 Start
loadQuestion();