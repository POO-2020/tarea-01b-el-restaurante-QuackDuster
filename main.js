import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementopedido.js"
import Pedido from "./pedido.js"
export default class Main {

    constructor(){

    }

    pruebaTiempo(){
        let horas = new Tiempo(5,44,"pm")
        console.log("---------Tiempo--------")
        console.log(horas.getFormato12())
        console.log(horas.getFormato24())
    }

    pruebaFecha(){
        let fecha = new Fecha(5,4,2017)
        console.log("----------Fecha---------")
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }

    pruebaPrecio(){
        let precio = new Precio(43200.54)
        console.log("----------Precio----------")
        console.log(precio.getPrecio())
    }

    pruebaDireccion(){
        let calle = "Hacienda el Cortijo"
        let numExt = "601"
        let numInt = "200"
        let colonia = "Real Centenario"
        let CP = "28984"
        let municipio = "Villa de Alvarez"
        let ciudad = "Colima"
        let direccion = new Direccion(calle,numExt,numInt,colonia,CP,municipio,ciudad)
        console.log("--------Direccion---------")
        console.log(direccion.getFormatoCorto())
        console.log(direccion.getFormatoExtendido())
    }

    pruebaCliente(){
        let nombre = "Alberto Esparza Gomez Rodriguez"
        let direccion = new Direccion("Laguna del Calabozo","442","", "Villas Bugambilia", "28956", "Villa de Alvarez", "Colima")
        let telefono = "312245567"
        let cliente = new Cliente(nombre,direccion,telefono)
        console.log("----------Cliente---------")
        console.log(cliente.getPerfil())
    }

    pruebaProducto(){
        let nombre = "Risotto con champiñones"
        let precio = new Precio(150)
        let producto = new Producto(nombre,precio)
        console.log("--------Producto---------")
        console.log(producto.getDescripcion())
    }

    pruebaElementoPedido(){
        let cantidad = 2
        let producto = new Producto("Pasta con allioli", new Precio(130*cantidad))
        let elemento = new ElementoPedido(cantidad,producto)
        console.log("--------Elemento Pedido--------")
        console.log(elemento.getDescripcionB())
    }
    
    pruebaPedido(){
        let cantidad = 2
        let elemento1 = new ElementoPedido(new Producto("Hamburguesa Vegetariana", new Precio(110*cantidad)))
        let elemento2 = new ElementoPedido(new Producto("Filete Mignon", new Precio(200*cantidad)))
        let pedido = new Pedido(new Fecha(1,5,2020),new Tiempo(1,22,"pm"),new Cliente("Ramon Castro Lopez",new Direccion ("Miguel Hidalgo","222","","Vista Hermosa","298345","Colima","Colima"), "3124456446"))
        console.log("-------Pedido-------")
        console.log(pedido.agregarElemento(elemento1))
        console.log(pedido.agregarElemento(elemento2))
        console.log(pedido.getResumen())
        console.log(pedido.listarElementos()) 
    }
}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaFecha();
tester.pruebaPrecio();
tester.pruebaDireccion();
tester.pruebaCliente();
tester.pruebaProducto();
tester.pruebaElementoPedido();
tester.pruebaPedido();