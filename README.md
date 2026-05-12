# AP1 Lernkarten

**Interaktive Lernkarten-App zur Vorbereitung auf die IHK AP1-Prüfung für Fachinformatiker.**

🔗 **[https://cedricseidel.github.io/AP1_Lernseite/](https://cedricseidel.github.io/AP1_Lernseite/)**

Einfach `index.html` im Browser öffnen – kein Server, keine Installation.

---

## Features

- **270 Lernkarten** aus allen prüfungsrelevanten Kategorien
- **Gamification**: XP-System, Levelstufen (Anfänger bis IT-Guru) und Achievements
- **Lernstatistiken**: Tagesfortschritt, Erfolgsquote, Fortschritt je Kategorie
- **Lernmodi**: Normales Lernen, Quiz-Modus (zufällig) und Schwache-Karten-Modus
- **Kategorie-Filter**: Gezielt nach Themenbereich lernen
- **Mastery-System**: 5-Sterne-Bewertung je Karte (Falsch / Schwer / Richtig)
- **IT-Glossar**: Über 90 Fachbegriffe mit Abkürzung, Vollform und Erklärung
- **Streak-Tracking**: Motivations-Streak für tägliches Lernen
- **Offline-fähig**: Läuft direkt im Browser via `file://`, kein Server nötig
- **Fortschritt** wird im `localStorage` des Browsers gespeichert

---

## Lernkarten-Kategorien

| Kategorie | Beschreibung |
|---|---|
| Projektmanagement | Phasen, Methoden, Rollen, Dokumente |
| IT-Sicherheit | Schutzmaßnahmen, DSGVO, ISO 27001, Vertragsrecht |
| Netzwerktechnik | Protokolle, Topologien, OSI-Modell |
| Datenbanken | SQL, Normalformen, ER-Modell |
| Softwareentwicklung | Vorgehensmodelle, Tests, Versionierung |
| BWL-Grundlagen | Buchführung, Vertragsarten, Kaufvertrag |
| Cloud/Virtualisierung | IaaS/PaaS/SaaS, Green IT, Nachhaltigkeit |
| Hardware | Komponenten, Schnittstellen, Speicher |
| Qualitätsmanagement | SLA, PDCA, Abnahme, Organisationsstrukturen |
| Allgemein | Vollmachten, Organisationsformen, Weiterbildung |

---

## Schnellstart

1. Repository klonen oder als ZIP herunterladen:
   ```bash
   git clone https://github.com/<dein-name>/AP1_Lernseite.git
   ```
2. Datei `index.html` direkt im Browser öffnen (Doppelklick genügt).
3. Lernen – kein Server, keine Abhängigkeiten.

---

## Projektstruktur

```
AP1_Lernseite/
├── index.html                      # Hauptseite (schlankes HTML-Gerüst)
├── css/
│   └── styles.css                  # Gesamtes Styling der App
├── js/
│   ├── data/                       # Kartendaten, aufgeteilt nach Kategorie
│   │   ├── it-sicherheit.js        # 65 Karten
│   │   ├── netzwerktechnik.js      # 63 Karten
│   │   ├── projektmanagement.js    # 32 Karten
│   │   ├── allgemein.js            # 29 Karten
│   │   ├── bwl-grundlagen.js       # 27 Karten
│   │   ├── hardware.js             # 21 Karten
│   │   ├── cloud-virtualisierung.js# 15 Karten
│   │   ├── datenbanken.js          #  9 Karten
│   │   ├── qualitaetsmanagement.js #  8 Karten
│   │   ├── softwareentwicklung.js  #  1 Karte
│   │   ├── glossar.js              # 100 IT-Fachbegriffe
│   │   └── index.js                # Fasst alle Kategorien zu EMBEDDED_CARDS zusammen
│   └── app/                        # Anwendungslogik, aufgeteilt nach Feature
│       ├── state.js                # Zustandsvariablen, Level-System, Achievement-Definitionen
│       ├── filters.js              # Kategorie-Filter, Lernmodus-Logik
│       ├── progress.js             # Fortschritt, Statistiken, Streak, XP
│       ├── flashcard.js            # Kartenanzeige, Bewertung, Navigation
│       ├── init.js                 # App-Initialisierung & Start
│       └── glossar.js             # Glossar-Funktionen
├── assets/
│   ├── logo.svg                    # App-Logo (Favicon)
│   └── logo-180.png                # Apple Touch Icon
└── README.md
```

---

## Technik

- **Reines Vanilla JS / HTML / CSS** – kein Framework, kein Build-Tool
- **localStorage** für persistente Speicherung von Fortschritt und XP
- **Google Fonts** (Inter + JetBrains Mono) via CDN
- **Offline-First**: Alle Kartendaten sind als JS-Konstanten eingebettet, damit die App auch lokal über das `file://`-Protokoll funktioniert

---

## Mitwirken

Pull Requests und Issues sind willkommen! Neue Karten können direkt in der passenden Kategorie-Datei unter `js/data/` im jeweiligen Array ergänzt werden (z. B. `js/data/netzwerktechnik.js` für Netzwerk-Themen).

---

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).
