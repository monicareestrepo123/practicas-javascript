//código del cuadrado
//console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetrocuadrado(lado){
    return lado * 4;
}



//console.log("El Perimetro del cuadrado es: " + perimetrocuadrado + "cm");

function areacuadrado(lado)  {
    return lado * lado;
}

//console.log("El area del cuadrado es: " + areacuadrado + "cm^2");

//código del triángulo
//console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const basetriangulo = 4;


//console.log("Los lados del triángulo miden: "
 // + ladoTriangulo1
  //+ "cm,"
  //+ ladoTriangulo2 
  //+ "cm,"+ basetriangulo 
  //+ "cm"
  //);

  //const alturatriangulo = 5.5;

 // console.log("La altura del trángulo es de: "
  // + alturatriangulo
   //+ "cm");

   function perimetrotriangulo(lado1, lado2, base) {
       return lado1 + lado2 + base;
   } 

  // console.log("El perimetro del triángulo es: "+ perimetrotriangulo + "cm");

   function areatriangulo(base, altura){
       return (base * altura)/2;

   } 

//código del circuloos
//console.group("circulo");
//radio
//const radiocirculo = 4;
//console.log("El radio del circulo es: " + radiocirculo + "cm");

//diametro
function diametrocirculo(radio){
    return radio * 2
}
//const diametrocirculo = radiocirculo * 2;
//console.log("El diametro del circulo es: " + diametrocirculo + "cm");

//PI
const PI = Math.PI;
//console.log("El PI del circulo es: " + PI + "cm");

//circunferencia
function perimetrocirculo(radio){
    const diametro = diametrocirculo(radio);
    return diametro * PI;
}
//const perimetrocirculo = diametrocirculo * PI;
//console.log("El perimetro del circulo es: " + perimetrocirculo + "cm");

//area
//const areacirculo = (radiocirculo * radiocirculo) * PI;
function areacirculo(radio){
    return (radio * radio)* PI;
}

//console.log("El area del circulo es: " + areacirculo + "cm");


console.groupEnd();

//Aqui interactuamos con el html

function calcularPerimetrocuadrado(){


}

function calcularAreacuadrado(){

}

