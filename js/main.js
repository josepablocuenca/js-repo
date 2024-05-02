//defino variables
const articulos = document.getElementById("listaArticulos")
const saldoCarrito = document.getElementById("saldoCarrito")

const arreglo = []
let saldo = 0
let jsonCarrito
let jsonRecuperado
let id
const carritoCompra = []

//en cada click de los botones Vinos, Cervezas y Whiskies se muestran los articulos por pantalla
const llamarPorArticulo = async (data, tipo) =>{
  
  try {
    articulos.innerHTML = "" 
    articulosCarrito.innerHTML = ""
    tituloCarrito.innerHTML = ""
    let i = 0
    data.forEach((data)=>{  
   
      if(data.tipo == tipo){
        articulos.innerHTML += `
          <div class = "contenedorArticulos">
          <h3>${data.tipo}</h3>
          <p>${data.marca}</p>
          <p>${data.variedad}</p>
          <p>$ ${data.precio}</p>
          <img src=${data.imagen} alt=""/>
          <button id="${data.id}" class="botonComprar">Comprar</button>
          </div>
          `
          i ++
      }
     
    }) 
    const botonComprar = (e) => {
      id = e.target.id - 1
      let elementoSelecionado = data[id]
      let articuloExistente = carritoCompra.find( articulo => articulo.id === elementoSelecionado.id)
      
      //almaceno lo selecionado en el carrito 
      //analizo si ya existe ese articulo y suma cantidad
      if(articuloExistente) {
        articuloExistente.cantidad++ 
      }
      else{
        carritoCompra.push({
          id: elementoSelecionado.id,
          tipo : elementoSelecionado.tipo,
          marca : elementoSelecionado.marca,
          variedad : elementoSelecionado.variedad,
          precio : elementoSelecionado.precio,
          imagen : elementoSelecionado.imagen,
          cantidad : 1
      
        })
      }

      console.log(carritoCompra)
      //transformo el carrito en string para almacenarlo en el local storage
      jsonCarrito = JSON.stringify(carritoCompra)
      localStorage.setItem('carritoBebidas', jsonCarrito)
      console.log("Carrito Json " +jsonCarrito)

      Swal.fire({
        title: "Gracias por elegirnos!",
        html: "<p>Producto cargado con exito!</p>",
        icon: "success",
        imageUrl: elementoSelecionado.imagen,
        imageWidth: 200,
        imageHeight: 200,
        confirmButtonText: "Ok"
      })
    }
    
    //por cada click en boton Comprar ejecuto la función 
    const buttons = document.getElementsByClassName("botonComprar");
    for (let button of buttons) {
      button.addEventListener("click", botonComprar);
    } 

  }    
  catch (error) {
      console.error(error)
  }
}
function mostrarCarrito(){
  articulos.innerHTML = ""
  articulosCarrito.innerHTML = ""
  if (carritoCompra.length != 0){
    tituloCarrito.innerHTML = "<h1>Su Carrito: </h1>"
    let i = 0
    saldo = 0
    carritoCompra.forEach((articulo)=>{   
        
      articulosCarrito.innerHTML += `
        <div class = "contenedorArticulos">
        <h3>${articulo.tipo}</h3>
        <p>${articulo.marca}</p>
        <p>${articulo.variedad}</p>
        <p>$ ${articulo.precio}</p>
        <p>Cantidad = ${articulo.cantidad}</p>
        <img src=${articulo.imagen} alt=""/>
        <button id="${i}" class="botonEliminar">Eliminar</button>
        </div>
        `    
      i ++
      saldo = saldo + parseInt(articulo.precio)*articulo.cantidad 

      }) 
    //muetro Saldo
    saldoCarrito.innerHTML = `
    <div class = "saldo">
    <p>Su saldo a pagar es $ ${saldo} </p>
    </div>
    `  

    //por cada click en boton Comprar ejecuto la función 
    const buttons = document.getElementsByClassName("botonEliminar");
    for (let button of buttons) {
      button.addEventListener("click", eliminarArticulo)
    }     

    botonConfirmar.innerHTML = "<button id='confirmarCarrito' class='confirmarCarrito'>Confirmar</button> " 
    confirmarCarrito = document.getElementById("botonConfirmar")
    confirmarCarrito.addEventListener("click", confirmarCompra)
        
    botonVaciar.innerHTML = "<button id='eliminarCarrito' class='eliminarCarrito'>Vaciar</button> " 
    eliminarCarrtito = document.getElementById("botonVaciar")
    eliminarCarrtito.addEventListener("click", eliminarCompra)

  }
  else{
    Swal.fire({
      title: "Ud no tiene nada en su carrito!",
      html: "<p>Esperamos su compra!</p>",
      icon: "success",
      confirmButtonText: "Ok"
    })
  }
}
const eliminarArticulo = (e)=>{
  articulos.innerHTML = ""
  articulosCarrito.innerHTML = ""
  const elementoAEliminar = carritoCompra[e.target.id]
  console.log(elementoAEliminar)
  saldo = 0
  if (elementoAEliminar.cantidad > 1){
    elementoAEliminar.cantidad--
  
    jsonCarrito = JSON.stringify(carritoCompra)
    localStorage.setItem('carritoBebidas', jsonCarrito)
    console.log("Carrito Json " +jsonCarrito) 
  }
  else if(elementoAEliminar.cantidad == 1){
    articulos.innerHTML = "" 
    
    carritoCompra.splice(e.target.id,1)
    jsonCarrito = JSON.stringify(carritoCompra)
    localStorage.setItem('carritoBebidas', jsonCarrito)
    console.log(carritoCompra)
    console.log(jsonCarrito)
  }
  if(carritoCompra.length != 0){
    mostrarCarrito()
  }
  else if(carritoCompra == 0){
    Swal.fire({
      title: "Ud no tiene nada en su carrito!",
      html: "<p>Esperamos su compra!</p>",
      icon: "success",
      confirmButtonText: "Ok"
    })
     saldoCarrito.innerHTML = ""
     articulos.innerHTML = "" 
     articulosCarrito.innerHTML = ""
     tituloCarrito.innerHTML = ""
     botonesCarrito.innerHTML = ""
  }
  
  const buttons = document.getElementsByClassName("botonEliminar");
  for (let button of buttons) {
    button.addEventListener("click", eliminarArticulo)
  }  
  
}
const eliminarCompra = ()=>{

  if(carritoCompra.length != 0){
    articulos.innerHTML = ""
    articulosCarrito.innerHTML = ""
    saldoCarrito.innerHTML = ""
    tituloCarrito.innerHTML = ""
    //vaciamos carrito
    carritoCompra.length = 0 
    console.log(carritoCompra)
    jsonCarrito = JSON.stringify(carritoCompra)
    localStorage.setItem('carritoBebidas', jsonCarrito)
    
    console.log(jsonCarrito)
    Swal.fire({
      title: "Carrito eliminado con exito!",
      html: "<p>Esperamos verlo prontos!</p>",
      icon: "success",
      confirmButtonText: "Ok"
    })
    articulosCarrito.innerHTML = ""
     saldo = 0
  }
  else{
    Swal.fire({
      title: "Ud no tiene nada en su carrito!",
      html: "<p>Esperamos su compra!</p>",
      icon: "success",
      confirmButtonText: "Ok"
    })
  }
}
const confirmarCompra = ()=>{
  articulosCarrito.innerHTML = ""
  articulos.innerHTML = ""
  articulosCarrito.innerHTML = ""
  saldoCarrito.innerHTML = ""
  botonVaciar.innerHTML = ""
  botonConfirmar.innerHTML = ""

  //vaciamos carrito
  carritoCompra.length = 0 
  console.log(carritoCompra)
  jsonCarrito = JSON.stringify(carritoCompra)
  localStorage.setItem('carritoBebidas', jsonCarrito)
  
  console.log(jsonCarrito)
  saldo = 0

  Swal.fire({
    title: "Felicitaciones!",
    html: "<p>Su compra fue realizada con exito!</p>",
    icon: "success",
    confirmButtonText: "Ok"
  })
}


// INICIO

const llamarApi = async () => {
  try {
      const result = await fetch("./db.json")
      const datos = await result.json()
      
      console.log(datos)
      //traigo lo que tengo en el carrito localStorage
      jsonCarrito = JSON.parse(localStorage.getItem('carritoBebidas')) 
      console.log(jsonCarrito)
      //evaluo si lo traido es nulo en caso contrario lo almaceno en el carrito
  
      if(jsonCarrito != null){
      
        for(let i = 0; i < jsonCarrito.length; i++){
          carritoCompra.push(jsonCarrito[i])
          console.log(carritoCompra) 
        } 
          
      }

      const botonVino = document.getElementById("botonVino")
      botonVino.addEventListener('click', () => {
        llamarPorArticulo(datos, "Vino")
      });
      const botonCerveza = document.getElementById("botonCerveza")
      botonCerveza.addEventListener("click", () => {
        llamarPorArticulo(datos, "Cerveza")
      });
      const botonWhiskie = document.getElementById("botonWhiskie")
      botonWhiskie.addEventListener("click", () => {
        llamarPorArticulo(datos, "Whiskie")
      });
      
  } catch (error) {
      console.error(error)
  }
}


llamarApi()

const botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click", () => {
  botonCarrito.classList.toggle('active')
  mostrarCarrito()
});
  