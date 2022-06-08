const precioOriginal = 100;
const descuento = 15;

function calcularpreciocondescuento(precio, descuento){
    const porcentajepreciocondescuento = 100 - descuento;
const preciocondescuento = (precio * porcentajepreciocondescuento) / 100;

return preciocondescuento;

}

function onClickButtonPricedescuento(){
    const inputprice = document.getElementById("Inputprice")
    const pricevalue = inputprice.value;

    const inputdiscount = document.getElementById("Inputdiscount")
    const  discountvalue = inputdiscount.value;

   const preciocondescuento = calcularpreciocondescuento(pricevalue, descuento);

   const resultadoprice = document.getElementById("resultadoprice");
   resultadoprice.innerText= "El precion con descuento son: $"+ preciocondescuento;
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajepreciocondescuento,
//     preciocondescuento,
// });

