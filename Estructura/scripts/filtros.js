angular.module("estructuraApp.Filtros", []).filter("nombreDia", function () {

    var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Sábado"];
    //func worker
    ///Primer parámetro valor que se asigna al filtro
    return function (valor) {
        return angular.isNumber(valor) ?
            diasSemana[valor] : valor;

    };
});