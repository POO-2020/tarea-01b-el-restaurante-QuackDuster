export default class Precio {
    
    constructor(formato){
    this.formato = formato;
    }

    getPrecio(){
        return ("$" + new Intl.NumberFormat("en-US").format(this.formato))
    }
}