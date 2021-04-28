// creo un oggetto studente
var studente = {
    nome: "Pippo",
    cognome: "Pluto",
    età: 20,
}

// console.log(arrStudente);

// visualizzo su schermo l'oggetto studente con un for in   
for (var key in studente) {
    console.log("Chiave " + key + " valore " + studente[key]);
    console.log("---------------");
}

// creo un arr di oggetti di studenti
var studenti = [{
        nome: "Pinco",
        cognome: "Pallina",
        età: 25
    },
    {
        nome: "Ugo",
        cognome: "De Ughi",
        età: 30
    },
    {
        nome: "Cocco",
        cognome: "Bello",
        età: 35
    }
]


studenti.push({
    nome: prompt("inserisci nome"),
    cognome: prompt("inserisci cognome"),
    età: prompt("inserisci età")
})

console.log(studenti);