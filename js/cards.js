// Card data
const cards = [
    {
        id: 1,
        name: "Pikachu",
        type: "pokemon",
        image: "images/cards/pikachu.png",
        rarity: "rare"
    },
    // More card data...
];

document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.getElementById('cardGrid');
    const cardType = document.getElementById('cardType');
    const searchCard = document.getElementById('searchCard');

    // Render cards
    function renderCards(filteredCards) {
        cardGrid.innerHTML = '';
        filteredCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <img src="${card.image}" alt="${card.name}">
                <h3>${card.name}</h3>
            `;
            cardGrid.appendChild(cardElement);
        });
    }

    // Filter cards
    function filterCards() {
        const type = cardType.value;
        const searchTerm = searchCard.value.toLowerCase();

        const filteredCards = cards.filter(card => {
            const matchesType = type === 'all' || card.type === type;
            const matchesSearch = card.name.toLowerCase().includes(searchTerm);
            return matchesType && matchesSearch;
        });

        renderCards(filteredCards);
    }

    // Event listeners
    cardType.addEventListener('change', filterCards);
    searchCard.addEventListener('input', filterCards);

    // Initial render
    renderCards(cards);
});