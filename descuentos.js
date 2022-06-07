const precioOriginal = 100;
const descuento = 15;

function calcularpreciocondescuento(precio, descuento){
    const porcentajepreciocondescuento = 100 - descuento;
const preciocondescuento = (precio * porcentajepreciocondescuento) / 100;

return preciocondescuento;

}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajepreciocondescuento,
//     preciocondescuento,
// });

