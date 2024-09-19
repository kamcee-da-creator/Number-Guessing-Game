// document.getElementById('addQuestion').addEventListener('click', addQuestion);
// document.getElementById('quizForm').addEventListener('submit', saveQuiz);

// function addQuestion() {
//     const questionsContainer = document.getElementById('questionsContainer');
//     const questionDiv = document.createElement('div');
//     questionDiv.className = 'question';
    
//     questionDiv.innerHTML = `
//         <input type="text" placeholder="Question text" class="questionText" required>
//         <input type="text" placeholder="Option 1" class="option" required>
//         <input type="text" placeholder="Option 2" class="option" required>
//         <input type="text" placeholder="Option 3" class="option" required>
//         <input type="text" placeholder="Option 3" class="option" required>
//         <input type="text" placeholder="Correct Answer" class="correctAnswer" required>
//     `;
    
//     questionsContainer.appendChild(questionDiv);
// }

// function saveQuiz(event) {
//     event.preventDefault();
    
//     const quizTitle = document.getElementById('quizTitle').value;
//     const questionsDivs = document.querySelectorAll('.question');
//     let questions = [];

//     questionsDivs.forEach(div => {
//         const questionText = div.querySelector('.questionText').value;
//         const options = Array.from(div.querySelectorAll('.option')).map(input => input.value);
//         const correctAnswer = div.querySelector('.correctAnswer').value;

//         questions.push({ questionText, options, correctAnswer });
//     });

//     const quiz = { title: quizTitle, questions };
//     saveQuizToLocalStorage(quiz);
// }

// function saveQuizToLocalStorage(quiz) {
//     let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
//     quizzes.push(quiz);
//     localStorage.setItem('quizzes', JSON.stringify(quizzes));
//     alert('Quiz saved successfully!');
// }



// view the quiz
document.getElementById('addQuestion').addEventListener('click', addQuestion);
document.getElementById('quizForm').addEventListener('submit', saveQuiz);

function addQuestion() {
    const questionsContainer = document.getElementById('questionsContainer');
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    
    questionDiv.innerHTML = `
           <h3>Questions</h3>
                <!-- Default Question Template -->
                <div class="question">
                    <input type="text" placeholder="Question text" class="questionText" required>
                    <div class="options-container">
                        <input type="text" placeholder="Option 1" class="option" required>
                        <input type="text" placeholder="Option 2" class="option" required>
                        <input type="text" placeholder="Option 3" class="option" required>
                        <input type="text" placeholder="Option 4" class="option" required>
                    </div>
                    <input type="text" placeholder="Correct Answer" class="correctAnswer" required>
                </div>
    `;
    
    questionsContainer.appendChild(questionDiv);
}

function saveQuiz(event) {
    event.preventDefault();
    
    const quizTitle = document.getElementById('quizTitle').value;
    const questionsDivs = document.querySelectorAll('.question');
    let questions = [];

    questionsDivs.forEach(div => {
        const questionText = div.querySelector('.questionText').value;
        const options = Array.from(div.querySelectorAll('.option')).map(input => input.value);
        const correctAnswer = div.querySelector('.correctAnswer').value;

        questions.push({ questionText, options, correctAnswer });
    });

    const quiz = { title: quizTitle, questions };
    saveQuizToLocalStorage(quiz);
}

function saveQuizToLocalStorage(quiz) {
    let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    quizzes.push(quiz);
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    alert('Quiz saved successfully!');
}
