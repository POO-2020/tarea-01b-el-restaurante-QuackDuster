import Direccion from "./direccion.js"
export default class Restaurante{

    constructor(nombre,telefono,direccion){
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.productos = []
        this.pedidos = []

    }
    
    registrarProducto(producto){  
        this.productos.push(producto)
    }

    listarProductos(){
        this.productos.forEach(producto =>{
            console.log('Producto:', producto.getDescripcionB())
        })
    }

    registrarPedido(pedido){
        this.pedidos.push(pedido)

    }

    listarPedidos(){
        this.pedidos.forEach(pedido =>{
            console.log('Pedidos: ', pedido.getResumen())
        })
    }
}