//código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetrocuadrado = ladoCuadrado * 4 ;

console.log("El Perimetro del cuadrado es: " + perimetrocuadrado + "cm");

const areacuadrado = ladoCuadrado* ladoCuadrado;

console.log("El area del cuadrado es: " + areacuadrado + "cm^2");

//código del triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const basetriangulo = 4;


console.log("Los lados del triángulo miden: "
  + ladoTriangulo1
  + "cm,"
  + ladoTriangulo2 
  + "cm,"+ basetriangulo 
  + "cm"
  );

  const alturatriangulo = 5.5;

  console.log("La altura del trángulo es de: "
   + alturatriangulo
   + "cm");

   const perimetrotriangulo = ladoTriangulo1 +
   ladoTriangulo2 + basetriangulo;

   console.log("El perimetro del triángulo es: "
   + perimetrotriangulo
   + "cm");

   const areatriangulo = (basetriangulo * alturatriangulo) / 2 ;
   console.log("El area del triángulo es: " + areatriangulo + "cm^2");

   console.groupEnd();

//código del circuloos
console.group("Circulos");
//radio
const radiocirculo = 4;
console.log("El radio del circulo es: " + radiocirculo + "cm");
//diametro
const diametrocirculo = radiocirculo * 2;
console.log("El diametro del circulo es: " + diametrocirculo + "cm");
//PI
const PI = Math.PI;
console.log("El PI del circulo es: " + PI + "cm");
//circunferencia
const perimetrocirculo = diametrocirculo * PI;
console.log("El perimetro del circulo es: " + perimetrocirculo + "cm");
//area
const areacirculo = (radiocirculo * radiocirculo) * PI;
console.log("El area del circulo es: " + areatriangulo + "cm");


console.groupEnd();

