// AP1 Lernkarten – Zustand & Konfiguration

// AP1 Lernkarten – Anwendungslogik

        // State
        let cards = [];
        let filteredCards = [];
        let currentIndex = 0;
        let currentMode = 'learn';
        let answerShown = false;
        let activeFilters = new Set(['alle']);

        // Progress State (wird aus localStorage geladen)
        let progress = {
            xp: 0,
            level: 1,
            streak: 0,
            lastStudyDate: null,
            todayCount: 0,
            correctCount: 0,
            wrongCount: 0,
            cardProgress: {}, // cardId -> {mastery: 0-5, lastSeen: date, correct: 0, wrong: 0}
            achievements: []
        };

        // Level Thresholds
        const levels = [
            { level: 1, xp: 0, title: 'Anfänger' },
            { level: 2, xp: 100, title: 'Lehrling' },
            { level: 3, xp: 250, title: 'Geselle' },
            { level: 4, xp: 500, title: 'Fortgeschritten' },
            { level: 5, xp: 800, title: 'Experte' },
            { level: 6, xp: 1200, title: 'Meister' },
            { level: 7, xp: 1700, title: 'Großmeister' },
            { level: 8, xp: 2300, title: 'Champion' },
            { level: 9, xp: 3000, title: 'Legende' },
            { level: 10, xp: 4000, title: 'IT-Guru' }
        ];

        // Achievements
        const achievementDefs = [
            { id: 'first_card', icon: '01', name: 'Erste Schritte', desc: 'Erste Karte beantwortet', condition: p => p.correctCount + p.wrongCount >= 1 },
            { id: 'ten_correct', icon: '10', name: '10er Serie', desc: '10 richtige Antworten', condition: p => p.correctCount >= 10 },
            { id: 'fifty_correct', icon: '50', name: 'Halbzeit', desc: '50 richtige Antworten', condition: p => p.correctCount >= 50 },
            { id: 'hundred_correct', icon: '++', name: 'Centurion', desc: '100 richtige Antworten', condition: p => p.correctCount >= 100 },
            { id: 'streak_3', icon: '3d', name: 'Auf Feuer', desc: '3 Tage Streak', condition: p => p.streak >= 3 },
            { id: 'streak_7', icon: '7d', name: 'Wochenkämpfer', desc: '7 Tage Streak', condition: p => p.streak >= 7 },
            { id: 'level_5', icon: 'L5', name: 'Experte', desc: 'Level 5 erreicht', condition: p => p.level >= 5 },
            { id: 'level_10', icon: 'LX', name: 'IT-Guru', desc: 'Level 10 erreicht', condition: p => p.level >= 10 },
            { id: 'mastered_10', icon: 'M+', name: 'Wissender', desc: '10 Karten gemeistert', condition: p => Object.values(p.cardProgress).filter(c => c.mastery >= 5).length >= 10 },
            { id: 'mastered_50', icon: 'MX', name: 'Meisterlich', desc: '50 Karten gemeistert', condition: p => Object.values(p.cardProgress).filter(c => c.mastery >= 5).length >= 50 }
        ];

        // Embedded card data (for standalone offline use)
