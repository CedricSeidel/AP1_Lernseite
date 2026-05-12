// AP1 Lernkarten – Kategorie: Allgemein (29 Karten)
const CARDS_ALLGEMEIN = [
  {
    "id": 16,
    "titel": "Was sind Bestandteile einer Risikoanalyse?",
    "hauptpunkte": [
      "Risikobeurteilung: Identifikation und Bewertung von Gefahren.",
      "Risikokommunikation: Austausch über Risiken mit Beteiligten.",
      "Risikoklassifizierung: Einordnung (z. B. nach",
      "Risikoprävention: Maßnahmen zur Vermeidung oder Minimierung."
    ],
    "sprechernotizen": "Risikomanagement bedeutet, nicht vom Pech überrascht zu werden. Die Risikoanalyse ist dabei der Prozess, bei dem wir erstens überlegen, was schiefgehen kann (Beurteilung), zweitens darüber sprechen (Kommunikation), drittens die Wichtigkeit festlegen (Klassifizierung) und viertens Gegenmaßnahmen planen (Prävention). Das wird laut den Quellen in fast allen Bereichen angewandt, von der Produktentwicklung bis zum Arbeitsschutz.",
    "kategorie": "Allgemein"
  },
  {
    "id": 23,
    "titel": "Welche Arten von Äußerungen sind in einem Kundengespräch nicht",
    "hauptpunkte": [
      "Belehrungen: Den Kunden herablassend behandeln.",
      "Killerphrasen: Sätze wie „Das können nur wir!“.",
      "Druckausübung: Erzeugen von künstlichem Zeit- oder Entscheidungsdruck.",
      "Diskreditierung: Die Konkurrenz schlechtreden."
    ],
    "sprechernotizen": "In der Kundenkommunikation geht es um den Aufbau von Vertrauen. Äußerungen, die den Kunden bevormunden oder unter Druck setzen, wirken blockierend und zerstören die Gesprächsatmosphäre. Besonders gefährlich sind Killerphrasen, die den Dialog beenden, statt Lösungen zu suchen. Wer die Konkurrenz abwertet, wirkt zudem oft unprofessionell. Das Ziel sollte immer eine partnerschaftliche Beratung auf Augenhöhe sein.",
    "kategorie": "Allgemein"
  },
  {
    "id": 26,
    "titel": "Wie können KI-Systeme in der Informations- und Kommunikationstechnologie eingesetzt werden?",
    "hauptpunkte": [
      "Automatisierung: Repetitive Aufgaben (Chatbots, Spamfilter) werden von KI übernommen.",
      "Analyse: KI verarbeitet große Datenmengen zur Mustererkennung.",
      "Sicherheit: Intrusion Detection Systems (IDS) nutzen KI zur Anomalieerkennung.",
      "Predictive Maintenance: KI prognostiziert Ausfälle, um vorbeugende Wartung zu ermöglichen."
    ],
    "sprechernotizen": "KI ist kein Ersatz für den Menschen, sondern ein extrem mächtiges Werkzeug. In der IuK nimmt sie uns vor allem Routine ab: Ein Chatbot kann 90% der Standardfragen beantworten, ein Spamfilter lernt ständig neue Phishing-Muster. Besonders wertvoll ist die Fähigkeit, in riesigen Logdateien Muster zu erkennen, die kein Mensch in überschaubarer Zeit finden würde.",
    "kategorie": "Allgemein"
  },
  {
    "id": 43,
    "titel": "Ergänze nach dem Vier-Ohren-Modell (Sachebene, Appell,",
    "hauptpunkte": [
      "Sachebene: „Sie haben nicht pünktlich geliefert.“ (Reiner Fakt).",
      "Appell: „Sie müssen pünktlich liefern!“ (Aufforderung).",
      "Beziehung: „Ich bin mit Ihnen nicht zufrieden.“ (Gefühlsebene zum",
      "Selbstoffenbarung: „Ich kontrolliere Ihre Leistungen sehr genau.“"
    ],
    "sprechernotizen": "Kommunikation ist kompliziert, weil jede Nachricht vier Botschaften gleichzeitig enthält. In der Prüfung musst du diese Ebenen unterscheiden können: Die Sachebene enthält Daten und Fakten. Der Appell will eine Handlung erzwingen. Die Beziehungsebene sagt etwas darüber aus, wie der Kunde zum Dienstleister steht. Die Selbstoffenbarung verrät etwas über den Gemütszustand oder die Arbeitsweise des Kunden selbst. Wer das versteht, kann im Kundensupport Konflikte vermeiden, indem er auf dem richtigen „Ohr“ hört.",
    "kategorie": "Allgemein"
  },
  {
    "id": 55,
    "titel": "Welche Video-Schnittstellen sind für 4K und 8K Auflösung geeignet?",
    "hauptpunkte": [
      "HDMI 2.0: Bis zu 18 GBit/s; geeignet für 4K.",
      "HDMI 2.1: Bis zu 48 GBit/s; geeignet für 8K.",
      "DisplayPort 1.3/1.4: Übertragungsraten von ca. 26 bis 32 GBit/s; geeignet",
      "Nicht geeignet: HDMI 1.4 (begrenzt auf Full-HD oder sehr langsames 4K)."
    ],
    "sprechernotizen": "Für hohe Auflösungen wie 4K oder 8K müssen enorme Datenmengen pro Sekunde übertragen werden. Wenn das Kabel oder die Schnittstelle (z. B. altes HDMI 1.4) diese Bandbreite nicht liefert, bleibt das Bild entweder schwarz oder ruckelt stark. • Konkretes Beispiel: Du kaufst einen modernen 8K-Monitor für die Grafikabteilung. Wenn du diesen mit einem alten HDMI 1.4-Kabel verbindest, wird der Monitor nur eine niedrige Auflösung anzeigen. Du musst zwingend ein HDMI 2.1- oder ein DisplayPort 1.4-Kabel verwenden, um die volle Bildschärfe zu erreichen.",
    "kategorie": "Allgemein"
  },
  {
    "id": 58,
    "titel": "Welchen Vorteil bringt der Einsatz von Dual-Channel-Technik bei",
    "hauptpunkte": [
      "Datenrate: Verdopplung der Geschwindigkeit beim Datentransfer.",
      "Parallelität: Speichercontroller kann auf zwei Module gleichzeitig",
      "Bedingung: Module müssen baugleich sein (Kapazität/Takt).",
      "Bestückung: Einbau muss paarweise erfolgen."
    ],
    "sprechernotizen": "Dual-Channel ist wie der Ausbau einer Landstraße zu einer zweispurigen Autobahn. Der Prozessor kann doppelt so viele Informationen pro Sekunde aus dem Arbeitsspeicher lesen oder hineinschreiben. • Konkretes Beispiel: Ein Gaming-PC mit nur einem 16-GB-RAM-Riegel läuft langsamer als ein PC mit zwei 8-GB-Riegeln. Durch die zwei Riegel im Dual- Channel-Modus wird die Bandbreite verdoppelt, was besonders bei rechenintensiven Anwendungen einen spürbaren Schub gibt.",
    "kategorie": "Allgemein"
  },
  {
    "id": 59,
    "titel": "Was verbirgt sich hinter Bezeichnung UHD 4K?",
    "hauptpunkte": [
      "Auflösung: Digitales Videoformat mit 3840 x 2160 Pixeln.",
      "Standards: Definiert durch die ITU (International Telecommunication",
      "Synonyme: Auch als UHD-1 oder Ultra HD bezeichnet.",
      "Abgrenzung: Cinema 4K hat leicht abweichende 4096 x 2160 Pixel."
    ],
    "sprechernotizen": "UHD 4K bietet viermal so viele Pixel wie der alte Full-HD- Standard (1920x1080). Das Bild ist dadurch wesentlich schärfer und detailreicher. • Konkretes Beispiel: Wenn du auf einem 4K-Monitor eine Excel-Tabelle öffnest, kannst du viel mehr Spalten und Zeilen gleichzeitig sehen als auf einem Full-HD-Monitor, ohne dass die Schrift unscharf wird.",
    "kategorie": "Allgemein"
  },
  {
    "id": 61,
    "titel": "Welche IT-Komponenten sind Ein- oder Ausgabegeräte?",
    "hauptpunkte": [
      "Eingabegeräte: Scanner, Maus, Touchpad.",
      "Ausgabegeräte: Drucker, Display.",
      "Definition: Eingabe dient der Informationsaufnahme; Ausgabe der"
    ],
    "sprechernotizen": "In der IT-Grundausbildung ist die Unterscheidung des Datenflusses entscheidend. Eingabegeräte leiten Informationen vom Benutzer oder der Umwelt in das System weiter. Ausgabegeräte machen die verarbeiteten Daten für den Benutzer sichtbar oder physisch nutzbar. • Konkretes Beispiel: Ein Grafikdesigner nutzt ein Touchpad (Eingabe), um eine Zeichnung am PC zu erstellen. Um das fertige Werk seinem Kunden physisch zu präsentieren, nutzt er einen hochwertigen Drucker (Ausgabe).",
    "kategorie": "Allgemein"
  },
  {
    "id": 92,
    "titel": "Worin unterscheiden sich die Lichtwellenleiter der Single- und",
    "hauptpunkte": [
      "Kerndurchmesser: Singlemode hat einen sehr kleinen Kern (9 µm), Multimode",
      "Mantelglas: Bei beiden Typen beträgt der äußere Durchmesser des Mantels",
      "Reichweite: Multimode erreicht bis zu 2.000 m, während Singlemode bis zu",
      "m überbrücken kann."
    ],
    "sprechernotizen": "Der Hauptunterschied liegt darin, wie sich das Licht im Inneren ausbreitet. Im dicken Kern der Multimodefaser reflektieren die Lichtstrahlen (Moden) zickzackförmig an den Wänden, was zu Laufzeitunterschieden führt. Im dünnen Kern der Singlemodefaser breitet sich nur ein einziger Lichtstrahl fast geradlinig aus, was die enorme Reichweite ermöglicht. • Konkretes Beispiel: Vergleich es mit einem Tunnel. Ein breiter Tunnel (Multimode) erlaubt vielen Autos gleichzeitig das Fahren, aber durch ständige Spurwechsel kommen sie langsamer voran. Ein extrem schmaler Tunnel (Singlemode) lässt nur ein Auto zu, das aber mit Höchstgeschwindigkeit schnurgerade durchrast und so viel weitere Strecken schafft.",
    "kategorie": "Allgemein"
  },
  {
    "id": 125,
    "titel": "Nenne Vor- und Nachteile beim Einsatz eines 2.4 GHz sowie eines 5",
    "hauptpunkte": [
      "2.4 GHz: Weit verbreitet, hohe Reichweite (bis 300m im Freien), aber",
      "5 GHz: Hohe Übertragungsraten, kaum Überlappungen, aber geringere",
      "Einschränkungen: 5 GHz unterliegt TPC und DFS (Rücksicht auf"
    ],
    "sprechernotizen": "Das 2.4 GHz Band ist wie eine alte, volle Landstraße – sie führt weit, ist aber oft verstopft (auch durch Mikrowellen oder Bluetooth). 5 GHz ist die neue Autobahn: Schnell, aber sie endet früher. • Konkretes Beispiel: Für Smart-Home-Glühbirnen im ganzen Haus nutzt man 2.4 GHz, da diese kaum Daten schicken, aber eine stabile Verbindung durch zwei Wände brauchen. Für Virtual Reality Gaming am PC nutzt man 5 GHz, um die nötige Bandbreite und geringe Latenz ohne Ruckler zu erreichen.",
    "kategorie": "Allgemein"
  },
  {
    "id": 128,
    "titel": "Auf dem Bild sind mehrere Speicherkarten zu erkennen. Welche",
    "hauptpunkte": [
      "SD-Karte: Nummer 1 (die große Standardform).",
      "microSD-Karte: Nummer 3 (die winzige Variante).",
      "Adapter: Nummer 4 zeigt oft einen Adapter, um kleine Karten in großen"
    ],
    "sprechernotizen": "Die Identifizierung erfolgt rein über die Größe. SD-Karten werden oft in Spiegelreflexkameras genutzt, microSD-Karten in Smartphones oder Action-Cams. • Konkretes Beispiel: Du nimmst mit einer GoPro (microSD, Nummer 3) ein Video auf. Um dieses an deinem Laptop zu bearbeiten, der nur einen großen Kartenslot hat, schiebst du die kleine Karte in einen SD-Adapter (Nummer 1 Gehäuse) und steckst diesen in den Laptop.",
    "kategorie": "Allgemein"
  },
  {
    "id": 130,
    "titel": "Welche technischen Spezifikationen hat Bluetooth in Bezug auf",
    "hauptpunkte": [
      "Klassen/Reichweite: Klasse 1 (200m), Klasse 2 (20m), Klasse 3 (10m).",
      "Frequenzbereich: Lizenzfreies ISM-Band zwischen 2,402 und 2,480 GHz.",
      "Transferraten: Basic Rate (1 MBit/s), Enhanced Data Rate (2-3 MBit/s)."
    ],
    "sprechernotizen": "Bluetooth ist ein Kurzstreckenfunk. Interessant für die Prüfung ist, dass es denselben Frequenzbereich wie 2.4 GHz WLAN nutzt, was zu Interferenzen führen kann. Die meisten Headsets und Mäuse nutzen Klasse 2 oder 3. • Konkretes Beispiel: Du koppelst eine Bluetooth-Maus mit deinem Laptop. Da beide Geräte Klasse 2 unterstützen, kannst du den Laptop auf dem Schreibtisch stehen lassen und die Präsentation per Maus aus einer Entfernung von ca. 15 Metern steuern, bevor die Verbindung abbricht.",
    "kategorie": "Allgemein"
  },
  {
    "id": 150,
    "titel": "Was versteht man unter einem Convertible?",
    "hauptpunkte": [
      "Wandelbares Gerät: Notebook, das durch Klapp-, Dreh- oder",
      "Hybrid-Bezeichnungen: Auch als Hybrid-PC, Two-in-One oder Detachable",
      "Modi: Betrieb als klassisches Notebook (Tastatur) oder Tablet",
      "Zielgruppe: Nutzer, die maximale Mobilität benötigen."
    ],
    "sprechernotizen": "Ein Convertible vereint zwei Welten. Es hat die Leistung eines vollwertigen Laptops, aber die Flexibilität eines Tablets. Ein „Detachable“ ist eine Unterform, bei der man die Tastatur komplett abnehmen kann. • Konkretes Beispiel: Ein Architekt nutzt ein Convertible im Büro als Laptop zum Schreiben von E-Mails. Wenn er auf die Baustelle geht, klappt er das Display um und nutzt es als Tablet, um mit einem digitalen Stift direkt in den Bauplänen Korrekturen einzuzeichnen.",
    "kategorie": "Allgemein"
  },
  {
    "id": 152,
    "titel": "Welche Vor- und Nachteile hat ein Notebook?",
    "hauptpunkte": [
      "Vorteile: Netzunabhängiges Arbeiten durch Akku; platzsparender als ein",
      "Erweiterbarkeit: Oft durch eine Dockingstation zu einem vollwertigen",
      "Nachteile: Höheres Gewicht als Tablets; oft proprietäre Netzteile;",
      "Display: Meist kleiner als bei stationären Monitoren."
    ],
    "sprechernotizen": "Notebooks sind der Standard für moderne Büroarbeit. Sie bieten die volle Leistung eines PCs bei gleichzeitiger Mobilität. Ein kritischer Punkt in der Prüfung ist oft die Wartbarkeit: Während man bei einem PC jedes Teil einzeln tauschen kann, ist bei Notebooks vieles fest verbaut oder erfordert Spezialwerkzeug. • Konkretes Beispiel: Eine Unternehmensberaterin arbeitet im Zug an Präsentationen (Vorteil Mobilität). Im Büro stellt sie das Gerät in eine Dockingstation, um mit zwei großen Monitoren und einer ergonomischen Maus komfortabel weiterzuarbeiten.",
    "kategorie": "Allgemein"
  },
  {
    "id": 153,
    "titel": "Welcher digitale Anschluss ist auf dem Bild zu erkennen?",
    "hauptpunkte": [
      "Identifizierung: DisplayPort (klassisch und Mini-Variante).",
      "Eigenschaften: Genormte, universelle und lizenzfreie Schnittstelle.",
      "Übertragung: Übermittelt sowohl Bild- als auch Tonsignale."
    ],
    "sprechernotizen": "Der DisplayPort ist das Gegenstück zum HDMI-Kabel, wird aber vor allem im Computerbereich eingesetzt, da er lizenzfrei für die Hersteller ist. Er kann extrem hohe Auflösungen und Bildwiederholraten übertragen. Es gibt ihn in der großen Standard-Variante und als Mini- DisplayPort, der oft an älteren MacBooks oder kompakten Grafikkarten zu finden ist. • Konkretes Beispiel: Um einen 4K-Monitor flimmerfrei mit 144Hz zu betreiben, verbindet ein Cutter seine Workstation per DisplayPort-Kabel, da herkömmliche HDMI-Kabel bei diesen hohen Datenraten oft an ihre Grenzen stoßen.",
    "kategorie": "Allgemein"
  },
  {
    "id": 155,
    "titel": "Erläutere die Unterschiede zwischen ADSL, VDSL und SDSL.",
    "hauptpunkte": [
      "ADSL (Asymmetrisch): Download deutlich schneller als Upload; am weitesten",
      "VDSL (High Speed): Aktuelle Technik mit sehr hohen Geschwindigkeiten;",
      "SDSL (Symmetrisch): Upload- und Downloadgeschwindigkeit sind gleich hoch."
    ],
    "sprechernotizen": "DSL-Anschlüsse unterscheiden sich darin, wie die verfügbare Bandbreite aufgeteilt wird. Bei ADSL und VDSL geht man davon aus, dass Nutzer mehr Daten empfangen (Netflix, Surfen) als senden. SDSL ist teurer und wird dort eingesetzt, wo ständig große Datenmengen hochgeladen werden müssen, wie bei Servern. • Konkretes Beispiel: Eine Familie nutzt VDSL, damit vier Personen gleichzeitig ruckelfrei streamen können. Ein kleines Softwarehaus nutzt hingegen SDSL, um ihre fertigen Programme (Upload) genauso schnell auf Kundenserver zu schieben, wie sie sie herunterladen.",
    "kategorie": "Allgemein"
  },
  {
    "id": 156,
    "titel": "Berechne die Zeit für den Download einer 2 GiB großen Datei über",
    "hauptpunkte": [
      "Schritt 1: Datei in Bit umrechnen ().",
      "Schritt 2: Durch Geschwindigkeit teilen ().",
      "Lösung: ca. 5 Minuten und 44 Sekunden."
    ],
    "sprechernotizen": "Das ist eine Standard-Rechenaufgabe für die Prüfung. Wichtig ist die Umrechnung: Von GiB (Binär-Präfix) zu Byte und dann zu Bit (Faktor 8), da die Leitung in Megabit pro Sekunde (Mbit/s) rechnet. Danach teilt man einfach die Datenmenge durch die Geschwindigkeit. • Konkretes Beispiel: Ein Admin möchte ein neues Betriebssystem-Abbild (ISO) mit 2 GiB herunterladen. Er schaut auf die Uhr und weiß dank der Rechnung, dass er sich in knapp 6 Minuten wieder an den PC setzen kann, um mit der Installation zu beginnen.",
    "kategorie": "Allgemein"
  },
  {
    "id": 161,
    "titel": "Was bedeutet der Begriff „Proprietäre Software“?",
    "hauptpunkte": [
      "Eingeschränkte Rechte: Nutzung, Änderung und Weitergabe sind durch den",
      "Geschlossener Quellcode: Das „Rezept“ der Software ist nicht öffentlich",
      "Rechtliche Hürden: Schutz durch Patent- oder Lizenzrecht.",
      "Herstellerabhängigkeit: Anpassungen sind oft nur durch den Anbieter"
    ],
    "sprechernotizen": "Proprietäre Software ist das Gegenstück zur freien Software. Wenn du eine solche Software kaufst, erwirbst du eigentlich nur eine Lizenz zur Nutzung, nicht aber das Eigentum am Code selbst. Die Schnittstellen sind oft nicht öffentlich dokumentiert, was die Integration in andere Systeme erschweren kann. • Konkretes Beispiel: Adobe Photoshop oder Microsoft Windows. Du darfst diese Programme nutzen, aber du darfst den Programmcode nicht verändern, um eigene Funktionen einzubauen, und du darfst sie nicht einfach kopieren und an Freunde verschenken.",
    "kategorie": "Allgemein"
  },
  {
    "id": 165,
    "titel": "Was beschreibt eine EULA während des Installationsprozesses von",
    "hauptpunkte": [
      "Benutzervertrag: Regelt die Bedingungen für die allgemeine Benutzung der",
      "Installationsbedingung: Muss zu Beginn des Prozesses angezeigt und",
      "Konsequenz: Ohne Zustimmung kann der Installationsprozess nicht"
    ],
    "sprechernotizen": "Die EULA ist ein rechtlich bindender Vertrag zwischen dir als Endnutzer und dem Softwarehersteller. Sie legt fest, was du mit der Software darfst (z. B. auf wie vielen Geräten du sie installieren darfst) und was verboten ist (z. B. das Dekompilieren des Codes). • Konkretes Beispiel: Wenn du ein neues Computerspiel installierst, erscheint ein Fenster mit viel Text. Scrollst du nicht nach unten und klickst auf „Ich akzeptiere die Bedingungen“, lässt sich der „Weiter“- Button nicht anklicken und das Spiel wird nicht installiert.",
    "kategorie": "Allgemein"
  },
  {
    "id": 183,
    "titel": "Welche Bedingungen müssen beim Einsatz von Arbeitsspeichern im Dual",
    "hauptpunkte": [
      "Baugleichheit: Die Speichermodule müssen vom gleichen Typ und",
      "Kapazität: Beide Module müssen die gleiche Speichergröße (z. B. 2x 8GB)",
      "Zertifizierung: Module sollten vom Hersteller für das Mainboard bzw. den",
      "Paarweise Installation: Der Einbau muss immer in Paaren erfolgen (Slot"
    ],
    "sprechernotizen": "Dual Channel ist eine Technik, die die Datenübertragungsrate verdoppelt, indem der Speichercontroller auf zwei RAM-Module gleichzeitig zugreift. Damit das funktioniert, müssen die Riegel wie „Zwillinge“ funktionieren. Wenn die Module unterschiedliche Geschwindigkeiten oder Größen haben, schaltet das System meist in den langsameren Single-Channel-Modus zurück. • Konkretes Beispiel: Ein Nutzer möchte seinen PC von 8 GB auf 16 GB aufrüsten. Statt irgendeinen günstigen Riegel dazuzukaufen, kauft er ein „Dual-Channel-Kit“, das zwei exakt identische 8-GB-Riegel enthält. Er steckt sie in die farblich markierten Slots seines Mainboards, um die volle Bandbreite für seine Videobearbeitung zu nutzen.",
    "kategorie": "Allgemein"
  },
  {
    "id": 187,
    "titel": "Erkläre den Unterschied zwischen einem Objekt und einer Klasse.",
    "hauptpunkte": [
      "Klasse: Der Bauplan oder die Kategorie; definiert Attribute und Methoden.",
      "Objekt: Eine konkrete Instanz einer Klasse, die nach dem Bauplan erstellt",
      "Vererbung: Klassen können Eigenschaften an Unterklassen weitergeben.",
      "Zusammenhang: Ein Objekt verfügt über die in der Klasse festgelegten"
    ],
    "sprechernotizen": "In der objektorientierten Programmierung (OOP) ist die Klasse die Theorie und das Objekt die Praxis. Man kann die Klasse als „Kuchenform“ und das Objekt als den fertig gebackenen „Kuchen“ betrachten. Alle Kuchen aus dieser Form haben die gleiche Form (Attribute), aber jeder Kuchen kann anders schmecken (Inhalte der Attribute). • Konkretes Beispiel: In einem Autohaus-Programm gibt es die Klasse „Auto“ (mit Attributen wie Farbe und PS). Das Objekt ist der konkrete rote VW Golf, der mit dem Kennzeichen HH-AB-123 im Hof steht.",
    "kategorie": "Allgemein"
  },
  {
    "id": 193,
    "titel": "Was bedeutet das Label „Energy Star“?",
    "hauptpunkte": [
      "Umweltschutzbehörden: Zertifizierung durch die EPA (USA) und das US-",
      "Stromsparkriterien: Bescheinigt elektrischen Geräten die Einhaltung von",
      "Funktionen: Erfordert automatische Abschaltung oder Wechsel in den",
      "Effekt: Führt zu einem sehr niedrigen Stromverbrauch im Standby-Betrieb."
    ],
    "sprechernotizen": "Der Energy Star ist ein internationales Symbol für Energieeffizienz. Besonders bei Computern ist das wichtig: Wenn du nicht am PC arbeitest, müssen die Prozessorleistung heruntergefahren und Datenträger abgeschaltet werden, um Ressourcen zu schonen. Das spart dem Unternehmen Geld und schützt die Umwelt. • Konkretes Beispiel: Ein Büro-Monitor mit Energy-Star-Logo schaltet sich nach 10 Minuten Inaktivität in einen Tiefschlafmodus, in dem er weniger als 0,5 Watt verbraucht, statt das Display die ganze Mittagspause über voll zu beleuchten.",
    "kategorie": "Allgemein"
  },
  {
    "id": 206,
    "titel": "Welches sind die Ziele bei der Datenminimierung?",
    "hauptpunkte": [
      "Grundsatz: Nur so viele Daten wie nötig, so wenige wie möglich sammeln.",
      "Zweckbindung: Daten dürfen nur für den jeweiligen Verarbeitungszweck",
      "Schutz: Betroffene vor einer übermäßigen Speicherung ihrer"
    ],
    "sprechernotizen": "Datenminimierung und Datensparsamkeit sind Kernregeln des Datenschutzes. Wer keine Daten hat, kann auch keine durch einen Hack verlieren. • Konkretes Beispiel: Bei der Anmeldung zu einem Webinar fragt der Veranstalter nur nach der E-Mail-Adresse und nicht nach dem Geburtsdatum oder der Privatanschrift, da diese Informationen für die Durchführung des Webinars nicht unbedingt notwendig sind.",
    "kategorie": "Allgemein"
  },
  {
    "id": 208,
    "titel": "Was ist eine PKI (Public Key Infrastructure)?",
    "hauptpunkte": [
      "Definition: Ein kryptologisches System zur Ausstellung, Verteilung und",
      "Asymmetrisches System: Nutzt Schlüsselpaare zur Absicherung, Signierung",
      "Bestandteile:"
    ],
    "sprechernotizen": "Die PKI ist das Fundament für sichere Kommunikation im Internet. Sie stellt sicher, dass wir wissen, mit wem wir kommunizieren. • Konkretes Beispiel: Wenn du eine gesicherte Website besuchst (HTTPS), prüft dein Browser im Hintergrund über die PKI, ob das Zertifikat der Seite von einer vertrauenswürdigen CA ausgestellt wurde und ob es noch gültig ist.",
    "kategorie": "Allgemein"
  },
  {
    "id": 214,
    "titel": "Vergleich der Verschlüsselungsarten.",
    "hauptpunkte": [
      "Symmetrisch: Ein Schlüssel; schnell und effizient; problematischer",
      "Asymmetrisch: Zwei Schlüssel (öffentlich/privat); langsam und",
      "Zertifikate: Asymmetrische Verfahren werden für SSL/TLS-Zertifikate von"
    ],
    "sprechernotizen": "In der Praxis werden oft beide kombiniert (Hybrid- Verschlüsselung). Das asymmetrische Verfahren wird genutzt, um sicher einen symmetrischen Schlüssel zu übertragen, mit dem dann die eigentliche Kommunikation stattfindet. • Konkretes Beispiel: Beim Aufruf einer HTTPS-Webseite wird zuerst asymmetrisch (langsam) geprüft, ob das Zertifikat echt ist. Dabei wird ein geheimer Sitzungsschlüssel ausgehandelt, mit dem danach alle weiteren Daten der Seite symmetrisch (schnell) übertragen werden.",
    "kategorie": "Allgemein"
  },
  {
    "id": 248,
    "titel": "Was versteht man unter einer Aufbauorganisation?",
    "hauptpunkte": [
      "Hierarchische Struktur: Gliedert ein Unternehmen in Aufgabenbereiche und",
      "Elemente: Beinhaltet Stellen, Abteilungen und Stabsstellen.",
      "Organisationsformen: Einliniensystem, Mehrliniensystem,"
    ],
    "sprechernotizen": "Die Aufbauorganisation legt fest, \"wer was macht\" und \"wer wem Anweisungen gibt\". Sie ist das statische Gerüst des Unternehmens. • Konkretes Beispiel: In einer funktionalen Aufbauorganisation sind alle Informatiker in der Abteilung \"IT\" gebündelt, während alle Buchhalter in der Abteilung \"Finanzen\" arbeiten.",
    "kategorie": "Allgemein"
  },
  {
    "id": 251,
    "titel": "Wie ist eine Stablinienorganisation aufgebaut?",
    "hauptpunkte": [
      "Erweiterung: Basiert auf dem Einliniensystem und wird durch Stabsstellen",
      "Funktion: Stabsstellen unterstützen und entlasten andere Stellen oder",
      "Einfluss: Stäbe können dem gesamten Unternehmen oder der Leitung zur",
      "Keine Weisungsmacht: Sie wirken unterstützend, treffen jedoch selbst"
    ],
    "sprechernotizen": "Die Stablinienorganisation versucht, die Vorteile des klaren Dienstweges (Einliniensystem) mit der Expertise von Fachleuten zu kombinieren, ohne die Hierarchie zu verwässern. • Konkretes Beispiel: Ein Geschäftsführer hat eine Stabsstelle für IT- Recht. Diese Person prüft alle neuen Softwareverträge auf rechtliche Fallstricke und berät den Chef. Der Jurist darf den Programmierern aber nicht vorschreiben, wie sie zu arbeiten haben – das darf nur der Abteilungsleiter der Softwareentwicklung.",
    "kategorie": "Allgemein"
  },
  {
    "id": 253,
    "titel": "Welche Bedeutung haben bei Unterschriften die Abkürzungen i. V., i.",
    "hauptpunkte": [
      "ppa. (per procura autoritate): Kennzeichnet die Prokura gemäß § 49 Abs. 1",
      "i. V. (in Vollmacht): Eine Vollmacht nach BGB bzw. eine",
      "i. A. (im Auftrag): Eine Vollmacht nach BGB bzw. Handlungsvollmacht nach"
    ],
    "sprechernotizen": "Diese Kürzel signalisieren dem Geschäftspartner, welchen rechtlichen Rahmen die unterschreibende Person hat. Besonders die Prokura muss zwingend im Handelsregister eingetragen sein. • Konkretes Beispiel: Ein Einkaufsleiter mit Prokura unterschreibt einen Mietvertrag für eine neue Lagerhalle mit „ppa. Müller“. Ein einfacher Techniker, der im Auftrag seines Chefs ein Paket entgegennimmt und den Empfang quittiert, unterschreibt mit „i. A. Schmidt“.",
    "kategorie": "Allgemein"
  },
  {
    "id": 254,
    "titel": "Was versteht man unter dem Begriff Prokura?",
    "hauptpunkte": [
      "Handelsrechtliche Vollmacht: Ermächtigt zu allen Arten von",
      "Erteilung: Kann nur vom Inhaber oder dessen gesetzlichem Vertreter",
      "Einschränkungen: Prokuristen dürfen keine Bilanzen unterzeichnen, keine",
      "Formen: Einzelprokura, Filialprokura und Gesamtprokura."
    ],
    "sprechernotizen": "Die Prokura ist eine sehr weitreichende Vollmacht. Damit Dritte geschützt sind, erlischt sie erst mit der Löschung aus dem Handelsregister. • Konkretes Beispiel: Ein Unternehmen erteilt seinem kaufmännischen Leiter eine Gesamtprokura. Das bedeutet, er darf zwar Millionenverträge unterschreiben, aber nur, wenn ein zweiter Prokurist oder der Geschäftsführer ebenfalls gegenzeichnet.",
    "kategorie": "Allgemein"
  }
];
