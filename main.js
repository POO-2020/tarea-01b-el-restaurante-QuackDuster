import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
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

}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaFecha();
tester.pruebaPrecio();