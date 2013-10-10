var app = app || {};

(function(a) {
    var airPlane = {
        model:"golf",
        vendor:"voltswagen",
        rentPrice:500,
        rentOption:1
    };
    
        var mercedes = {
        model:"Mercedes",
        vendor:"SL63AMG",
        rentPrice:5000,
        rentOption:0
    };
    
    var topCar = {
        model:"honda",
        vendor:"accord",
        rentPrice:1000,
        rentOption:0
    };
    
        var bmw = {
        model:"bmw",
        vendor:"M6",
        rentPrice:2000,
        rentOption: 1
    };
    
    sqlite.addCar(airPlane);
    sqlite.addCar(mercedes);
    sqlite.addCar(topCar);
    sqlite.addCar(bmw);
    
    var viewModel = kendo.observable({
        cars:[]
    });
    
    function getDataSource() {
        var carsFromDb = [];
        sqlite.getData(getCars);
        function getCars(tx, rs) {
            for (var i = 0; i < rs.rows.length; i++) {
                carsFromDb.push(rs.rows.item(i));
            }
           
            viewModel.set("cars", carsFromDb);
        }
    }
    
    function init(e) {
        kendo.bind(e.view.element, viewModel);
        getDataSource();       
    }
    
    document.addEventListener("deviceready", function(e) {
        var app = new kendo.mobile.Application(document.body);
    }, false);
    
    a.cars = {
        init:init
    }
}(app))