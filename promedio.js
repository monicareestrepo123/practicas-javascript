const lista1 = [ 
    100,
    200,
    300,
    500,
];

let sumalista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumalista1 = sumalista1 + lista1[i];
}

const promediolista1 = sumalista1 / lista1.length;

function calcularmedia(lista) {


const sumalista = lista.reduce(
    function (valoracomulado = 0, nuevoelemento) {
        return valoracomulado + nuevoelemento;
    }
);

 const promediolista = sumalista / lista.length;

 return promediolista;
}
