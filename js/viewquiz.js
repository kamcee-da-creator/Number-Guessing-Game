document.addEventListener('DOMContentLoaded', displayQuizzes);

function displayQuizzes() {
    const quizzesContainer = document.getElementById('quizzesContainer');
    let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

    quizzes.forEach((quiz, index) => {
        const quizDiv = document.createElement('div');
        quizDiv.className = 'quiz';
        
        quizDiv.innerHTML = `
            <h3>${quiz.title}</h3>
            <button onclick="startQuiz(${index})">Start Quiz</button>
        `;
        
        quizzesContainer.appendChild(quizDiv);
    });
}

function startQuiz(index) {
    // Load the quiz and start it, you can navigate to a quiz-taking page
    console.log('Start quiz:', index);
}
