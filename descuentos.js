const precioOriginal = 100;
const descuento = 15;

const porcentajepreciocondescuento = 100 - descuento;
const preciocondescuento = (precioOriginal * porcentajepreciocondescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajepreciocondescuento,
    preciocondescuento,
});

