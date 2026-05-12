// AP1 Lernkarten – Kategorie: Projektmanagement (32 Karten)
const CARDS_PROJEKTMANAGEMENT = [
  {
    "id": 1,
    "titel": "Nenne Merkmale eines Projekts.",
    "hauptpunkte": [
      "Einmaligkeit: Keine regelmäßige Routine.",
      "Zielorientierung: Ein fest definiertes Ergebnis wird verfolgt.",
      "Zeitliche Befristung: Fester Start- und Endzeitpunkt.",
      "Begrenzte Ressourcen: Budget, Personal und Zeit sind limitiert."
    ],
    "sprechernotizen": "Ein Projekt ist in der Betriebswirtschaft klar von „Prozessen“ abgegrenzt. Während ein Prozess (wie die tägliche Datensicherung) immer gleich abläuft, ist ein Projekt ein einmaliges Vorhaben. Wichtig für die Prüfung ist zudem das Merkmal der Interdisziplinarität – oft arbeiten Fachleute aus verschiedenen Abteilungen zusammen. Da Projekte Neuland betreten, sind sie immer risikobehaftet; man weiß zu Beginn nie zu 100 %, ob alles wie geplant klappt.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 2,
    "titel": "Mit welchen Werkzeugen kann man ein Projekt planen und überwachen?",
    "hauptpunkte": [
      "Projektstrukturplan (PSP): Gliederung aller Aufgaben.",
      "Netzplan: Darstellung zeitlicher Abhängigkeiten.",
      "Gantt-Diagramm: Visualisierung auf einer Zeitachse."
    ],
    "sprechernotizen": "Um ein Projekt im Griff zu behalten, nutzt man verschiedene grafische Werkzeuge. Der Projektstrukturplan ist dabei das Fundament – er zeigt, was alles zu tun ist, indem er das Gesamtprojekt in kleine Arbeitspakete zerlegt. Der Netzplan und das Gantt-Diagramm helfen uns dann dabei zu planen, wann und in welcher Reihenfolge diese Pakete abgearbeitet werden müssen.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 3,
    "titel": "Was ist ein Netzplan im Projektmanagement?",
    "hauptpunkte": [
      "Terminplanung: Grafische Darstellung der Vorgangsdauer.",
      "Logische Abhängigkeiten: Zeigt, welche Aufgabe auf welcher aufbaut.",
      "Pufferzeiten & Kritischer Pfad: Markierung zeitlicher Spielräume."
    ],
    "sprechernotizen": "Der Netzplan ist ein mächtiges Instrument zur Zeitplanung. Er besteht aus Rechtecken (Vorgängen) und Pfeilen, die die logische Abfolge darstellen. Das Ziel ist es, den gesamten Projektablauf als „Pfad“ zu visualisieren. Besonders wichtig sind hier die Pufferzeiten: Sie verraten uns, wie lange sich eine einzelne Aufgabe verzögern darf, ohne dass das gesamte Projektende nach hinten rutscht.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 4,
    "titel": "Was ist ein Gantt-Diagramm?",
    "hauptpunkte": [
      "Zeitachsen-Darstellung: Horizontale Balken zeigen die Dauer.",
      "Übersichtlichkeit: Ideal für kleine bis mittlere Projekte.",
      "Abhängigkeiten: Werden durch Pfeile zwischen Balken verdeutlicht."
    ],
    "sprechernotizen": "Das Gantt-Diagramm ist der Klassiker in der Projektleitung. Oben steht die Zeitachse, links die Aktivitäten. Jede Aktivität wird als Balken eingezeichnet. Man sieht sofort: „Aha, diese zwei Aufgaben laufen gleichzeitig (überlappend)“. Der große Vorteil ist die Einfachheit, aber Achtung: Bei hunderten Aufgaben wird es schnell unübersichtlich.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 5,
    "titel": "Was versteht man unter dem Top-Down-Ansatz beim Projektstrukturplan?",
    "hauptpunkte": [
      "Vom Ganzen zum Detail: Schrittweise Zerlegung.",
      "Struktur: Gesamtprojekt → Teilaufgaben → Arbeitspakete.",
      "Anwendung: Bei bekannten Projekten mit Erfahrungswerten."
    ],
    "sprechernotizen": "„Top-Down“ bedeutet „von oben nach unten“. Man startet mit dem großen Ziel (dem Gesamtprojekt) und bricht es immer weiter herunter, bis man bei den kleinsten Einheiten, den Arbeitspaketen, ankommt. Diesen Ansatz wählt man immer dann, wenn man schon früher ähnliche Projekte gemacht hat und genau weiß, welche groben Brocken auf einen zukommen.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 6,
    "titel": "Was versteht man unter dem Begriff Bottom-Up-Ansatz beim",
    "hauptpunkte": [
      "Vom Detail zum Ganzen: Sammeln von Teilproblemen.",
      "Synthese: Aufbau einer Baumstruktur aus Einzelteilen.",
      "Innovation: Ideal für völlig neue, innovative Lösungen."
    ],
    "sprechernotizen": "„Bottom-Up“ ist das Gegenteil: „von unten nach oben“. Man fängt bei den kleinen Details an, die man bereits kennt oder gelöst hat, und setzt daraus das große Ganze zusammen. Das ist besonders nützlich bei innovativen Projekten, wo man noch gar nicht genau weiß, wie das Endergebnis im Detail aussehen wird. Man prüft am Ende, ob alle gesammelten Teilaufgaben zusammen wirklich das Projekt ergeben.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 7,
    "titel": "Was versteht man unter dem 4-Phasen-Modell beim Projektmanagement?",
    "hauptpunkte": [
      "Projektdefinition",
      "Projektplanung",
      "Projektdurchführung und Controlling",
      "Projektabschluss"
    ],
    "sprechernotizen": "Dieses Modell strukturiert den Lebenszyklus eines Projekts. Zuerst wird geklärt, was wir überhaupt machen (Definition). Dann wird detailgenau geplant (Planung). In der dritten Phase wird gearbeitet und ständig kontrolliert, ob Zeit und Kosten noch stimmen (Controlling). Am Ende wird das Projekt offiziell übergeben und reflektiert (Abschluss). Als Alternative gibt es oft ein 5-Phasen-Modell, das die Initiierung als allerersten Schritt ergänzt.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 8,
    "titel": "Was bezeichnet man als kritischen Pfad beim Netzplan?",
    "hauptpunkte": [
      "Gesamtpuffer = Null: Kein zeitlicher Spielraum.",
      "Zeitbestimmend: Definiert die minimale Gesamtdauer.",
      "Risikofaktor: Jede Verzögerung hier verschiebt das Projektende."
    ],
    "sprechernotizen": "Der Kritische Pfad ist die wichtigste Linie in deinem Netzplan. Er besteht aus allen Vorgängen, die keinen Puffer haben (Puffer = 0). Wenn ein Mitarbeiter an einer Aufgabe auf diesem Pfad nur einen Tag länger braucht, ist das ganze Projekt sofort einen Tag zu spät. Als Projektleiter musst du diesen Pfad extrem scharf überwachen.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 9,
    "titel": "Bitte ergänze die fehlenden Elemente und Bezeichnungen eines",
    "hauptpunkte": [
      "Oben: Nummer | Vorgangsname.",
      "Mitte: Dauer | GP (Gesamtpuffer) | FP (Freier Puffer).",
      "Unten: Früheste/Späteste Zeitpunkte (FAZ, FEZ, SAZ, SEZ)."
    ],
    "sprechernotizen": "Ein einzelner Kasten im Netzplan heißt „Vorgangsknoten“. In der Mitte stehen die Pufferzeiten: Der GP (Gesamtpuffer) gibt an, wie viel Luft man hat, ohne das Projektende zu gefährden. Der FP (freie Puffer) zeigt, wie viel man schieben kann, ohne den nächsten Vorgang zu behindern. Die Ecken werden für die Termine genutzt: FAZ (Frühester Anfangszeitpunkt) und FEZ (Frühester Endzeitpunkt) werden vorwärts gerechnet, SAZ und SEZ rückwärts.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 10,
    "titel": "Was versteht man unter Forming, Storming, Norming und Performing im",
    "hauptpunkte": [
      "Forming: Orientierung, Kennenlernen, Rollen unklar.",
      "Storming: Konflikte, Machtkämpfe, Ziele werden klarer.",
      "Norming: Organisation, Regeln, Wir-Gefühl entsteht.",
      "Performing: Hochleistung, Effizienz, Selbstorganisation."
    ],
    "sprechernotizen": "Jedes neue Team durchläuft diese vier Stufen. Zuerst ist man höflich und unsicher (Forming). Dann knallt es oft, weil jeder seine Position sucht (Storming). Danach einigt man sich auf Spielregeln und Strukturen (Norming). Erst wenn das alles geklärt ist, erreicht das Team die Performing-Phase, in der es wirklich kreativ und effizient arbeitet. Ein guter Projektleiter muss in der Storming-Phase oft als Schlichter eingreifen.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 11,
    "titel": "Was bezeichnet man als Kick-Off-Meeting?",
    "hauptpunkte": [
      "Offizieller Start: Findet nach der Planung und vor der Durchführung",
      "Teilnehmer: Das gesamte Projektteam sowie wichtige Stakeholder.",
      "DIN-Norm: Definiert nach DIN-69901-5.",
      "Ziel: Gemeinsames Verständnis und Motivation für den Projektstart."
    ],
    "sprechernotizen": "Das Kick-Off-Meeting ist der „offizielle Startschuss“ eines Projekts. Laut den Quellen findet es genau an der Schnittstelle statt, wenn die theoretische Planung abgeschlossen ist und die praktische Arbeit beginnt. Es ist psychologisch extrem wichtig: Alle Beteiligten – vom Entwickler bis zum Auftraggeber – kommen zusammen, um sicherzustellen, dass jeder die Ziele und seine Rolle kennt. Es dient dazu, Transparenz zu schaffen und das Team auf ein gemeinsames Ziel einzuschwören.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 12,
    "titel": "Was versteht man unter einer Meilenstein-Planung?",
    "hauptpunkte": [
      "Grobe Terminplanung: Strukturierung des gesamten Projekts.",
      "Ereignisse transparent machen: Markierung wesentlicher Etappenziele.",
      "Sichtbarkeit von Verzögerungen: Auswirkungen auf Folgetermine werden",
      "Motivation: Erreichen von Zwischenzielen spornt das Team an."
    ],
    "sprechernotizen": "Meilensteine sind wie „Checkpoints“ in einem Videospiel. In der Planung sind sie Ereignisse von besonderer Bedeutung, die keine eigene Dauer haben, sondern einen erreichten Zustand markieren. Sie helfen dir als Projektleiter dabei, den Fortschritt zu bewerten: Haben wir das Design-Paket pünktlich abgeschlossen?. Wenn ein Meilenstein gerissen wird, sieht man sofort, welche anderen Termine dadurch gefährdet sind. Zudem dienen sie der Leistungsfortschrittsorientierung, um dem Auftraggeber zu zeigen, dass das Projekt vorankommt.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 13,
    "titel": "Welche Vorgehensmodelle solltest du im Projektmanagement,",
    "hauptpunkte": [
      "Klassische Modelle: Wasserfallmodell, V-Modell, Spiralmodell.",
      "Agile Modelle: Scrum, Kanban, Extreme Programming.",
      "Hybrid/Spezial: Inkrementelles Vorgehensmodell."
    ],
    "sprechernotizen": "In der IT-Welt unterscheidet man grundlegend zwischen zwei Philosophien. Die klassischen Modelle wie das Wasserfall- oder V-Modell setzen auf eine strikte, sequentielle Abfolge von Phasen. Das bietet viel Sicherheit in der Planung, ist aber unflexibel. Die agilen Modelle wie Scrum oder Kanban reagieren hingegen flexibel auf Änderungen und arbeiten in kurzen Zyklen. Für die Prüfung musst du diese Begriffe sicher zuordnen können, da sie das Grundgerüst für die Durchführung von Arbeitsaufgaben bilden.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 14,
    "titel": "Wähle anhand der Darstellung den kritischen Pfad aus.",
    "hauptpunkte": [
      "Definition: Der Pfad, der keine Gesamtpufferzeiten enthält.",
      "Identifikation: Suche den Weg durch das Netz, bei dem die Dauer am",
      "Ergebnis im Beispiel: Der Pfad über die Vorgänge A → C → E → F.",
      "Gefahrenpotential: Jede Verzögerung hier gefährdet das Gesamtprojekt."
    ],
    "sprechernotizen": "Schauen wir uns das Beispiel in den Quellen an: Wir haben zwei Wege von Anfang bis Ende. Weg 1 (A-B-D-F) dauert 10 + 15 + 10 + 10 = 45 Zeiteinheiten. Weg 2 (A-C-E-F) dauert 10 + 20 + 10 + 10 = 50 Zeiteinheiten. Da Weg 2 länger dauert und die Pufferzeiten dort Null sind, ist dies der Kritische Pfad. Als Planer musst du wissen: Wenn Vorgang C auch nur eine Stunde länger dauert, verschiebt sich das Projektende von 50 auf 51.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 15,
    "titel": "Erläutere die Vor- und Nachteile des Wasserfallmodells.",
    "hauptpunkte": [
      "Vorteile: Klare Abfolge, einfache Planung/Kontrolle, leichte",
      "Nachteil Unflexibilität: Keine Iterationen (Schleifen) vorgesehen.",
      "Nachteil Risiko: Spätes Erkennen von Fehlern in den Anforderungen.",
      "Eignung: Nur wenn Anforderungen zu Beginn zu 100 % feststehen."
    ],
    "sprechernotizen": "Das Wasserfallmodell ist das Urgestein der Vorgehensmodelle. Es ist super übersichtlich, weil eine Phase nach der anderen kommt. Aber es hat eine große Schwäche: Die Realität ist oft komplizierter. Wenn der Kunde erst am Ende merkt, dass er eigentlich etwas anderes wollte, ist es beim Wasserfallmodell oft zu spät oder extrem teuer, zurückzugehen. In den Quellen wird betont, dass es schwierig ist, bei großen Projekten bereits zu Beginn alles im Detail festzulegen.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 17,
    "titel": "Was versteht man unter dem Begriff Stakeholder?",
    "hauptpunkte": [
      "Anspruchsgruppen: Interne und externe Personen/Gruppen mit Interessen.",
      "Bedeutung: „Stake“ = Einsatz/Anspruch; „Holder“ = Besitzer.",
      "Beispiele: Kunden, Mitarbeiter, Eigentümer, Lieferanten.",
      "Einfluss: Sie können den Verlauf oder das Ergebnis eines Projekts"
    ],
    "sprechernotizen": "Ein Stakeholder ist jeder, der ein berechtigtes Interesse am Projekt hat. Das sind nicht nur die Leute, die direkt mitarbeiten. Ein verärgertem Nachbar einer Baustelle ist genauso ein Stakeholder wie der Chef der IT-Abteilung. Für den Projekterfolg ist es wichtig, diese Leute frühzeitig zu identifizieren und ihre Erwartungen zu managen, damit sie das Projekt unterstützen statt es zu blockieren.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 19,
    "titel": "Wie errechnet sich der Gewinn eines Unternehmens?",
    "hauptpunkte": [
      "Formel: Gewinn = Erlös – Kosten.",
      "Erlöse: Alle Einnahmen aus Verkäufen/Dienstleistungen.",
      "Kosten: Summe aus fixen Kosten (Miete) und variablen Kosten (Rohstoffe).",
      "Ziel: Positiver Wert bedeutet Erfolg; negativer Wert bedeutet Verlust."
    ],
    "sprechernotizen": "Diese einfache Formel ist die Basis für jedes kaufmännische Handeln. Um den Gewinn zu steigern, kann ein Unternehmen entweder die Erlöse erhöhen (mehr verkaufen oder Preise anheben) oder die Kosten senken. Zu den Kosten zählen dabei nicht nur das Material, sondern auch die Personalkosten und Mietkosten. Nur wer seinen Gewinn kennt, kann die Wirtschaftlichkeit seines Projekts beurteilen.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 20,
    "titel": "Was versteht man unter einer Machbarkeitsanalyse?",
    "hauptpunkte": [
      "Erweiterte Prüfung: Nutzt Tests, Simulationen und Expertenmeinungen.",
      "Zeitpunkt: Wird durchgeführt, wenn hohe Risiken oder Unsicherheiten",
      "Kernsäulen: Organisatorisch, wirtschaftlich, technisch, rechtlich,",
      "Ressourcenprüfung: Sind genug Menschen, Material und Maschinen"
    ],
    "sprechernotizen": "Die Machbarkeitsanalyse ist der „Realitätscheck“ für eine Projektidee. Bevor man Millionen investiert, prüft man: Haben wir die Technik überhaupt? (technisch) Dürfen wir das rechtlich? (rechtlich) Haben wir genug Zeit dafür? (zeitlich). Ein wichtiger Teil ist auch die wirtschaftliche Machbarkeit – also ob sich das Ganze am Ende finanziell lohnt. Wenn die Analyse negativ ausfällt, wird das Projekt meist gestoppt, um unkalkulierbare Risiken zu vermeiden.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 21,
    "titel": "Was sind Ziele einer Machbarkeitsanalyse?",
    "hauptpunkte": [
      "Technische Machbarkeit: Ist das Projekt technisch umsetzbar?",
      "Wirtschaftlichkeit: Wie sieht das Budget und die Finanzierung aus?",
      "Rechtliche Prüfung: Sind Lizenzen oder Patente betroffen?",
      "Ressourcen & Zeit: Stehen Material, Personal und Zeit zur Verfügung?"
    ],
    "sprechernotizen": "Die Machbarkeitsanalyse dient dazu, das Risiko eines Scheiterns zu minimieren, bevor große Summen investiert werden. Wir prüfen hierbei systematisch verschiedene Säulen: Organisatorisch (Können wir das intern stemmen?), Wirtschaftlich (Lohnt es sich?), Technisch (Haben wir das Know-how?), Rechtlich (Gibt es Hürden?) und Zeitlich (Schaffen wir die Deadline?). Oft werden hierfür Expertisen eingeholt oder Pilot-Tests und Simulationen durchgeführt, um verlässliche Daten zu erhalten.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 25,
    "titel": "Nenne die Vorteile für ein User-Helpdesk-Ticketsystem.",
    "hauptpunkte": [
      "Zentralisierung: Alle Anfragen werden gesammelt, kategorisiert und sind nachvollziehbar.",
      "Transparenz: Nutzer und IT sehen den Bearbeitungsstatus jederzeit.",
      "Wissensdatenbank: Gelöste Probleme dienen als Vorlagen für neue Fälle.",
      "Messbarkeit: Reaktions- und Lösungszeiten lassen sich analysieren."
    ],
    "sprechernotizen": "Ein Helpdesk-Ticketsystem ersetzt den chaotischen 'wer-schreit-am-lautesten'-Support. Statt Anfragen per Zuruf oder E-Mail, die verloren gehen können, wird jeder Vorfall als nummeriertes Ticket erfasst. Dies schafft Struktur und ermöglicht es, Service Level Agreements (SLAs) – also garantierte Reaktionszeiten – zu überwachen und zu erfüllen. Für Unternehmen ist es zudem ein Nachweis der geleisteten Arbeit.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 48,
    "titel": "Was ist eine Nutzwertanalyse?",
    "hauptpunkte": [
      "Entscheidungshilfe: Vergleich komplexer Handlungsalternativen.",
      "Punktbewertungsverfahren: Scoring-Modell mit gewichteten Kriterien.",
      "Skala: Bewertung oft von 1 (gering) bis 4 (sehr hoch)."
    ],
    "sprechernotizen": "Stell dir vor, du sollst für die Firma neue Drucker kaufen. Du hast drei Modelle zur Auswahl. In der Nutzwertanalyse legst du Kriterien fest (z. B. Preis, Druckgeschwindigkeit, Garantie) und gewichtest diese (z. B. ist der Preis wichtiger als die Garantie). Am Ende gewinnt das Modell mit der höchsten Punktzahl. Es macht eine subjektive Entscheidung objektiv nachvollziehbar – ein Muss für jedes professionelle IT-Projekt.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 78,
    "titel": "Was ist ein Network Attached Storage, kurz NAS?",
    "hauptpunkte": [
      "Dateibasiert: Einfach zu verwaltender Dateiserver mit eigenem Dateisystem",
      "Netzwerkanbindung: Bereitstellung von Kapazität im LAN via Ethernet.",
      "Protokolle: Zugriff über SMB/CIFS, NFS oder FTP.",
      "Management: Verwaltung über Web-Oberfläche und Integration in"
    ],
    "sprechernotizen": "Ein NAS ist im Grunde ein spezialisierter Computer, der nur für das Speichern von Dateien da ist. Er ist besonders bei kleinen und mittleren Unternehmen (KMU) beliebt, da er ohne tiefes Server- Expertenwissen einsatzbereit ist. • Konkretes Beispiel: In einer kleinen Werbeagentur steht ein NAS von Synology oder QNAP. Alle Mitarbeiter greifen über das Netzwerk auf denselben Ordner „Projekte“ zu (via SMB), um gemeinsam an Photoshop-Dateien zu arbeiten.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 131,
    "titel": "Nenne die Vor- und Nachteile der Virtualisierung von Servern und",
    "hauptpunkte": [
      "Vorteile: Massive Stromersparnis, hohe Skalierbarkeit und",
      "Vorteil Flexibilität: Schnellere Bereitstellung von Servern",
      "Nachteile: Mögliche Latenzzeiten bei zu vielen VMs pro Host; 24/7-Einsatz",
      "Abhängigkeit: Cloud-Lösungen sind nicht in allen Regionen verfügbar und"
    ],
    "sprechernotizen": "Virtualisierung ermöglicht es, die physische Hardware von der Software zu trennen. Warum ist das wichtig? Weil man so die Hardware- Ressourcen (CPU, RAM) viel effizienter auslastet. In der Cloud (Pay-as-you- go) entfallen zudem die hohen Investitionskosten für eigene Hardware. • Konkretes Beispiel: Ein Unternehmen benötigt für ein neues Projekt kurzfristig fünf Testserver. Statt fünf physische Server zu kaufen und zu verkabeln, erstellt der Administrator in wenigen Minuten fünf virtuelle Maschinen (VMs) auf einem bereits vorhandenen starken Host-System.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 133,
    "titel": "Welche Arten von Anforderungen gibt es an Software?",
    "hauptpunkte": [
      "Geschäftsanforderungen: Festgelegt durch Management und Marketing",
      "Benutzeranforderungen: Anforderungen der Endanwender, definiert durch",
      "Funktionale Anforderungen: Beschreiben das konkrete Verhalten/Funktionen",
      "Projektanforderungen: Notwendig für den Erfolg des Projekts und das"
    ],
    "sprechernotizen": "Bevor Software entwickelt oder gekauft wird, muss geklärt werden, was sie eigentlich leisten soll. Man unterscheidet dabei die Sichtweise des Business (Geld verdienen/sparen) von der Sichtweise des Nutzers (einfache Bedienung) und der technischen Funktion. • Konkretes Beispiel: Für eine neue Lager-App lautet eine funktionale Anforderung: „Das System muss Barcodes über die Handykamera einscannen können.“ Eine Geschäftsanforderung wäre: „Die App muss die Fehlerquote beim Versenden um 15 % senken.“",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 137,
    "titel": "Was versteht man unter dem Begriff der Bedarfsanalyse?",
    "hauptpunkte": [
      "Definition: Analyse zur Feststellung des Bedarfs an Waren,",
      "Fokus: Bestimmte Regionen/Länder, Personengruppen oder Zeiträume.",
      "Zweck: Bessere Planung von Beschaffungsprozessen oder Projekten."
    ],
    "sprechernotizen": "Die Bedarfsanalyse steht am Anfang jedes erfolgreichen IT- Projekts. Sie klärt die Frage: „Was brauchen wir eigentlich wirklich?“. Ohne diese Analyse besteht die Gefahr, dass man Hardware kauft, die niemand nutzt, oder Personal einstellt, für das es keine Aufgaben gibt. • Konkretes Beispiel: Bevor eine Firma 500 neue Laptops bestellt, führt sie eine Bedarfsanalyse durch. Dabei stellt sich heraus, dass 100 Mitarbeiter im Außendienst LTE-Module benötigen, während die restlichen 400 im Büro nur WLAN brauchen. Das spart unnötige Kosten für teure Hardware-Optionen.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 226,
    "titel": "Beschreibe die fünf Punkte der SMART-Methode im Projektmanagement.",
    "hauptpunkte": [
      "S - Spezifisch: Ziele so konkret wie möglich formulieren.",
      "M - Messbar: Erfolg muss objektiv überprüfbar sein.",
      "A - Aktivierend/Attraktiv: Ziele müssen motivieren.",
      "R - Realistisch: Ziele müssen innerhalb des Zeitrahmens machbar sein.",
      "T - Terminiert: Ziele müssen zeitlich bindend sein (Bis wann?)."
    ],
    "sprechernotizen": "SMART hilft dabei, vage Wünsche in echte, erreichbare Projektziele zu verwandeln. Ein Ziel wie \"Wir wollen besser werden\" ist nicht SMART. • Konkretes Beispiel: Ein smartes Ziel für einen Azubi lautet: \"Ich werde die Datenbank-Migration (S) bis zum 30. Juni (T) abschließen, wobei null Datenverluste auftreten dürfen (M). Das Ziel ist durch vorhandene Tools machbar (R) und steigert meine Verantwortung im Team (A).\"",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 249,
    "titel": "Was versteht man bei den Leitungssystemen unter einem",
    "hauptpunkte": [
      "Mehrfachunterstellung: Eine untergeordnete Stelle erhält Weisungen von",
      "Prinzip: Es gilt das Prinzip der kürzesten Wege.",
      "Vorteil: Direkte Kommunikation und Spezialisierung der Vorgesetzten."
    ],
    "sprechernotizen": "Im Mehrliniensystem muss ein Mitarbeiter nicht erst über seinen direkten Chef gehen, wenn er eine Anweisung von einem Fachabteilungsleiter erhält. Das beschleunigt Prozesse, kann aber zu widersprüchlichen Befehlen führen. • Konkretes Beispiel: Ein IT-Techniker erhält fachliche Anweisungen vom Projektleiter und gleichzeitig disziplinarische Vorgaben vom Personalchef.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 252,
    "titel": "Was versteht man bei den Leitungssystemen unter dem Begriff",
    "hauptpunkte": [
      "Mehrdimensionale Struktur: Erweiterung des Mehrliniensystems, bei dem",
      "Vorteile: Förderung von Teamarbeit und eine flexible Berücksichtigung von",
      "Nachteile: Erhöhter Kommunikationsaufwand und oft unklare"
    ],
    "sprechernotizen": "In der Matrixorganisation werden funktionale Abteilungen (z. B. Technik, Vertrieb) mit objektbezogenen Linien (z. B. Produkte oder Projekte) gekreuzt. Das führt oft zu Konflikten, da ein Mitarbeiter „zwei Herren“ dienen muss. • Konkretes Beispiel: Ein App-Entwickler gehört fachlich zur Abteilung Technik. Gleichzeitig ist er dem Team „Produkt Cloud-Speicher“ zugeordnet. Wenn der Abteilungsleiter Technik eine Fortbildung ansetzt, der Produktmanager aber gleichzeitig ein wichtiges Feature-Release verlangt, muss der Mitarbeiter den Konflikt moderieren.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 256,
    "titel": "Was versteht man unter den Begriffen berufliche Fortbildung und",
    "hauptpunkte": [
      "Berufliche Fortbildung: Ziel ist es, die berufliche Handlungsfähigkeit zu",
      "Berufliche Umschulung: Soll zu einer anderen beruflichen Tätigkeit",
      "Rechtsgrundlage: Beide sind Teilbereiche der Berufsbildung nach dem"
    ],
    "sprechernotizen": "Fortbildung baut auf dem vorhandenen Beruf auf, während Umschulung einen kompletten Richtungswechsel darstellt. • Konkretes Beispiel: ◦ Fortbildung: Ein Fachinformatiker macht eine Prüfung zum „Geprüften IT-Projektleiter“, um mehr Verantwortung zu übernehmen. ◦ Umschulung: Eine gelernte Hotelfachfrau macht eine zweijährige Ausbildung zur Fachinformatikerin, da sie in ihrem alten Beruf keine Zukunft mehr sieht.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 261,
    "titel": "Nenne die wesentlichen Bestandteile eines Abnahmeprotokolls für ein",
    "hauptpunkte": [
      "Identifikation: Gegenstand der Abnahme sowie beteiligte Personen und",
      "Rahmenbedingungen: Ort, Datum und Uhrzeit der Abnahme.",
      "Kriterien: Prüfung der vereinbarten Liefergegenstände, Leistungen und",
      "Technische Prüfung: Nachweis über die Erfüllung funktionaler und nicht-",
      "Rechtssicherheit: Unterschriften der autorisierten Vertreter beider"
    ],
    "sprechernotizen": "Das Abnahmeprotokoll ist das wichtigste Dokument am Ende eines Projekts. Es markiert den Gefahrenübergang und ist die Basis für die Rechnungsstellung. Wichtig ist, dass hier auch festgehalten wird, wie mit kleinen Restmängeln verfahren wird, damit das Projekt dennoch formal abgeschlossen werden kann. • Konkretes Beispiel: Nach der Installation eines neuen Serversystems unterschreibt der Kunde das Protokoll. Darin wird vermerkt, dass die Hardware einwandfrei läuft, aber noch eine Dokumentation für die Datensicherung nachgereicht werden muss (Umgang mit offenen Punkten).",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 262,
    "titel": "Welche Schritte sind notwendig nach Abschluss erfolgter",
    "hauptpunkte": [
      "Abnahmeform: Vereinbarung einer Teil- oder Vollabnahme zwischen",
      "Funktionsprüfung: Kontrolle aller Positionen des Auftrags auf korrekte",
      "Protokollierung: Gemeinsame Erstellung des Abnahmeprotokolls inklusive",
      "Mängelmanagement: Festlegung von Fristen für eventuelle Nachbesserungen",
      "Gewährleistung: Schriftlicher Hinweis auf bestehende Garantie- und"
    ],
    "sprechernotizen": "Nachdem die Arbeit getan ist, muss die Leistung formal \"übergeben\" werden. Das Abnahmeprotokoll dient hier als Beweismittel, dass der Auftragnehmer seine Pflichten erfüllt hat. Ab diesem Zeitpunkt beginnt in der Regel auch die Gewährleistungsfrist zu laufen. • Konkretes Beispiel: Ein Systemhaus hat 50 neue Arbeitsplätze eingerichtet. Der IT-Leiter des Kunden geht mit dem Projektleiter jeden Platz durch. Da zwei Monitore Pixelfehler haben, werden diese im Protokoll als Mangel mit einer Austauschfrist von einer Woche festgehalten.",
    "kategorie": "Projektmanagement"
  },
  {
    "id": 265,
    "titel": "Was verbirgt sich hinter dem Begriff Rollout?",
    "hauptpunkte": [
      "Definition: \"Herausrollen\" bzw. Einführung von neuer Hard- und Software",
      "Anwendungsbereiche: Austausch alter Hardware gegen neue,",
      "Szenarien: Komplette Ausstattung eines neuen Standorts oder sukzessiver"
    ],
    "sprechernotizen": "Ein Rollout ist ein logistisches und technisches Großprojekt. Es geht darum, eine definierte Menge an IT-Komponenten in einem festgelegten Zeitrahmen an die Nutzer zu bringen und einsatzbereit zu machen. • Konkretes Beispiel: Ein Unternehmen entscheidet, alle 500 Außendienstmitarbeiter mit neuen Tablets auszustatten. Dieser Prozess – von der Konfiguration über den Versand bis zur Einweisung – wird als IT- Hardware-Rollout bezeichnet.",
    "kategorie": "Projektmanagement"
  }
];
