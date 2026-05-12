// AP1 Lernkarten – Kartenanzeige & Bewertung

        function showCard() {
            if (filteredCards.length === 0) {
                showEmptyState();
                return;
            }

            const card = filteredCards[currentIndex];
            const cardProg = progress.cardProgress[card.id] || { mastery: 0 };

            document.getElementById('cardCategory').textContent = card.kategorie;
            document.getElementById('cardNumber').textContent = `${currentIndex + 1} / ${filteredCards.length}`;
            document.getElementById('cardQuestion').textContent = card.titel;

            // Mastery dots
            const masteryDots = document.querySelectorAll('.mastery-dot');
            masteryDots.forEach((dot, i) => {
                dot.classList.toggle('filled', i < cardProg.mastery);
            });

            // Answer
            const answerList = document.getElementById('answerList');
            answerList.innerHTML = card.hauptpunkte.map(p => `<li>${p}</li>`).join('');
            document.getElementById('notesText').textContent = card.sprechernotizen;

            // Reset visibility
            answerShown = false;
            document.getElementById('cardAnswer').classList.remove('visible');
            document.getElementById('showControls').style.display = 'flex';
            document.getElementById('showControls').classList.remove('has-skip');
            document.getElementById('ratingControls').classList.remove('visible');
            document.getElementById('skipButton').classList.add('hidden');
            document.getElementById('answerButton').classList.remove('hidden');
        }

        function showEmptyState() {
            document.getElementById('cardQuestion').textContent = 
                currentMode === 'weak' 
                    ? 'Keine schwachen Karten gefunden. Super, du hast alles gemeistert!'
                    : 'Keine Karten fuer diese Filter gefunden.';
            document.getElementById('cardAnswer').classList.remove('visible');
        }

        function showAnswer() {
            answerShown = true;
            document.getElementById('cardAnswer').classList.add('visible');
          document.getElementById('ratingControls').classList.add('visible');
          document.getElementById('skipButton').classList.remove('hidden');
          document.getElementById('answerButton').classList.add('hidden');
          document.getElementById('showControls').classList.add('has-skip');
        }

        function skipCard() {
            nextCard();
        }

        function rateCard(rating) {
            const card = filteredCards[currentIndex];
            
            // Initialize card progress if needed
            if (!progress.cardProgress[card.id]) {
                progress.cardProgress[card.id] = { mastery: 0, correct: 0, wrong: 0, lastSeen: null };
            }

            const cardProg = progress.cardProgress[card.id];
            cardProg.lastSeen = new Date().toISOString();

            // Update mastery and XP based on rating
            let xpGain = 0;
            if (rating === 0) {
                // Wrong
                cardProg.mastery = Math.max(0, cardProg.mastery - 1);
                cardProg.wrong++;
                progress.wrongCount++;
                xpGain = 1; // Still get some XP for trying
            } else if (rating === 1) {
                // Hard but correct
                cardProg.mastery = Math.min(5, cardProg.mastery + 0.5);
                cardProg.correct++;
                progress.correctCount++;
                xpGain = 5;
            } else {
                // Correct
                cardProg.mastery = Math.min(5, cardProg.mastery + 1);
                cardProg.correct++;
                progress.correctCount++;
                xpGain = 15;

                // Bonus XP for mastering
                if (cardProg.mastery >= 5) {
                    xpGain += 25;
                    showToast('Karte gemeistert! +25 Bonus XP');
                }
            }

            // Add XP and check level up
            const oldLevel = progress.level;
            progress.xp += xpGain;
            updateLevel();
            
            if (progress.level > oldLevel) {
                const levelInfo = levels.find(l => l.level === progress.level);
                showToast(`Level Up! Du bist jetzt ${levelInfo.title}!`, 'level-up');
            }

            progress.todayCount++;
            saveProgress();
            updateStats();
            checkAchievements();
            nextCard();
        }

        function nextCard() {
            currentIndex++;
            if (currentIndex >= filteredCards.length) {
                currentIndex = 0;
                if (currentMode === 'quiz') {
                    filteredCards = shuffleArray([...filteredCards]);
                }
            }
            showCard();
        }

