// Portfolio Year Filter
const yearBtns = document.querySelectorAll('.year-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

yearBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        yearBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        const selectedYear = btn.dataset.year;

        portfolioCards.forEach(card => {
            if (card.dataset.year === selectedYear) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Initialize - show 2025 projects by default
document.addEventListener('DOMContentLoaded', () => {
    portfolioCards.forEach(card => {
        if (card.dataset.year !== '2025') {
            card.classList.add('hidden');
        }
    });
});
