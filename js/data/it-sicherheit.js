// AP1 Lernkarten – Kategorie: IT-Sicherheit (65 Karten)
const CARDS_IT_SICHERHEIT = [
  {
    "id": 18,
    "titel": "Welches sind die Hauptziele der Datensicherheit?",
    "hauptpunkte": [
      "Vertraulichkeit: Zugriff nur für Befugte.",
      "Integrität: Daten müssen korrekt, unverändert und verlässlich sein.",
      "Verfügbarkeit: Systeme und Daten müssen jederzeit erreichbar sein."
    ],
    "sprechernotizen": "Diese drei Begriffe bilden das Fundament der IT- Sicherheit. Vertraulichkeit bedeutet: „Niemand darf mitlesen, der es nicht darf“. Integrität bedeutet: „Die Daten wurden auf dem Weg nicht manipuliert“. Verfügbarkeit bedeutet: „Wenn ich die Daten brauche, muss der Server auch laufen“. In der Prüfung werden diese Ziele oft im Zusammenhang mit technischen Maßnahmen abgefragt.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 37,
    "titel": "Welche Bedingungen und welche Haftungsregeln gelten bei einer",
    "hauptpunkte": [
      "Gründung: Mindestens zwei Personen für ein vollkaufmännisches",
      "Haftungsumfang: Alle Gesellschafter haften persönlich, unbegrenzt und",
      "Gesamtschuldnerisch: Jeder Gesellschafter haftet für alle"
    ],
    "sprechernotizen": "Die oHG ist für die Gesellschafter eine sehr „ernste“ Rechtsform. Das Wort „unbeschränkt“ bedeutet nämlich, dass man im Ernstfall nicht nur mit dem Geld der Firma haftet, sondern auch mit seinem Privatvermögen (Haus, Auto, Erspartes). Wenn die Firma Schulden macht, kann sich der Gläubiger aussuchen, welchen der Partner er zur Kasse bittet – das ist das Prinzip der gesamtschuldnerischen Haftung.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 52,
    "titel": "Was ist bei der Außerbetriebnahme von IT-Systemen zu beachten?",
    "hauptpunkte": [
      "Ankündigung: Rechtzeitige Information an Personal und Kunden.",
      "Datensicherheit: Archivierung unter Beachtung der Aufbewahrungsfristen.",
      "Migration: Validierung der Daten auf dem neuen System.",
      "Entsorgung: Fachgerechte Vernichtung (z. B. nach DoD 5220.22-M)."
    ],
    "sprechernotizen": "Wenn ein altes System abgeschaltet wird, darf nichts verloren gehen, aber es dürfen auch keine sensiblen Daten in falsche Hände geraten. Besonders wichtig ist die Validierung: Man prüft, ob die umgezogenen Daten auf dem neuen System korrekt funktionieren, bevor das alte System physisch vernichtet wird. • Konkretes Beispiel: Ein alter Fileserver wird durch eine Cloud-Lösung ersetzt. Zuerst wird der Termin angekündigt, damit niemand während des Umzugs Daten speichert. Nach der Migration wird stichprobenartig geprüft, ob alle PDFs lesbar sind. Schließlich werden die alten Festplatten von einem zertifizierten Fachbetrieb geschreddert, um Datendiebstahl zu verhindern.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 56,
    "titel": "Welche technischen Merkmale hat ein Notebook?",
    "hauptpunkte": [
      "Mobilität: Integrierter Akku und eigenes Display.",
      "Konnektivität: WLAN, Bluetooth und teilweise WWAN (LTE/5G).",
      "Schnittstellen: USB, HDMI, DisplayPort/Mini-DP.",
      "Erweiterbarkeit: Oft Anschluss für Dockingstationen oder Mini-PCI-"
    ],
    "sprechernotizen": "Ein Notebook bündelt alle Komponenten eines PCs in einem Gehäuse. Typische Merkmale sind die kompakte Bauweise und die Auslegung auf drahtlose Kommunikation. Viele Business-Geräte verfügen zudem über Smartcard-Reader oder Kartenleser für die Sicherheit. • Konkretes Beispiel: Ein Außendienstmitarbeiter benötigt ein Notebook mit WWAN-Modul (SIM-Karte). So kann er im Zug über das Mobilfunknetz auf Firmendaten zugreifen, ohne auf öffentliches WLAN angewiesen zu sein. Im Büro nutzt er dann die Dockingstation-Schnittstelle.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 63,
    "titel": "Nenne Vorteile des USB-C Anschlusses gegenüber den USB-Typen A und",
    "hauptpunkte": [
      "Reversible Steckrichtung: Kein „falsches“ Einstecken mehr möglich.",
      "Leistung: Höhere Leistungsfähigkeit und schnellere Ladezeiten.",
      "Design: Kompaktes Design für flache Geräte.",
      "Funktionalität: Bidirektionale Stromversorgung und Zukunftssicherheit."
    ],
    "sprechernotizen": "USB-C ist der aktuelle Industriestandard. Der größte Vorteil im Alltag ist der punktsymmetrische Stecker. Technisch ermöglicht er zudem Power Delivery (Laden großer Geräte) und das Übertragen von Videosignalen gleichzeitig. • Konkretes Beispiel: Ein modernes Büro-Setup nutzt einen Monitor, der per USB-C mit dem Laptop verbunden ist. Über dieses eine Kabel wird das Bild an den Monitor gesendet, während der Laptop gleichzeitig vom Monitor geladen wird.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 72,
    "titel": "Welche Aufgabe übernimmt ein Datenbankmanagementsystem, kurz DBMS?",
    "hauptpunkte": [
      "Datenverwaltung: Speicherung, Änderung und Löschung von Daten sowie",
      "Sicherheit & Integrität: Gewährleistung von Datenschutz und",
      "Mehrbenutzerbetrieb: Absicherung durch ein strukturiertes",
      "Programmierung: Unterstützung von Triggern und Stored Procedures."
    ],
    "sprechernotizen": "Ein DBMS ist die Software-Schicht, die zwischen den physischen Daten auf der Festplatte und dem Nutzer (oder der Applikation) liegt. Es sorgt dafür, dass Abfragen optimiert werden und dass Daten „integer“ bleiben – also logisch korrekt und widerspruchsfrei. Ein Kernaspekt ist das Transaktionskonzept: Es verhindert, dass Datenchaos entsteht, wenn zwei Nutzer gleichzeitig denselben Datensatz ändern wollen. • Konkretes Beispiel: Bei einem Online-Shop verhindert das DBMS, dass ein und dasselbe letzte Paar Schuhe an zwei Kunden gleichzeitig verkauft wird. Sobald der erste Kunde den Kaufprozess startet, „reserviert“ das DBMS den Datensatz (Transaktion), bis der Kauf abgeschlossen oder abgebrochen ist.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 73,
    "titel": "Was ist eine DMZ?",
    "hauptpunkte": [
      "Sicherheits-Subnetz: Trennung von internem und externem Netzwerk durch",
      "Regelwerk: Steuerung des Datenverkehrs durch spezifische Firewall-Regeln.",
      "Exponierte Server: Standort für Web-, Mail- oder Proxy-Server, die vom",
      "Stufenkonzept: Unterscheidung in einstufige und zweistufige DMZ."
    ],
    "sprechernotizen": "Die DMZ (Demilitarisierte Zone) fungiert als Pufferzone. Sie schützt das wertvolle interne Netz (Intranet), indem sie Dienste, die nach außen hin offen sein müssen, in ein isoliertes Segment verschiebt. Selbst wenn ein Hacker einen Webserver in der DMZ übernimmt, verhindern die Firewall-Regeln, dass er von dort aus einfach in das interne Lohnbuchhaltungs-System weiterspringen kann. • Konkretes Beispiel: Ein Unternehmen betreibt einen eigenen Webserver. Dieser steht in der DMZ. Kunden aus dem Internet dürfen per HTTP-Regel auf diesen Server zugreifen, aber der Zugriff vom Webserver auf die internen Datenbanken des Unternehmens ist durch eine zweite Firewall streng reglementiert.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 77,
    "titel": "Was ist eine Broadcast-Domäne?",
    "hauptpunkte": [
      "Logischer Netzbereich: Gruppe von Geräten, die sich auf OSI-Schicht 2",
      "Erreichbarkeit: Ein Broadcast (Adresse: ff:ff:ff:ff:ff:ff) erreicht alle",
      "Begrenzung: Unterteilung erfolgt durch Router (L3), VLANs oder Subnetze."
    ],
    "sprechernotizen": "Eine Broadcast-Domäne umfasst alle Geräte, die eine Rundsendung eines Teilnehmers empfangen. Zu viele Geräte in einer Domäne führen zu „Datenstau“, da jeder Broadcast von jeder Netzwerkkarte verarbeitet werden muss. • Konkretes Beispiel: Wenn ein PC die MAC-Adresse seines Standard-Gateways nicht kennt, sendet er einen ARP-Request (Broadcast). Alle PCs im selben Switch-Verbund empfangen diese Anfrage. Um diesen „Lärm“ zu begrenzen, unterteilt man ein großes Firmennetzwerk oft in kleinere VLANs (Abteilung A und Abteilung B können sich so nicht gegenseitig mit Broadcasts stören).",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 95,
    "titel": "Welche Aufgabe hat das Simple Network Management Protocol, kurz",
    "hauptpunkte": [
      "Zentrale Verwaltung: Überwachen und Steuern von Netzwerklementen von",
      "Agenten-Struktur: SNMP-Agenten auf den Geräten kommunizieren mit der",
      "Kommunikation: Nutzt SNMP-Traps (Meldungen vom Gerät) oder GET-Requests",
      "Ports: Arbeitet über die Ports 161/UDP (Anfragen) und 162/UDP (Traps)."
    ],
    "sprechernotizen": "SNMP ist das „Standard-Werkzeug“ für Administratoren, um den Überblick über hunderte Geräte wie Router, Switche oder sogar Temperatursensoren zu behalten. Die aktuelle Version ist SNMPv3, die im Gegensatz zu den Vorgängern auch Sicherheitsfunktionen bietet. • Konkretes Beispiel: Ein Administrator konfiguriert seinen zentralen Monitoring-Server so, dass dieser per SNMP alle 5 Minuten den Tonerstand aller Drucker abfragt. Sobald ein Drucker nur noch 5 % Toner hat, sendet er von sich aus einen SNMP-Trap an den Server, der daraufhin automatisch eine E-Mail an den Einkauf schickt.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 99,
    "titel": "Welche verkürzten Schreibweisen der IPv6-Adresse",
    "hauptpunkte": [
      "Regel 1: Führende Nullen innerhalb eines Blocks dürfen entfallen.",
      "Regel 2: Einmalig dürfen aufeinanderfolgende Null-Blöcke durch :: ersetzt",
      "Option A: 2001:db8:f3c:d7:7dab:3d0:0:ff (nur Nullen gekürzt).",
      "Option B: 2001:db8:f3c:d7:7dab:3d0::ff (mit Doppel-Doppelpunkt am Ende)."
    ],
    "sprechernotizen": "Das Kürzen macht IPv6-Adressen handhabbar. Wichtig: In der Adresse 03d0 darf die vordere Null weg (3d0), aber die hintere muss bleiben. Der Doppel-Doppelpunkt darf nur einmal vorkommen, da man sonst nicht wüsste, wie viele Nullen in welche Lücke gehören. • Konkretes Beispiel: Stell dir vor, du musst diese Adresse in eine Firewall-Regel tippen. Statt 39 Zeichen tippst du in der kürzesten Form nur noch etwa 25 Zeichen – das spart Zeit und verhindert Tippfehler.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 121,
    "titel": "Was bedeutet es, wenn ein WLAN Access Point im Infrastructure Modus",
    "hauptpunkte": [
      "Zentraler Knoten: Clients kommunizieren über einen zentralen Access Point",
      "Netzwerkzugang: Ermöglicht den Zugriff auf ein übergeordnetes Netzwerk",
      "Authentifizierung: Anmeldung über Zugangsdaten, MAC-Adressen und"
    ],
    "sprechernotizen": "Im Infrastructure Modus fungiert der Access Point als „Vermittlungsstelle“. Im Gegensatz zum Ad-hoc-Modus (wo Geräte direkt miteinander sprechen) laufen hier alle Daten über den AP. Er regelt, wer darf und wer nicht. • Konkretes Beispiel: In einer Büroetage hängen drei Access Points an der Decke. Alle Mitarbeiter-Laptops sind im Infrastructure Modus mit diesen verbunden. So können sie alle gleichzeitig auf den zentralen Firmendrucker und das Internet zugreifen, während der AP die Sicherheit über WPA3- Verschlüsselung garantiert.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 124,
    "titel": "Was versteht man unter dem Begriff Multi SSID?",
    "hauptpunkte": [
      "Virtuelle Netzwerke: Mehrere WLAN-Namen auf einem physischen Access",
      "Logische Trennung: Aufteilung in verschiedene Netzwerksegmente (z. B.",
      "Sicherheit: Unterschiedliche Verschlüsselungen und Zugangsberechtigungen"
    ],
    "sprechernotizen": "Mit Multi SSID kann ein einziger Router so tun, als wäre er fünf verschiedene Netzwerke. Das spart Hardwarekosten und sorgt für Ordnung. • Konkretes Beispiel: Ein Hotel betreibt einen Access Point im Flur. Dieser strahlt zwei SSIDs aus: „Hotel_Gast“ (offen, nur Internetzugriff) und „Hotel_Intern“ (verschlüsselt, Zugriff auf das Buchungssystem für die Reinigungskräfte). Beide Netze nutzen die gleiche Antenne, sind aber logisch strikt getrennt.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 127,
    "titel": "Welches Modul ist auf diesem Bild zu erkennen?",
    "hauptpunkte": [
      "Formfaktor: M.2-SSD mit NVMe-Protokoll.",
      "Anbindung: Direkt über den PCI-Express-Bus (Peripheral Component",
      "Performance: Lesegeschwindigkeiten bis 7.450 MB/s, Schreiben bis 6.900"
    ],
    "sprechernotizen": "Dies ist aktuell der schnellste Speicherstandard für Endverbraucher. „NVMe“ steht für Non-Volatile Memory express und wurde speziell für SSDs entwickelt, um die alten Protokolle (SATA), die für mechanische Festplatten gedacht waren, zu umgehen. • Konkretes Beispiel: Ein Fotograf möchte 100 GB Rohdaten von seiner Speicherkarte auf den PC kopieren. Mit einer alten Festplatte dauert das 15 Minuten. Mit der gezeigten M.2 NVMe SSD ist der Vorgang in weniger als 30 Sekunden abgeschlossen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 134,
    "titel": "Welche Kosten entstehen für ein Rechenzentrum (on-Premises) mit",
    "hauptpunkte": [
      "Infrastruktur: Kauf oder Miete für Gebäude/Räume und Brandschutz.",
      "Hardware & Software: Anschaffungskosten für Server, Clients, Netzwerk und",
      "Betriebskosten: Enorme Energiekosten (Strom für Hardware und Kühlung)",
      "Sicherheit: Kosten für Sicherheitstechnik und Versicherungen."
    ],
    "sprechernotizen": "„On-Premises“ bedeutet, dass die IT im eigenen Haus betrieben wird. Hier trägt das Unternehmen das volle Risiko und alle Kosten selbst. Besonders die indirekten Kosten wie Kühlung und USV-Wartung werden oft unterschätzt. • Konkretes Beispiel: Eine Anwaltskanzlei entscheidet sich gegen die Cloud und baut einen eigenen Serverraum. Zu den Kosten zählen hier nicht nur die 5.000 € für den Server, sondern auch der Einbau einer Klimaanlage und die monatlichen Kosten für den Strom, der 24/7 verbraucht wird.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 138,
    "titel": "Nenne die Vorteile einer Bedarfsanalyse.",
    "hauptpunkte": [
      "Kundenfokus: Ermittlung von Wünschen, Motiven und Zielen des Kunden.",
      "Vertrauen: Stärkung des Kundenvertrauens durch individuelle Lösungen.",
      "Wirtschaftlichkeit: Umsatzsteigerung und Abhebung von der Konkurrenz.",
      "Bindung: Unterstützung einer langfristigen Kundenbeziehung."
    ],
    "sprechernotizen": "Eine gute Bedarfsanalyse ist ein Verkaufswerkzeug. Wenn du dem Kunden genau das anbietest, was er braucht (und nicht das, was du gerade im Lager hast), fühlt er sich ernst genommen. Das sorgt für eine höhere Abschlussquote und zufriedene Kunden. • Konkretes Beispiel: Ein IT-Berater merkt in der Analyse, dass der Kunde Angst vor Datenverlust hat. Statt nur einen Standard-Server anzubieten, schlägt er ein spezielles Backup-Konzept vor. Der Kunde fühlt sich verstanden und unterschreibt den Vertrag sofort.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 139,
    "titel": "Bitte vergleiche BIOS mit UEFI.",
    "hauptpunkte": [
      "BIOS (Alt): Nur Tastaturbedienung; Booten nur von Laufwerken bis 2 TB;",
      "UEFI (Neu): Grafische Oberfläche mit Mausbedienung; unterstützt Laufwerke",
      "Features: UEFI unterstützt 64-Bit-Prozessoren nativ, kann Treiber als",
      "Virtualisierung: UEFI kann sogar von VM-Containern starten."
    ],
    "sprechernotizen": "Das BIOS (Basic Input Output System) ist der veraltete Standard zum Starten eines PCs. UEFI (Unified Extensible Firmware Interface) ist der moderne Nachfolger. UEFI ist im Grunde ein kleines eigenes Betriebssystem vor dem eigentlichen Windows-Start, was viel mehr Möglichkeiten bei der Hardware-Verwaltung und Sicherheit bietet. • Konkretes Beispiel: Du willst eine moderne 8-TB-Festplatte als Boot- Laufwerk nutzen. Mit einem alten BIOS würde der PC nur 2 TB erkennen und den Rest ignorieren. Du benötigst zwingend ein Mainboard mit UEFI, um die volle Kapazität nutzen zu können.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 142,
    "titel": "Wähle entsprechend der Aufgabe in der Tabelle die möglichen",
    "hauptpunkte": [
      "nslookup: Prüfung der Erreichbarkeit und Hostnamen-Anzeige.",
      "arp: Auslesen der MAC-Adresse und Ermitteln von IPs im Segment.",
      "ping: Prüfung des Status der Netzwerkverbindung.",
      "ipconfig: Ermitteln der eigenen IP/Maske und Prüfung auf DHCP.",
      "netsh: Konfiguration von Adaptern und Hinzufügen von Firewall-Regeln."
    ],
    "sprechernotizen": "Diese Werkzeuge sind dein „Schweizer Taschenmesser“ in der Administration. ipconfig /all ist oft der erste Befehl, um zu sehen, ob ein Rechner überhaupt eine gültige Adresse vom DHCP-Server erhalten hat. netsh ist besonders mächtig, da es im Gegensatz zu ipconfig Einstellungen nicht nur anzeigt, sondern auch aktiv verändern kann, wie zum Beispiel das Setzen einer statischen IP-Adresse direkt in der Konsole. • Konkretes Beispiel: Du möchtest wissen, welche MAC-Adresse der Laptop hat, der gerade eine IP-Adresse belegt. Du tippst arp -a ein und erhältst eine Tabelle, die IP-Adressen den physischen Hardware-Adressen (MAC) zuordnet.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 143,
    "titel": "Nenne die 4 Features, die verhindern, dass während des Startvorgangs",
    "hauptpunkte": [
      "Sicherer Start (Secure Boot): Lädt nur vertrauenswürdige Betriebssystem-",
      "Vertrauenswürdiger Start: Überprüfung der Integrität jeder Komponente vor",
      "Antischadsoftware-Frühstart (ELAM): Testet alle Treiber vor dem Laden auf",
      "Kontrollierter Start: Protokollierung des Starts zur objektiven Prüfung"
    ],
    "sprechernotizen": "Schadsoftware versucht oft, sich schon vor dem eigentlichen Antivirenprogramm zu laden. Microsoft nutzt hierfür eine Kette von Sicherheitsprüfungen. Secure Boot stellt sicher, dass nur Code mit einer gültigen digitalen Signatur ausgeführt wird. ELAM sorgt dafür, dass dein Virenschutz als einer der allerersten Treiber startet, noch bevor andere Systemkomponenten geladen werden, die eventuell manipuliert sein könnten. • Konkretes Beispiel: Ein Hacker versucht, ein manipuliertes Betriebssystem auf ein Firmen-Notebook zu spielen. Da das manipulierte System keine gültige Signatur im UEFI hinterlegt hat, verweigert der Sichere Start den Bootvorgang komplett.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 146,
    "titel": "Welche Vorteile bringt der Einsatz von Thin-Clients in einer IT-",
    "hauptpunkte": [
      "Effizienz: Geringerer Stromverbrauch und geringer Platzbedarf.",
      "Wartung: Leicht austauschbar und flexibel einsetzbar (keine lokale OS-",
      "Sicherheit: Keine Chance für Viren dank Read-only-Betriebssystem.",
      "Umwelt: Weniger Abwärme und Materialeinsatz."
    ],
    "sprechernotizen": "Thin-Clients sind ideal für virtuelle Umgebungen. Da die eigentliche Rechenarbeit auf dem Server im Rechenzentrum passiert, reicht am Arbeitsplatz ein sehr einfaches Gerät. Wenn ein Thin-Client kaputtgeht, tauscht man ihn einfach aus – der Nutzer meldet sich am neuen Gerät an und findet alles exakt so vor wie vorher. • Konkretes Beispiel: In einer Bibliothek stehen 20 öffentliche Internet- Terminals. Durch den Einsatz von Thin-Clients spart die Stadt massiv Stromkosten. Da das System im Read-only-Modus läuft, kann kein Nutzer versehentlich Schadsoftware installieren, die nach einem Neustart noch vorhanden wäre.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 154,
    "titel": "Welche Hard- und Softwareanforderungen werden an einen Dateiserver",
    "hauptpunkte": [
      "Hardware-Redundanz: Einsatz von redundanten Netzteilen und Platten (RAID-",
      "Berechtigung: Granulares Berechtigungssystem zur Steuerung der Zugriffe.",
      "Performance: Geringe Latenz im Netzwerk und schnelle Zugriffszeiten auf",
      "Sicherheit: Regelmäßige Backups oder Snapshots zur Datensicherung."
    ],
    "sprechernotizen": "Ein Dateiserver ist das Herzstück der Zusammenarbeit. Er muss „hochverfügbar“ sein, was bedeutet, dass er beim Ausfall einer Komponente (z. B. einer Festplatte) einfach weiterläuft. Softwareseitig ist die Sicherheit entscheidend: Nicht jeder Mitarbeiter darf alles sehen. Das System muss also genau regeln können, wer lesen, schreiben oder löschen darf. • Konkretes Beispiel: Die Personalabteilung speichert Gehaltsabrechnungen auf dem Dateiserver. Durch das granulare Berechtigungssystem wird sichergestellt, dass nur die Personalleiterin Zugriff auf diesen Ordner hat, während alle anderen Mitarbeiter nur Fehlermeldungen sehen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 162,
    "titel": "Nenne 3 charakteristische Eigenschaften von Open Source Software.",
    "hauptpunkte": [
      "Lesbarer Quelltext: Der Code liegt in einer für Menschen verständlichen",
      "Freie Nutzung: Die Software darf beliebig kopiert, genutzt und verbreitet",
      "Veränderbarkeit: Der Code darf modifiziert und in der neuen Form"
    ],
    "sprechernotizen": "Open Source (offene Quelle) bedeutet Transparenz und Gemeinschaft. Da jeder den Code einsehen kann, können Sicherheitslücken oft schneller von der Community gefunden werden. Es fördert die Zusammenarbeit zwischen Entwicklern weltweit, da niemand das Rad neu erfinden muss. • Konkretes Beispiel: Der Webbrowser Mozilla Firefox oder das Betriebssystem Linux. Jeder Informatiker weltweit kann sich ansehen, wie Firefox programmiert wurde, eigene Verbesserungen vorschlagen oder eine eigene Version (einen „Fork“) daraus erstellen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 163,
    "titel": "Was ist unter den Begriffen OEM-Software und OEM-Hardware zu",
    "hauptpunkte": [
      "Original Equipment Manufacturer: Hersteller vertreibt Produkte über",
      "Geringerer Lieferumfang: Oft fehlt die aufwendige Verkaufsverpackung oder",
      "Eingeschränkter Support: Der Support wird meist durch den Verkäufer des",
      "Kosten: Meist deutlich günstiger als die „Retail“-Version für Endkunden."
    ],
    "sprechernotizen": "OEM-Produkte sind dafür gedacht, in ein größeres System eingebaut oder mit diesem zusammen verkauft zu werden. Bei Software kann es sein, dass es sich um eine Vollversion handelt, die aber ein anderes Nutzungsrecht besitzt oder an bestimmte Hardware gebunden ist. • Konkretes Beispiel: Du kaufst einen fertigen PC bei einem Discounter. Die darin verbaute Grafikkarte ist OEM-Hardware (vielleicht ohne schickes Logo auf dem Lüfter), und das vorinstallierte Windows ist eine OEM-Lizenz, die oft nur mit diesem speziellen Mainboard funktioniert.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 169,
    "titel": "Welche Merkmale hat ein Virtual Private Network (VPN)?",
    "hauptpunkte": [
      "Tunnel-Technologie: Erzeugt eine geschützte Verbindung über öffentliche",
      "Sicherheitsziele: Gewährleistung von Vertraulichkeit, Integrität und",
      "Protokollvielfalt: Nutzung von Lösungen wie IPsec, SSL-VPN oder OpenVPN.",
      "Logische Trennung: Erscheint für den Nutzer wie ein privates, direktes"
    ],
    "sprechernotizen": "Ein VPN macht das Internet für den Firmenverkehr sicher. Durch Verschlüsselung wird die Vertraulichkeit gewahrt (keiner kann mitlesen), und durch Prüfsummen die Integrität (keiner kann Daten unbemerkt verändern). • Konkretes Beispiel: Ein Mitarbeiter im Hotel-WLAN nutzt ein VPN, um Firmendaten abzurufen. Da das Hotel-WLAN unsicher ist, verhindert das VPN durch seinen verschlüsselten Tunnel, dass der Hotelbesitzer oder andere Gäste die Passwörter des Mitarbeiters aus dem Datenstrom fischen können.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 170,
    "titel": "Welche Sicherheitsmethoden und Verschlüsselungsstandards können beim",
    "hauptpunkte": [
      "Sicherheitsmethoden: WPA (unsicher), WPA2-Personal/Enterprise, WPA3-",
      "Verschlüsselung: AES (Advanced Encryption Standard), TKIP (veraltet).",
      "Authentifizierung: SAE (Simultaneous Authentication of Equals) bei WPA3.",
      "RADIUS: Zentrale Verwaltung von Zugängen bei Enterprise-Varianten."
    ],
    "sprechernotizen": "Für Unternehmen ist die Wahl des Standards entscheidend. WPA gilt heute als unsicher und sollte nicht mehr verwendet werden. AES ist in Verbindung mit WPA2 oder WPA3 der aktuelle Stand der Technik, um Brute- Force-Angriffe und Mitlesen zu verhindern. • Konkretes Beispiel: Ein Unternehmen stellt von WPA2 auf WPA3-Enterprise um. Mitarbeiter melden sich nun mit ihrem individuellen Firmen-Login an (RADIUS). Durch den neuen Standard SAE ist das Netzwerk auch dann geschützt, wenn ein Angreifer versucht, das Passwort durch massenhaftes Ausprobieren (Wörterbuch-Attacke) zu erraten.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 172,
    "titel": "Welche Vorteile ergeben sich durch den Einsatz eines Virtual Local",
    "hauptpunkte": [
      "Logische Segmentierung: Aufteilung der physischen Topologie in logische",
      "Performance: Unterteilung in kleinere Broadcastdomänen reduziert",
      "Sicherheit: Trennung des Datenverkehrs nach spezifischen Anwendungen oder",
      "Flexibilität: Gruppenmitglieder können ohne physisches Umstecken flexibel",
      "Priorisierung: Möglichkeiten zur Steuerung der Lastverteilung und"
    ],
    "sprechernotizen": "VLANs erlauben es uns, Netzwerke unabhängig von der Verkabelung zu strukturieren. Das erhöht nicht nur die Sicherheit, da Abteilungen isoliert werden können, sondern verbessert auch die Geschwindigkeit, da „Rundrufe“ (Broadcasts) nicht mehr das gesamte Firmennetz belasten, sondern nur noch das jeweilige Segment. • Konkretes Beispiel: In einer Schule nutzen Lehrer und Schüler dieselben physischen Switche. Durch VLANs wird der Datenverkehr der Lehrer (VLAN 10 - Noten, Prüfungen) strikt von dem der Schüler (VLAN 20 - Internetzugang) getrennt. Ein Schüler kann so nicht auf die Server der Lehrer zugreifen, obwohl sie am selben Switch hängen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 175,
    "titel": "Welches Befehlszeilenkommando wurde hier ausgeführt? (Bild von",
    "hauptpunkte": [
      "Kommando: getmac -v.",
      "Anzeige: Auflistung aller physischen MAC-Adressen der installierten",
      "Zusatzinfo: Zeigt den Verbindungsnamen und den Typ des Adapters an."
    ],
    "sprechernotizen": "Wenn du die eindeutige Hardware-ID (MAC-Adresse) eines Rechners wissen musst, ist getmac der schnellste Weg. Der Parameter -v (verbose) sorgt für eine ausführliche Liste, die auch anzeigt, welche Adresse zu welchem Adapter (WLAN, LAN, Bluetooth) gehört. • Konkretes Beispiel: Ein Unternehmen nutzt einen MAC-Filter an seinen Switchen für zusätzliche Sicherheit. Bevor ein neuer Laptop ans Netz darf, führt der Techniker getmac -v aus, notiert die MAC-Adresse der Ethernet- Karte und trägt diese in die Whitelist des Switches ein.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 176,
    "titel": "Welches Befehlszeilenkommando wurde hier ausgeführt? (Bild von",
    "hauptpunkte": [
      "Kommando: ipconfig /all.",
      "Umfang: Vollständige Anzeige aller IP-Konfigurationen (IPv4, IPv6,",
      "Status: Anzeige, ob DHCP aktiviert ist und von welchem Server die Lease",
      "DNS: Listet die aktuell genutzten DNS-Server auf."
    ],
    "sprechernotizen": "ipconfig /all ist das Standard-Kommando für jeden IT- Support. Es liefert das komplette Bild der Netzwerkanbindung. Hier siehst du sofort, ob ein Rechner eine „echte“ IP oder nur eine APIPA-Adresse (169.254.x.x) hat, was auf einen fehlerhaften DHCP-Server hindeuten würde. • Konkretes Beispiel: Ein Rechner hat „kein Internet“. Mit ipconfig /all sieht der Supporter, dass unter Standardgateway kein Eintrag steht. Er erkennt sofort, dass die DHCP-Konfiguration am Router unvollständig ist und der Rechner deshalb nicht weiß, wie er Pakete nach außen schickt.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 178,
    "titel": "Beschreibe die Aufgabe und Funktionsweise des Befehlszeilenkommandos",
    "hauptpunkte": [
      "Aufgabe: Anpassung der Zugriffsrechte für Dateien und Verzeichnisse.",
      "Gruppen: Unterteilung in User (Besitzer), Group (Gruppe) und Others",
      "Rechte: r (read/4), w (write/2), x (execute/1).",
      "Notation: Oktal (z. B. 755) oder symbolisch (z. B. u+x)."
    ],
    "sprechernotizen": "In Linux wird Sicherheit über Dateiberechtigungen großgeschrieben. Mit chmod legst du fest, wer eine Datei lesen, verändern oder ausführen darf. Eine „7“ bedeutet Vollzugriff (4+2+1), eine „5“ bedeutet nur Lesen und Ausführen (4+1). • Konkretes Beispiel: Ein Webentwickler hat ein Skript backup.sh erstellt. Damit es ausgeführt werden kann, nutzt er chmod 700 backup.sh. Damit hat er selbst Vollzugriff (7), während die Gruppe und der Rest der Welt keinerlei Rechte (00) haben – das Skript ist somit vor fremden Blicken und Änderungen geschützt.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 188,
    "titel": "Welche allgemeinen Anforderungen werden an ein Datenbanksystem",
    "hauptpunkte": [
      "Datenkonsistenz: Dauerhafte Widerspruchsfreiheit der Daten.",
      "Datenunabhängigkeit: Trennung von Anwendung und Datenhaltung.",
      "Mehrbenutzerbetrieb: Gleichzeitiger Zugriff durch viele Nutzer ohne",
      "Datensicherheit: Schutz vor unbefugtem Zugriff und Verlust.",
      "Wiederherstellung: Verfahren zur Rettung nach Systemabstürzen."
    ],
    "sprechernotizen": "Ein Datenbanksystem (DBMS) muss mehr können als nur Daten speichern. Es muss garantieren, dass Daten niemals im „Chaos“ enden (Konsistenz) und dass mehrere Personen gleichzeitig daran arbeiten können, ohne dass Änderungen sich gegenseitig überschreiben. Auch die Vermeidung von unnötigen Doppelungen (Redundanz) ist eine Kernanforderung. • Konkretes Beispiel: In einem Flugbuchungssystem müssen hunderte Reisebüros gleichzeitig auf die Sitzplatz-Datenbank zugreifen können. Das DBMS stellt durch parallelen Datenzugriff sicher, dass ein Sitzplatz nicht an zwei Personen gleichzeitig verkauft wird.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 194,
    "titel": "Im Qualitätsmanagement spricht man oftmals, im Zusammenhang einer",
    "hauptpunkte": [
      "Untersuchungsprozess: Prüfung, ob Prozesse, Normen und Richtlinien",
      "Zertifizierungsgrundlage: Findet oft im Rahmen von ISO 9001 oder ISO",
      "Expertenprüfung: Durchführung durch speziell geschulte Auditoren.",
      "Ziele: Identifikation von Schwachstellen und Erkennung von"
    ],
    "sprechernotizen": "Ein Audit ist wie eine „Inventur der Prozesse“. Ein Auditor schaut sich an, ob das, was das Unternehmen in seinen Handbüchern behauptet (z. B. „Wir machen täglich Backups“), auch in der Realität so durchgeführt wird. Statische Audits haben Prüfungscharakter, während dynamische Audits helfen, die Wirksamkeit von Maßnahmen zu beurteilen. • Konkretes Beispiel: Ein externer Prüfer kommt in die Firma und lässt sich zeigen, wie die letzten fünf Support-Tickets bearbeitet wurden, um sicherzustellen, dass die vertraglich zugesicherten Antwortzeiten (SLAs) eingehalten wurden.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 196,
    "titel": "Was bedeutet das Gütesiegel „Geprüfte Sicherheit“?",
    "hauptpunkte": [
      "DGUV: Vergabe durch die Deutsche Gesetzliche Unfallversicherung seit",
      "Rechtskonformität: Bestätigt die Einhaltung des",
      "Unabhängigkeit: Prüfung erfolgt durch eine zugelassene, unabhängige",
      "Ziel: Gewährleistung der Sicherheit von Produkten für den Anwender."
    ],
    "sprechernotizen": "Das GS-Zeichen ist ein freiwilliges Sicherheitszeichen, das weit über die gesetzliche CE-Kennzeichnung hinausgeht. Es zeigt dem Käufer, dass ein neutrales Labor das Produkt auf Herz und Nieren geprüft hat, um Unfälle oder Gefahren im Betrieb auszuschließen. • Konkretes Beispiel: Bei der Beschaffung von Mehrfachsteckdosen für ein Büro achtest du auf das GS-Siegel. Dieses garantiert, dass die Leiste bei der maximal angegebenen Last nicht schmilzt oder einen elektrischen Schlag verursacht.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 199,
    "titel": "Was sollte man beim Verschrotten von Datenträgern unbedingt",
    "hauptpunkte": [
      "Sicheres Löschen: Alle Daten müssen vor der Verschrottung",
      "DIN 66399: Anwendung technischer Verfahren nach dieser Sicherheitsnorm,.",
      "Verfahren: Mechanische (Schreddern), magnetische oder thermische",
      "Fachbetrieb: Entsorgung durch zertifizierte Spezialunternehmen,."
    ],
    "sprechernotizen": "Einfaches Löschen oder Formatieren reicht nicht aus, um sensible Firmendaten zu schützen,. Vor der physischen Zerstörung (Verschrottung) muss sichergestellt sein, dass kein Bit mehr gelesen werden kann,. Die DIN 66399 definiert dabei verschiedene Sicherheitsstufen für die Vernichtung,. • Konkretes Beispiel: Alte Festplatten einer Personalabteilung werden nicht einfach weggeworfen, sondern in einen speziellen Sicherheitsbehälter eines Entsorgers geworfen, der diese vor Ort in einem LKW mechanisch in winzige Schnipsel schreddert.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 200,
    "titel": "Was bedeutet der Begriff MFA (Multi-Factor-Authentication) und wo",
    "hauptpunkte": [
      "Erweiterte Zugangsberechtigung: Prüfung durch mehrere unabhängige",
      "Komponenten: Kombination aus Passwort und z. B. SMS-Code, App oder",
      "Sicherheitsgewinn: Zugriff wird erst nach Eingabe aller Faktoren",
      "Einsatzbereiche: Online-Banking, Kreditkarten, VPN-Zugänge und E-"
    ],
    "sprechernotizen": "MFA erhöht die Sicherheit massiv, da ein Hacker mit einem gestohlenen Passwort allein nicht weit kommt,. Er bräuchte zusätzlich physischen Zugriff auf das Gerät des Nutzers (z. B. das Smartphone für den Code),. Man unterscheidet oft zwischen Wissen (Passwort), Besitz (Smartphone) und Inhärenz (Fingerabdruck),. • Konkretes Beispiel: Wenn du dich von zu Hause in das Firmennetzwerk einwählst, gibst du dein Passwort ein (Faktor 1) und musst zusätzlich eine Benachrichtigung auf deiner Microsoft-Authenticator-App auf dem Handy bestätigen (Faktor 2).",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 201,
    "titel": "Beschreibe den Begriff Datensicherheit und nenne deren Schutzziele.",
    "hauptpunkte": [
      "Definition: Umfasst alle technischen und nicht-technischen Maßnahmen zur",
      "Die 3 Haupt-Schutzziele: Vertraulichkeit, Verfügbarkeit und Integrität.",
      "Zusatz-Schutzziel: Authentizität (Echtheit und Überprüfbarkeit eines",
      "Fokus: Schutz vor Gefahren und Bedrohungen sowie Vermeidung"
    ],
    "sprechernotizen": "Datensicherheit wird oft auch als Informationssicherheit bezeichnet. Es geht im Kern darum, Risiken im IT-Bereich zu minimieren. Während Datenschutz sich nur auf personenbezogene Daten bezieht, schützt die Datensicherheit alle Informationen eines Unternehmens. • Konkretes Beispiel: Ein Unternehmen setzt eine Festplattenverschlüsselung ein. Damit wird das Schutzziel der Vertraulichkeit gewahrt, da bei einem Diebstahl des Laptops niemand ohne den Schlüssel die Firmendaten lesen kann.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 202,
    "titel": "Worin unterscheiden sich Datensicherheit und Datenschutz?",
    "hauptpunkte": [
      "Datensicherheit: Verfolgt die Schutzziele (Vertraulichkeit,",
      "Datenschutz: Verfolgt das Ziel, personenbezogene Daten zu schützen.",
      "Zweck des Datenschutzes: Gewährleistung der Informationspflichten und"
    ],
    "sprechernotizen": "Man kann es sich so merken: Datensicherheit schützt die Daten vor der Technik (oder deren Versagen), während Datenschutz die Menschen vor dem Missbrauch ihrer Daten durch Organisationen schützt. • Konkretes Beispiel: Wenn ein Admin ein Backup erstellt, dient das der Datensicherheit (Verfügbarkeit). Wenn er einen Nutzer fragt, ob seine E- Mail-Adresse für den Newsletter gespeichert werden darf, ist das Datenschutz.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 203,
    "titel": "Was versteht man im Datenschutz unter technisch-organisatorischen",
    "hauptpunkte": [
      "Rechtsgrundlage: Basierend auf § 25 Abs. 2 DSGVO.",
      "Ziel: Sicherstellung durch Voreinstellungen, dass nur personenbezogene",
      "Umfang: Gilt für die Menge der Daten, den Verarbeitungsraum, die",
      "Schutz: Daten dürfen nicht ohne Eingreifen der Person einer unbestimmten"
    ],
    "sprechernotizen": "TOMs sind die konkrete Umsetzung der DSGVO im Betrieb. Der Verantwortliche muss geeignete Maßnahmen treffen, damit der Datenschutz nicht nur auf dem Papier existiert, sondern technisch (z. B. durch Softwareeinstellungen) und organisatorisch (z. B. durch Dienstanweisungen) erzwungen wird. • Konkretes Beispiel: Ein Programm zur Verwaltung von Patientendaten ist so eingestellt, dass nach 5 Minuten Inaktivität automatisch eine Bildschirmsperre erfolgt (technische Maßnahme).",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 204,
    "titel": "Durch welche konkreten Maßnahmen können TOMs DSGVO-konform umgesetzt",
    "hauptpunkte": [
      "Zutrittskontrolle: Unbefugten den Zutritt zu DV-Anlagen verwehren.",
      "Zugangskontrolle: Unbefugte sollen keinen Zugang zu Systemen haben (z. B.",
      "Zugriffskontrolle: Berechtigungen über Rollenmanagement steuern.",
      "Weitergabekontrolle: Schutz der Daten beim Transport oder der",
      "Verfügbarkeitskontrolle: Schutz vor Verlust oder Zerstörung.",
      "Trennungsgebot: Getrennte Verarbeitung von Daten nach Zweck."
    ],
    "sprechernotizen": "Diese Liste stellt sicher, dass Daten über den gesamten Lebenszyklus geschützt sind. Dazu gehört auch die Eingabekontrolle, also die nachträgliche Überprüfung, wer wann Daten verändert hat. • Konkretes Beispiel: Die Server der IT-Abteilung stehen in einem abgeschlossenen Raum, zu dem nur Techniker mit einem Chip-Schlüssel Zugang haben (Zutrittskontrolle).",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 205,
    "titel": "Nenne die wesentlichen Vorteile einer ISO/IEC 27001 Zertifizierung",
    "hauptpunkte": [
      "Risikominimierung: Hilft dabei, IT-Risiken abzuschätzen und Folgekosten",
      "Vertrauensbeweis: Steigerung des Vertrauens bei Kunden, Partnern und der",
      "Struktur: Etablierung von Sicherheitsverfahren und nachhaltige",
      "Wettbewerbsvorteil: Anerkannter internationaler Standard.",
      "Fehleranalyse: Systematisches Aufdecken von Schwachstellen."
    ],
    "sprechernotizen": "Die ISO 27001 beschreibt die Anforderungen an ein funktionsfähiges Informationssicherheits-Managementsystem (ISMS). Es geht also um den Prozess, Sicherheit dauerhaft zu gewährleisten und zu verbessern. • Konkretes Beispiel: Ein Cloud-Anbieter lässt sich nach ISO 27001 zertifizieren. Große Banken nutzen diesen Anbieter nun eher, da sie durch das Zertifikat einen objektiven Nachweis über das hohe Sicherheitsniveau erhalten.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 207,
    "titel": "Welche Rechte hat eine Person betreffend ihrer personenbezogenen",
    "hauptpunkte": [
      "Informations- und Auskunftsrecht: Recht zu erfahren, was gespeichert",
      "Berichtigung und Löschung: Recht auf Korrektur oder „Recht auf",
      "Einschränkung der Verarbeitung: Daten dürfen unter Umständen nur noch",
      "Datenübertragbarkeit: Recht, Daten in einem gängigen Format zu erhalten.",
      "Widerspruchsrecht: Recht, der Verarbeitung im Einzelfall zu"
    ],
    "sprechernotizen": "Diese Rechte finden sich in Kapitel 3 der DSGVO. Unternehmen müssen Prozesse haben, um diese Anfragen zeitnah zu bearbeiten. • Konkretes Beispiel: Ein ehemaliger Kunde schreibt eine Mail an ein Kaufhaus und verlangt die Löschung seines Kundenkontos. Das Unternehmen muss diesem Wunsch nachkommen, sofern keine gesetzlichen Aufbewahrungsfristen (z. B. für Rechnungen) dagegen sprechen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 209,
    "titel": "Was versteht man unter einem digitalen Zertifikat?",
    "hauptpunkte": [
      "Definition: Ein digitaler Datensatz, der die Authentizität von Objekten",
      "Technik: Basiert auf kryptografischen Schlüsselpaaren und meist dem X.509",
      "Inhalt: Besteht unter anderem aus einem öffentlichen Schlüssel und einem",
      "Ziel: Gewährleistung der Schutzziele Authentizität, Vertraulichkeit und"
    ],
    "sprechernotizen": "Das Zertifikat ist quasi der „Personalausweis“ in der digitalen Welt. Es verbindet eine Identität mit einem öffentlichen Schlüssel. • Konkretes Beispiel: Ein Programmierer signiert seine Software mit einem digitalen Zertifikat. Wenn du die Datei herunterlädst, zeigt Windows an: „Herausgeber verifiziert“. Das garantiert dir, dass der Code seit der Erstellung nicht durch einen Virus verändert wurde (Integrität).",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 210,
    "titel": "Was ist eine SPI (Stateful Packet Inspection) Firewall?",
    "hauptpunkte": [
      "Funktionsweise: Nutzt eine zustandsorientierte Paketüberprüfung.",
      "Layer: Arbeitet auf der Vermittlungsschicht (Layer 3 des OSI-Modells).",
      "Zustandstabelle: Speichert Informationen über aktive Sitzungen in",
      "TCP-Prüfung: Wertet SYN-, ACK-, FIN- und RST-Bits aus.",
      "UDP: Kann auch eigentlich verbindungslose UDP-Pakete „stateful“"
    ],
    "sprechernotizen": "Im Gegensatz zu einfachen Paketfiltern „merkt“ sich die SPI-Firewall, ob ein eingehendes Paket die Antwort auf eine interne Anfrage ist. Wenn kein passender Eintrag in der Zustandstabelle existiert, wird das Paket als potenzieller Angriff verworfen. • Konkretes Beispiel: Du rufst eine Webseite auf. Dein PC schickt ein Paket nach außen. Die Firewall merkt sich das. Wenn der Webserver antwortet, lässt die Firewall das Paket durch, weil es zur aktiven Sitzung gehört. Versucht jedoch ein Hacker von außen, einfach so ein Paket an deinen PC zu schicken, blockiert die Firewall, da kein passender „Zustand“ existiert.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 211,
    "titel": "Was versteht man unter dem Begriff Endpoint-Security?",
    "hauptpunkte": [
      "Definition: Alle Maßnahmen und Richtlinien zum Schutz von Endgeräten",
      "Schutzziel: Abwehr von schädlichen Angriffen oder unbefugten Zugriffen",
      "Maßnahmen: Anwendungsisolation (z. B. für E-Mail- und Office-Programme)"
    ],
    "sprechernotizen": "Endpoint-Security betrachtet jedes einzelne Gerät als potenzielles Einfallstor für Hacker. Es geht darum, nicht nur das Netzwerk als Ganzes zu schützen, sondern die Sicherheit direkt auf dem Gerät des Nutzers zu verankern. • Konkretes Beispiel: Ein Unternehmen installiert eine Software, die verhindert, dass Mitarbeiter private USB-Sticks an Firmen-Laptops nutzen können. Nur freigegebene, verschlüsselte Sticks der Firma werden vom System erkannt (Whitelist-Verfahren).",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 212,
    "titel": "Welche Anwendungen oder Verfahren verwenden kryptografische",
    "hauptpunkte": [
      "Integritätsprüfungen: Sicherstellung, dass Daten nicht verändert wurden.",
      "Prüfsummen: Erzeugung von Werten zur Validierung von Datensätzen.",
      "Authentifizierung: Einsatz bei digitalen Signaturen und beim Speichern",
      "Sicherheit: Erzeugung von Sitzungsschlüsseln und Einmal-Passwörtern."
    ],
    "sprechernotizen": "Eine Hashfunktion verwandelt eine beliebig große Datenmenge in eine Zeichenfolge fester Länge. Das Besondere: Schon die kleinste Änderung an der Quelldatei führt zu einem völlig anderen Hashwert. • Konkretes Beispiel: Wenn du ein Betriebssystem-Image (ISO) aus dem Internet lädst, stellt der Anbieter oft einen SHA-256-Hashwert bereit. Nach dem Download berechnest du den Hash deiner Datei und vergleichst ihn. Sind sie identisch, ist die Datei unbeschädigt und frei von Manipulationen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 215,
    "titel": "Erläutere den Unterschied zwischen einem differentiellen und",
    "hauptpunkte": [
      "Differentiell: Sichert alle Daten, die seit dem letzten Vollbackup",
      "Inkrementell: Sichert nur die Daten, die seit der letzten Sicherung (egal",
      "Wiederherstellung: Beim differentiellen Backup benötigt man nur das"
    ],
    "sprechernotizen": "Die Wahl der Methode ist ein Abwägen zwischen Speicherplatz und Wiederherstellungsgeschwindigkeit. Das inkrementelle Backup spart täglich Platz, ist aber im Ernstfall aufwendiger wiederherzustellen. • Konkretes Beispiel: Ein Server macht Sonntags ein Vollbackup. ◦ Inkrementell: Am Mittwoch werden nur die Änderungen von Dienstag auf Mittwoch gesichert. ◦ Differentiell: Am Mittwoch werden alle Änderungen von Montag, Dienstag und Mittwoch gesichert.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 216,
    "titel": "Wie gestaltet sich ein vollständiger Backup-Plan nach diesem",
    "hauptpunkte": [
      "Konzept: Rotationsschema für Datenträger zur langfristigen Sicherung.",
      "Sohn-Medien: Tägliche Sicherung (meist inkrementell).",
      "Vater-Medien: Wöchentliche Sicherung (Vollbackup).",
      "Großvater-Medien: Monatliche Sicherung (Vollbackup).",
      "Umfang: Im Rahmen einer 5-Tage-Woche kommen oft 20 Speichermedien zum"
    ],
    "sprechernotizen": "Dieses Prinzip stellt sicher, dass man bei einem Datenverlust nicht nur auf den Vortag, sondern bei Bedarf auch auf den Stand von vor mehreren Monaten zurückgreifen kann. • Konkretes Beispiel: Ein Mitarbeiter löscht versehentlich einen Ordner und bemerkt es erst nach drei Wochen. Dank des Vater-Mediums (Wochensicherung) von vor drei Wochen kann der IT-Administrator den Stand exakt wiederherstellen, auch wenn die täglichen \"Sohn-Sicherungen\" bereits überschrieben wurden.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 217,
    "titel": "Unterscheide die Begriffe Malware, Ransomware und Trojaner.",
    "hauptpunkte": [
      "Malware: Oberbegriff für alle Arten von Schadprogrammen (Viren, Würmer,",
      "Ransomware: „Erpressersoftware“; verschlüsselt Daten und fordert Lösegeld",
      "Trojaner: Tarnt sich als nützliches Programm, lädt aber im Hintergrund"
    ],
    "sprechernotizen": "Schadsoftware wird immer spezialisierter. Während Malware der allgemeine Überbegriff ist, beschreiben Trojaner den Verbreitungsweg und Ransomware die Art des Schadens (die Erpressung). • Konkretes Beispiel: Ein Nutzer erhält eine E-Mail mit einem vermeintlichen \"Rechnungs-PDF\", das in Wahrheit eine .exe-Datei ist (Trojaner). Sobald er sie öffnet, wird eine Schadsoftware installiert, die alle seine Urlaubsfotos verschlüsselt (Ransomware) und Geld verlangt.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 218,
    "titel": "Welchem Zweck dient das IT-Sicherheitsmanagement?",
    "hauptpunkte": [
      "Permanenter Prozess: Sicherstellung der IT-Sicherheit und des",
      "Prävention: Abwehr von Gefahren und Bedrohungen für die",
      "Reaktion: Verhinderung von Stillständen durch geplante"
    ],
    "sprechernotizen": "IT-Sicherheitsmanagement ist keine einmalige Aktion, sondern eine Daueraufgabe. Es umfasst technische Lösungen, aber auch organisatorische Vorgaben und die Sensibilisierung der Mitarbeiter. • Konkretes Beispiel: Das Sicherheitsmanagement führt ein Monitoring-System ein, das den Netzwerkverkehr rund um die Uhr überwacht. Sobald ungewöhnlich viele Daten an einen unbekannten Server im Ausland geschickt werden, schlägt das System Alarm, um einen potenziellen Datendiebstahl zu stoppen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 219,
    "titel": "Welche Kriterien muss eine sichere Passwortrichtlinie erfüllen?",
    "hauptpunkte": [
      "Länge & Komplexität: Mind. 10–15 Zeichen; Groß-/Kleinschreibung,",
      "Einschränkungen: Keine Login-Bestandteile im Passwort; keine Wörter aus",
      "Verwaltung: Regelmäßige Änderung (alle 30–90 Tage); keine Wiederholung",
      "Schutz: Begrenzung der Loginversuche (max. 3 pro Minute); Kontosperrung",
      "Zusatz: Angebot von Multi-Factor-Authentication (MFA)."
    ],
    "sprechernotizen": "Ein Passwort ist nur so stark wie die Richtlinie, die es erzwingt. In modernen Systemen ist die Mehr-Faktor-Authentifizierung (MFA) mittlerweile fast wichtiger als die Passwortlänge allein. • Konkretes Beispiel: Ein Mitarbeiter wählt als Passwort \"S0mmer!2024#Abc\". Obwohl dieses Passwort stark ist, erzwingt die Richtlinie beim Login zusätzlich die Eingabe eines Codes von einer MFA-App auf seinem Handy, um sicherzugehen, dass er es wirklich ist.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 220,
    "titel": "Erläutere den Begriff Security by Design.",
    "hauptpunkte": [
      "Konzept: Berücksichtigung von Sicherheitsanforderungen bereits während",
      "Ziel: Frühzeitiger Ausschluss von Sicherheitslücken.",
      "Vorteil: Vermeidung von hohen Kosten und Verzögerungen durch"
    ],
    "sprechernotizen": "Bei Security by Design wird Sicherheit nicht \"oben drauf gesetzt\", wenn das Programm fertig ist, sondern sie ist Teil des Fundaments. Jede Codezeile wird unter dem Aspekt der Sicherheit geschrieben. • Konkretes Beispiel: Ein Entwicklerteam programmiert ein neues Kundenportal. Statt die Passwortprüfung erst am Ende einzubauen, planen sie von Anfang an eine verschlüsselte Datenbank und eine automatische Überprüfung auf SQL-Injection-Angriffe in jede Eingabemaske ein.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 221,
    "titel": "Benenne je 2 Vor- und Nachteile des Sicherheitstyps WPA2-Personal",
    "hauptpunkte": [
      "WPA2-Personal (PSK):",
      "WPA2-Enterprise:"
    ],
    "sprechernotizen": "Der Hauptunterschied liegt in der Art der Anmeldung. Bei „Personal“ nutzen alle denselben Schlüssel. Bei „Enterprise“ hat jeder Nutzer eigene Zugangsdaten, die zentral geprüft werden. • Konkretes Beispiel: In einem kleinen Café nutzt man WPA2-Personal, da der Aufwand für einen RADIUS-Server zu hoch wäre. In einer Universität nutzt man WPA2-Enterprise (Eduroam), damit man Studenten beim Exmatrikulieren sofort den Zugriff entziehen kann, ohne das Passwort für alle anderen ändern zu müssen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 222,
    "titel": "Welche Sicherheitsmaßnahmen sind beim Einsatz eines E-Mail-Systems",
    "hauptpunkte": [
      "Verschlüsselung: E-Mails sollten zentral verschlüsselt und digital",
      "Zertifikate: Konsequenter Einsatz von TLS/SSL-Zertifikaten.",
      "Protokollsicherheit:"
    ],
    "sprechernotizen": "E-Mail ist standardmäßig so unsicher wie eine Postkarte. Um Vertraulichkeit und Integrität zu wahren, müssen die Übertragungswege verschlüsselt sein. Die Signatur stellt sicher, dass der Absender auch wirklich der ist, der er vorgibt zu sein. • Konkretes Beispiel: Ein Administrator konfiguriert den Firmen-Mailserver so, dass er Verbindungen über den unverschlüsselten Port 110 (POP3) ablehnt und stattdessen die Mitarbeiter zwingt, den gesicherten Port 995 zu nutzen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 223,
    "titel": "Welche Bedingungen muss ein ergonomischer PC-Arbeitsplatz erfüllen?",
    "hauptpunkte": [
      "Monitor: Oberste Zeile leicht unter der Sehachse; Mindestabstand 50 cm;",
      "Haltung: Arbeitshöhe an Körpergröße anpassen; 90°-Winkel zwischen Ober-",
      "Bewegung: Genügend Beinfreiheit und eine natürliche Körperhaltung müssen",
      "Flexibilität: Der Bildschirm muss frei stehen, leicht drehbar und neigbar"
    ],
    "sprechernotizen": "Ergonomie dient der langfristigen Gesundheit der Mitarbeiter. Ein falsch eingestellter Monitor führt zu Nackenbeschwerden, eine falsche Sitzhöhe zu Rückenschmerzen. Die Einhaltung dieser Richtlinien ist oft auch Bestandteil der Arbeitssicherheit. • Konkretes Beispiel: Ein Fachinformatiker nutzt im Büro einen höhenverstellbaren Schreibtisch und einen Monitorarm, um den Bildschirm exakt auf seine Augenhöhe einzustellen, damit er auch nach 8 Stunden Programmieren keine Kopfschmerzen bekommt.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 228,
    "titel": "Mit welchen Maßnahmen kann man im Unternehmen die Produktqualität",
    "hauptpunkte": [
      "Kontrolle: Einführung einer permanenten Qualitätssicherung.",
      "Feedback: Durchführung wiederkehrender Kundenbefragungen.",
      "Prozesse: Kontinuierliche Verbesserung der Produktionsprozesse.",
      "Input: Verwendung von qualitativ hochwertigen Ausgangsmaterialien.",
      "Fehlermanagement: Prozessfehler ermitteln und aktiv für Abhilfe sorgen."
    ],
    "sprechernotizen": "Produktqualität ist kein Zufall, sondern das Ergebnis von Disziplin. In der IT bedeutet das oft: Testgetriebene Entwicklung und regelmäßiges Einholen von Nutzerfeedback, bevor ein Produkt fertiggestellt wird. • Konkretes Beispiel: Eine Softwarefirma implementiert automatisierte Code- Reviews. Bevor neuer Programmcode in das Hauptprogramm übernommen wird, prüft ein Tool diesen auf bekannte Fehler und Sicherheitslücken, wodurch die Software für den Endkunden stabiler wird.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 229,
    "titel": "Welches sind die allgemeinen Kriterien einer Schutzbedarfsanalyse",
    "hauptpunkte": [
      "Risiko: Wie hoch ist die Wahrscheinlichkeit eines Angriffs auf die",
      "Priorisierung: Welche Objekte müssen besonders geschützt werden?.",
      "Bedrohungslage: Welchen konkreten Szenarien ist das System ausgesetzt?.",
      "Schadenspotenzial: Welche finanziellen oder Reputationsschäden drohen bei",
      "Wirtschaftlichkeit: Wie sieht die Kosten-Nutzen-Betrachtung der"
    ],
    "sprechernotizen": "Man kann nicht alles mit maximalem Aufwand schützen. Die Schutzbedarfsanalyse hilft dabei, das Sicherheitsbudget dort einzusetzen, wo der potenzielle Schaden am größten wäre. • Konkretes Beispiel: Die IT-Abteilung analysiert den Webshop. Da dieser 80 % des Umsatzes generiert, wird das Schadenspotenzial bei einem Ausfall als extrem hoch eingestuft, weshalb teure redundante Server gerechtfertigt sind.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 230,
    "titel": "Beschreibe die Schutzbedarfskategorien (normal, hoch, sehr hoch)",
    "hauptpunkte": [
      "Normal: Verstöße haben nur geringe Folgen; Schaden liegt unter 50.000 €.",
      "Hoch: Massive Auswirkungen auf Betroffene oder das Ansehen; Schaden",
      "Sehr hoch: Existenzbedrohende Folgen für das Unternehmen; Schaden über",
      "€."
    ],
    "sprechernotizen": "Das BSI (Bundesamt für Sicherheit in der Informationstechnik) gibt diese Grenzwerte vor, um Systeme einzuordnen. \"Sehr hoch\" betrifft oft personenbezogene Daten, deren Missbrauch den Ruf dauerhaft schädigen würde oder gesetzliche Strafen in Millionenhöhe nach sich zieht. • Konkretes Beispiel: ◦ Normal: Die interne Kantinen-Menü-App fällt aus. ◦ Sehr hoch: Die Datenbank mit allen Patientenakten eines Krankenhauses wird verschlüsselt oder gestohlen – dies gefährdet Menschenleben und die Existenz der Klinik.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 232,
    "titel": "Welche Maßnahmen sind geeignet, um Schäden an der IT-Infrastruktur",
    "hauptpunkte": [
      "Technisch: Datenverschlüsselung der Datenträger und Einsatz von VLANs zur",
      "Systemschutz: Mehrstufige Firewallkonzepte, regelmäßiges Patchen der",
      "Identität: Passwortrichtlinien kombiniert mit Multi-Factor-",
      "Organisatorisch: Vier-Augen-Prinzip bei kritischen Vorgängen und"
    ],
    "sprechernotizen": "Sicherheit ist ein Zusammenspiel aus Technik und Mensch. Ein ausgeklügeltes Rechtekonzept für Administratoren nützt wenig, wenn die Mitarbeiter nicht geschult sind, Bedrohungen wie Phishing zu erkennen. • Konkretes Beispiel: Ein Betrieb führt einen Penetrationtest (Pentest) durch. Ein externer Experte versucht dabei, wie ein Hacker in das System einzudringen, um Schwachstellen im Firewallkonzept aufzudecken, bevor echte Angreifer diese ausnutzen können.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 233,
    "titel": "Aus welchen Phasen besteht der Sicherheitsprozess laut BSI IT-",
    "hauptpunkte": [
      "Phase 1: Initiierung: Übernahme der Verantwortung durch die Leitung,",
      "Phase 2: Erstellung: Ausarbeitung eines konkreten Sicherheitskonzepts.",
      "Phase 3: Umsetzung: Praktische Implementierung der im Konzept definierten",
      "Phase 4: Aufrechterhaltung: Kontinuierliche Überprüfung und Verbesserung"
    ],
    "sprechernotizen": "Der Prozess nach BSI-Standard 100-2 betont, dass Informationssicherheit eine Managementaufgabe ist. Ohne die Einbindung der Leitungsebene und die Bereitstellung von Personal und Zeit kann kein nachhaltiges Sicherheitsniveau erreicht werden. • Konkretes Beispiel: Der Geschäftsführer eines Softwarehauses unterzeichnet die Leitlinie zur Informationssicherheit (Phase 1) und beauftragt die IT-Abteilung, darauf basierend ein Konzept für die Absicherung der Kundendatenbank zu erstellen (Phase 2).",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 234,
    "titel": "Welche Themen sind für einen IT-Sicherheitsbeauftragten (Information",
    "hauptpunkte": [
      "Managementsysteme: Einführung und Pflege von Systemen nach ISO 27001 oder",
      "Konzeption: Erstellung und Überwachung von Konzepten zur",
      "Ganzheitlicher Blick: Bewertung der Sicherheit in Bezug auf Organisation,",
      "Beratung: Unterstützung der Geschäftsführung bei strategischen"
    ],
    "sprechernotizen": "Der Sicherheitsbeauftragte ist der Wächter über die Einhaltung der Sicherheitsziele im Unternehmen. Er befasst sich nicht nur mit Firewalls, sondern auch mit der physischen Sicherheit der Gebäude und der organisatorischen Absicherung von Geschäftsprozessen. • Konkretes Beispiel: Der IT-Sicherheitsbeauftragte prüft, ob die Anwendungssicherheit der neuen internen Buchhaltungssoftware den Richtlinien der Firma entspricht, bevor diese im Netzwerk ausgerollt wird.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 235,
    "titel": "Welches sind die Inhalte einer Zertifizierung nach ISO 27001?",
    "hauptpunkte": [
      "ISMS-Aufbau: Anforderungen an Errichtung, Umsetzung, Überwachung und",
      "Risikomanagement: Systematische Identifikation und Analyse vorhandener",
      "Ganzheitlichkeit: Einbeziehung von Infrastruktur, Organisation, Personal",
      "Betriebskontinuität: Maßnahmen gegen ungeplante Unterbrechungen, die das"
    ],
    "sprechernotizen": "ISO 27001 ist ein internationaler Standard, der für Unternehmen jeder Größe an Bedeutung gewinnt. Besonders für Betreiber Kritischer Infrastrukturen (KRITIS) ist ein solches Zertifikat oft gesetzlich vorgeschrieben. • Konkretes Beispiel: Im Rahmen der Zertifizierung wird dokumentiert, wie das Unternehmen auf einen Hackerangriff oder einen großflächigen Stromausfall reagiert, um den Geschäftsbetrieb so schnell wie möglich wieder aufzunehmen.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 236,
    "titel": "Was sind die Vorteile einer Zertifizierung nach ISO 27001?",
    "hauptpunkte": [
      "Wirksamer Schutz: Gewährleistung der Sicherheit von Informationen, Daten",
      "Vertrauensnachweis: Objektiver Beleg der Sicherheitsstandards gegenüber",
      "Kontinuierliche Verbesserung: Nutzung des PDCA-Zyklus zur stetigen",
      "Kostensenkung: Reduzierung von finanziellen Schäden durch die Vermeidung",
      "Bewusstsein: Förderung des Sicherheitsbewusstseins bei allen"
    ],
    "sprechernotizen": "Eine Zertifizierung hilft dabei, Schwachstellen systematisch aufzudecken. Sie dient nicht nur der Abwehr von Gefahren, sondern optimiert auch die Chancen des Unternehmens am Markt durch ein professionelles Image. • Konkretes Beispiel: Ein Cloud-Dienstleister gewinnt eine Ausschreibung einer Bank nur deshalb, weil er durch das ISO 27001 Zertifikat nachweisen kann, dass er über ein geprüftes Risikomanagement verfügt.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 238,
    "titel": "Was versteht man unter dem Begriff Eskalationsstufe im 3-stufigen",
    "hauptpunkte": [
      "1st Level Support: Erste Anlaufstelle für alle Probleme; Erfassung",
      "2nd Level Support: Einsatz von IT-Spezialisten, wenn der Fall zu komplex",
      "3rd Level Support: Höchste Stufe mit Experten oder Entwicklern zur Lösung",
      "Auslöser: Erfolgt nach Schweregrad, abgelaufener Zeit (SLA) oder"
    ],
    "sprechernotizen": "Eskalation bedeutet in diesem Kontext die Weitergabe eines Problems an eine höhere Kompetenzebene. Ziel ist es, auch für sehr schwierige Fälle eine Lösung zu finden, die im Extremfall sogar zu einer Produktänderung führen kann. • Konkretes Beispiel: Der Helpdesk (1st Level) kann ein Problem mit einem Server-Zertifikat nicht lösen. Der Fall wird an den Incident Manager (2nd Level) eskaliert, der ein spezialisierter Netzwerkadministrator ist.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 240,
    "titel": "Nenne die wesentlichen Bestandteile eines Kaufvertrags.",
    "hauptpunkte": [
      "Pflichten: Eigentumsübertragung der Ware durch den Verkäufer und Zahlung",
      "Rechte bei Mängeln: Regelungen zur Nacherfüllung oder Minderung des",
      "Garantie & Gewährleistung: Dauer und Umfang der Mängelhaftung.",
      "Haftungsausschluss: Ausschluss bestimmter Eigenschaften von der Haftung.",
      "Rechtsgrundlage: §§ 433 bis 453 des Bürgerlichen Gesetzbuchs (BGB)."
    ],
    "sprechernotizen": "Ein Kaufvertrag ist ein rechtlich bindendes Dokument. In der IT-Branche werden oft individuelle Regelungen getroffen, die über die Standardvorgaben des BGB oder HGB hinausgehen, um komplexe Hardware- oder Softwarekäufe abzusichern. • Konkretes Beispiel: Beim Kauf eines neuen Serversystems wird im Vertrag eine Garantiedauer vereinbart, die über die gesetzliche Gewährleistung hinausgeht, um das Unternehmen länger gegen Hardwaredefekte abzusichern.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 243,
    "titel": "Welche Bestandteile hat in der Regel ein IT-Servicevertrag?",
    "hauptpunkte": [
      "Gegenstand: Angaben zum Wartungsobjekt (z. B. Anzahl der Systeme).",
      "Leistungsumfang: Informationen zu Dienstleistungen und Einsatzzeiten (z.",
      "Sicherheit: Regelungen zum Datenschutz, zur Datensicherheit und Haftung",
      "Rechtliches: Mängelgewährleistung, Vergütung, Laufzeit, Kündigungsfristen"
    ],
    "sprechernotizen": "Ein Servicevertrag (oft Teil eines Managed Service Angebots) regelt die laufende Betreuung. Wichtig ist hier die Klärung der Mitwirkung des Kunden, also wer im Notfall erreichbar sein muss. • Konkretes Beispiel: Ein Systemhaus betreut die Server einer Arztpraxis. Im Vertrag ist geregelt, dass bei einem Serverausfall innerhalb der Servicezeiten sofort reagiert wird, aber der Praxisinhaber einen technischen Ansprechpartner für Rückfragen bereitstellen muss.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 250,
    "titel": "Was versteht man bei Aufbauorganisationen unter einer Stabsstelle?",
    "hauptpunkte": [
      "Unterstützungsfunktion: Dient der Unterstützung anderer Stellen oder",
      "Beratung: Hilfe bei der Entscheidungsfindung.",
      "Keine Weisungsmacht: Stabsstellen treffen selbst keine Entscheidungen."
    ],
    "sprechernotizen": "Stäbe sind \"Spezialisten ohne Kommando\". Sie bereiten komplexe Informationen für die Geschäftsführung auf, damit diese fundierte Entscheidungen treffen kann. • Konkretes Beispiel: Der Datenschutzbeauftragte (Stabsstelle) berät die Geschäftsführung über die DSGVO-Konformität eines neuen Tools, darf aber den Mitarbeitern nicht selbst verbieten, das Tool zu nutzen – das muss die Leitung tun.",
    "kategorie": "IT-Sicherheit"
  },
  {
    "id": 267,
    "titel": "Welche Dinge müssen bei einem IT-Hardware-Rollout beachtet werden?",
    "hauptpunkte": [
      "Management: Einsatz eines Rollout-Managers zur Koordination und",
      "Daten & Inventar: Planung der Datenmigration und Dokumentation der Asset-",
      "Sicherheit: Abstimmung eines Backupkonzepts zur Datensicherung vor dem",
      "Logistik: Terminabstimmung mit den Kunden (Wo, Wann, Wie).",
      "Prüfung: Sicherstellung der Kompatibilität von vorhandener Software zur"
    ],
    "sprechernotizen": "Ein Hardware-Rollout scheitert oft an der Logistik, nicht an der Technik. Ohne klaren Zeitplan und die Einbindung der Nutzer (Terminabstimmung) entstehen hohe Ausfallzeiten in den Fachabteilungen. • Konkretes Beispiel: Beim Austausch von 100 Laptops sorgt der Rollout- Manager dafür, dass die alten Geräte erst abgeholt werden, nachdem die Daten erfolgreich auf die neuen Geräte migriert wurden und der Nutzer den Empfang quittiert hat.",
    "kategorie": "IT-Sicherheit"
  }
];
