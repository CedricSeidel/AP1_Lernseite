// AP1 Lernkarten – IT-Glossar

        let glossarFiltered = [...GLOSSAR_DATA];
        let glossarIndex = 0;
        let glossarCategory = 'alle';

        function initGlossar() {
            initGlossarCategories();
            filterGlossar();
        }

        function initGlossarCategories() {
            const categories = ['alle', ...new Set(GLOSSAR_DATA.map(g => g.category))];
            const select = document.getElementById('glossarCategorySelect');
            select.innerHTML = categories.map(cat => 
                `<option value="${cat}" ${cat === glossarCategory ? 'selected' : ''}>${cat === 'alle' ? 'Alle Kategorien' : cat}</option>`
            ).join('');
        }

        function setGlossarCategory(cat) {
            glossarCategory = cat;
            glossarIndex = 0;
            filterGlossar();
        }

        function filterGlossar() {
            glossarFiltered = GLOSSAR_DATA.filter(g => {
                return glossarCategory === 'alle' || g.category === glossarCategory;
            });
            glossarIndex = 0;
            showGlossarTerm();
        }

        function showGlossarTerm() {
            if (glossarFiltered.length === 0) {
                document.getElementById('glossarTerm').textContent = '—';
                document.getElementById('glossarFull').textContent = 'Kein Begriff gefunden';
                document.getElementById('glossarDesc').textContent = 'Versuche eine andere Suche oder Kategorie.';
                document.getElementById('glossarCounter').textContent = '0 / 0';
                return;
            }
            const term = glossarFiltered[glossarIndex];
            document.getElementById('glossarTerm').textContent = term.term;
            document.getElementById('glossarFull').textContent = term.full;
            document.getElementById('glossarDesc').textContent = term.desc;
            document.getElementById('glossarCounter').textContent = `${glossarIndex + 1} / ${glossarFiltered.length}`;
        }

        function nextGlossarTerm() {
            if (glossarFiltered.length === 0) return;
            glossarIndex = (glossarIndex + 1) % glossarFiltered.length;
            showGlossarTerm();
        }

        function prevGlossarTerm() {
            if (glossarFiltered.length === 0) return;
            glossarIndex = (glossarIndex - 1 + glossarFiltered.length) % glossarFiltered.length;
            showGlossarTerm();
        }

        // Initialisiere Glossar beim Laden
        initGlossar();
