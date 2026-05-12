// AP1 Lernkarten – Fortschritt, Statistiken & Achievements

        function loadProgress() {
            const saved = localStorage.getItem('ap1_lernkarten_progress');
            if (saved) {
                progress = JSON.parse(saved);
            }
        }

        function saveProgress() {
            localStorage.setItem('ap1_lernkarten_progress', JSON.stringify(progress));
        }

        // Check Streak
        function checkStreak() {
            const today = new Date().toDateString();
            const lastDate = progress.lastStudyDate;

            if (lastDate) {
                const last = new Date(lastDate);
                const diffDays = Math.floor((new Date(today) - last) / (1000 * 60 * 60 * 24));
                
                if (diffDays === 0) {
                    // Same day - keep streak
                } else if (diffDays === 1) {
                    // Next day - increment streak
                    progress.streak++;
                    showToast(`${progress.streak} Tage Streak!`);
                } else {
                    // Streak broken
                    if (progress.streak > 0) {
                        showToast('Streak verloren! Starte neu.');
                    }
                    progress.streak = 1;
                }
            } else {
                progress.streak = 1;
            }

            // Reset daily count if new day
            if (lastDate !== today) {
                progress.todayCount = 0;
            }

            progress.lastStudyDate = today;
            saveProgress();
        }


        function updateLevel() {
            for (let i = levels.length - 1; i >= 0; i--) {
                if (progress.xp >= levels[i].xp) {
                    progress.level = levels[i].level;
                    break;
                }
            }
        }

        // Update Stats Display
        function updateStats() {
            const masteredCount = Object.values(progress.cardProgress).filter(c => c.mastery >= 5).length;
            const total = progress.correctCount + progress.wrongCount;
            const rate = total > 0 ? Math.round((progress.correctCount / total) * 100) : 0;

            document.getElementById('level').textContent = progress.level;
            document.getElementById('currentLevel').textContent = progress.level;
            document.getElementById('totalXP').textContent = progress.xp;
            document.getElementById('streak').textContent = progress.streak;
            document.getElementById('mastered').textContent = masteredCount;

            document.getElementById('todayCount').textContent = progress.todayCount;
            document.getElementById('correctCount').textContent = progress.correctCount;
            document.getElementById('wrongCount').textContent = progress.wrongCount;
            document.getElementById('successRate').textContent = rate + '%';

            // Level progress bar
            const currentLevelInfo = levels.find(l => l.level === progress.level);
            const nextLevelInfo = levels.find(l => l.level === progress.level + 1);
            
            document.getElementById('levelTitle').textContent = currentLevelInfo.title;
            
            if (nextLevelInfo) {
                const currentXP = progress.xp - currentLevelInfo.xp;
                const neededXP = nextLevelInfo.xp - currentLevelInfo.xp;
                const percent = Math.round((currentXP / neededXP) * 100);
                
                document.getElementById('currentXP').textContent = progress.xp;
                document.getElementById('nextLevelXP').textContent = nextLevelInfo.xp;
                document.getElementById('levelProgress').style.width = percent + '%';
            } else {
                document.getElementById('currentXP').textContent = progress.xp;
                document.getElementById('nextLevelXP').textContent = 'MAX';
                document.getElementById('levelProgress').style.width = '100%';
            }

            // Category progress
            updateCategoryProgress();
        }

        function updateCategoryProgress() {
            const categories = [...new Set(cards.map(c => c.kategorie))];
            const container = document.getElementById('categoryProgress');
            
            let html = '<div class="category-progress-title">Fortschritt nach Kategorie</div>';
            
            categories.forEach(cat => {
                const catCards = cards.filter(c => c.kategorie === cat);
                const masteredCount = catCards.filter(c => {
                    const prog = progress.cardProgress[c.id];
                    return prog && prog.mastery >= 5;
                }).length;
                const percent = Math.round((masteredCount / catCards.length) * 100);
                
                html += `
                    <div class="category-item">
                        <div class="category-item-header">
                            <div class="category-name">${cat}</div>
                            <div class="category-percent">${percent}%</div>
                        </div>
                        <div class="category-bar">
                            <div class="category-bar-fill" style="width: ${percent}%"></div>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;
        }

        // Achievements
        function checkAchievements() {
            achievementDefs.forEach(ach => {
                if (!progress.achievements.includes(ach.id) && ach.condition(progress)) {
                    progress.achievements.push(ach.id);
                    showToast(`Erfolg freigeschaltet: ${ach.name}!`, 'success');
                    saveProgress();
                }
            });
            updateAchievements();
        }

        function updateAchievements() {
            const container = document.getElementById('achievements');
            let html = '';
            
            achievementDefs.forEach(ach => {
                const unlocked = progress.achievements.includes(ach.id);
                html += `
                    <div class="achievement ${unlocked ? '' : 'locked'}" title="${ach.desc}">
                        <div class="achievement-icon">${ach.icon}</div>
                        <div class="achievement-info">
                            <div class="achievement-name">${ach.name}</div>
                            <div class="achievement-desc">${ach.desc}</div>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;
        }

        // Toast
        function showToast(message, type = '') {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.className = 'toast show ' + type;
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Reset Progress
        function resetProgress() {
            if (confirm('Moechtest du wirklich deinen gesamten Fortschritt zurücksetzen?')) {
                localStorage.removeItem('ap1_lernkarten_progress');
                progress = {
                    xp: 0,
                    level: 1,
                    streak: 0,
                    lastStudyDate: null,
                    todayCount: 0,
                    correctCount: 0,
                    wrongCount: 0,
                    cardProgress: {},
                    achievements: []
                };
                updateStats();
                updateAchievements();
                showCard();
                showToast('Fortschritt zurückgesetzt');
            }
        }
