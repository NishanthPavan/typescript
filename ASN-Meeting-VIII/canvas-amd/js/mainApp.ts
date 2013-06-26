/**
 * User: rerades
 * Date: 28/05/13
 * Time: 18:14
 */


/// <reference path="../defs/jquery/jquery.d.ts" />

// en TS 0.8.x
// import stg = module ("learn/erades/typescript/amd/StageAMD");
// import bx = module ("learn/erades/typescript/amd/BoxAMD");

// ahora en TS 0.9.x
import stg = require ("learn/erades/typescript/amd/StageAMD");
import bx = require ("learn/erades/typescript/amd/BoxAMD");


declare var $: JQueryStatic;




export function run() {

    console.log("inicio de la aplicación")

    // pasamos la referencia del canvas
   stg.StageAMD.getInstance().setCanvas("mi_canvas");


    for (var i = 0; i < 20; i++){
        //creamos una caja
        var size = Math.round(Math.random()*50+10)

        var MiCaja = new bx.BoxAMD( Math.round(window.innerWidth * Math.random()),
                                    Math.round(window.innerHeight * Math.random()),
                                    size,
                                    size);
        MiCaja.move(Math.round(Math.random()*10 - 5) , Math.round(Math.random()*10 - 5), Math.random()*0.1);
    }
}




