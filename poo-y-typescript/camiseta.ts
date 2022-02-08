// Interface ("contrato" que debe cumplir la clase)
interface CamisetaBase{
    setColor(color);
    getColor();
}

// Clase (Modelo del Objeto)
export class Camiseta implements CamisetaBase{
    // Propiedades (Caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    
    //Metodos (funciones o acciones del objeto)

    //Metodo constructor
    constructor(color,modelo,marca,talla,precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
}

// instanciar un objeto

var camiseta = new Camiseta("rojo","manga larga","nike","L",14);
camiseta.setColor("rojo");
console.log(camiseta.getColor());

// asignarle propiedades si fueran public

/*camiseta.color = "rojo";
camiseta.modelo = "manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;*/