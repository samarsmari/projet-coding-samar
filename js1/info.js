document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('playerFirstName', firstName);
    localStorage.setItem('playerLastName', lastName);
    localStorage.setItem('playerEmail', email);

    document.getElementById('user-info').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    loadQuiz();
});

function loadQuiz() {
}

function redirectToCertificate() {
    const firstName = localStorage.getItem('playerFirstName');
    const lastName = localStorage.getItem('playerLastName');
    const fullName = `${firstName} ${lastName}`;
    window.location.href = `certificat.html?name=${encodeURIComponent(fullName)}`;
}
