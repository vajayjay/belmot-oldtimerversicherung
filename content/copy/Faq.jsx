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
        answer: `Rund 75% der deutschen Oldtimerpolicen legen den sogenannten Marktwert zugrunde. Bei seltener gehandelten Fahrzeugmodellen und bei Fahrzeugen, die schwerpunktmäßig gewerblich vertrieben werden, fließen auch der Handel (als Nettobetrag), die internationalen Auktionsergebnisse (ohne MwSt.) sowie die internationale Marktsituation mit in den Marktwert ein.`,
    },
    {
        question: "Was ist der Wiederbeschaffungswert?",
        answer: `Im Gegensatz zum Marktwert geht der Wiederbeschaffungswert von einer „kurzfristigen Wiederbeschaffung“ aus. Er wird definiert aus dem Betrag, der tatsächlich für den Kauf eines gleichartigen und gleichwertigen Ersatzfahrzeugs aufgewendet werden muss. Somit berücksichtigt er den Fahrzeugkauf bei einem Händler.`,
    },
    {
        question: "Was versteht man unter Wiederaufbauwert?",
        answer: `Berücksichtigt die Tatsache, dass die Kosten für ein restauriertes Fahrzeug weitaus höher sind als die zu erzielenden durchschnittlichen Marktwerte. Es fließen die Restaurations- sowie die Anschaffungskosten eines restaurierungsfähigen Basisfahrzeugs mit ein. Es handelt sich um einen hypothetischen Wert für ein Fahrzeug in Originalzustand.`,
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
        answer: `Achten Sie bei Ihrer Oldtimer-Versicherung unbedingt auf eine Absicherung zum Wiederbeschaffungswert! Im Gegensatz zum Marktwert berücksichtigt dieser die kurzfristige Wiederbeschaffung eines gleichwertigen Fahrzeugs inkl. Händlergewinnspanne und Mehrwertsteuer.`,
    },
    {
        question: "Wann macht ein rotes Wechselkennzeichen Sinn?",
        answer: `Das Wechselkennzeichen für mehrere Fahrzeuge gilt ausschließlich für die Teilnahme an Oldtimer-Veranstaltungen, An- und Abfahrten hierzu sowie Probe-, Prüfungs- und Überführungsfahrten und Fahrten zum Zwecke der Wartung oder Reparatur. Es gelten dieselben Bedingungen wie beim H-Kennzeichen sowie darüber hinaus die Pflicht zur Führung eines Fahrtenbuchs. Das Befahren von innerstädtischen Umweltzonen ist grundsätzlich gestattet. Alle Benziner mit Erstzulassung vor dem 01.07.1969 sowie Dieselfahrzeuge vor dem 01.07.1976 sind ohnehin von der Pflicht zur Abgasuntersuchung befreit. Das Kennzeichen besteht aus einer Kombination der Buchstabenkombination der Region sowie einer fünfstelligen Nummer, beginnend mit der Ziffernkombination '07'.
        
        <h3>Kfz-Steuer</h3>Pro Kennzeichen wird (unabhängig von Hubraum und Leistung) eine Pauschalsteuer von Euro 191,73 fällig.
        
        <h3>Voraussetzungen</h3>Ihr Oldtimer muss vor mindestens 30 Jahren erstmals in den Verkehr gekommen sein und nach § 9 (1) der seit 1.3.2007 geltenden Fahrzeug-Zulassungsverordnung von einem amtlich anerkannten Sachverständigen, Prüfer oder Prüfingenieur (z.B. bei DEKRA, GTÜ, KÜS oder TÜV) ein Gutachten für die Einstufung eines Fahrzeugs als Oldtimer vorweisen können. Dabei wird festgestellt, ob sich das Fahrzeug weitgehend im Originalzustand befindet. Ein fremder Motor, eine moderne HiFi-Anlage, Sportsitze oder ein schlechter Erhaltungszustand können die Erteilung verhindern. Das Gutachten belegt, dass Ihr Fahrzeug der „Pflege des Kfz-technischen Kulturgutes“ zugeordnet werden kann. Der Gesamteindruck wird sozusagen mitbewertet.
        
        <h3>An- und Abmeldung</h3>Die Wechselkennzeichen sind unter Vorlage von Antragsdokumenten bei der Zulassungsbehörde erhältlich. Nutzen Sie unsere Checkliste für den besseren Überblick. Generell ist der Zulassungsbehörde ein polizeiliches Führungszeugnis vorzulegen und ein Auszug aus dem Punkteregister in Flensburg erforderlich.`,
    },
    {
        question: "Wann macht ein Saison-Kennzeichen Sinn?",
        answer: `Ihr Vorteil: Sie zahlen nur Steuern für den angemeldeten Zeitraum. „Echte“ Oldtimer-Liebhaber wählen häufig die Kombination 3/10, also März bis Oktober, damit sie schon mit der ersten Märzsonne raus auf die Straßen dürfen!
        
        Für alle, die ihr Fahrzeug nur für begrenzte Monate des Jahres bewegen möchten! Es gelten die Bedingungen der regulären Zulassung mit dem schwarzen Kennzeichen. Das Alter des Oldtimers spielt keine Rolle. Für die Zulassung brauchen Sie lediglich eine aktuelle Versicherungsbestätigung. Ein Saisonzeitraum gilt immer vom ersten Tag 0.00 Uhr bis zum letzten Tag 24.00 Uhr. Ein Saisonkennzeichen 03-10 ist also immer vom 01. März bis zum 31. Oktober eines jeden Jahres gültig. Ihr Fahrzeug darf außerhalb des Saisonzeitraumes nicht am öffentlichen Straßenverkehr teilnehmen. Nicht zulässig ist auch das Abstellen des Fahrzeuges auf öffentlichen Straßen oder teilöffentlichem Gelände (z.B. frei zugänglicher Parkplatz).
            
            <h3>Kfz-Steuer</h3>Die Kfz-Steuer wird anteilig nur für den Saisonzeitraum erhoben.
            
            <h3>An- und Abmeldung</h3>Die An- und Abmeldung entfällt: Sie müssen nicht jedes Jahr aufs Neue zur Zulassungsstelle gehen, die Zulassung tritt automatisch wieder in Kraft. Es fallen auch nur einmalig – wie beim schwarzen Kennzeichen – die Gebühren zur Zulassung an.`,
    },
    {
        question: "Wann macht ein schwarzes Kennzeichen Sinn?",
        answer: `Eher etwas für Youngtimer: Die Standardzulassung ist für einen Oldtimer nicht empfehlenswert, da sie Ihr Fahrzeug nach Hubraum besteuert und dadurch oftmals teurer ist als das H-Kennzeichen. Auch die Fahrt in Umweltzonen ist oftmals nicht möglich.
        
        Ob mit oder ohne Euro-Symbol: Das schwarze Kennzeichen steht für die reguläre Zulassung nach den Kriterien der Straßenverkehrs-Zulassungsordnung. Das Alter des Fahrzeugs spielt hierbei keine Rolle. Es wird lediglich eine aktuelle Versicherungsbestätigung benötigt. Achtung Feinstaubzonen: Trägt Ihr Oldtimer keine Feinstaubplakette, ist das Befahren von innerstädtischen Umweltzonen mit dem schwarzen Kennzeichen nicht gestattet.
        Tipp: Ein H-Kennzeichen darf überall fahren.
            
        <h3>Kfz-Steuer</h3>Für den Besitzer eines Oldtimers bietet das schwarze Kennzeichen nur unter bestimmten Voraussetzungen Vorteile. Durch die konventionelle Hubraumbesteuerung ist es in der Regel teurer als ein historisches Kennzeichen. Folgende Steuersätze sind seit dem 01.04.2007 gültig (gilt für Fahrzeuge, die schlechter eingestuft sind als Euro 1):
            Benziner: 25,36 Euro je angefangene 100 ccm Hubraum\nDiesel: 38,78 Euro je angefangene 100 ccm Hubraum
            
            Zum Vergleich: Ein Oldtimer mit H-Kennzeichen kostet Sie nur EUR 191,- p.a., unabhängig vom Hubraum.

            <h3>An- und Abmeldung</h3>Achten Sie – je nach Landkreis – bei einer vorübergehenden Stilllegung, z. B. zwecks Restauration oder Winterruhe, auf die Reservierung Ihres Kennzeichens bis zum Zeitpunkt der Wiederzulassung. Die Kfz-Steuer wird taggenau abgerechnet.

            <h3>Wiederzulassung</h3>Wichtig: Ihr Fahrzeug benötigt eine gültige TÜV-Untersuchung.\nBesitzt das Fahrzeug aufgrund längerer Stilllegung noch einen alten Fahrzeugbrief? Dann ist zu prüfen, ob die Abmeldung bereits länger als 18 Monate zurückliegt. Falls ja, ist die Betriebserlaubnis erloschen und eine Vollabnahme des TÜV erforderlich, z. B. nach § 23 (Oldtimergutachten). Auf jeden Fall erhalten Sie die seit 01.03.2007 gültigen neuen Fahrzeugpapiere. Ihren alten Fahrzeugbrief sollten Sie sich auf jeden Fall aushändigen lassen. Aus diesem geht die Besitzhistorie hervor und oftmals sind Bauteile oder Ausstattungen eingetragen, die aus dem neuen Dokument nicht hervorgehen. Besitzt Ihr Fahrzeug schon die aktuellen EU-Papiere, dann benötigen Sie kein Vollgutachten, falls Ihr Fahrzeug nicht länger als 7 Jahre stillgelegt war.`,
    },
    {
        question: "Wann macht ein H-Kennzeichen Sinn?",
        answer: `H wie historisch: Ihr Oldtimer muss hierfür mindestens 30 Jahre alt sein und per Gutachten nachweisen, dass er der „Pflege des Kfz-technischen Kulturgutes“ zugeordnet werden kann. Das bedeutet, dass er im (gut erhaltenen) Originalzustand sein muss. Außerdem: Freie Fahrt in Feinstaubzonen!
            Alle Benziner mit Erstzulassung vor dem 01.07.1969 sowie Dieselfahrzeuge vor dem 01.07.1976 sind ohnehin von der Pflicht zur Abgasuntersuchung befreit. Das H-Kennzeichen wird in den Papieren mit der Schlüsselnummer „098“ vermerkt.

            <h3>Kfz-Steuer</h3>Der Steuersatz wird pauschal erhoben:
            EUR 191,73 p.a. für Kraftfahrzeuge\nEUR 46,00 p.a. für Krafträder
            
            <h3>Voraussetzungen</h3>Ihr Oldtimer muss vor mindestens 30 Jahren erstmals in den Verkehr gekommen sein und nach § 9 (1) der seit 1.3.2007 geltenden Fahrzeug-Zulassungsverordnung von einem amtlich anerkannten Sachverständigen, Prüfer oder Prüfingenieur (z.B. bei DEKRA, GTÜ, KÜS oder TÜV) ein Gutachten für die Einstufung eines Fahrzeugs als Oldtimer vorweisen können. Dabei wird festgestellt, ob sich das Fahrzeug weitgehend im Originalzustand befindet. Ein fremder Motor, eine moderne HiFi-Anlage, Sportsitze oder ein schlechter Erhaltungszustand können die Erteilung verhindern. Das Gutachten belegt, dass Ihr Fahrzeug der „Pflege des Kfz-technischen Kulturgutes“ zugeordnet werden kann. Der Gesamteindruck wird sozusagen mitbewertet.
            
            <h3>An- und Abmeldung</h3>Wie bei einem regulären schwarzen Kennzeichen kann die Dauer der Zulassung frei gewählt werden. Die Kfz-Steuer wird taggenau abgerechnet. Viele Oldtimer-Fahrer verzichten aufgrund des günstigen Steuersatzes auf die Abmeldung über Winter.`,
    },
    {
        question: "Wie melde ich einen Schaden?",
        answer: `Bitte nehmen Sie telefonisch oder per E-Mail Kontakt mit mir auf.`,
    },
]

export default FAQ
