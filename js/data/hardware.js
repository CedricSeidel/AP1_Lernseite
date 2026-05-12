// AP1 Lernkarten – Kategorie: Hardware (21 Karten)
const CARDS_HARDWARE = [
  {
    "id": 57,
    "titel": "Erläutern Sie den Begriff „Logische Prozessoren“.",
    "hauptpunkte": [
      "Virtuelle Kerne: Werden durch Techniken wie Hyper-Threading (HTT) oder",
      "Effizienz: Steigerung der CPU-Auslastung und Leistungsfähigkeit.",
      "Anforderung: Die Software/Anwendungen müssen Multithreading unterstützen.",
      "Anzeige: Ein physischer Kern erscheint dem Betriebssystem als zwei"
    ],
    "sprechernotizen": "Ein logischer Prozessor ist kein echtes Stück Hardware, sondern eine Recheneinheit, die dem Betriebssystem „vorgekaukelt“ wird. Dadurch kann ein CPU-Kern zwei Aufgaben (Threads) gleichzeitig bearbeiten, wenn eine davon gerade auf Daten warten muss. • Konkretes Beispiel: Du öffnest den Task-Manager bei einem PC mit einem Intel i9-14900KF. Obwohl die CPU vielleicht nur 24 physische Kerne hat, zeigt Windows 32 logische Prozessoren an. Das bedeutet, der PC kann 32 Aufgabenpakete gleichzeitig abarbeiten.",
    "kategorie": "Hardware"
  },
  {
    "id": 60,
    "titel": "Was versteht man unter einem Thin-Client?",
    "hauptpunkte": [
      "Schlanker Computer: Nutzt Ressourcen (CPU, RAM, Apps), die ein Server",
      "VDI-Einsatz: Kernstück einer virtuellen Desktop-Infrastruktur.",
      "Hardware: Meist lüfterlos, leise und sehr geringe Leistungsaufnahme.",
      "Zentralisierung: Betriebssystem und Konfiguration liegen komplett auf dem"
    ],
    "sprechernotizen": "Ein Thin-Client ist im Grunde nur ein „Fenster“ zum Server. Er ist umweltfreundlich, da er kaum Strom verbraucht und sehr lange hält, da er keine beweglichen Teile (wie Lüfter oder Festplatten) hat. • Konkretes Beispiel: In einem großen Callcenter stehen 200 Arbeitsplätze. Statt 200 teure PCs zu warten, nutzt man 200 kleine Thin-Clients. Wenn ein Gerät kaputtgeht, tauscht man es in 10 Sekunden aus. Der Mitarbeiter meldet sich einfach neu an und hat sofort wieder sein gewohntes Desktop-Bild, da alles sicher im Rechenzentrum gespeichert ist.",
    "kategorie": "Hardware"
  },
  {
    "id": 70,
    "titel": "Nenne die 3 Klassen einer USV nach IEC 62040-3 und erkläre deren",
    "hauptpunkte": [
      "Klasse 1: VFI (Voltage and Frequency Independent) – Schützt vor",
      "Klasse 2: VI (Voltage Independent) – Schützt vor Ausfall und",
      "Klasse 3: VFD (Voltage and Frequency Dependent) – Einfacher Schutz vor"
    ],
    "sprechernotizen": "Die Klassen unterscheiden, wie sauber der Strom ist, den die USV liefert. VFI (Online-USV) ist die sicherste, da sie den Strom ständig neu erzeugt. VFD (Offline) schaltet erst bei einem Stromausfall auf Batterie um, was eine kurze Verzögerung verursacht. • Konkretes Beispiel: Ein wichtiges Krankenhaus-Informationssystem wird mit einer VFI-USV (Klasse 1) gesichert. Selbst wenn im Netz die Spannung kurz „flackert“ oder die Frequenz schwankt, bekommt der Server davon nichts mit, da die USV permanent perfekten Strom liefert.",
    "kategorie": "Hardware"
  },
  {
    "id": 106,
    "titel": "Was bedeutet der Begriff Standby- oder Offline-USV?",
    "hauptpunkte": [
      "Klasse 3 (VFD): Voltage and Frequency Dependent - abhängig von Spannung und Frequenz.",
      "Schutz: Nur bei totalem Stromausfall aktiv, kein Schutz vor Schwankungen.",
      "Umschaltzeit: Typisch 4-10 Millisekunden.",
      "Limitierung: Keine Spannungs- oder Frequenzstabilisierung im Normalbetrieb."
    ],
    "sprechernotizen": "Die Offline-USV ist die einfachste und günstigste Art. Im Normalbetrieb fließt der Strom direkt aus der Steckdose zu den Geräten – die USV 'schläft' und lädt nur ihren Akku. Erst bei einem totalen Ausfall springt sie ein. Das Problem: Während der kurzen Umschaltzeit von 4-10 ms kann ein sehr empfindliches Gerät bereits abschalten. Sie eignet sich für PCs, nicht aber für Server.",
    "kategorie": "Hardware"
  },
  {
    "id": 107,
    "titel": "Was versteht man unter einer Online-USV?",
    "hauptpunkte": [
      "Klasse 1 (VFI): Voltage and Frequency Independent - unabhängig von Spannung und Frequenz.",
      "Dauerwandler: Der Strom fließt immer durch den Wechselrichter, der eine perfekte Sinusspannung erzeugt.",
      "Keine Umschaltzeit: Die Batterie ist immer im Stromkreis.",
      "Maximaler Schutz: Gegen alle Störungen (Ausfall, Schwankungen, Frequenzabweichung)."
    ],
    "sprechernotizen": "Die Online-USV ist der Goldstandard für kritische Systeme wie Server und Rechenzentren. Der Netzstrom wird permanent zu Gleichstrom gewandelt, lädt die Batterie, und ein Wechselrichter erzeugt daraus eine saubere Sinusspannung für die Endgeräte. Da die Batterie immer eingebunden ist, gibt es bei Stromausfall keine Unterbrechung – überhaupt keine.",
    "kategorie": "Hardware"
  },
  {
    "id": 108,
    "titel": "Was versteht man unter der Bezeichnung Netzinteraktive USV?",
    "hauptpunkte": [
      "Klasse 2 (VI): Voltage Independent - unabhängig von Spannung, aber abhängig von Frequenz.",
      "Spannungsfilter: Ein AVR (Automatic Voltage Regulator) glättet leichte Schwankungen.",
      "Umschaltzeit: Typisch 2-4 Millisekunden.",
      "Schutz: Besser als Offline, aber nicht perfekt."
    ],
    "sprechernotizen": "Die netzinteraktive USV ist der Kompromiss zwischen billig (Offline) und teuer (Online). Sie hat einen eingebauten Spannungsstabilisator (AVR), der bei leichten Unter- oder Überspannungen eingreift, ohne sofort die Batterie zu belasten. Daher schützt sie Geräte auch vor schlechter Netzqualität, nicht nur vor Ausfall.",
    "kategorie": "Hardware"
  },
  {
    "id": 111,
    "titel": "Welche Maßnahmen sind geeignet, um die Verarbeitungsgeschwindigkeit eines PCs zu steigern?",
    "hauptpunkte": [
      "Speichermedien: HDD durch SSD ersetzen (größter Effekt für den Nutzer).",
      "HDD-Upgrade: Falls HDD nötig, auf schnellere (7.200 U/min) wechseln.",
      "System-Trennung: OS auf SSD, Daten auf HDD (Hybrid-Ansatz).",
      "Netzwerk: NAS für gemeinsam genutzte Daten prüfen."
    ],
    "sprechernotizen": "Für den Benutzer ist die SSD der größte Sprung bei gefühlter Geschwindigkeit, weil Programmstarts und Dateioperationen spürbar schneller werden. RAM-Ausbau hilft erst, wenn der RAM voll ist (sichtbar im Taskmanager). Eine schnellere CPU lohnt sich meist nur bei rechenintensiven Aufgaben wie Video-Rendering.",
    "kategorie": "Hardware"
  },
  {
    "id": 112,
    "titel": "Ermittle Vor- und Nachteile einer M.2-SSD.",
    "hauptpunkte": [
      "Vorteil: Extrem hohe Geschwindigkeit (bis zu 7.000 MB/s bei NVMe).",
      "Vorteil: Kleiner Formfaktor, direkt auf dem Mainboard montiert.",
      "Nachteil: Höherer Preis pro GB im Vergleich zu SATA-SSD.",
      "Nachteil: Erzeugt mehr Wärme und benötigt oft Kühlung."
    ],
    "sprechernotizen": "M.2 ist ein Formfaktor (das physische Format). Die Geschwindigkeit hängt davon ab, ob die M.2-SSD das NVMe-Protokoll nutzt (schnell) oder SATA (langsamer). Eine M.2-NVMe-SSD ist ideal als Systemlaufwerk für das Betriebssystem, da der PC dadurch extrem schnell startet.",
    "kategorie": "Hardware"
  },
  {
    "id": 113,
    "titel": "Nenne Vor- und Nachteile einer SATA-SSD.",
    "hauptpunkte": [
      "Vorteil: Günstiger Preis pro GB.",
      "Vorteil: Kompatibel mit älteren Systemen (2,5-Zoll-Formfaktor, SATA-Anschluss).",
      "Nachteil: Maximale Geschwindigkeit auf ca. 550 MB/s durch SATA-III begrenzt.",
      "Einsatz: Ideal als günstiges Upgrade für alte PCs oder für Datenlaufwerke."
    ],
    "sprechernotizen": "Die SATA-SSD ist das Arbeitspferd für preisbewusste Anwender. Sie ist zwar langsamer als M.2 NVMe, aber im Alltag fällt der Unterschied nur bei sehr großen Dateikopieraktionen auf. Da sie in jeden alten Laptop mit 2,5-Zoll-Schacht passt, ist sie perfekt, um einem betagten Rechner neues Leben einzuhauchen.",
    "kategorie": "Hardware"
  },
  {
    "id": 114,
    "titel": "Erläutere den Begriff des CPU-Caches.",
    "hauptpunkte": [
      "Pufferspeicher: Extrem schneller Speicher direkt im Prozessor.",
      "Hierarchie: L1 (sehr schnell, klein), L2 (schnell, mittel), L3 (langsamer, größer).",
      "Zweck: Speichert häufig genutzte Daten, um Wartezeiten beim RAM-Zugriff zu vermeiden.",
      "Entlastung: Ohne Cache wäre die CPU ständig im Leerlauf."
    ],
    "sprechernotizen": "Der Cache ist wie der Schreibtisch eines Büroarbeiters. Die Akten, die man gerade braucht, liegen griffbereit (Cache). Das Archiv im Keller (RAM) ist größer, aber der Weg dorthin dauert. L1 ist der kleinste, aber schnellste Cache, oft nur wenige Kilobyte. L3 kann mehrere Megabyte groß sein und wird von allen CPU-Kernen geteilt.",
    "kategorie": "Hardware"
  },
  {
    "id": 115,
    "titel": "Erläutere, welche Aufgabe die Wärmeleitpaste zwischen der CPU und dem Kühler erfüllt.",
    "hauptpunkte": [
      "Wärmeableitung: Leitet die Wärme von der CPU zum Kühler.",
      "Oberflächenausgleich: Füllt mikroskopisch kleine Unebenheiten aus.",
      "Schutzfunktion: Verhindert Lufteinschlüsse, die die Kühlung verschlechtern.",
      "Anwendung: Dünne, gleichmäßige Schicht auftragen."
    ],
    "sprechernotizen": "CPU und Kühler sehen glatt aus, sind es aber unter dem Mikroskop nicht. Wärmeleitpaste füllt die winzigen 'Löcher' zwischen den beiden Metallen. Da Luft ein schlechter Wärmeleiter ist, würde die CPU ohne Paste überhitzen. Auftragen: Eine erbsengroße Menge in die Mitte, der Kühler-Druck verteilt sie.",
    "kategorie": "Hardware"
  },
  {
    "id": 116,
    "titel": "Berechne die Gesamtleistungsaufnahme für folgende IT-Landschaft für ein Jahr (24/7-Betrieb) in Kilowatt.",
    "hauptpunkte": [
      "Schritt 1: Summe der Watt-Leistung aller Geräte bilden.",
      "Schritt 2: Umrechnung in kW pro Stunde (Leistungssumme / 1000).",
      "Schritt 3: Multiplikation mit den Stunden eines Jahres (8.760 Std.).",
      "Ergebnis: Gesamtverbrauch von 150.234 kW."
    ],
    "sprechernotizen": "Um die Betriebskosten einer IT-Abteilung zu planen, muss man den Stromverbrauch berechnen. Die Rechnung im Detail: 1. 10 Server à 800W = 8.000W, 2. 25 PCs à 350W = 8.750W, 3. 2 Switche à 200W = 400W. Gesamtleistung: 17.150 Watt = 17,15 kW. Da die Geräte 24/7 laufen, multiplizieren wir die 17,15 kW mit 24 Stunden * 365 Tage (8.760h). Das ergibt eine Energie von 150.234 kWh (Kilowattstunden).",
    "kategorie": "Hardware"
  },
  {
    "id": 117,
    "titel": "Wie berechnet man die Wirkleistung von elektrischen Geräten?",
    "hauptpunkte": [
      "Formel: P = U × I.",
      "Einheiten: P (Wirkleistung in Watt), U (Spannung in Volt), I (Stromstärke in Ampere).",
      "Standardwert: In Deutschland beträgt die Netzspannung 230 Volt.",
      "Zeitbezug: Leistungsangaben beziehen sich in der Regel auf eine Dauer von 60 Minuten."
    ],
    "sprechernotizen": "Die Wirkleistung (P) gibt an, wie viel elektrische Energie ein Gerät tatsächlich in eine andere Energieform (z. B. Rechenleistung oder Wärme) umsetzt. In der IT-Prüfung ist dies die Standardformel, um herauszufinden, ob ein Netzteil oder eine Steckdose für die angeschlossene Hardware ausreicht.",
    "kategorie": "Hardware"
  },
  {
    "id": 118,
    "titel": "Berechne die maximale Leistungsaufnahme an einer Mehrfachsteckdose, wenn maximal 16A zulässig sind.",
    "hauptpunkte": [
      "Gegebene Werte: U = 230V, I = 16A.",
      "Rechnung: P = U × I = 230V × 16A.",
      "Ergebnis: 3.680 Watt (bzw. 3,68 kW).",
      "Sicherheit: Dies ist die absolute Obergrenze für eine haushaltsübliche Sicherung."
    ],
    "sprechernotizen": "Haushaltsübliche Schuko-Steckdosen und Mehrfachleisten sind in Deutschland meist auf 16 Ampere abgesichert. Wenn man zu viele leistungsstarke Geräte (z. B. mehrere Laserdrucker oder Heizlüfter) an eine einzige Leiste anschließt und die Summe der Watt-Leistungen über 3.680 Watt steigt, löst die Sicherung aus, um einen Kabelbrand zu verhindern.",
    "kategorie": "Hardware"
  },
  {
    "id": 119,
    "titel": "Berechne die Zeitdifferenz der Überbrückung bei einer USV durch Zusatzbelastung.",
    "hauptpunkte": [
      "Kapazität: 20 Batterien à 12V / 4,5 Ah = 1080 Wh (1,08 kWh).",
      "Szenario 1 (1,2 kW): Überbrückungszeit ca. 54 Minuten.",
      "Szenario 2 (1,6 kW): Überbrückungszeit ca. 40 Minuten.",
      "Differenz: Die Zeit verkürzt sich um 14 Minuten."
    ],
    "sprechernotizen": "USVs haben eine begrenzte Energiemenge. Wenn man mehr Geräte anschließt, sinkt die Zeit, in der die Batterie den Stromausfall überbrücken kann. Der Rechenweg: 1. Gesamtenergie berechnen. 2. Zeit bei 1200W ermitteln. 3. Zeit bei 1600W (Zusatzbelastung) berechnen. Die Differenz beträgt somit 14 Minuten weniger Pufferzeit.",
    "kategorie": "Hardware"
  },
  {
    "id": 126,
    "titel": "Welche Speichermodule sind auf dem Bild zu erkennen?",
    "hauptpunkte": [
      "DIMM (Desktop): Langes Modul (links im Bild), z. B. DDR3- oder DDR4-",
      "SO-DIMM (Notebook): Kurzes, kompaktes Modul (rechts im Bild).",
      "Verwendung: DIMM für stationäre PCs, SO-DIMM für Laptops und Mini-PCs."
    ],
    "sprechernotizen": "In der Prüfung musst du Hardware auf den ersten Blick identifizieren. Der Hauptunterschied ist die Länge. DIMM-Module haben meist 240 oder 288 Kontakte, SO-DIMMs deutlich weniger (ca. 204-260). • Konkretes Beispiel: Du bekommst den Auftrag, einen Büro-PC aufzurüsten. Du bestellst versehentlich SO-DIMMs. Beim Einbau merkst du, dass diese viel zu klein für die langen Slots auf dem Mainboard sind – du hättest normale DIMMs benötigt.",
    "kategorie": "Hardware"
  },
  {
    "id": 129,
    "titel": "Um welche Schnittstelle handelt es sich auf dem Bild?",
    "hauptpunkte": [
      "Name: Serial ATA (Serial AT Attachment) oder SATA-Schnittstelle.",
      "Standard: Gezeigt ist eine SATA 3 Schnittstelle (bis 6 Gbit/s).",
      "Aufbau: 2-teilig – ein 15-poliger Stromstecker und eine 7-polige"
    ],
    "sprechernotizen": "SATA ist seit über einem Jahrzehnt der Standard für den Anschluss von Festplatten und SSDs im Inneren eines PCs. Wichtig ist die L- Form der Stecker, die ein falsches Einstecken verhindert. • Konkretes Beispiel: Du willst eine alte 2-TB-Festplatte als Datengrab in deinen neuen PC einbauen. Du suchst auf dem Mainboard nach den kleinen, L- förmigen SATA-Datenanschlüssen und verbindest die Platte zudem mit dem breiten SATA-Stromkabel deines Netzteils.",
    "kategorie": "Hardware"
  },
  {
    "id": 144,
    "titel": "Erläutere den Unterschied zwischen Partitionierung und Formatierung",
    "hauptpunkte": [
      "Partitionierung: Physische und logische Einteilung des Speichers in",
      "Formatierung: Logische Einteilung der Partitionsstruktur mit einem",
      "Reihenfolge: Erst muss partitioniert werden, bevor die Formatierung"
    ],
    "sprechernotizen": "Stell dir eine leere Lagerhalle vor. Die Partitionierung ist das Einziehen von Zwischenwänden, um verschiedene Räume (Laufwerke C:, D: etc.) zu schaffen. Die Formatierung ist dann das Aufstellen von Regalsystemen in diesen Räumen, damit man weiß, wo welche Akte (Datei) abgelegt werden soll. Ohne Formatierung kann das Betriebssystem keine Daten auf einer Partition speichern. • Konkretes Beispiel: Du baust eine neue 2-TB-SSD ein. Du entscheidest dich für zwei Partitionen zu je 1 TB. Danach musst du beide Partitionen mit NTFS formatieren, damit Windows sie im Explorer als nutzbare Laufwerke anzeigt.",
    "kategorie": "Hardware"
  },
  {
    "id": 179,
    "titel": "Was bedeutet in diesem Zusammenhang S.M.A.R.T.?",
    "hauptpunkte": [
      "Bedeutung: Self-Monitoring, Analysis and Reporting Technology.",
      "Funktion: Standardisiertes Überwachungswerkzeug für Festplatten (HDD) und",
      "Frühwarnsystem: Vorhersage möglicher Ausfälle durch Analyse von",
      "Werte: Auslesen von Temperatur, Einschaltzeit, Laufzeit und Bad-Blocks."
    ],
    "sprechernotizen": "S.M.A.R.T. ist wie das Diagnosesystem in einem Auto. Die Festplatte überwacht sich selbst und protokolliert Fehler. Wenn die Anzahl der defekten Sektoren (Bad Blocks) plötzlich ansteigt, ist das ein klares Zeichen, dass die Platte bald komplett ausfallen wird. • Konkretes Beispiel: Ein Server meldet über das Monitoring-System eine S.M.A.R.T.-Warnung für Laufwerk 2. Obwohl die Platte noch funktioniert, sieht der Admin, dass die Betriebstemperatur kritisch hoch war. Er tauscht die Platte präventiv aus, bevor es zu einem echten Datenverlust kommt.",
    "kategorie": "Hardware"
  },
  {
    "id": 180,
    "titel": "Die Installation eines Windows Betriebssystems benötigt einige Schritte. Bringe diese in die richtige Reihenfolge.",
    "hauptpunkte": [
      "P.O.S.T. (Power-On Self-Test): Selbsttest der Hardware.",
      "Bootreihenfolge: Einstellung im BIOS/UEFI anpassen.",
      "Installationsmedium: Installation vom USB-Stick/DVD starten.",
      "EULA: Lizenzbedingungen akzeptieren.",
      "Filesystem: Partitionierung und Formatierung der Festplatte.",
      "Benutzer: Eingabe von Benutzername und Passwort.",
      "Benutzerprofile: Personalisierung (Einstellungen) und Installation von Programmen."
    ],
    "sprechernotizen": "Dieser Prozess beschreibt den Weg von der „nackten“ Hardware bis zum einsatzbereiten Desktop. Zuerst prüft die Hardware sich selbst (POST). Dann muss dem BIOS/UEFI gesagt werden, dass es vom USB-Stick starten soll. Nach der Bestätigung der Lizenzbedingungen (EULA) wird die Festplatte vorbereitet und schließlich die Software-Umgebung für den Nutzer eingerichtet. • Konkretes Beispiel: Ein Azubi wundert sich, warum die Installation nicht startet. Er hat zwar den USB-Stick eingesteckt (Schritt 3), aber vergessen im BIOS die Bootreihenfolge (Schritt 2) zu ändern. Der PC startet deshalb immer wieder das alte, defekte Windows von der Festplatte statt das Setup vom Stick.",
    "kategorie": "Hardware"
  },
  {
    "id": 197,
    "titel": "Was steckt hinter dem Zeichen „Blauer Engel“?,",
    "hauptpunkte": [
      "Staatliches Umweltzeichen: Das Umweltzeichen der Bundesregierung,.",
      "Nachhaltigkeit: Dient als Orientierung beim nachhaltigen und ökologischen",
      "Kriterien: Vergabe an Produkte, die umweltfreundlicher als vergleichbare",
      "Inhaber: Inhaber ist das Bundesministerium für Umwelt (BMU),."
    ],
    "sprechernotizen": "Der Blaue Engel ist das älteste Umweltzeichen der Welt,. Er hilft Unternehmen dabei, IT-Hardware auszuwählen, die besonders schadstoffarm, langlebig und gut recycelbar ist,. In vielen öffentlichen Ausschreibungen ist dieses Siegel eine Voraussetzung für den Kauf,. • Konkretes Beispiel: Wenn ein Betrieb 200 neue Drucker kauft, wählt er Modelle mit dem „Blauen Engel“. Diese haben einen geringen Stromverbrauch, verursachen weniger Lärm und nutzen Toner, die gesundheitlich unbedenklich sind.",
    "kategorie": "Hardware"
  }
];
