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
function estampar(logo) {
    return function (target) {
        target.prototype.estampado = function () {
            console.log("Camiseta Estampada con el logo de: " + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    function Camiseta(color, talle, modelo, precio) {
        this.color = color,
            this.talle = talle,
            this.modelo = modelo,
            this.precio = precio;
    }
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Camiseta;
}());
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(capucha, color, talle, modelo, precio) {
        var _this = _super.call(this, color, talle, modelo, precio) || this;
        _this.capucha = capucha;
        return _this;
    }
    return Sudadera;
}(Camiseta));
var sudadera = new Sudadera(true, "rosa", "l", "nike2.0", 5000);
console.log(sudadera.getModelo());
sudadera.setModelo("Fila420");
console.log(sudadera.getModelo());
