const QuizQuestions = [
    {
        id: 1,
        question: "What does CSS stand for?",
        options: {
            a: "Cascading Style Sheets",
            b: "Creative Style Sheets",
            c: "Computer Style Sheets",
            d: "Colorful Style Sheets"
        },
        answer: "Cascading Style Sheets"
    },
    {
        id: 2,
        question: "Which HTML attribute is used to define inline styles?",
        options: {
            a: "class",
            b: "style",
            c: "styles",
            d: "id"
        },
        answer: "style"
    },
    {
        id: 3,
        question: "Which symbol is used to declare a JavaScript variable?",
        options: {
            a: "#",
            b: "%",
            c: "var",
            d: "$"
        },
        answer: "var"
    },
    {
        id: 4,
        question: "Which of the following is used for web page interactivity?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "Python"
        },
        answer: "JavaScript"
    },
    {
        id: 5,
        question: "Which property is used to change the background color in CSS?",
        options: {
            a: "color",
            b: "bgcolor",
            c: "background-color",
            d: "background"
        },
        answer: "background-color"
    },
    {
        id: 6,
        question: "Which HTML element is used to specify a footer for a document?",
        options: {
            a: "footer",
            b: "bottom",
            c: "end",
            d: "section"
        },
        answer: "footer"
    },
    {
        id: 7,
        question: "What does the <head> element in HTML contain?",
        options: {
            a: "Main content",
            b: "Metadata",
            c: "Scripts and styles",
            d: "Both b and c"
        },
        answer: "Both b and c"
    },
    {
        id: 8,
        question: "Which JavaScript method is used to write content to the browser console?",
        options: {
            a: "console.log()",
            b: "console.write()",
            c: "console.output()",
            d: "console.print()"
        },
        answer: "console.log()"
    },
    {
        id: 9,
        question: "Which tag is used to insert an image in HTML?",
        options: {
            a: "img",
            b: "image",
            c: "pic",
            d: "src"
        },
        answer: "img"
    },
    {
        id: 10,
        question: "Which CSS property is used to change the text color of an element?",
        options: {
            a: "font-color",
            b: "text-color",
            c: "color",
            d: "text-style"
        },
        answer: "color"
    }
];

var question = document.getElementById("question")
var ques_options = document.getElementById("options")

var indexnumber = 0
var score = 0

function handleQuestions(){
    var optionsObj = QuizQuestions[indexnumber].options
    question.innerHTML = QuizQuestions[indexnumber].question
    ques_options.innerHTML = ""
    for (let key in optionsObj) {
        ques_options.innerHTML += `<li onclick="checkanswer(this)">${optionsObj[key]}</li>`;
    }
}


function NextQuestion(){
    if(indexnumber < QuizQuestions.length - 1){
        indexnumber++
        handleQuestions()   
        updateFooter()
    }else{
        displayScore()
    }
}

function checkanswer(element){

    var all_li_elements = ques_options.children

    var user_answer = element.innerHTML

    var ans = QuizQuestions[indexnumber].answer

    if (user_answer === ans) {
        element.style.backgroundColor = "green";
        score++; 
    } else {
        element.style.backgroundColor = "red";
    }

    for (var i = 0; i < all_li_elements.length; i++) {
        console.log(all_li_elements[i])
        all_li_elements[i].style.pointerEvents = "none";
    }
}
function displayScore() {
    let message = "";

if (score > 8) {
    message = "Well Done!";
} else if (score === 5) {
    message = "Good effort!";
} else {
    message = "Better luck next time!";
}
    document.querySelector(".container").innerHTML = `
        <div class="header">
            <h1>Quiz Completed!</h1>
        </div>
        <div class="body">
            <h2>Your Score: ${score} / ${QuizQuestions.length}</h2>
            <p>${message}</p>
        </div>`

}
function updateFooter() {
    var footerText = document.querySelector(".footer p");
    footerText.textContent = `${indexnumber + 1} / ${QuizQuestions.length}`;
}


handleQuestions();