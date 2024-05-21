document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    if (name) {
        document.getElementById('loginContainer').classList.add('hidden');
        document.getElementById('quizContainer').classList.remove('hidden');
    }
});

const quizForm = document.getElementById('quizForm');
const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0;

function showNextQuestion() {
    questions[currentQuestionIndex].classList.add('hidden');
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        questions[currentQuestionIndex].classList.remove('hidden');
    } else {
        showResult();
    }
}

document.getElementById('nextBtn').addEventListener('click', function() {
    const answer = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
    if (answer) {
        showNextQuestion();
    } else {
        alert('Please select an option before proceeding.');
    }
});


function showResult() {
    let yesCount = 0;
    let noCount = 0;
    for (let i = 1; i <= questions.length; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`).value;
        if (answer === 'yes') {
            yesCount++;
        } else {
            noCount++;
        }
    }
    
    let resultMessage;
    if (yesCount > noCount) {
        resultMessage = `Based on your responses, you may lean towards introversion.`;
    } else if (yesCount < noCount) {
        resultMessage = `Your responses indicate a tendency towards extroversion.`;
    } else {
        resultMessage = `Your answers suggest a balanced personality, possibly an ambivert.`;
    }
    

    const resultText = document.getElementById('resultText');
    resultText.textContent = `You answered "Yes" ${yesCount} times and "No" ${noCount} times.\n\n${resultMessage}`;
    document.getElementById('result').classList.remove('hidden');
}