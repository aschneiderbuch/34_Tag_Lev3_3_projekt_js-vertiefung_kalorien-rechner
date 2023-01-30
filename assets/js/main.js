console.log("test");

/* 
Frage

Eingabe
    Körpergewicht
    Größe
    Alter
    Geschlecht   Mann / Frau

Berechnung
    Mann 
        Geschlecht   Mann   + 664,7 Kalorin
        Körpergewicht * 13,7
        Größe * 5
        Alter * 6,8
           

Berechnung 
    Frau
        Geschlecht   Frau   + 655,1 Kalorin
        Körpergewicht * 9,6
        Größe * 1,8
        Alter * 4,7
           


PAL
 Körperliche Belastung
PAL-Faktor
    Schlafen; 0,95
    Nur Sitzen oder Liegen; 1,2
    Ausschließlich sitzende Tätigkeit mit wenig oder keiner körperlichen Aktivität in der Freizeit, z.B. Büroarbeit; 1,5
    Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit, z.B. Studierende, Fließbandarbeiter, Laboranten, Kraftfahrer; 1,7
    Überwiegend gehende oder stehende Tätigkeit, z.B. Verkäufer, Kellner, Handwerker, Mechaniker, Hausfrauen; 1,9
    Körperlich anstrengende berufliche Arbeit; 2,2



    
Ausgabe
    Grundumsatz
    Gesamtumsatz = Grundumsatz + aktivitäts Nivau (PAL)

    in kcal und kJ 
        kj = 4,184 * kcal 
*/




// Variablen input
let körpergröße = document.querySelector("#körpergröße");
let alter = document.querySelector("#alter");
let gewicht = document.querySelector("#gewicht");

let radio_weiblich = document.querySelector("#weiblich");
let radio_männlich = document.querySelector("#männlich");

let liste = document.querySelector("#liste");

let button = document.querySelector("#button");


// EventListener
button.addEventListener("click", werteBerechnen);

liste.addEventListener("change", (event) => { console.log(event.target.value) });


// Output

let grundumsatzKcal = document.querySelector("#grundumsatzKcal");
let grundumsatzKJ = document.querySelector("#grundumsatzKJ");

let gesamtumsatzKcal = document.querySelector("#gesamtumsatzKcal");
let gesamtumsatzKJ = document.querySelector("#gesamtumsatzKJ");




// Funktion 
function werteBerechnen(event) {
event.preventDefault();      // macht das html nicht neu startet beim Submit drücken so wie im html onsubmit="return false"

    if (körpergröße.value > 0 && alter.value > 0 && gewicht.value > 0 && liste.vale > 0 && (radio_männlich.checked || radio_weiblich.checked)) {

    }
    if (radio_männlich.checked) {
        let ergebnis = (664.7 + Number(gewicht.value) * 13.7 + Number(körpergröße.value) * 5 + Number(alter.value) * 6.8).toFixed(2);
        console.log((664.7 + Number(gewicht.value) * 13.7 + Number(körpergröße.value) * 5 + Number(alter.value) * 6.8).toFixed(2));
        console.log(ergebnis)

        console.log(liste.value);
        let gesErgebnis = (Number(ergebnis) * Number(liste.value)).toFixed(2);
        console.log(gesErgebnis);

        grundumsatzKcal.innerHTML = `Grundumsatz ${ergebnis} in kcal`;
        grundumsatzKJ.innerHTML = `Grundumsatz ${(ergebnis * 4.184).toFixed(2)} in kJ`;

        gesamtumsatzKcal.innerHTML = `Gesamtumsatz ${gesErgebnis} in kcal`;
        gesamtumsatzKJ.innerHTML = `Gesamtumsatz ${(gesErgebnis * 4.184).toFixed(2)} in kJ`;
    }
    else if (radio_weiblich.checked) {
        let ergebnis = (655.1 + Number(gewicht.value) * 9.6 + Number(körpergröße.value) * 1.8 + Number(alter.value) * 4.7).toFixed(2);
        let gesErgebnis = (Number(ergebnis) * Number(liste.value)).toFixed(2);

        grundumsatzKcal.innerHTML = `Grundumsatz ${ergebnis} in kcal`;
        grundumsatzKJ.innerHTML = `Grundumsatz ${(ergebnis * 4.184).toFixed(2)} in kJ`;

        gesamtumsatzKcal.innerHTML = `Gesamtumsatz ${gesErgebnis} in kacl`;
        gesamtumsatzKJ.innerHTML = `Gesamtumsatz ${(gesErgebnis * 4.184).toFixed(2)} in kJ`;

    }
};

