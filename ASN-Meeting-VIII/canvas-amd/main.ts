/// <reference path="./defs/requirejs/requirejs.d.ts" />
/// <reference path="js/mainApp.ts" />



require.config({
    baseUrl: 'js',
    // para módulos no AMD
    shim: {
        jquery: {
            exports: '$'
        }
    },
    // para buscar los archivos (no hace falta poner la terminación *.js)
    paths: {
        'jquery': '../lib/jquery',
        'toastr': '../lib/toastr'
    }
});


require(['mainApp','jquery','toastr'], (app,$,toastr) => { app.run()});







