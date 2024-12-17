document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');
    const playerPrenom = urlParams.get('prenom');
    const playerAge = urlParams.get('age');

    document.getElementById('player-name').textContent = playerName;
    document.getElementById('player-prenom').textContent = playerPrenom;
    document.getElementById('player-age').textContent = playerAge;
});
