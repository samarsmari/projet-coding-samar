const quizData = [
    {
        question: "Quelle est la taille d'un int en Java ?",
        a: "8 bits",
        b: "16 bits",
        c: "32 bits",
        d: "64 bits",
        correct: "c"
    },
    {
        question: "Quelle est la méthode pour démarrer un thread en Java ?",
        a: "run()",
        b: "start()",
        c: "init()",
        d: "execute()",
        correct: "b"
    },
    {
        question: " Que retourne la méthode Array.prototype.map() ?",
        a: " Une copie de l'élément modifié",
        b: "Une nouvelle array avec les résultats",
        c: " Un objet contenant les éléments d'origine",
        d: "Un booléen",
        correct: "b"
    },
    {
        question: " Question : Quel attribut est utilisé pour spécifier un lien hypertexte dans une balise <a> ?",
        a: " href",
        b: "src",
        c: " link",
        d: "alt",
        correct: "a"
    },
    {
        question: " Comment appliquer une bordure arrondie à un élément ?",
        a: "border-style: round;",
        b: "border: curve;",
        c: " border-radius: 10px;",
        d: "border-curve: 10px;",
        correct: "c"
    },
  
    
    
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = `
        <div class="quiz-question">${currentQuizData.question}</div>
        <label>
            <input type="radio" name="answer" value="a">
            ${currentQuizData.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b">
            ${currentQuizData.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c">
            ${currentQuizData.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d">
            ${currentQuizData.d}
        </label>
        
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            const percentage = (score / quizData.length) * 100;
            if (percentage > 50) {
                const playerName = prompt("Félicitations ! Entrez votre nom pour le certificat:");
                const playerprenom = prompt("Félicitations ! Entrez votre prenom pour le certificat:");

                const playerage = prompt("Félicitations ! Entrez votre age pour le certificat:");
                const queryString = `?name=${encodeURIComponent(playerName)}&prenom=${encodeURIComponent(playerprenom)}&age=${encodeURIComponent(playerage)}`;
                window.location.href = `certificat.html${queryString}`;  
                } else {
                result.innerHTML = `Désolé, votre score est de ${percentage}%. Vous devez obtenir plus de 50% pour recevoir un certificat.`;
            }
        }
    } else {
        alert("Veuillez sélectionner une réponse.");
    }
});

loadQuiz();



