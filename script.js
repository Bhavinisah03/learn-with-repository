const bookingForm = document.querySelector(".booking-form");
function showClass(className) {

    if (className === "Class 1") {

        document
            .getElementById("class1-resources")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}
function showSubject(subjectName) {

    if (subjectName === "Class 1 Mathematics") {

        document
            .getElementById("class1-maths")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

    if (subjectName === "Class 1 English") {

        document
            .getElementById("class1-english")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}
bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentName = document.getElementById("studentName").value;

    alert(
        "Thank you, " + studentName +
        "! Your demo class enquiry has been received."
    );

    bookingForm.reset();

});
function showNotes() {

    const notes = document.getElementById("numbers-notes");

    notes.style.display = "block";

    notes.scrollIntoView({
        behavior: "smooth"
    });

}
function checkAnswer(question, answer) {

    const result = document.getElementById("answer-result");

    if (question === 1 && answer === "5") {
        result.textContent = "Correct! 🎉";
    }
    else if (question === 2 && answer === "3") {
        result.textContent = "Correct! 🎉";
    }
    else {
        result.textContent = "Try again! 😊";
    }

}
let score = 0;
let answeredQuestions = [];

function checkAnswer(question, answer) {

    const result = document.getElementById("answer-result");

    // Already correctly answered
    if (answeredQuestions.includes(question)) {
        result.textContent = "You already answered this question.";
        return;
    }

    // Question 1
    if (question === 1) {

        if (answer === "5") {
            result.textContent = "Correct! 🎉";
            score++;
            answeredQuestions.push(question);
        } else {
            result.textContent = "Wrong answer. Try again! 😊";
        }

    }

    // Question 2
    if (question === 2) {

        if (answer === "3") {
            result.textContent = "Correct! 🎉";
            score++;
            answeredQuestions.push(question);
        } else {
            result.textContent = "Wrong answer. Try again! 😊";
        }

    }
}

function showScore() {

    const scoreResult = document.getElementById("score-result");

    scoreResult.textContent =
        "🎉 Your Score: " + score + " / 2";
}
function showAdditionNotes() {

    const notes = document.getElementById("addition-notes");

    notes.style.display = "block";

    notes.scrollIntoView({
        behavior: "smooth"
    });

}
function showSubtractionNotes() {

    const notes = document.getElementById("subtraction-notes");

    notes.style.display = "block";

    notes.scrollIntoView({
        behavior: "smooth"
    });

}
function showEnglishNotes() {

    const notes = document.getElementById("english-notes");

    notes.style.display = "block";

    notes.scrollIntoView({
        behavior: "smooth"
    });

}
let additionScore = 0;
let additionAnswered = [];

function checkAddition(question, answer) {

    const result = document.getElementById("addition-result");

    if (additionAnswered.includes(question)) {
        result.textContent = "You already answered this question.";
        return;
    }

    if (question === 1 && answer === "5") {

        result.textContent = "Correct! 🎉";
        additionScore++;
        additionAnswered.push(question);

    } else if (question === 2 && answer === "5") {

        result.textContent = "Correct! 🎉";
        additionScore++;
        additionAnswered.push(question);

    } else {

        result.textContent = "Wrong answer. Try again! 😊";

    }
}


function showAdditionScore() {

    const score = document.getElementById("addition-score");

    score.textContent =
        "🎉 Your Score: " + additionScore + " / 2";

}



let subtractionScore = 0;
let subtractionAnswered = [];

function checkSubtraction(question, answer) {

    const result =
        document.getElementById("subtraction-result");

    if (subtractionAnswered.includes(question)) {
        result.textContent = "You already answered this question.";
        return;
    }

    if (question === 1 && answer === "3") {

        result.textContent = "Correct! 🎉";
        subtractionScore++;
        subtractionAnswered.push(question);

    } else if (question === 2 && answer === "4") {

        result.textContent = "Correct! 🎉";
        subtractionScore++;
        subtractionAnswered.push(question);

    } else {

        result.textContent = "Wrong answer. Try again! 😊";

    }
}


function showSubtractionScore() {

    const score =
        document.getElementById("subtraction-score");

    score.textContent =
        "🎉 Your Score: " + subtractionScore + " / 2";

}

function hideCurrentNotes() {

    const notesSections = document.querySelectorAll(".notes-content");

    notesSections.forEach(function(section) {
        section.style.display = "none";
    });

    const mathsSection = document.getElementById("class1-maths");

    mathsSection.scrollIntoView({
        behavior: "smooth"
    });
}