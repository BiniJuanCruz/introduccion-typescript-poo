"use strict";
exports.__esModule = true;
// Clase (Modelo del Objeto)
var Camiseta = /** @class */ (function () {
    //Metodos (funciones o acciones del objeto)
    //Metodo constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
// instanciar un objeto
var camiseta = new Camiseta("rojo", "manga larga", "nike", "L", 14);
camiseta.setColor("rojo");
console.log(camiseta.getColor());
// asignarle propiedades si fueran public
/*camiseta.color = "rojo";
camiseta.modelo = "manga larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;*/ 
