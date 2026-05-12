// AP1 Lernkarten – Kategorie: Cloud/Virtualisierung (15 Karten)
const CARDS_CLOUD_VIRTUALISIERUNG = [
  {
    "id": 53,
    "titel": "Worin besteht in der Virtualisierung von Hostsystemen der",
    "hauptpunkte": [
      "Typ 1 (Bare-Metal): Läuft direkt auf der Hardware; kein Betriebssystem",
      "Typ 2 (Hosted): Benötigt ein installiertes Host-Betriebssystem (z. B.",
      "Hardware-Support: Erfordert CPU-Funktionen wie Intel-VT oder AMD-V.",
      "Treiber: Typ 2 nutzt die Gerätetreiber des Host-Betriebssystems."
    ],
    "sprechernotizen": "Die Virtualisierung erlaubt es, mehrere „virtuelle Computer“ auf einer physischen Maschine laufen zu lassen. Typ 1 ist effizienter, da kein „Ballast“ durch ein darunterliegendes Windows oder Linux entsteht – er ist der Standard im Rechenzentrum. • Konkretes Beispiel: ◦ Typ 1: Auf einem leistungsstarken Server im Keller läuft VMware ESXi direkt. Darauf sind 10 verschiedene virtuelle Server installiert. ◦ Typ 2: Du sitzt an deinem Laptop mit Windows 11 und möchtest Linux testen. Du installierst Oracle VirtualBox als Programm und startest darin Linux.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 64,
    "titel": "Nenne die verschiedenen Cloud-Formen, die durch Cloud Computing",
    "hauptpunkte": [
      "Public Cloud: Öffentliche Infrastruktur für jedermann.",
      "Private Cloud: Exklusive Nutzung für ein einzelnes Unternehmen.",
      "Hybrid Cloud: Kombination aus Public und Private Cloud.",
      "Community Cloud: Gemeinsame Nutzung durch Institutionen mit ähnlichen",
      "Spezialformen: Virtual Private Cloud und Multi Cloud."
    ],
    "sprechernotizen": "Bei Cloud-Formen geht es darum, wer Zugriff auf die Hardware hat. Die Public Cloud ist kostengünstig, während die Private Cloud maximale Kontrolle bietet. • Konkretes Beispiel: Eine Bank nutzt eine Hybrid Cloud. Die unkritische Webseite läuft in einer günstigen Public Cloud, während die hochsensiblen Kontodaten der Kunden in einer physisch gesicherten Private Cloud im eigenen Keller liegen.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 65,
    "titel": "Was versteht man unter dem Begriff Green-IT?",
    "hauptpunkte": [
      "Ressourcenschonung: Umweltgerechte Gestaltung über den gesamten",
      "Optimierung: Energieeffizienz bei Herstellung, Betrieb und Entsorgung.",
      "Maßnahmen: Einsatz von Virtualisierung, Videokonferenzen und"
    ],
    "sprechernotizen": "Green-IT ist kein einzelnes Produkt, sondern eine Strategie. Es geht darum, den ökologischen Fußabdruck der IT zu minimieren, etwa durch weniger Dienstreisen (Dank Teams/Zoom) oder Hardware, die weniger Abwärme produziert. • Konkretes Beispiel: Ein Unternehmen ersetzt 20 alte Einzelserver durch einen einzigen starken Host mit Virtualisierung. Dadurch sinkt der Stromverbrauch für den Betrieb und die Klimaanlage im Serverraum massiv.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 67,
    "titel": "Nenne die Vorteile des Servicemodells PaaS (Platform as a Service).",
    "hauptpunkte": [
      "Effizienz: Reduzierter Programmieraufwand durch fertige",
      "Skalierbarkeit: Einfache Entwicklung für mehrere Plattformen (Web,",
      "Kosten: Nutzung teurer Tools ohne Eigeninvestition möglich.",
      "Management: Effiziente Verwaltung des Anwendungslebenszyklus."
    ],
    "sprechernotizen": "PaaS richtet sich an Softwareentwickler. Man bekommt eine fertige Umgebung, in der man sofort programmieren kann, ohne sich um die Server-Konfiguration kümmern zu müssen. • Konkretes Beispiel: Ein Entwicklerteam nutzt Google App Engine (PaaS). Sie laden nur ihren Java-Code hoch. Die Plattform kümmert sich automatisch darum, dass die App im Internet erreichbar ist und bei vielen Zugriffen mehr Leistung erhält.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 68,
    "titel": "Erkläre den Cloud Computing Begriff Software as a Service (SaaS).",
    "hauptpunkte": [
      "Fertiges Produkt: Software wird als Dienstleistung zur Verfügung",
      "Zugang: Meist einfach via Webbrowser erreichbar.",
      "Lizenzmodell: Kein Kauf, sondern Nutzung (Abo-Modell).",
      "Wartung: Updates und Betrieb übernimmt komplett der Cloudanbieter."
    ],
    "sprechernotizen": "SaaS ist das bekannteste Modell für Endanwender. Man muss nichts installieren; die Software läuft im Rechenzentrum des Anbieters. • Konkretes Beispiel: Statt Microsoft Office auf jedem PC einzeln zu installieren, nutzt eine Firma Microsoft 365 (SaaS). Die Mitarbeiter schreiben Briefe einfach direkt im Browser, und Microsoft sorgt dafür, dass die Software immer aktuell ist.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 135,
    "titel": "Welches ist die kostengünstigste Variante über eine Laufzeit von 3",
    "hauptpunkte": [
      "Leasing: 36 Raten à 3.500 € + Service = 156.000 € (Rang 3).",
      "Kauf: 100.000 € Anschaffung + Service = 130.000 € (Rang 2).",
      "Pay-per-use: 3,22 €/h für 3 Jahre (26.280 h) = 84.621,60 € (Rang 1).",
      "Ergebnis: Das Pay-per-use Modell ist in diesem Szenario am günstigsten."
    ],
    "sprechernotizen": "In der kaufmännischen Prüfung musst du solche Rechnungen durchführen können. Pay-per-use rechnet die Nutzung stunden- oder minutengenau ab. In diesem Beispiel zeigt sich, dass ein Mietmodell basierend auf der tatsächlichen Zeit deutlich günstiger sein kann als eine hohe Einmalinvestition oder starre Leasingraten. • Konkretes Beispiel: Ein Startup nutzt für seine Berechnungen Cloud- Instanzen. Da sie diese nur bezahlen, wenn sie wirklich laufen, zahlen sie über drei Jahre nur ca. 85.000 €, während sie für den Kauf eigener Server sofort 100.000 € plus Wartungsverträge auf den Tisch legen müssten.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 148,
    "titel": "Erläutere die Vor- und Nachteile beim Lizenzmodell Pay-per-use.",
    "hauptpunkte": [
      "Vorteile: Keine Kapitalbindung, individuelle Skalierbarkeit, kein",
      "Nachteile: Im 24/7-Dauerbetrieb oft teurer als Kauf; Risiko bei",
      "Kosten: Abrechnung erfolgt auf Basis der Nutzungsdauer (stunden- oder"
    ],
    "sprechernotizen": "Pay-per-use ist wie ein Mietwagen: Du zahlst nur, wenn du fährst. Das ist perfekt für unvorhersehbare Lastspitzen. Wenn du jedoch weißt, dass du das Auto das ganze Jahr über jeden Tag brauchst, wäre ein Kauf oder Leasing wahrscheinlich günstiger. • Konkretes Beispiel: Ein Online-Händler benötigt für das Weihnachtsgeschäft im Dezember die dreifache Serverleistung. Er nutzt Pay- per-use in der Cloud. Im Januar fährt er die Leistung wieder herunter und zahlt sofort wieder weniger, ohne teure Hardware im Keller stehen zu haben, die dann 11 Monate lang verstaubt.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 158,
    "titel": "Was versteht man unter Standardsoftware?",
    "hauptpunkte": [
      "Vorgefertigt: Software, die für den breiten Markt produziert wird.",
      "Installation: Wird meist vom Anwender selbst installiert und nur minimal",
      "Bezug: Kann als On-Premise-Kauf oder als Software as a Service (SaaS)"
    ],
    "sprechernotizen": "Standardsoftware ist wie Kleidung „von der Stange“. Sie ist sofort einsatzbereit, deckt aber vielleicht nicht jeden speziellen Wunsch ab. Da sie in großen Mengen verkauft wird, ist sie in der Regel viel günstiger als eine Eigenentwicklung. • Konkretes Beispiel: Ein Unternehmen nutzt Microsoft Word. Jede Firma auf der Welt nutzt dieselben Funktionen dieses Programms. Es ist eine typische Standardsoftware, die günstig lizenziert werden kann.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 164,
    "titel": "Was versteht man bei Rechenzentrumsbetrieb unter Skalierbarkeit?",
    "hauptpunkte": [
      "Anpassungsfähigkeit: Fähigkeit von Hardware/Software, im laufenden",
      "Ressourcenmanagement: Anpassung von CPU-Kernen, Arbeitsspeicher oder",
      "Bedarfsgerecht: Automatische Zuweisung von Ressourcen je nach",
      "Verfügbarkeit: Dient der Aufrechterhaltung des 24/7-Betriebs."
    ],
    "sprechernotizen": "Skalierbarkeit ist das Herzstück moderner Cloud- Infrastruktur. Man unterscheidet oft zwischen vertikaler Skalierung (einem Server mehr Power geben) und horizontaler Skalierung (mehr Server zum Verbund hinzufügen). Ziel ist es, dass das System bei hoher Last nicht zusammenbricht, aber bei niedriger Last auch keine teuren Ressourcen verschwendet. • Konkretes Beispiel: Ein Online-Shop erwartet am „Black Friday“ einen massiven Ansturm. Dank Skalierbarkeit weist das Rechenzentrum der virtuellen Maschine des Shops automatisch mehr CPU-Kerne und RAM zu, damit die Kunden auch bei 10.000 gleichzeitigen Zugriffen flüssig bestellen können.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 198,
    "titel": "Was sollte beim Recyceln von IT-Produkten beachtet werden?,",
    "hauptpunkte": [
      "WEEE-Richtlinie: Gesetzliche Vorgabe für die Entsorgung von Elektro-",
      "Herstellerverantwortung: Hersteller sind für ihre Produkte über die",
      "Kategorien: Unterscheidung zwischen IuK-Technik (PCs, Handys) und",
      "Verbot: Elektrogeräte gehören nicht in den Hausmüll,."
    ],
    "sprechernotizen": "Elektronikschrott enthält wertvolle Rohstoffe wie Gold und Kupfer, aber auch giftige Substanzen wie Blei oder Quecksilber,. Daher müssen Geräte fachgerecht und umweltgerecht entsorgt werden,. In Betrieben muss dies oft über zertifizierte Entsorger dokumentiert werden,. • Konkretes Beispiel: Eine Firma tauscht ihre alten Monitore aus. Statt sie im Container zu entsorgen, werden sie bei einem lizenzierten Recycler abgegeben, der die Gehäuse kunststoffrein trennt und die Platinen zur Edelmetallrückgewinnung weiterleitet.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 244,
    "titel": "Mit welchen Maßnahmen kann der Umweltschutz im IT-Betrieb verstärkt",
    "hauptpunkte": [
      "Hardware-Wahl: Kauf von Green-IT Komponenten und Nutzung von SSDs anstatt",
      "Energiemanagement: Nutzung von Standby-Regeln für Monitore/Desktops und",
      "Effizienz: Virtualisierung von Servern und Applikationen zur Reduktion"
    ],
    "sprechernotizen": "Umweltschutz in der IT spart nicht nur Ressourcen, sondern durch geringeren Stromverbrauch auch massiv Kosten. Virtualisierung ist hierbei einer der größten Hebel. • Konkretes Beispiel: Ein Unternehmen ersetzt 10 physische Server durch einen starken Host-Server, auf dem alle Systeme virtuell laufen. Dies reduziert die Stromaufnahme und die benötigte Kühlleistung im Serverraum erheblich.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 245,
    "titel": "Welches sind die ökonomischen Ziele eines Unternehmens?",
    "hauptpunkte": [
      "Ertragsziele: Fokus auf Umsatz, Gewinn und Kapitalzusammenhänge.",
      "Marktziele: Erreichung eines gewünschten Marktanteils oder Steigerung",
      "Leistungsziele: Sicherstellung von Arbeitsplätzen und Einhaltung gewisser"
    ],
    "sprechernotizen": "Ökonomische Ziele bilden den Kompass für unternehmerische Entscheidungen. Während Ertragsziele oft kurzfristig im Fokus stehen, dienen Marktziele der langfristigen Existenzsicherung. • Konkretes Beispiel: Ein IT-Startup setzt sich als Marktziel, innerhalb der ersten zwei Jahre 5 % Marktanteil im Bereich Cloud-Speicher für Anwaltskanzleien zu gewinnen.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 246,
    "titel": "Unterscheide die 3 Cloud-Computing Begriffe IaaS, SaaS und PaaS.",
    "hauptpunkte": [
      "IaaS (Infrastructure as a Service): Ersatz für traditionelle",
      "PaaS (Platform as a Service): Architektur, die Entwicklungs- und",
      "SaaS (Software as a Service): Software wird als Service zur Verfügung"
    ],
    "sprechernotizen": "Man kann sich diese Modelle wie eine Pyramide vorstellen. Bei IaaS verwaltet der Kunde noch fast alles selbst, bei SaaS nutzt er lediglich das fertige Endprodukt. • Konkretes Beispiel: ◦ IaaS: Mieten eines virtuellen Windows-Servers bei Azure. ◦ PaaS: Nutzen von Google App Engine, um eine eigene App ohne Serververwaltung zu hosten. ◦ SaaS: Nutzen von Microsoft 365 für die tägliche Textverarbeitung.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 257,
    "titel": "Was versteht man unter einer beruflichen Weiterbildung?",
    "hauptpunkte": [
      "Vertiefung: Klassische Form zur Ergänzung oder Vertiefung bereits",
      "Beispiele:"
    ],
    "sprechernotizen": "Weiterbildung ist heute lebenslanges Lernen. In der IT ist dies besonders durch Hersteller-Zertifizierungen (z. B. Microsoft, Cisco, AWS) geprägt. • Konkretes Beispiel: Ein Systemadministrator besucht ein dreitägiges Intensiv-Seminar zu Azure-Cloud-Infrastrukturen, um das entsprechende Zertifikat zu erlangen und die neuen Cloud-Dienste der Firma betreuen zu können.",
    "kategorie": "Cloud/Virtualisierung"
  },
  {
    "id": 260,
    "titel": "Was versteht man unter dem Begriff Nachhaltigkeit in der",
    "hauptpunkte": [
      "Definition: Bewusstes und verantwortungsvolles Handeln zur Schonung",
      "Maßnahmen:"
    ],
    "sprechernotizen": "Nachhaltigkeit (Green IT) ist sowohl ökologisch als auch ökonomisch sinnvoll, da sie oft die Betriebskosten (vor allem Strom) massiv senkt. • Konkretes Beispiel: Ein Rechenzentrum nutzt Free Cooling. Im Winter wird keine energieintensive Kältemaschine genutzt; stattdessen wird die kalte Außenluft über Wärmetauscher zur Kühlung der Server-Racks verwendet, was den Strombedarf drastisch reduziert.",
    "kategorie": "Cloud/Virtualisierung"
  }
];
