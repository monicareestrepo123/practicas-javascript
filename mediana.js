function calcularmedia(lista) {


    const sumalista = lista.reduce(
        function (valoracomulado = 0, nuevoelemento) {
            return valoracomulado + nuevoelemento;
        }
    );
    
     const promediolista = sumalista / lista.length;
    
     return promediolista;
    }
const lista1 = [
    100,
    200,
    500,
    400000000,
];

const mitadlista1 = parseInt(lista1.length / 2);

function espar(numerito) {
    if (numerito % 2 === 0) {
        
        return true;

    } else {

        return false;
        
    }

}

let mediana;

if (espar(lista1.length)){
    const elemento1 = lista1[mitadlista1 - 1];
    const elemento2 = lista1[mitadlista1];

    const elemento1y2 = calcularmedia([
        elemento1,
        elemento2,
    ]);


   mediana = elemento1y2;

}else{
  mediana = lista1[mitadlista1];
}