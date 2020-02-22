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
}

let tester = new Main()
tester.pruebaTiempo();