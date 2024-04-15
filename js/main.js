//defino variables
const articulosVinos = document.getElementById("listaVinos")
const articulosCervezas = document.getElementById("listaCervezas")
const articulosWhiskies = document.getElementById("listaWhiskies")
const articulosCarrito = document.getElementById("listaCarrito")
const saldoCarrito = document.getElementById("saldoCarrito")

const arreglo = []
const carritoCompra = []
let saldo = 0
let jsonCarrito

class Vinos{
  constructor( tipo, marca, variedad, precio, imagen){
    this.tipo = tipo,
    this.marca = marca,
    this.variedad = variedad,
    this.precio = precio,
    this.imagen = imagen
  }
}
class Cerveza{
  constructor( tipo, marca, variedad, precio, imagen){
    this.tipo = tipo,
    this.marca = marca,
    this.variedad = variedad,
    this.precio = precio,
    this.imagen = imagen
  }  
}
class Whiskie{
  constructor(tipo, marca, variedad, precio, imagen){
    this.tipo = tipo,
    this.marca = marca,
    this.variedad = variedad,
    this.precio = precio,
    this.imagen = imagen
  }  
}
//defino algunos objetos para cargar mis productos
Vinos = [
  new Vinos("Vino", "Pyros", "Malbec","9000", "./img/pyrosmalbec.jpeg"),
  new Vinos("Vino", "Violinista", "Malbec", "7000", "./img/violinistamalbec.jpeg"),
  new Vinos("Vino", "Aguma", "Malbec", "8000", "./img/agumamalbec.jpeg"),
  new Vinos("Vino", "Colon", "Syrah", "4000", "./img/colonsyrah.jpeg"),
  new Vinos("Vino", "Elefante", "Cabernet", "8000", "./img/elefantecabernet.jpeg"),
]
Cerveza =[
    new Cerveza("Cerveza", "Quilmes", "Rubia", "1000", "./img/quilmesrubia.jpeg"),
    new Cerveza("Cerveza", "Corona", "Rubia", "3000", "./img/coronarubia.jpeg"),
    new Cerveza("Cerveza", "Andes", "Roja", "4000", "./img/andesroja.jpeg"),
    new Cerveza("Cerveza", "Imperial", "Roja", "3000", "./img/imperialroja.jpeg"),
    new Cerveza("Cerveza", "Imperial", "IPA", "3500", "./img/imperialipa.jpeg"),
]
Whiskie =[
  new Whiskie("Whiskie", "JimBeam", "Whiskie", "15000", "./img/jimbeam.jpeg"),
  new Whiskie("Whiskie", "Jack Daniels", "Whiskie", "12000", "./img/jackdaniels.jpeg"),
  new Whiskie("Whiskie", "Jameson", "Whiskie", "17000", "./img/jameson.jpeg"),
  new Whiskie("Whiskie", "Jony Walker", "Whiskie", "20000", "./img/jonywalker.jpeg"),
]

//eventos de los botones 

//en cada click de los botones Vinos, Cervezas y Whiskies se muestran los articulos por pantalla

const mostrarVinos = (vinos)=>{ 
  // vacio todos para que no muestre repetidos en el html
  articulosCervezas.innerHTML = ""
  articulosWhiskies.innerHTML = "" 
  articulosVinos.innerHTML = ""
  articulosCarrito.innerHTML = ""


  let i = 0
  //por cada vino lo muestro en pantalla
  Vinos.forEach((vinos)=>{   
        
        articulosVinos.innerHTML += `
          <div class = "contenedorArticulos">
          <h3>${vinos.tipo}</h3>
          <p>${vinos.marca}</p>
          <p>${vinos.variedad}</p>
          <p>$ ${vinos.precio}</p>
          <img src=${vinos.imagen} alt=""/>
          <button id="${i}" class="botonComprar">Comprar</button>
          </div>
          `
          i ++
          
  }) 
  
  const botonComprar = (e) => {   
   
    // console.log("Muestro el objeto selecionado por consola")
    // console.log(Vinos[e.target.id])
    let elementoSelecionado = Vinos[e.target.id]

    //almaceno lo selecionado en el carrito
    carritoCompra.push(elementoSelecionado)

    //transformo el carrito en string para almacenarlo en el local storage
    jsonCarrito = JSON.stringify(carritoCompra)
    localStorage.setItem('carritoBebidas', jsonCarrito)
    // console.log("Carrito Json " +jsonCarrito)
  }

  //por cada click en boton Comprar ejecuto la función 
  const buttons = document.getElementsByClassName("botonComprar");
  for (let button of buttons) {
    button.addEventListener("click", botonComprar);
  }  

}


const mostrarCerveza = (cervezas)=>{ 
  articulosVinos.innerHTML = ""
  articulosWhiskies.innerHTML = ""
  articulosCervezas.innerHTML = ""
  articulosCarrito.innerHTML = ""

  let i = 0
  Cerveza.forEach((cervezas)=>{   

       articulosCervezas.innerHTML += `
         <div class = "contenedorArticulos">
         <h3>${cervezas.tipo}</h3>
         <p>${cervezas.marca}</p>
         <p>${cervezas.variedad}</p>
         <p>$ ${cervezas.precio}</p>
         <img src=${cervezas.imagen} alt=""/>
         <button id="${i}" class="botonComprar">Comprar</button>         
         </div>
         `
        i ++  
  })

  const botonComprar = (e) => {

    let elementoSelecionado = Cerveza[e.target.id]
    carritoCompra.push(elementoSelecionado)
    jsonCarrito = JSON.stringify(carritoCompra)
    localStorage.setItem('carritoBebidas', jsonCarrito)

  }

  const buttons = document.getElementsByClassName("botonComprar");   
  for (let button of buttons) {
    button.addEventListener("click", botonComprar);
  }  
}

const mostrarWhiskie = (whiskies)=>{ 
  articulosVinos.innerHTML = ""
  articulosCervezas.innerHTML = ""
  articulosWhiskies.innerHTML = ""
  articulosCarrito.innerHTML = ""

  let i = 0
  Whiskie.forEach((whiskies)=>{   

    articulosWhiskies.innerHTML += `
      <div class = "contenedorArticulos">
      <h3>${whiskies.tipo}</h3>
      <p>${whiskies.marca}</p>
      <p>$ ${whiskies.precio}</p>
      <img src=${whiskies.imagen} alt=""/>
      <button id="${i}" class="botonComprar">Comprar</button>
      </div>
      `
      i ++
  })

  const botonComprar = (e) => {

    let elementoSelecionado = Whiskie[e.target.id]
    carritoCompra.push(elementoSelecionado)
    jsonCarrito = JSON.stringify(carritoCompra)
    localStorage.setItem('carritoBebidas', jsonCarrito)

  }

  const buttons = document.getElementsByClassName("botonComprar");  
  for (let button of buttons) {
    button.addEventListener("click", botonComprar);
  }
}

//funcion boton Carrito
const finalizarCompra = (carrito)=>{
  articulosVinos.innerHTML = ""
  articulosCervezas.innerHTML = ""
  articulosWhiskies.innerHTML = ""
  articulosCarrito.innerHTML = ""
  
  //convierto en array el carrito almacenado en el local
  let arrayCarrito = JSON.parse(jsonCarrito)

  console.log("Carrito Json" +jsonCarrito)
  console.log(arrayCarrito)

  let i = 0
  saldo = 0
  //muestro los articulos del carrito por pantalla
  arrayCarrito.forEach((carrito)=>{
    articulosCarrito.innerHTML += `
      <div class = "listaCarrito">
      <img src=${carrito.imagen} alt=""/>
      <button id="${i}" class="botonEliminar">Eliminar</button>
      </div>
      `
      i++  
    saldo = saldo + parseInt(carrito.precio)  
    
  }) 
  //muestro el saldo por pantalla
  saldoCarrito.innerHTML = `
    <div class = "saldo">
    <p>Su saldo a pagar es $ ${saldo} </p>
    </div>
    `

  const botonEliminar = (e) => {
    //vacio para no repetir pantalla
    articulosCarrito.innerHTML = ""

    //eliminamos el elemento del carrito
    arrayCarrito.splice(e.target.id,1)
    carritoCompra.splice(e.target.id,1)

    jsonCarrito = JSON.stringify(carritoCompra)
    localStorage.setItem('carritoBebidas', jsonCarrito)

    let i = 0
    saldo = 0
    arrayCarrito.forEach((carrito)=>{
      articulosCarrito.innerHTML += `
        <div class = "listaCarrito">
        <img src=${carrito.imagen} alt=""/>
        <button id="${i}" class="botonEliminar">Eliminar</button>
        </div>
        `
        i++  
        saldo = saldo + parseInt(carrito.precio)  
      
    })
    const buttons = document.getElementsByClassName("botonEliminar");  
    for (let button of buttons) {
      button.addEventListener("click", botonEliminar);
    }
    saldoCarrito.innerHTML = `
      <div class = "saldo">
      <p>Su saldo a pagar es $ ${saldo}</p>
      </div>
      `
  }

  const buttons = document.getElementsByClassName("botonEliminar");  
  for (let button of buttons) {
    button.addEventListener("click", botonEliminar);

  }
}

const eliminarCompra = (carrito)=>{
  console.log(carritoCompra)
  if(carritoCompra){
    articulosVinos.innerHTML = ""
    articulosCervezas.innerHTML = ""
    articulosWhiskies.innerHTML = ""
    articulosCarrito.innerHTML = ""
    saldoCarrito.innerHTML = ""

    //vaciamos carrito
    carritoCompra.length = 0 
    console.log(carritoCompra)
    jsonCarrito = JSON.stringify(carritoCompra)
    localStorage.setItem('carritoBebidas', jsonCarrito)
    
    console.log(jsonCarrito)
    saldoCarrito.innerHTML = `
      <div class = "saldo">
      <p>No tiene nada en su carrito</p>
      <p>Gracias vuelva prontos!</p>
      </div>
      `
     saldo = 0
     console.log(saldo) 
     console.log(carritoCompra)
  }
  else{
    saldoCarrito.innerHTML = `
    <div class = "saldo">
    <p>No tiene nada en su carrito</p>
    </div>
    `    
  }
}

const botonVino = document.getElementById("botonVino")
botonVino.addEventListener("click", mostrarVinos)

const botonCerveza = document.getElementById("botonCerveza")
botonCerveza.addEventListener("click", mostrarCerveza)

const botonWhiskie = document.getElementById("botonWhiskie")
botonWhiskie.addEventListener("click", mostrarWhiskie)

const botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click", finalizarCompra)

const botonVaciar = document.getElementById("botonVaciar")
botonVaciar.addEventListener("click", eliminarCompra)
