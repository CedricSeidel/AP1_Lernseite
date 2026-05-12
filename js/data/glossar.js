// AP1 Lernkarten – IT-Fachbegriffe Glossar (100 Einträge)
const GLOSSAR_DATA = [
  {
    "term": "ALM",
    "full": "Application Lifecycle Management",
    "desc": "Die ganzheitliche Verwaltung des Lebenszyklus einer Softwareanwendung von der Planung bis zur Außerbetriebnahme.",
    "category": "Hardware & IT"
  },
  {
    "term": "ATA (IDE)",
    "full": "Advanced Technology Attachment",
    "desc": "Ein Bus-System für den Anschluss von Datenspeichern wie Festplatten und optischen Laufwerken.",
    "category": "Hardware & IT"
  },
  {
    "term": "BIOS",
    "full": "Basic Input Output System",
    "desc": "Das grundlegende Startprogramm eines PCs, das heute weitgehend durch UEFI ersetzt wurde.",
    "category": "Hardware & IT"
  },
  {
    "term": "CPU",
    "full": "Central Processing Unit",
    "desc": "Der Hauptprozessor eines Computers, der alle Berechnungen und Befehle ausführt.",
    "category": "Hardware & IT"
  },
  {
    "term": "HBA",
    "full": "Host-Bus-Adapter",
    "desc": "Schnittstellenkarte, die einen Computer mit Speicher- oder Netzwerksystemen (wie Fibre Channel) verbindet.",
    "category": "Hardware & IT"
  },
  {
    "term": "HDD",
    "full": "Hard Disk Drive",
    "desc": "Herkömmliche, mechanische Festplatte mit rotierenden Scheiben.",
    "category": "Hardware & IT"
  },
  {
    "term": "IuK",
    "full": "Informations- und Kommunikationstechnik",
    "desc": "Sammelbegriff für alle Technologien zur Verarbeitung und Übertragung von Informationen.",
    "category": "Hardware & IT"
  },
  {
    "term": "M.2-SSD",
    "full": "M.2 Solid State Drive",
    "desc": "Ein kompakter Formfaktor für Solid-State-Drives, der direkt auf dem Mainboard montiert wird.",
    "category": "Hardware & IT"
  },
  {
    "term": "NVMe",
    "full": "Non-Volatile Memory express",
    "desc": "Ein Protokoll, das speziell für moderne SSDs entwickelt wurde, um die volle Geschwindigkeit des PCI-Express-Busses zu nutzen.",
    "category": "Hardware & IT"
  },
  {
    "term": "PDA",
    "full": "Personal Digital Assistant",
    "desc": "Tragbarer digitaler Assistent, Vorgänger moderner Smartphones.",
    "category": "Hardware & IT"
  },
  {
    "term": "S.M.A.R.T.",
    "full": "Self-Monitoring, Analysis and Reporting Technology",
    "desc": "Ein Überwachungssystem für Festplatten und SSDs zur Früherkennung von Hardwaredefekten.",
    "category": "Hardware & IT"
  },
  {
    "term": "SATA",
    "full": "Serial AT Attachment",
    "desc": "Eine weit verbreitete Schnittstelle für den Anschluss von Festplatten und SSDs.",
    "category": "Hardware & IT"
  },
  {
    "term": "SCSI",
    "full": "Small Computer System Interface",
    "desc": "Bus-System für Datenspeicher, häufig in Servern verwendet.",
    "category": "Hardware & IT"
  },
  {
    "term": "SSD",
    "full": "Solid State Drive",
    "desc": "Ein elektronisches Speichermedium ohne bewegliche Teile, das deutlich schneller als eine HDD ist.",
    "category": "Hardware & IT"
  },
  {
    "term": "UEFI",
    "full": "Unified Extensible Firmware Interface",
    "desc": "Der moderne Nachfolger des BIOS, der unter anderem das Booten von großen Datenträgern und grafische Oberflächen unterstützt.",
    "category": "Hardware & IT"
  },
  {
    "term": "UHD / 4K",
    "full": "Ultra High Definition",
    "desc": "Digitales Videoformat mit 3840 x 2160 Pixeln Auflösung.",
    "category": "Hardware & IT"
  },
  {
    "term": "USV",
    "full": "Unterbrechungsfreie Stromversorgung",
    "desc": "Schützt IT-Komponenten vor Stromausfällen und Störungen im Netz (Klassen: VFI, VI, VFD).",
    "category": "Hardware & IT"
  },
  {
    "term": "APIPA",
    "full": "Automatic Private IP Addressing",
    "desc": "Ein Feature von Windows, das automatisch eine IP-Adresse aus dem Bereich 169.254.x.x vergibt, wenn kein DHCP-Server erreichbar ist.",
    "category": "Netzwerk"
  },
  {
    "term": "ARP",
    "full": "Address Resolution Protocol",
    "desc": "Ermittelt die physische MAC-Adresse zu einer bekannten IP-Adresse im lokalen Netzwerk.",
    "category": "Netzwerk"
  },
  {
    "term": "BGP",
    "full": "Border Gateway Protocol",
    "desc": "Routing-Protokoll für die Verbindung zwischen autonomen Systemen im Internet.",
    "category": "Netzwerk"
  },
  {
    "term": "DHCP",
    "full": "Dynamic Host Configuration Protocol",
    "desc": "Ein Protokoll zur automatischen Zuweisung von IP-Adressen und weiteren Konfigurationsdaten an Geräte im Netzwerk.",
    "category": "Netzwerk"
  },
  {
    "term": "DMZ",
    "full": "Demilitarisierte Zone",
    "desc": "Ein abgeschirmtes Subnetz, das durch Firewalls vom internen Netz getrennt ist und öffentlich erreichbare Dienste beherbergt.",
    "category": "Netzwerk"
  },
  {
    "term": "DNS",
    "full": "Domain Name System",
    "desc": "Dient der Namensauflösung, indem es menschenlesbare Namen in IP-Adressen übersetzt.",
    "category": "Netzwerk"
  },
  {
    "term": "DSL",
    "full": "Digital Subscriber Line",
    "desc": "Techniken zur Datenübertragung über Telefonleitungen (ADSL, VDSL, SDSL).",
    "category": "Netzwerk"
  },
  {
    "term": "HTTP/HTTPS",
    "full": "Hypertext Transfer Protocol (Secure)",
    "desc": "Protokolle zur Übertragung von Webseiten; HTTPS nutzt SSL/TLS zur Verschlüsselung.",
    "category": "Netzwerk"
  },
  {
    "term": "ICMP",
    "full": "Internet Control Message Protocol",
    "desc": "Wird für den Austausch von Status- und Fehlermeldungen im Netzwerk verwendet (z.B. ping).",
    "category": "Netzwerk"
  },
  {
    "term": "IMAP/IMAPS",
    "full": "Internet Message Access Protocol (Secure)",
    "desc": "Ein Protokoll zum Abrufen von E-Mails, bei dem die Nachrichten auf dem Server verbleiben und synchronisiert werden.",
    "category": "Netzwerk"
  },
  {
    "term": "IP",
    "full": "Internet Protocol",
    "desc": "Das grundlegende Protokoll für die Adressierung und das Routing von Datenpaketen (IPv4, IPv6).",
    "category": "Netzwerk"
  },
  {
    "term": "iSCSI",
    "full": "Internet Small Computer System Interface",
    "desc": "Protokoll zur Übertragung von SCSI-Befehlen über IP-Netzwerke.",
    "category": "Netzwerk"
  },
  {
    "term": "LAN",
    "full": "Local Area Network",
    "desc": "Ein lokales Netzwerk, das Geräte in einem begrenzten Bereich verbindet.",
    "category": "Netzwerk"
  },
  {
    "term": "MIMO",
    "full": "Multiple Input Multiple Output",
    "desc": "Ein Verfahren in der drahtlosen Übertragung, das mehrere Sende- und Empfangsantennen parallel nutzt.",
    "category": "Netzwerk"
  },
  {
    "term": "NAS",
    "full": "Network Attached Storage",
    "desc": "Netzgebundener Speicher, der über das Netzwerk für mehrere Benutzer zugänglich ist.",
    "category": "Netzwerk"
  },
  {
    "term": "NIC",
    "full": "Network Interface Card",
    "desc": "Netzwerkkarte zur Anbindung eines Computers an ein Netzwerk.",
    "category": "Netzwerk"
  },
  {
    "term": "NTP",
    "full": "Network Time Protocol",
    "desc": "Protokoll zur Synchronisation der Uhrzeiten von Computern über ein Netzwerk.",
    "category": "Netzwerk"
  },
  {
    "term": "OSI",
    "full": "Open Systems Interconnection",
    "desc": "Referenzmodell für Netzwerkschichten mit 7 Ebenen.",
    "category": "Netzwerk"
  },
  {
    "term": "PoE",
    "full": "Power over Ethernet",
    "desc": "Verfahren zur Stromversorgung von Netzwerkgeräten direkt über das Ethernet-Kabel.",
    "category": "Netzwerk"
  },
  {
    "term": "POP3/POP3S",
    "full": "Post Office Protocol 3 (Secure)",
    "desc": "Ein Protokoll zum Abholen von E-Mails, bei dem diese vom Server heruntergeladen werden.",
    "category": "Netzwerk"
  },
  {
    "term": "PPPoE",
    "full": "Point-to-Point Protocol over Ethernet",
    "desc": "Ein Protokoll zum Aufbau einer Netzwerkverbindung, häufig für DSL-Anschlüsse genutzt.",
    "category": "Netzwerk"
  },
  {
    "term": "QoS",
    "full": "Quality of Service",
    "desc": "Techniken zur Priorisierung von Datenverkehr (z.B. VoIP), um die Qualität zu sichern.",
    "category": "Netzwerk"
  },
  {
    "term": "RADIUS",
    "full": "Remote Authentication Dial-In User Service",
    "desc": "Server-Dienst zur zentralen Authentifizierung von Benutzern, häufig in WPA2-Enterprise.",
    "category": "Netzwerk"
  },
  {
    "term": "SAN",
    "full": "Storage Area Network",
    "desc": "Dediziertes Hochgeschwindigkeitsnetzwerk für Speichergeräte.",
    "category": "Netzwerk"
  },
  {
    "term": "SLAAC",
    "full": "Stateless Address Autoconfiguration",
    "desc": "IPv6-Mechanismus zur automatischen Adresskonfiguration ohne DHCP.",
    "category": "Netzwerk"
  },
  {
    "term": "SMB/NFS",
    "full": "Server Message Block / Network File System",
    "desc": "Protokolle für den Dateizugriff über Netzwerke.",
    "category": "Netzwerk"
  },
  {
    "term": "SMTP/SMTPS",
    "full": "Simple Mail Transfer Protocol (Secure)",
    "desc": "Das Standardprotokoll zum Versenden von E-Mails über das Internet.",
    "category": "Netzwerk"
  },
  {
    "term": "SNMP",
    "full": "Simple Network Management Protocol",
    "desc": "Protokoll zur Überwachung und Steuerung von Netzwerkelementen.",
    "category": "Netzwerk"
  },
  {
    "term": "SSID",
    "full": "Service Set Identifier",
    "desc": "Der frei wählbare Name eines Funknetzwerks (WLAN).",
    "category": "Netzwerk"
  },
  {
    "term": "TCP",
    "full": "Transmission Control Protocol",
    "desc": "Ein verbindungsorientiertes, zuverlässiges Transportprotokoll mit Fehlerbehebung.",
    "category": "Netzwerk"
  },
  {
    "term": "UDP",
    "full": "User Datagram Protocol",
    "desc": "Ein verbindungsloses, schnelles Transportprotokoll ohne Fehlerkontrolle.",
    "category": "Netzwerk"
  },
  {
    "term": "VLAN",
    "full": "Virtual Local Area Network",
    "desc": "Ein logisches Teilnetz innerhalb eines physischen Netzwerks zur Segmentierung.",
    "category": "Netzwerk"
  },
  {
    "term": "VPN",
    "full": "Virtual Private Network",
    "desc": "Ein logisches, privates Netzwerk, das eine verschlüsselte Verbindung über öffentliche Netze herstellt.",
    "category": "Netzwerk"
  },
  {
    "term": "WLAN/WiFi",
    "full": "Wireless Local Area Network",
    "desc": "Drahtloses lokales Netzwerk nach IEEE 802.11 Standards.",
    "category": "Netzwerk"
  },
  {
    "term": "1NF/2NF/3NF",
    "full": "Erste, zweite und dritte Normalform",
    "desc": "Regeln zur Strukturierung von Datenbanken zur Vermeidung von Redundanzen.",
    "category": "Software & DB"
  },
  {
    "term": "CMS",
    "full": "Content Management System",
    "desc": "Ein System zur Erstellung und Verwaltung von Webinhalten (z.B. WordPress).",
    "category": "Software & DB"
  },
  {
    "term": "CRM",
    "full": "Customer Relationship Management",
    "desc": "Software zur Pflege und Steuerung der Kundenbeziehungen.",
    "category": "Software & DB"
  },
  {
    "term": "DCL",
    "full": "Data Control Language",
    "desc": "SQL-Befehle zur Rechteverwaltung (GRANT, REVOKE).",
    "category": "Software & DB"
  },
  {
    "term": "DDL",
    "full": "Data Definition Language",
    "desc": "SQL-Befehle zur Definition der Datenstruktur (CREATE, ALTER, DROP).",
    "category": "Software & DB"
  },
  {
    "term": "DML",
    "full": "Data Manipulation Language",
    "desc": "SQL-Befehle zur Bearbeitung von Daten (INSERT, UPDATE, DELETE).",
    "category": "Software & DB"
  },
  {
    "term": "DQL",
    "full": "Data Query Language",
    "desc": "SQL-Befehle zur Abfrage von Daten (SELECT).",
    "category": "Software & DB"
  },
  {
    "term": "DBMS",
    "full": "Datenbankmanagementsystem",
    "desc": "Software zur Speicherung, Verwaltung und Sicherung von Datenbeständen.",
    "category": "Software & DB"
  },
  {
    "term": "ER-Modell",
    "full": "Entity-Relationship-Modell",
    "desc": "Grafische Darstellung von Datenbank-Entitäten und deren Beziehungen.",
    "category": "Software & DB"
  },
  {
    "term": "ERP",
    "full": "Enterprise Resource Planning",
    "desc": "Software zur Unterstützung der Ressourcenplanung des gesamten Unternehmens.",
    "category": "Software & DB"
  },
  {
    "term": "IDE",
    "full": "Integrierte Entwicklungsumgebung",
    "desc": "Eine Sammlung von Werkzeugen (Editor, Compiler, Debugger) zur Softwareentwicklung.",
    "category": "Software & DB"
  },
  {
    "term": "SQL",
    "full": "Structured Query Language",
    "desc": "Die Standard-Sprache für die Arbeit mit relationalen Datenbanken.",
    "category": "Software & DB"
  },
  {
    "term": "UML",
    "full": "Unified Modeling Language",
    "desc": "Eine standardisierte Modellierungssprache zur Visualisierung von Software-Systemen.",
    "category": "Software & DB"
  },
  {
    "term": "VDI",
    "full": "Virtuelle Desktop-Infrastruktur",
    "desc": "Bereitstellung von Desktop-Umgebungen auf zentralen Servern.",
    "category": "Software & DB"
  },
  {
    "term": "AES",
    "full": "Advanced Encryption Standard",
    "desc": "Ein weltweit anerkannter Standard für die symmetrische Verschlüsselung von Daten.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "CA",
    "full": "Certification Authority",
    "desc": "Zertifizierungsstelle, die digitale Zertifikate ausstellt.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "CRL",
    "full": "Certificate Revocation List",
    "desc": "Liste der zurückgerufenen/gesperrten Zertifikate.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "DSGVO",
    "full": "Datenschutz-Grundverordnung",
    "desc": "Die EU-weite Verordnung zum Schutz personenbezogener Daten.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "ELAM",
    "full": "Early Launch Antimalware",
    "desc": "Windows-Funktion zum Schutz vor Malware beim Systemstart.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "ISMS",
    "full": "Informationssicherheits-Managementsystem",
    "desc": "Systematischer Ansatz zur Verwaltung sensibler Unternehmensinformationen.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "KRITIS",
    "full": "Kritische Infrastrukturen",
    "desc": "Organisationen mit wichtiger Bedeutung für das Gemeinwesen (Energie, Gesundheit, etc.).",
    "category": "IT-Sicherheit"
  },
  {
    "term": "MFA",
    "full": "Multi-Factor-Authentication",
    "desc": "Ein Verfahren, bei dem mehrere unabhängige Faktoren zur Identifizierung angegeben werden müssen.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "PKI",
    "full": "Public Key Infrastructure",
    "desc": "Ein System zur Ausstellung und Verwaltung digitaler Zertifikate.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "RSA/ECC/DSA",
    "full": "Verschlüsselungsalgorithmen",
    "desc": "Asymmetrische Verschlüsselungsverfahren für sichere Kommunikation.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "SPI",
    "full": "Stateful Packet Inspection",
    "desc": "Eine Firewall-Technik, die Datenpakete basierend auf ihrem Verbindungszustand prüft.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "SSL/TLS",
    "full": "Secure Sockets Layer / Transport Layer Security",
    "desc": "Protokolle zur Verschlüsselung von Internetverbindungen.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "TOM",
    "full": "Technisch-organisatorische Maßnahmen",
    "desc": "Maßnahmen gemäß DSGVO zur Sicherheit der Datenverarbeitung.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "TPM",
    "full": "Trusted Platform Module",
    "desc": "Hardware-Chip zur sicheren Speicherung von Kryptografie-Schlüsseln.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "WPA/WPA2/WPA3",
    "full": "Wireless Protected Access",
    "desc": "Sicherheitsstandards für WLAN-Verschlüsselung.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "Pentest",
    "full": "Penetrationstest",
    "desc": "Geplanter, autorisierter Sicherheitstest, bei dem ein System wie ein echter Angreifer überprüft wird, um Schwachstellen aufzudecken.",
    "category": "IT-Sicherheit"
  },
  {
    "term": "BBiG",
    "full": "Berufsbildungsgesetz",
    "desc": "Gesetz, das die Berufsausbildung in Deutschland regelt.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "BGB",
    "full": "Bürgerliches Gesetzbuch",
    "desc": "Grundlegendes Gesetz für das Privatrecht in Deutschland.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "EULA",
    "full": "End User License Agreement",
    "desc": "Endbenutzer-Lizenzvereinbarung für Software.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "HGB",
    "full": "Handelsgesetzbuch",
    "desc": "Gesetz für das Handelsrecht in Deutschland.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "i.A./i.V./ppa.",
    "full": "Im Auftrag / In Vollmacht / per procura",
    "desc": "Unterschriftvollmachten mit verschiedenen Befugnisstufen.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "KMU",
    "full": "Kleine und mittlere Unternehmen",
    "desc": "Unternehmen mit weniger als 250 Mitarbeitern.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "OEM",
    "full": "Original Equipment Manufacturer",
    "desc": "Hersteller, der Produkte für andere Marken produziert.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "PDCA",
    "full": "Plan, Do, Check, Act",
    "desc": "Qualitätsmanagement-Zyklus zur kontinuierlichen Verbesserung.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "SLA",
    "full": "Service Level Agreement",
    "desc": "Vertragliche Vereinbarung über die Qualität einer Dienstleistung.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "SMART",
    "full": "Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert",
    "desc": "Kriterien für gute Zielformulierung im Projektmanagement.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "WEEE",
    "full": "Waste Electrical and Electronic Equipment",
    "desc": "EU-Richtlinie zur Entsorgung von Elektroaltgeräten.",
    "category": "Wirtschaft & Recht"
  },
  {
    "term": "arp -a",
    "full": "ARP Cache anzeigen",
    "desc": "Zeigt die IP-zu-MAC-Adress-Zuordnungen im lokalen ARP-Cache an.",
    "category": "CLI-Tools"
  },
  {
    "term": "chmod",
    "full": "Change Mode",
    "desc": "Linux-Werkzeug zum Ändern der Dateizugriffsrechte (r=read, w=write, x=execute).",
    "category": "CLI-Tools"
  },
  {
    "term": "getmac -v",
    "full": "Get MAC Address",
    "desc": "Liest die MAC-Adressen aller Netzwerkadapter eines Windows-Systems aus.",
    "category": "CLI-Tools"
  },
  {
    "term": "ipconfig /all",
    "full": "IP Configuration",
    "desc": "Zeigt die detaillierte Netzwerkkonfiguration unter Windows an.",
    "category": "CLI-Tools"
  },
  {
    "term": "netsh",
    "full": "Network Shell",
    "desc": "Windows-Tool zur Konfiguration von Netzwerkadaptern und Firewall-Regeln.",
    "category": "CLI-Tools"
  },
  {
    "term": "nslookup",
    "full": "Name Server Lookup",
    "desc": "Werkzeug zur Abfrage des DNS, um die IP-Adresse zu einem Hostnamen zu ermitteln.",
    "category": "CLI-Tools"
  },
  {
    "term": "ping",
    "full": "Packet Internet Groper",
    "desc": "Prüft die Erreichbarkeit eines Netzwerkgeräts durch Echo-Anfragen (ICMP).",
    "category": "CLI-Tools"
  },
  {
    "term": "tracert",
    "full": "Trace Route",
    "desc": "Verfolgt den Weg von Datenpaketen über verschiedene Router zum Ziel.",
    "category": "CLI-Tools"
  }
];
