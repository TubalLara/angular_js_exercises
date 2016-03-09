//Primer parámetro nombre
//Segundo parámetro función de creación del servicio 
angular.module("estructuraApp.Servicios", []).service("dias", function (valorAhora) {
    this.dia = valorAhora.getDay();
    this.maniana = this.dia + 1;
});