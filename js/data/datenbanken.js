// AP1 Lernkarten – Kategorie: Datenbanken (9 Karten)
const CARDS_DATENBANKEN = [
  {
    "id": 24,
    "titel": "In welchem Softwaresystem werden in der Regel Supportanfragen",
    "hauptpunkte": [
      "Ticketing-System: Zentraler Eingang für Anfragen.",
      "Request-Tracking-System (RTS): Nachverfolgung von Aufgaben.",
      "Schnittstellen: Anbindung an Webportale für Kunden.",
      "Datenbank: Speicherung von Fällen (Cases) zur Klassifizierung."
    ],
    "sprechernotizen": "Für den Support gibt es viele Begriffe: User-Helpdesk- System, Service-Ticket-System oder Task-Tracking-System. Allen gemeinsam ist, dass sie Kundenanfragen (per Mail, Telefon oder Portal) zentral erfassen, bestätigen und klassifizieren. Eine integrierte Datenbank sorgt dafür, dass der Status jedes „Tickets“ jederzeit nachverfolgt werden kann – sowohl für den Support-Mitarbeiter als auch für den Kunden.",
    "kategorie": "Datenbanken"
  },
  {
    "id": 132,
    "titel": "Was bedeutet der Begriff Serverkonsolidierung?",
    "hauptpunkte": [
      "Zusammenlegung: Reduktion der Anzahl physischer Serversysteme durch",
      "Effizienz: Ein leistungsstarker physischer Server ersetzt viele schwache",
      "Ressourcenschonung: Massive Einsparungen bei Energie- und Raumbedarf."
    ],
    "sprechernotizen": "Serverkonsolidierung ist die praktische Anwendung der Virtualisierung. Das Ziel ist es, den „Wildwuchs“ im Serverraum zu stoppen. Statt für jede Anwendung (Mail, Datenbank, Web) ein eigenes Blechgehäuse zu betreiben, packt man alles in eine Virtual Environment (VE) auf einen Host. • Konkretes Beispiel: Ein Rechenzentrum ersetzt 10 alte, stromfressende Server durch einen modernen Hochleistungsserver, auf dem diese 10 Systeme nun als virtuelle Maschinen laufen. Dadurch sinkt nicht nur die Stromrechnung, sondern es wird auch weniger Platz im Rack und weniger Kühlleistung benötigt.",
    "kategorie": "Datenbanken"
  },
  {
    "id": 145,
    "titel": "Was versteht man unter einem Service-Tag oder Asset-Tag?",
    "hauptpunkte": [
      "Identifizierung: Eindeutige Seriennummer oder Kennung pro Gerät.",
      "Form: Meist als Etikett mit Bar- oder QR-Code auf der Rückseite",
      "Zweck: Bestandskontrolle, Inventarisierung und Nachverfolgung der"
    ],
    "sprechernotizen": "In großen Unternehmen verliert man schnell den Überblick über tausende Laptops und Monitore. Der Asset-Tag ist die „Personalausweisnummer“ des Geräts. Wenn du den Code scannst, erfährst du in der Datenbank sofort, wann das Gerät gekauft wurde, wer es aktuell nutzt und wann die Garantie abläuft. • Konkretes Beispiel: Ein Monitor ist defekt. Der Support fragt dich nach dem Service-Tag. Du nennst die Nummer vom Aufkleber, und der Techniker sieht sofort, dass es ein „Dell UltraSharp 27“ ist und schickt dir ohne langes Suchen das passende Ersatzteil zu.",
    "kategorie": "Datenbanken"
  },
  {
    "id": 147,
    "titel": "Was versteht man unter einem Pflichtenheft?",
    "hauptpunkte": [
      "Umsetzungsplan: Detaillierte Beschreibung des Auftragnehmers, wie er die",
      "Inhalt: „Wie und Womit“ wird der Auftrag ausgeführt.",
      "Rechtliche Bindung: Vertragsbestandteil für beide Seiten.",
      "Agilität: Änderungen können in einem agilen Prozess dennoch einfließen."
    ],
    "sprechernotizen": "Das Pflichtenheft ist die Antwort des IT-Dienstleisters auf das Lastenheft des Kunden. Es ist technisch viel detaillierter. Wenn der Kunde im Lastenheft schreibt: „Ich will eine sichere Anmeldung“, schreibt der Dienstleister ins Pflichtenheft: „Wir implementieren eine Zwei-Faktor-Authentifizierung über den Microsoft Authenticator“. Erst wenn beide Seiten dieses Dokument akzeptieren, beginnt die eigentliche Umsetzung. • Konkretes Beispiel: Eine Firma beauftragt die Erstellung einer Webseite. Im Pflichtenheft legt die IT-Agentur fest, dass sie dafür das System WordPress nutzt, welche Plugins installiert werden und wie die Datenbankstruktur aussieht.",
    "kategorie": "Datenbanken"
  },
  {
    "id": 166,
    "titel": "Beschreibe das Modell Pay-per-use in der Informationstechnologie.",
    "hauptpunkte": [
      "Nutzungsbasierte Abrechnung: Bezahlung erfolgt nach tatsächlicher",
      "Keine Investitionskosten: Nutzer benötigt kein eigenes Kapital für",
      "Aktualität: Man nutzt in der Regel immer die aktuellste Version der",
      "Flexibilität: Gleicht Schwankungen in der Auslastung effizient aus."
    ],
    "sprechernotizen": "Pay-per-use ist ein klassisches Cloud-Finanzierungsmodell. Es wandelt Fixkosten in variable Kosten um. Das ist besonders für Startups attraktiv, die nicht wissen, wie schnell sie wachsen werden. • Konkretes Beispiel: Ein Unternehmen nutzt eine Cloud-Datenbank für Analysen. Anstatt einen Server für 5.000 € zu kaufen, zahlen sie nur 0,50 € pro Stunde, in der die Datenbank tatsächlich Abfragen verarbeitet.",
    "kategorie": "Datenbanken"
  },
  {
    "id": 185,
    "titel": "Was bedeutet der Begriff UML?",
    "hauptpunkte": [
      "Bedeutung: Unified Modeling Language (Vereinheitlichte",
      "Standard: Eine grafische Modellierungssprache zur Visualisierung und",
      "Anwendung: Einsatz in der Softwareentwicklung und Systemmodellierung.",
      "Ziele: Konstruieren, Spezifizieren und Dokumentieren von Software-"
    ],
    "sprechernotizen": "UML ist quasi die „Blaupause“ für Softwareentwickler. Bevor ein einziges Wort Code geschrieben wird, hilft UML dabei, die Struktur und das Verhalten eines Programms logisch zu planen. Es ist eine internationale Sprache, die jeder Informatiker versteht, egal ob er in Java, C++ oder Python programmiert. • Konkretes Beispiel: Ein Software-Architekt plant eine neue Online- Banking-App. Bevor das Team loslegt, erstellt er ein UML-Diagramm, das zeigt, welche Datenbanktabellen es gibt und wie die Nutzer mit dem System interagieren, damit alle Entwickler denselben Plan verfolgen.",
    "kategorie": "Datenbanken"
  },
  {
    "id": 186,
    "titel": "Nenne einige UML-Verhaltensdiagramme sowie deren Zweck.",
    "hauptpunkte": [
      "Aktivitätsdiagramm: Zeigt den Ablauf von Aktivitäten und Prozessen.",
      "Use-Case-Diagramm: Darstellung von Anwendungsfällen und Akteuren.",
      "Zustandsdiagramm: Bildet Zustände und Übergänge eines Objekts ab.",
      "Sequenzdiagramm: Stellt Interaktionen zwischen Objekten in zeitlicher"
    ],
    "sprechernotizen": "Verhaltensdiagramme beschreiben, was in einem System passiert. Während ein Anwendungsfalldiagramm grob zeigt, wer was tun darf (z. B. „Kunde darf Geld abheben“), geht ein Sequenzdiagramm ins Detail und zeigt den genauen Nachrichtenfluss zwischen den Objekten über die Zeit hinweg. • Konkretes Beispiel: Ein Entwickler nutzt ein Sequenzdiagramm, um darzustellen, wie ein Webbrowser eine Anfrage an einen Server schickt, dieser die Datenbank abfragt und das Ergebnis wieder zurücksendet. So sieht man genau, an welcher Stelle eine Verzögerung auftreten könnte.",
    "kategorie": "Datenbanken"
  },
  {
    "id": 189,
    "titel": "Die Normalisierung eines Datenbankschemas ist wichtiger Bestandteil",
    "hauptpunkte": [
      "1. Normalform (1NF): Alle Informationen liegen atomar vor (nicht weiter",
      "2. Normalform (2NF): 1NF erfüllt + jedes Attribut ist vom gesamten",
      "3. Normalform (3NF): 2NF erfüllt + es gibt keine transitiven",
      "Ziel: Vermeidung von Datenredundanzen und Anomalien."
    ],
    "sprechernotizen": "Normalisierung ist der Prozess, eine Tabelle so aufzuteilen, dass jede Information nur noch genau einmal gespeichert wird. Das spart nicht nur Platz, sondern verhindert vor allem Fehler beim Ändern oder Löschen von Daten. Der Merksatz hierzu lautet oft: „The key (1NF), the whole key (2NF) and nothing but the key (3NF)“. • Konkretes Beispiel: In einer Kundentabelle steht die Adresse als ein Feld. Für die 1. Normalform muss diese in „Straße“, „PLZ“ und „Ort“ aufgeteilt werden. Wenn in einer Rechnungstabelle der Kundenname steht, wird dieser in der 2. oder 3. NF in eine eigene Kundentabelle ausgelagert, damit man den Namen bei einem Umzug nur an einer Stelle ändern muss.",
    "kategorie": "Datenbanken"
  },
  {
    "id": 258,
    "titel": "In der Anwendungsentwicklung sind Testverfahren unerlässlich. Welche",
    "hauptpunkte": [
      "Strukturtests: Black-Box-Test und White-Box-Test.",
      "Ebenen: Komponententest, Unittest, Modultest und Integrationstest.",
      "Abschluss: Systemtest und Abnahmetest.",
      "Performance: Lasttest."
    ],
    "sprechernotizen": "Tests sichern die Softwarequalität. Man beginnt meist „klein“ bei den Unittests (einzelne Funktionen) und endet beim Abnahmetest durch den Kunden. • Konkretes Beispiel: Bevor eine neue App in den Store kommt, wird ein Lasttest durchgeführt. Dabei wird simuliert, dass 5.000 Nutzer gleichzeitig auf die Datenbank zugreifen, um sicherzustellen, dass das System nicht abstürzt.",
    "kategorie": "Datenbanken"
  }
];
