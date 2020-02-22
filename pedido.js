import Precio from "./precio.js";
import Cliente from "./cliente.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementopedido.js"

export default class Pedido{

    constructor(fecha,hora,cliente){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementosPedidos = [];
    }

    getNumeroElementos(){
        return `${this.elementosPedidos.length}`
    }

    getNumeroProductos(){
        var productoNum = 0;
        this.elementosPedidos.forEach(elementos =>{
            productoNum += elementos.cantidad
        })
        return productoNum;
    }

    getCostoTotal(){
        var costo = 0;
        this.elementosPedidos.forEach(elemento => {
            costo += elemento.cantidad * elemento.producto.nombreP
        })
        return new Precio(costo).getPrecio()
    }

    agregarElemento(elemento){
        return `${this.elementosPedidos.push(elemento)}`
    }

    listarElementos(){
        this.elementosPedidos.forEach(elemento =>{
            console.log(elemento.getDescripcionB(), "\n")
        })
    }

    getResumen(){
        return `${this.fecha.getFecha()} ${this.hora.getFormato12()} \n - ${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos- \ntotal: ${this.getCostoTotal()}`
    }

}