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
button.addEventListener("click", werteBerechnen );

liste.addEventListener("change", (event) => {console.log(event.target.value)} );


// Output

let grundumstatzKcal = document.querySelector("#grundumstatzKcal");
let grundumsatzKJ = document.querySelector("#grundumsatzKJ");

let gesamtumsatzKcal = document.querySelector("#gesamtumsatzKcal");
let gesamtumsatzKJ = document.querySelector("#gesamtumsatzKJ");




// Funktion 
function werteBerechnen(){

    // ! wird zu false damit
if (!(körpergröße.value >0 && alter.value > 0 && gewicht.value > 0 && liste.vale >0 && (radio_männlich.checked || radio_weiblich.checked))){
    return;
}



};