
//Es una función de factoría -> func que devuelve un objeto creado desde una segunda función(func worker)
angular.module("estructuraApp.Directivas", []).directive("resaltar", function ($filter) {
    var filtroDia = $filter("nombreDia");
    //func worker
    ///Primer parámetro scope donde esta la directiva
    //Segundo parámetro jqLite (versión funcional muy reducida del objeto jQuery)
    //Tercer parámetro son los atributos de la vista
    return function (scope, element, attribute) {
        if (filtroDia(scope.dia) === attribute["resaltar"]) {
            element.css("color", "red");
        }
    };
});