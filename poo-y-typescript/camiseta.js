var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera_nike = new Sudadera("verde", "sudadera", "nike", "L", 148);
sudadera_nike.setCapucha(true);
var capucha = sudadera_nike.getCapucha();
console.log("Capucha: " + capucha);
console.log(sudadera_nike);
