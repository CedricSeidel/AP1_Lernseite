// AP1 Lernkarten – Initialisierung

        function loadCards() {
            cards = EMBEDDED_CARDS;
            initializeApp();
        }

        // Initialize
        function initializeApp() {
            loadProgress();
            checkStreak();
            updateFilters();
            applyFilters();
            updateStats();
            updateAchievements();
            showCard();
        }


        // Starte die App
        loadCards();
