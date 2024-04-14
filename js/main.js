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
  new Vinos("Vino", "Pyros", "Malbec","9000", "/img/pyrosmalbec.jpeg"),
  new Vinos("Vino", "Violinista", "Malbec", "7000", "/img/violinistamalbec.jpeg"),
  new Vinos("Vino", "Aguma", "Malbec", "8000", "/img/agumamalbec.jpeg"),
  new Vinos("Vino", "Colon", "Syrah", "4000", "/img/colonsyrah.jpeg"),
  new Vinos("Vino", "Elefante", "Cabernet", "8000", "/img/elefantecabernet.jpeg"),
]
Cerveza =[
    new Cerveza("Cerveza", "Quilmes", "Rubia", "1000", "/img/quilmesrubia.jpeg"),
    new Cerveza("Cerveza", "Corona", "Rubia", "3000", "/img/coronarubia.jpeg"),
    new Cerveza("Cerveza", "Andes", "Roja", "4000", "/img/andesroja.jpeg"),
    new Cerveza("Cerveza", "Imperial", "Roja", "3000", "/img/imperialroja.jpeg"),
    new Cerveza("Cerveza", "Imperial", "IPA", "3500", "/img/imperialipa.jpeg"),
]
Whiskie =[
  new Whiskie("Whiskie", "JimBeam", "Whiskie", "15000", "/img/jimbeam.jpeg"),
  new Whiskie("Whiskie", "Jack Daniels", "Whiskie", "12000", "/img/jackdaniels.jpeg"),
  new Whiskie("Whiskie", "Jameson", "Whiskie", "17000", "/img/jameson.jpeg"),
  new Whiskie("Whiskie", "Jony Walker", "Whiskie", "20000", "/img/jonywalker.jpeg"),
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

  // const body = document.querySelector("body")

  // if(JSON.parse(localStorage.getItem("dark"))){
  //     localStorage.setItem("dark", false)
  //     body.classList.toggle("bodyDark")
  // }else{
  //     localStorage.setItem("dark", true)
  //     body.classList.toggle("bodyDark")
  // }
  
//})  

// ----------------------------------------------------------------------//

// class Noticia {
//   constructor(titulo, contenido, autor, imagen, categoria) {
//       this.titulo = titulo;
//       this.contenido = contenido;
//       this.autor = autor;
//       this.imagen = imagen;
//       this.categoria = categoria; 
//   }


// }

// const contenedorMayor = document.getElementById("Container-Main")

// const Noticias = [
//   new Noticia("Julian Alvarez marca 10 goles en un solo partido y establece un nuevo récord mundial", "El joven jugador argentino del River Plate deja boquiabiertos a los aficionados al marcar 10 goles en un solo partido, superando cualquier récord previo en la historia del fútbol.", "Juan Pérez", "https://media.ambito.com/p/9198118c25e325c23f37aa20b8ec4d2b/adjuntos/239/imagenes/040/575/0040575606/julian-alvarez-manchester-cityjpg.jpg", "futbol"),
//   new Noticia("Científicos descubren un nuevo dispositivo de realidad virtual que permite a los usuarios viajar en el tiempo", "Un equipo de investigadores ha desarrollado un dispositivo de realidad virtual revolucionario que transporta a los usuarios a cualquier momento histórico, desde la era de los dinosaurios hasta el futuro distante.", "María González", "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2X3RPOITNFEF7PWMT6KHLBXXLQ.jpg", "tecnologia"),
//   new Noticia("Nueva entrega de Pokémon presenta a Cristiano Ronaldo como entrenador maestro", "La última entrega de la serie Pokémon sorprende a los fans al incluir a Cristiano Ronaldo como un legendario entrenador Pokémon, desafiando a los jugadores a derrotarlo en una batalla épica.", "Carlos Martínez", "https://www.comboinfinito.com.br/principal/wp-content/uploads/2016/07/pokemon-go-cristiano-ronaldo.jpg", "pokemon"),
//   new Noticia("Científicos logran clonar dinosaurios y planean abrir un parque temático", "Un grupo de científicos ha logrado un avance sin precedentes al clonar dinosaurios extintos y planean abrir un parque temático donde los visitantes podrán ver a estas criaturas prehistóricas en vivo.", "Laura Sánchez", "https://www.tecnopolis.gob.ar/wp-content/uploads/2020/07/10257688304_c30ca75b22_k-1920x1280.jpg", "tecnologia"),
//   new Noticia("Angelina Jolie firma un contrato histórico para protagonizar diez películas de acción consecutivas", "La reconocida actriz Angelina Jolie ha firmado un contrato sin precedentes para protagonizar una serie de diez películas de acción consecutivas, cada una con presupuestos multimillonarios y efectos especiales de vanguardia.", "Diego López", "https://elcomercio.pe/resizer/vdbOdd_3jlemp3cGpnx22jP0XrE=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/G2IXZTKL5JFVZO32GQPWSG42JI.jpg", "extra"),
//   new Noticia("Elon Musk revela su último proyecto: colonizar Marte en solo un año", "El empresario multimillonario Elon Musk ha anunciado su plan más ambicioso hasta la fecha: colonizar Marte en solo un año mediante el lanzamiento masivo de naves espaciales tripuladas.", "Andrés López", "https://www.infobae.com/new-resizer/etQPCpX3l-qnCkSfA1YSM9ejqEg=/arc-anglerfish-arc2-prod-infobae/public/26DJ6CSJAFAXJHJK2K25GL7JCM.webp", "tecnologia"),
//   new Noticia("Roger Federer gana el Abierto de Australia sin perder un solo set", "El tenista suizo Roger Federer ha logrado una hazaña extraordinaria al ganar el Abierto de Australia sin perder un solo set en todo el torneo, demostrando su dominio indiscutible en la cancha.", "Andrés López", "https://media.gq.com.mx/photos/60e5c12d433a17b371256efd/16:9/w_2560%2Cc_limit/GettyImages-1322028403.jpg", "deportes"),
//   new Noticia("Apple lanza un iPhone que puede teletransportar a los usuarios a cualquier parte del mundo", "La empresa tecnológica Apple ha presentado su último lanzamiento: un iPhone con la capacidad de teletransportar a los usuarios a cualquier ubicación del mundo con solo tocar la pantalla.", "Elena Martínez", "https://www.clarin.com/2023/06/20/6X-0J7sxO_720x0__1.jpg", "tecnologia"),
//   new Noticia("Científicos descubren una nueva forma de vida extraterrestre en la Luna", "Un equipo de científicos ha hecho un descubrimiento impactante al encontrar evidencia de una forma de vida extraterrestre en la Luna, desencadenando un debate global sobre el origen y la naturaleza de esta misteriosa entidad.", "Roberto Soto", "https://images.ecestaticos.com/_wAYz7t3O_YxeegZ5k3HC1YpoZA=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb99%2F108%2F9cd%2Fb991089cde559490dd6f5df5b9645de9.jpg", "extra"),
//   new Noticia("Lady Gaga anuncia su próxima gira mundial que incluirá conciertos en la Luna y Marte", "La superestrella del pop Lady Gaga ha dejado a sus fans emocionados al anunciar su próxima gira mundial, que incluirá conciertos en la Luna y Marte, marcando un hito histórico en la industria del entretenimiento.", "María Fernández", "https://e.rpp-noticias.io/xlarge/2018/08/31/270627_670677.jpg", "extra")
// ];

// let estaEnElLocal = JSON.parse(localStorage.getItem("dark"))


// if(estaEnElLocal){
//   const body = document.querySelector("body")

//   body.classList.add("bodyDark")
// }

// const montarLasNoticias = (noticia)=>{ 

//   contenedorMayor.innerHTML += `
//   <div class="card">
//       <h3>${noticia.titulo}</h3>
//       <p>${noticia.contenido}</p>
//       <p>${noticia.autor}</p>
//       <img src=${noticia.imagen} alt=""/>
//   </div>
//   `
// }


// Noticias.forEach((noticia)=>{
//   montarLasNoticias(noticia)
// })

// const listaDeCategorias = document.getElementsByClassName("list")
// const ArrayDeListaDeCategoria = Array.from(listaDeCategorias)


// ArrayDeListaDeCategoria.forEach(list=>{
//   list.addEventListener("click", (e)=>{
//       let categoria = e.target.innerText

//       const NoticiasFiltradas = Noticias.filter((noticia)=>{
//           return noticia.categoria.toUpperCase() == categoria.toUpperCase()
//       })

//       contenedorMayor.innerHTML = ""

//       NoticiasFiltradas.forEach((noticia)=>{
//           montarLasNoticias(noticia)
//       })
//   })
// })


// const botonDark = document.getElementById("botonDark")

// botonDark.addEventListener("click", ()=>{

//   const body = document.querySelector("body")

//   if(JSON.parse(localStorage.getItem("dark"))){
//       localStorage.setItem("dark", false)
//       body.classList.toggle("bodyDark")
//   }else{
//       localStorage.setItem("dark", true)
//       body.classList.toggle("bodyDark")
//   }
  
// })