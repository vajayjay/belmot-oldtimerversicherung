// import React from "react"
// import PDFSelbsteinschaetzung from "../static/Selbsteinschaetzung.pf"
// import PDFVersicherungsbedingungen from "../downloads/PDFVersicherungsbedingungen"

const FAQ = [
    {
        question:
            "Wo kann ich die Versicherungsbedingungen und sonstige Begleitinformationen nachlesen?",
        answer: `Die Versicherungsbedingungen und sonstigen Begleitinformationen finden Sie <a href="/versicherungsbedingungen" target="_blank" rel="noopener noreferrer">hier</a>`,
    },
    {
        question: "Was versteht man unter dem Begriff Marktwert?",
        answer: `Rund 75% der deutschen Oldtimerversicherungen legen als Versicherungssumme den sogenannten Marktwert zugrunde. Bei seltener gehandelten Fahrzeugmodellen und bei Fahrzeugen, die schwerpunktmäßig gewerblich vertrieben werden fließen auch die Händlergewinnspanne, die internationalen Auktionsergebnisse (ohne Mehrwertsteuer) sowie die internationale Marktsituation mit in den Marktwert ein.`,
    },
    {
        question: "Was ist der Wiederbeschaffungswert?",
        answer: `Im Gegensatz zum Marktwert geht der Wiederbeschaffungswert von einer „kurzfristigen Wiederbeschaffung“ aus und ist deutlich höher. Er wird definiert als der Betrag, der tatsächlich für den Kauf eines gleichartigen und gleichwertigen Ersatzfahrzeugs auf- gewendet werden muss. Somit berücksichtigt er den Fahrzeug- kauf bei einem Händler.`,
    },
    {
        question: "Was versteht man unter Wiederaufbauwert?",
        answer: `Der Wiederaufbauwert berücksichtigt die Tatsache, dass die Kosten für ein zu restaurierendes Fahrzeug weitaus höher sind als der durchschnittliche Marktwert. Es fließen die Restaurierungs- sowie die Anschaffungskosten eines restaurierungsfähigen Basisfahrzeugs mit ein. Es handelt sich um einen hypothetischen Wert für ein Fahrzeug in Originalzustand.`,
    },
    {
        question: "Was sind die Wiederherstellungskosten?",
        answer: `Die Wiederherstellungskosten beziffern den Betrag, der aufgebracht wurde, um das Fahrzeug in den aktuellen Zustand zu versetzen – also die Summe aus Anschaffungs- und Restaurationskosten. Die sicht- oder belegbaren Investitionen der Restauration ergeben die Differenz zum Wiederbeschaffungswert.`,
    },
    {
        question: `Was ist eine Selbsteinschätzung bei der Oldtimerversicherung?`,
        answer: `Das ist der von Ihnen persönlich definierte Wert Ihres Fahrzeugs. Bis zu einem Fahrzeugwert von 12.500 Euro akzeptiert BELMOT eine Selbsteinschätzung. Fotografie und ausgefülltes Formular genügen. Der von Ihnen festgelegte Wert gilt dann als Versicherungssumme. Bitte fügen Sie einen aktuellen TÜV-Bericht und – sofern vorhanden – Rechnungen über Restaurierungsmaßnahmen bei. Auch ein lückenlos gepflegtes Scheckheft gilt als Nachweis.`,
    },
    {
        question: "Was ist ein Kurzgutachten?",
        answer: `Das Kurzgutachten ist eine Zustandseinstufung nach grober, äußerlicher Inaugenscheinnahme, um den Wert für die Versicherungseinstufung zu bestimmen. Es wird weder eine Probefahrt durchgeführt noch werden technische Einzelheiten überprüft.
        Kosten: 150 Euro plus Gutachterkosten. Für ein Fahrzeug mit einem Versicherungswert über 100.000 Euro empfehlen wir ein ausführliches Wertgutachten.`,
    },
    {
        question: "Was ist ein ausführliches Gutachten?",
        answer: `Das ausführliche Gutachten, auch „großes Wertgutachten“ genannt, geht detailliert auf das zu bewertende Fahrzeug ein und berücksichtigt die gesamte Modellgeschichte und die Fahrzeugtechnik. Wertbeeinflussende Faktoren, wie z. B. Rennhistorie oder prominenter Vorbesitzer, fließen ebenfalls in die Wertermittlung mit ein. Die Kosten für ein ausführliches Wertgutachten beginnen bei 300 Euro. Für sehr seltene Fahrzeuge mit großem Recherche- bedarf ist mit Kosten ab 800 Euro zu rechnen.`,
    },
    {
        question: "Was ist eine restaurierungsbegleitendes Wertgutachten?",
        answer: `Vom Umfang her identisch mit einem ausführlichen Wertgutachten – jedoch setzt die Bewertung hier bereits in der Phase der Restauration an. Eine individuelle Besprechung mit dem Gutachter im Vorfeld ist empfehlenswert. Im Idealfall erfolgt die Begutachtung nach Abschluss der einzelnen Teilprozesse der Restauration, wie Instandsetzung von Karosserie, Technik und Lack. Eine „haut- nahe“ Qualitätsprüfung der durchgeführten Arbeiten am zerlegten Fahrzeug ist somit gewährleistet. Die Kosten für ein solches Gutachten liegen bei mindestens 800 Euro.`,
    },
    {
        question: "Welches Gutachten macht Sinn?",
        answer: `Setzen Sie auch bei der Bewertung Ihres Oldtimers auf ein „großes Wertgutachten“ von einem sachverständigen Gutachter mit einer fundierten Bewertung des Zustands und der Substanz des Fahrzeugs. Dies ist nach Restaurierungen oder umfangreichen Reparaturen, vor allem nach einem Zubehöreinbau, wichtig. Darauf aufbau- end kann jederzeit durch ein Kurzgutachten der Wert aktualisiert werden. Sinnvoll ist auch die regelmäßige Prüfung der Wertentwicklung vergleichbarer Modelle.`,
    },
    {
        question: "Welcher Wert ist der richtige?",
        answer: `Achten Sie bei Ihrer Oldtimerversicherung unbedingt auf eine Absicherung zum Wiederbeschaffungswert! Im Gegensatz zum Marktwert berücksichtigt dieser die kurzfristige Wiederbeschaffung eines gleichwertigen Fahrzeugs inklusive Händlergewinnspanne und Mehrwertsteuer.`,
    },
    {
        question: "Wann macht ein rotes Wechselkennzeichen Sinn?",
        answer: `Das Wechselkennzeichen für mehrere Fahrzeuge gilt ausschließlich für die Teilnahme an Oldtimer-Veranstaltungen, An- und Abfahrten hierzu sowie Probe-, Prüfungs- und Überführungsfahr- ten und Fahrten zum Zwecke der Wartung oder Reparatur.
        Es gelten dieselben Bedingungen wie beim H-Kennzeichen.

        
        <h3>Kfz-Steuer</h3>Pro Kennzeichen wird (unabhängig von Hubraum und Leistung) eine Pauschalsteuer von zurzeit 191,73 Euro fällig.
        
        <h3>An- und Abmeldung</h3>Die Wechselkennzeichen sind unter Vorlage von Antragsdokumenten bei der Zulassungsbehörde erhältlich. Generell ist der Zulassungsbehörde ein polizeiliches Führungszeugnis vor- zulegen und ein Auszug aus dem Punkteregister in Flensburg ist erforderlich.`,
    },
    {
        question: "Wann macht ein Saison-Kennzeichen Sinn?",
        answer: `Für alle, die ihr Fahrzeug nur für begrenzte Monate des Jahres bewegen möchten! Es gelten die Bedingungen der regulären Zulassung mit dem schwarzen Kennzeichen. Das Alter des Oldtimers spielt keine Rolle. Für die Zulassung brauchen Sie lediglich eine aktuelle Versicherungsbestätigung. Ein Saisonzeitraum gilt immer vom ersten Tag 0.00 Uhr bis zum letzten Tag 24.00 Uhr. Ein Saisonkennzeichen 03–10 ist also vom 1. März bis zum 31. Oktober eines jeden Jahres gültig. Ihr Fahrzeug darf außer- halb des Saisonzeitraumes nicht am öffentlichen Straßenverkehr teilnehmen. Nicht zulässig ist auch das Abstellen des Fahrzeuges auf öffentlichen Straßen oder teilöffentlichem Gelände (z.B. frei zugänglicher Parkplatz).
            
            <h3>Kfz-Steuer</h3>Die Kfz-Steuer wird anteilig nur für den Saisonzeitraum erhoben.
            
            <h3>An- und Abmeldung</h3>Die An- und Abmeldung entfällt: Sie müssen nicht jedes Jahr aufs Neue zur Zulassungsstelle gehen, die Zulassung tritt automatisch wieder in Kraft. Es fallen auch nur einmal – wie beim schwarzen Kennzeichen – die Gebühren für die Zulassung an.`,
    },
    {
        question: "Wann macht ein schwarzes Kennzeichen Sinn?",
        answer: `Eher etwas für Youngtimer: Die Standardzulassung ist für einen Oldtimer nicht empfehlenswert, da sie das Fahrzeug nach Hub- raum besteuert und dadurch oftmals teurer ist als das H-Kennzeichen. Auch die Fahrt in Umweltzonen ist oftmals nicht möglich.
            
        <h3>Kfz-Steuer</h3>Für den Besitzer eines Oldtimers bietet das schwarze Kennzeichen nur unter bestimmten Voraussetzungen Vorteile. Durch die konventionelle Hubraumbesteuerung ist es in der Regel teurer als ein historisches Kennzeichen. Folgende Steuersätze sind seit April 2007 gültig (gilt für Fahrzeuge, die schlechter eingestuft sind als Euro 1):
        Benziner: 25,36 Euro je angefangene 100 cm<sup>3</sup> Hubraum Diesel: 38,78 Euro je angefangene 100 cm<sup>3</sup> Hubraum.
        Zum Vergleich: Ein Oldtimer mit H-Kennzeichen kostet Sie zurzeit nur 191,73 Euro p. a., unabhängig vom Hubraum.

        <h3>An- und Abmeldung</h3>Achten Sie – je nach Landkreis – bei einer vorübergehenden Stilllegung, z. B. zwecks Restaurierung oder Winterruhe, auf die Reservierung Ihres Kennzeichens bis zum Zeitpunkt der Wiederzulassung. Die Kfz-Steuer wird taggenau abgerechnet.`,
    },
    {
        question: "Wann macht ein H-Kennzeichen Sinn?",
        answer: `H wie historisch: Ihr Oldtimer muss hierfür mindestens 30 Jahre alt sein und Sie müssen per Gutachten nachweisen, dass er der „Pflege des Kfz-technischen Kulturgutes“ zugeordnet werden kann. Das bedeutet, dass er in gut erhaltenem Originalzustand sein muss. Übrigens: Fahrzeuge mit H-Kennzeichen genießen freie Fahrt in Feinstaubzonen.

        <h3>Kfz-Steuer</h3>Der Steuersatz wird pauschal erhoben: 191,73 Euro p. a. für Kraftfahrzeuge. 46 Euro p. a. für Krafträder.
        
        <h3>An- und Abmeldung</h3>Wie bei einem regulären schwarzen Kennzeichen kann die Dauer der Zulassung frei gewählt werden. Die Kfz-Steuer wird taggenau abgerechnet. Viele Oldtimerfahrer verzichten aufgrund des günstigen Steuersatzes auf die Abmeldung über den Winter.`,
    },
    {
        question: "Wie wähle ich den richtigen Abstellort?",
        answer: `<h4>Tiefgarage</h4>Nicht empfehlenswert für hochwertige Klassiker. Besonders Parkhäuser und öffentliche Tiefgaragenparkplätze sind als dauerhafter Stellplatz ungeeignet – auch im Hinblick auf den Werterhalt Ihres Fahrzeugs.

        <h4>Carport</h4>Einfachste Möglichkeit, ein Fahrzeug trocken unter zustellen.
        Der Carport sollte sich auf einem um zäunten Grundstück befinden
        und nicht von außen einsehbar sein. Für hochwertige Klassiker
        nicht zu empfehlen.

        <h4>Halle</h4>Ein beliebter Ort, um Sammlungen abzustellen. Die Halle sollte in
        einem guten baulichen Zustand und durch besondere Maßnahmen
        gegen Einbruch gesichert sein. Damit die Fahrzeuge vor Rost und
        Schimmel bewahrt werden, empfiehlt sich eine Be- und Entlüftungsanlage einzubauen.
        
        <h4>Einzelgarage</h4>Einzel- und Doppelgaragen sind optimale Abstellorte. Aber auch hier
        sind Einbruchmöglichkeiten gegeben. Eine Einbruchmeldeanlage
        schafft Abhilfe. Aufgrund der Luftzirkulation sollte die Anschaffung
        einer Be- und Entlüftungsanlage in Erwägung gezogen werden.
        Besonders zu empfehlen bei hochwertigen Oldtimern.`,
    },
    {
        question: "Welche Sicherungsmaßnahmen kann ich treffen?",
        answer: `<h4>Mechanisch sichern</h4>Sie können Gaunern das Leben erschweren, indem Sie Ihren Oldtimer mechanisch sichern.  Vor allem unterwegs bei einer Ausfahrt oder einem Kurztrip verhindern Sicherungen den Gelegenheitsdiebstahl.
        
        In Frage kommen
        - eine Lenkrad- und/oder Pedalkralle,
        - eine mechanische oder elektronische Wegfahrsperre,
        - eine Parkkralle.

        <h4>Elektronisch sichern</h4>Mit dem Einbau eines Ortungsmoduls erhöhen Sie die Chance auf das Wiederauffinden Ihres Fahrzeuges nach einem Diebstahl deutlich.
`,
    },
    {
        question: "Wie melde ich einen Schaden?",
        answer: `Bitte nehmen Sie telefonisch oder per E-Mail Kontakt mit mir auf.`,
    },
]

export default FAQ
