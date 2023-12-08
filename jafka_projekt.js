// let suma_ujemna = 0;
// let suma_dodatnia = 0;

function dane(d) {
    const f = document.getElementById("pozycje");
    const wynik = document.getElementById('wynik');

    for (const key in d) {
        if (Object.prototype.hasOwnProperty.call(d, key)) {
            let z = '';
            const value = d[key];
            z = value.punkty;
            f.innerHTML += "<option value='" + key + "'>" + value.pozycja + " [" + z + "]</option>";
        }
    }

    f.addEventListener('change', () => {
        let sumaPunktow = 0;
        const wybraneOpcje = f.selectedOptions;

        for (let i = 0; i < wybraneOpcje.length; i++) {
            const klucz = wybraneOpcje[i].value;
            const punkty = d[klucz] && d[klucz].punkty;
            sumaPunktow += punkty;
        }

        // suma_ujemna = sumaPunktow; 
        // let roznica = suma_dodatnia - suma_ujemna; 
        // console.log(roznica);

        if (sumaPunktow >= 400) {
            wynik.textContent = "Masz przejebane!";
        } else {
            wynik.textContent = Math.round(sumaPunktow*(-1));
        }
    });
};


//===============================================

function dane2(d) {
    const f = document.getElementById("pozycje2");
    const wynik = document.getElementById('wynik2');

    for (const key in d) {
        if (Object.prototype.hasOwnProperty.call(d, key)) {
            let z = '';
            const value = d[key];
            z = value.punkty;

            f.innerHTML += "<option value='" + key + "'>" + value.pozycja + " [" + z + "]</option>";
        }
    }

    f.addEventListener('change', () => {
        let sumaPunktow = 100;
        const wybraneOpcje = f.selectedOptions;

        for (let i = 0; i < wybraneOpcje.length; i++) {
            const klucz = wybraneOpcje[i].value;
            const punkty = d[klucz] && d[klucz].punkty;
            sumaPunktow += punkty;
        }

        // suma_dodatnia = sumaPunktow;
        // let roznica = suma_dodatnia + suma_ujemna; 
        // console.log(roznica);
        // wynik3.textContent = roznica;


        wynik.textContent = Math.round(sumaPunktow);

    });
    
}



const daneJSON = {
    "p0": {
    "pozycja": "Palenie",
    "punkty": 75
    },
    "p1": {
    "pozycja": "Nagana Rady Pedagogicznej",
    "punkty": 400
    },
    "p2": {
    "pozycja": "Nagana Dyrektora",
    "punkty": 300
    },
    "p3": {
    "pozycja": "Upomnienie Dyrektora",
    "punkty": 150
    },
    "p4": {
    "pozycja": "Nagana wychowawcy",
    "punkty": 100
    },
    "p5": {
    "pozycja": "pomnienie wychowawcy",
    "punkty": 50
    },
    "p6": {
    "pozycja": "Uwaga za naganne zachowanie w czasie zajęć",
    "punkty": 15
    },
    "p7": {
    "pozycja": "Uwaga za naganne zachowanie w czasie zbiorowych imprez",
    "punkty": 30
    },
    "p8": {
    "pozycja": "podrabianie dokumentów szkolnych",
    "punkty": 100
    },
    "p9": {
    "pozycja": "Wandalizm",
    "punkty": 35
    },
    "p10": {
    "pozycja": "Aroganckie zachowanie",
    "punkty": 75
    },
    "p11": {
    "pozycja": "Zaczepki słowne i fizyczne",
    "punkty": 75
    },
    "p12": {
    "pozycja": "Wulgarne słownictwo",
    "punkty": 20
    },
    "p13": {
    "pozycja": "Niewykonywanie poleceń nauczyciela i innych pracowników szkoły",
    "punkty": 20
    },
    "p14": {
    "pozycja": "Niewywiązywanie się ze zobowiązań",
    "punkty": 20
    },
    "p15": {
    "pozycja": "Niewywiązywanie się ze zobowiązań reprezentantów szkoły",
    "punkty": 30
    },
    "p16": {
    "pozycja": "Nieprzestrzeganie przepisów BHP",
    "punkty": 15
    },
    "p17": {
    "pozycja": "Za każdą opuszczoną godzinę bez usprawiedliwienia",
    "punkty": 3
    },
    "p18": {
    "pozycja": "Za każdą opuszczoną godzinę bez usprawiedliwienia w dniu odrabiania zajęć szkolnych",
    "punkty": 5
    },
    "p19": {
    "pozycja": "Za zbiorową ucieczkę z zajęć lekcyjnych",
    "punkty": 20
    },
    "p20": {
    "pozycja": "Spóźnienia",
    "punkty": 1
    },
    "p21": {
    "pozycja": "Zaśmiecanie szkoły i jej otoczenia",
    "punkty": 10
    },
    "p22": {
    "pozycja": "Korzystanie z telefonu komórkowego w czasie lekcji",
    "punkty": 40 
    }
};

const daneJSON1 = {
    "p1": {
    "pozycja": "Udział w olimpiadzie przedmiotowej",
    "punkty": 72.5
  },
  "p2": {
    "pozycja": "Udział w konkursie szkolnym udział",
    "punkty": 25
  },
  "p3": {
    "pozycja": "Udział w konkursie pozaszkolnym",
    "punkty": 46
  },
  "p4": {
    "pozycja": "Udział w zawodach sportowych",
    "punkty": 24.5
  },
  "p5": {
    "pozycja": "Funkcje społeczne w klasie",
    "punkty": 35
  },
  "p6": {
    "pozycja": "Praca społeczna",
    "punkty": 4.33
  },
  "p7": {
    "pozycja": "Uczestnictwo w zorganizowanych zajęciach pozalekcyjnych",
    "punkty": 20
  },
  "p8": {
    "pozycja": "Honorowe krwiodawstwo, wolontariat za każdą akcję",
    "punkty": 30
  },
  "p9": {
    "pozycja": "Frekwencja od 90 %",
    "punkty": 60
  },
  "p10": {
    "pozycja": "Do dyspozycji wychowawców klas programowo najwyższych po konsultacji z zespołem nauczycieli",
    "punkty": 25
  },
  "p11": {
    "pozycja": "Stosunek do obowiązków szkolnych po konsultacji z zespołem nauczycieli",
    "punkty": 15
  },
  "p12": {
    "pozycja": "Kultura osobista po konsultacji z zespołem nauczycieli",
    "punkty": 15
  },
  "p13": {
    "pozycja": "Pomoc koleżeńska uzgodniona z wychowawcą klasy",
    "punkty": 10
  }
};


dane(daneJSON);
dane2(daneJSON1);

