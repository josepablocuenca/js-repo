
//defino variables y funciones
let producto
const carrito = []
const precios = []
const carritoAux = []
const carritoFinal = []
let saldo
let cantidad
let elementosRemovidos

function sumaSaldo(){  
  saldo = 0
  for (let precio of precios) {
    console.log("Precio item " +precio)
	  saldo += precio
    console.log("Saldo sumado: " +saldo)
  }

  console.log(saldo);
}

//Sección compra carrito
alert("Bienvenidos a nuestro eshop de bebidas!")
let compra = confirm("Quieres comprar algo? ")


if (compra == true){
  let genero = prompt("Vinos - Cervezas - Whiskies")
  while(compra){
    //console.log(genero)
    if(genero == "Vinos"){
        let familiaProducto = prompt("De acuerdo, podemos ofrecerle: \n A- Malbec\n B- Cabernet\n C- Suavignon Blanc \n Indique el indice que quiere seleccionar")

        switch(familiaProducto){

          case "A": 
            
            producto = prompt( "Excelente puedes elegir: \n 1- Pyros $9.000\n 2- Elefante $8.000\n 3- Calia $5.000 \n Indique el indice que quiere seleccionar")
            switch(producto){

              case "1":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Malbec Pyros"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Malbec Pyros")
                  precios.push(9000)
                  
                }
                console.log(carrito)
                console.log(precios)
                break

              case "2":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Malbec Elefante"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Malbec Elefante")
                  precios.push(8000)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "3":
                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Malbec Calia"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Malbec Calia")
                  precios.push(5000)
                }
                console.log(carrito)
                console.log(precios)
                break  
            }
          break
          case "B":

            producto = prompt( "Excelente puedes elegir: \n 1- Enemigo $9.000\n 2- Violinista $8.000\n 3- LasMoras $5.000 \n Indique el indice que quiere seleccionar")
            switch(producto){

              case "1":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Cabernet Enemigo"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Cabernet Enemigo")
                  precios.push(9000)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "2":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Cabernet Violinista"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Cabernet Violinista")
                  precios.push(8000)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "3":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Cabernet LasMoras"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Cabernet LasMoras")
                  precios.push(5000)
                }
                console.log(carrito)
                console.log(precios)
                break  
            }

          break
          case "C":
            producto = prompt( "Excelente puedes elegir: \n 1- Portillo $7.000\n 2- Aguma $6.000\n 3- LasMoras $5.000 \n Indique el indice que quiere seleccionar")
            switch(producto){

              case "1":

                cantidad =  prompt("Que cantidad quieres comprar?")

                alert(" Has elejido: " +cantidad+ " unidades de Sauvignon Blanc Portillo"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Sauvignon Blanc Portillo")
                  precios.push(7000)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "2":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Sauvignon Blanc Aguma"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Sauvignon Blanc Aguma")
                  precios.push(6000)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "3":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Savignon Blanc LasMoras"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Sauvignon Blanc LasMoras")
                  precios.push(5000)
                }
                console.log(carrito)
                console.log(precios)
                break  
            }

          break
          default:  
            alert("La opción de vinos elegida no es correcta!")     
        }  
    }
    else if (genero == "Cervezas"){
      let familiaProducto = prompt("De acuerdo, podemos ofrecerle: \n A- Rubia\n B- Roja\n C- Negra \n Indique el indice que quiere seleccionar")

      switch(familiaProducto){

        case "A": 
            
          producto = prompt( "Excelente puedes elegir: \n 1- Corona $3.000\n 2- Heineken $2.000\n 3- Budweiser $1.000 \n Indique el indice que quiere seleccionar")
          switch(producto){

              case "1":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Corona Rubia"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Quilmes Rubia")
                  precios.push(3000)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "2":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Budweiser Rubia"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Budweiser Rubia")
                  precios.push(2000)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "3":
                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Heineken Rubia"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Heineken Rubia")
                  precios.push(1000)
                }
                console.log(carrito)
                console.log(precios)
                break  
            }
          break
          case "B":

            producto = prompt( "Excelente puedes elegir: \n 1- Imperial $3.000\n 2- Andes $2.000\n 3- Quilmes $1.000 \n Indique el indice que quiere seleccionar")
            switch(producto){

              case "1":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Imperial Roja"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Imperial Roja")
                  precios.push(3000)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "2":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Andes Roja"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Andes Roja")
                  precios.push(2000)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "3":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Quilmes Roja"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Quilmes Roja")
                  precios.push(1000)
                }
                console.log(carrito)
                console.log(precios)
                break  
            }

          break
          case "C":
            producto = prompt( "Excelente puedes elegir: \n 1- Imprerial $3.500\n 2- Andes $2.000\n 3- Quilmes $1.500 \n Indique el indice que quiere seleccionar")
            switch(producto){

              case "1":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Imperial IPA"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Imperial IPA")
                  precios.push(3500)
                }
                console.log(carrito)
                console.log(precios)
                break

              case "2":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Andes IPA"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Andes IPA")
                  precios.push(2000)
                }
                console.log(carrito)
                console.log(precios)

                break

              case "3":

                cantidad =  prompt("Que cantidad quieres comprar?")
                alert(" Has elejido: " +cantidad+ " unidades de Quilmes IPA"  )
                for(let i = 0; i < cantidad; i++){
                  carrito.push("Quilmes IPA")
                  precios.push(1500)
                }
                console.log(carrito)
                console.log(precios)

                break  
            }

          break
          default:  
            alert("La opción de vinos elegida no es correcta!")     
        }  
    }
    else if(genero == "Whiskies"){
      let familiaProducto = prompt("De acuerdo, podemos ofrecerle: \n 1- Jim Bean  $12.000\n 2- Jack Daniels  $9.000\n 3- Johnnie Walker  $23.000\n 4- Jameson  $15.000 \n Indique el indice que quiere seleccionar")

      switch(familiaProducto){

        case "1": 
            
          cantidad =  prompt("Que cantidad quieres comprar?")
          alert(" Has elejido: " +cantidad+ " unidades de Jin Bean"  )
          for(let i = 0; i < cantidad; i++){
            carrito.push("Jin Bean")
            precios.push(12000)
          }
          console.log(carrito)
          console.log(precios)
          break

        case "2":

          cantidad =  prompt("Que cantidad quieres comprar?")
          alert(" Has elejido: " +cantidad+ " unidades de Jack Daniels"  )
          for(let i = 0; i < cantidad; i++){
            carrito.push("Jack Daniels")
            precios.push(9000)
          }
          console.log(carrito)
          console.log(precios)
          break

        case "3":
        
          cantidad =  prompt("Que cantidad quieres comprar?")
          alert(" Has elejido: " +cantidad+ " unidades de Johnnie Walker"  )
          for(let i = 0; i < cantidad; i++){
          carrito.push("Johnnie Walker")
          precios.push(23000)
        }
        console.log(carrito)
        console.log(precios)

          break

        case "4":
          cantidad =  prompt("Que cantidad quieres comprar?")
          alert(" Has elejido: " +cantidad+ " unidades de Jameson"  )
          for(let i = 0; i < cantidad; i++){
            carrito.push("Jameson")
            precios.push(15000)
          }
          console.log(carrito)
          console.log(precios)

          break   

        default:  
          alert("La opción de vinos elegida no es correcta!")     
        }  
    }
    else if (genero == null){
      alert("No has seleccionado ninguna opción")
    }
    else{
        alert("La opción elegida no es correcta!")
      
    }
    compra = confirm("Quiere seguir comprando")
    if(compra){
      genero = prompt("Vinos - Cervezas - Whiskies")
    }
    else{  
      if(carrito.length != 0){
        alert("Su carrito: \n" +carrito.join("\n")) 
        sumaSaldo()
        alert("Su saldo a pagar es de: " +saldo)

        let aux = 1
        for(let i = 0; i < carrito.length; i++ ){
          carritoAux.push(aux+ "-" +carrito[i] )
          aux ++
        }
        
        //Seccion finalizar compra

        let opcionCompra = prompt("Que desea hacer: \n Confirma - Elimina - Cancela")
        let flag = true
        
        while(flag){  
    
          if(opcionCompra == "Confirma"){
            alert("Saldo a pagar es de: $" +saldo)
            flag = false
          
          }
          else if( opcionCompra == "Elimina"){
            
            let itemBorrar = prompt("Seleccion el item que quiera eliminar:  \n" +carritoAux.join("\n"))
            itemBorrar = itemBorrar - 1
            console.log("Indice a eliminar: \n" +itemBorrar)
            if(itemBorrar <= carritoAux.length){
              
              alert("Se eliminó el item: \n" +carrito[itemBorrar])
              carrito.splice(itemBorrar,1)
              precios.splice(itemBorrar,1)
              carritoAux.splice(itemBorrar,1)
              
              sumaSaldo()
              alert("Su carrito: \n" +carrito.join("\n ")+  "\n \n Su saldo a pagar es de: " +saldo) 
                                        
            }
            else{
              prompt("Esa opción no es valida!")
            }
            opcionCompra = prompt("Que desea hacer: \n Confirma - Elimina - Cancela")
            //flag = false  
            
          }
          //Cancela
          else if(opcionCompra == "Cancela"){
            elementosRemovidos = carrito.splice(0, carrito.length);
            carritoAux.splice(0, carritoAux.length)
            console.log("Elementos eliminados: \n" +elementosRemovidos);
            console.log(carrito);
            alert("Su carrito a sido eliminado.")
            flag = false

          }
          else{
            opcionCompra = prompt("Opción Incorrecta \n Que desea hacer: \n Confirma - Elimina - Cancela")
          }  
        }  
        alert("Gracias vuelva prontos!")
      }  
      else{
        alert("Gracias vuelva prontos!")
        compra = false
      }
  
    }

  }

}

else{
  alert("Gracias vuelva prontos!")
}
