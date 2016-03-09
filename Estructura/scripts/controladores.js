var controladoresModule = angular.module("estructuraApp.Controladores", []);

//Primer parámetro nombre
//Segundo parámetro función de creación del controlador
//tantos argumentos como servicios (componentes) necesite
controladoresModule.controller("struCtrl", function ($scope, dias) {

    $scope.dia = dias.dia;

});

controladoresModule.controller("stru2Ctrl", function ($scope, dias) {

    $scope.dia = dias.maniana;
});