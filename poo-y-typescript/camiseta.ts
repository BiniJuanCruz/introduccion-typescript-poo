interface CamisetaInterface{
    color: string,
    talle: string,
    modelo: string,
    precio: number,
    getModelo(): void;
}
function estampar(logo:string){
    return function(target: Function){
        target.prototype.estampado = function():void{
            console.log("Camiseta Estampada con el logo de: " + logo);
        }
    }
}
@estampar("Nike")
class Camiseta implements CamisetaInterface {
    
    public color: string;
    public talle: string;
    public modelo: string;
    public precio: number;

    constructor(color: string,talle: string,modelo: string,precio: number){
        this.color = color,
        this.talle = talle,
        this.modelo = modelo,
        this.precio = precio
    }

    getModelo(): string{
        return this.modelo;
    }
    setModelo(modelo: string){
        this.modelo = modelo;
    }
}
class Sudadera extends Camiseta {
    public capucha: boolean
    constructor(capucha: boolean,color: string,talle: string,modelo: string,precio: number){
        super(color,talle,modelo,precio)
        this.capucha = capucha;
    }
}

let sudadera = new Sudadera(true, "rosa", "l", "nike2.0", 5000);

console.log(sudadera.getModelo());
sudadera.setModelo("Fila420")
console.log(sudadera.getModelo())