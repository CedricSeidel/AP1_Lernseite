// AP1 Lernkarten – Filter & Lernmodi

        function updateFilters() {
            const categories = [...new Set(cards.map(c => c.kategorie))];
            const container = document.getElementById('filterButtons');
            const categorySelect = document.getElementById('categorySelect');
            
            if (container) {
              // "Alle" Button
              let html = `<button class="filter-btn active" data-filter="alle" onclick="toggleFilter('alle')">
                Alle <span class="count">${cards.length}</span>
              </button>`;

              categories.forEach(cat => {
                const count = cards.filter(c => c.kategorie === cat).length;
                html += `<button class="filter-btn" data-filter="${cat}" onclick="toggleFilter('${cat}')">
                  ${cat} <span class="count">${count}</span>
                </button>`;
              });

              container.innerHTML = html;
            }

          if (categorySelect) {
            let options = `<option value="alle">Alle (${cards.length})</option>`;
            categories.forEach(cat => {
              const count = cards.filter(c => c.kategorie === cat).length;
              options += `<option value="${cat}">${cat} (${count})</option>`;
            });
            categorySelect.innerHTML = options;
            syncCategorySelect();
          }
        }

        function toggleFilter(filter) {
            const btns = document.querySelectorAll('.filter-btn');
            
            if (filter === 'alle') {
                activeFilters.clear();
                activeFilters.add('alle');
            } else {
                activeFilters.delete('alle');
                if (activeFilters.has(filter)) {
                    activeFilters.delete(filter);
                } else {
                    activeFilters.add(filter);
                }
                if (activeFilters.size === 0) {
                    activeFilters.add('alle');
                }
            }

            btns.forEach(btn => {
                const f = btn.dataset.filter;
                btn.classList.toggle('active', activeFilters.has(f));
            });

            syncCategorySelect();

            applyFilters();
            currentIndex = 0;
            showCard();
        }

          function setCategoryFilter(filter) {
            activeFilters.clear();
            if (filter === 'alle') {
              activeFilters.add('alle');
            } else {
              activeFilters.add(filter);
            }

            document.querySelectorAll('.filter-btn').forEach(btn => {
              const f = btn.dataset.filter;
              btn.classList.toggle('active', activeFilters.has(f));
            });

            applyFilters();
            currentIndex = 0;
            showCard();
          }

          function syncCategorySelect() {
            const select = document.getElementById('categorySelect');
            if (!select) return;

            let value = 'alle';
            if (activeFilters.size === 1 && !activeFilters.has('alle')) {
              value = [...activeFilters][0];
            }

            const hasOption = Array.from(select.options).some(opt => opt.value === value);
            select.value = hasOption ? value : 'alle';
          }

        function applyFilters() {
            if (activeFilters.has('alle')) {
                filteredCards = [...cards];
            } else {
                filteredCards = cards.filter(c => activeFilters.has(c.kategorie));
            }

            // Mode specific filtering
            if (currentMode === 'weak') {
                filteredCards = filteredCards.filter(c => {
                    const prog = progress.cardProgress[c.id];
                    return prog && prog.mastery < 3;
                });
            }

            // Shuffle for quiz mode
            if (currentMode === 'quiz') {
                filteredCards = shuffleArray([...filteredCards]);
            }
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Mode
        function setMode(mode) {
          currentMode = mode;
          const modeSelect = document.getElementById('modeSelect');
          if (modeSelect && modeSelect.value !== mode) {
            modeSelect.value = mode;
          }
          document.querySelectorAll('.mode-btn, .mode-btn-inline').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
          });
          applyFilters();
          currentIndex = 0;
          showCard();
        }

