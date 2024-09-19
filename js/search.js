document.getElementById('searchButton').addEventListener('click', searchQuizzes);

function searchQuizzes() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    quizzes.forEach(quiz => {
        if (quiz.title.toLowerCase().includes(query)) {
            const quizDiv = document.createElement('div');
            quizDiv.className = 'quiz';

            quizDiv.innerHTML = `
                <h3>${quiz.title}</h3>
                <button onclick="viewQuiz('${quiz.title}')">View Quiz</button>
            `;

            searchResults.appendChild(quizDiv);
        }
    });
}

function viewQuiz(title) {
    // Display or navigate to the quiz view page
    console.log('View quiz:', title);
}
