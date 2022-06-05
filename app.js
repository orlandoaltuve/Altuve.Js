
let precioCamisa=800
let precioPantalon=1200
let precioVestido=1300
let precioBufanda=800
let precioCinturon=500
let continuar="S"
let totalCamisa=0
let totalPantalon=0
let totalVestido=0
let totalBufanda=0
let totalCinturon=0
let totalCarrito=0

function agregarCarrito(producto,cantidad){
    switch(producto){
        //camisa
        case 1:
            alert("Agregaste "+ cantidad+" Camisa/s al carrito")
            totalCamisa+= cantidad
            totalCarrito+=cantidad*precioCamisa
        break
        //pantalon
        case 2:
            alert("Agregaste "+ cantidad+" Pantalon/es al carrito")
            totalPantalon+= cantidad
            totalCarrito+=cantidad*precioPantalon
        break
        //vestido
        case 3:
            alert("Agregaste "+ cantidad+" Vestido/s al carrito")
            totalVestido+= cantidad
            totalCarrito+=cantidad*precioVestido
        break
        // bufanda
        case 4:
            alert("Agregaste "+ cantidad+" Bufanda/s al carrito")
            totalBufanda+= cantidad
            totalCarrito+=cantidad*precioBufanda
        break
        // cinturon
        case 5:
            alert("Agregaste "+ cantidad+" Cinturon/es al carrito")
            totalCinturon+= cantidad
            totalCarrito+=cantidad*precioCinturon
        break
    }
}

function mostrarCarrito(){
    let carrito =""
    if(totalCamisa!=0){
        carrito+=totalCamisa+ " Camisa/s, "
    }
    if(totalPantalon!=0){
        carrito+=totalPantalon+ " Pantalon/es, "
    }
    if(totalVestido!=0){
        carrito+=totalVestido+ " Vestido/s, "
    }
    if(totalBufanda!=0){
        carrito+=totalBufanda + " Bufanda/s, "
    }
    if(totalCinturon!=0){
        carrito+=totalCinturon+ " Cinturon/es "
    }
    return carrito
}

do{
let producto=Number(prompt("Selecciona que producto deseas agregar al carrito: Ingrese 1 para elegir camisa, 2 para pantalon, 3 para vestido, 4 para bufanda y 5 para cinturon"))
let cantidad=Number(prompt("Ingrese la cantidad que deseas llevar de este producto"))
agregarCarrito(producto,cantidad)
continuar=prompt("¿Deseas agregar mas productos? presinona s para si, n para no").toUpperCase()
}while(continuar==="S")
alert("En el carrito tienes: "+mostrarCarrito()+"Total a pagar: "+totalCarrito)
