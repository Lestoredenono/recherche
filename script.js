document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultsList = document.getElementById('resultsList');
    // Récupère TOUS les éléments <li> directement dans la liste
    const listItems = resultsList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();
        let resultsFound = 0; // Compteur pour savoir si des résultats ont été trouvés

        for (let i = 0; i < listItems.length; i++) {
            const item = listItems[i];
            // Le texte à comparer est le texte de l'ancre <a> à l'intérieur du <li>
            const itemText = item.querySelector('a').textContent.toLowerCase();

            if (itemText.includes(searchTerm)) {
                item.classList.remove('hidden'); // Montre l'élément
                resultsFound++;
            } else {
                item.classList.add('hidden'); // Masque l'élément
            }
        }

        // Gère l'affichage/masquage de la liste entière
        if (searchTerm.length > 0 && resultsFound > 0) {
            resultsList.classList.remove('initial-hidden'); // Montre la liste si recherche et résultats
        } else {
            resultsList.classList.add('initial-hidden'); // Masque la liste si pas de recherche ou pas de résultats
        }
    });
});