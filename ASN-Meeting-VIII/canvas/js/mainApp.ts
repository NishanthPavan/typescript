/**
 * User: rerades
 * Date: 24/05/13
 * Time: 10:41
 */





// Estos serían nuestros imports para poder compilar
// -------------------------------------------------

///<reference path="learn/erades/typescript/Box.ts" />

// NOTA: Aunque en este archivo se hace referencia al Stage no hace falta incluirlo como referencia
// debido a que la clase Box ya tiene una referencia  a Stage y por tanto lo incluirá
///<reference path="learn/erades/typescript/Stage.ts" />

// para acortar las referencias de nuestros  namespaces
// NO ES UN IMPORT como lo entendemos de forma tradicional
// --------------------------------------------------------
import ts = learn.erades.typescript;

function run() {

    // pasamos la referencia del canvas
    ts.Stage.getInstance().setCanvas("mi_canvas");

    for (var i = 0; i < 20; i++){
        //creamos una caja
        var MiCaja = new ts.Box(Math.round(Math.random()*380)+10 , Math.round(Math.random()*380)+10);
        MiCaja.move(Math.round(Math.random()*10 - 5) , Math.round(Math.random()*10 - 5));
    }
}


// Iniciamos la App
run();


// NOTA importante
// para que compile con las dependencias tenemos que pasarle el parámetro --out
// Esto => tsc mainApp.ts   no incluye las dependencias
// Esto ==> tsc --out mainApp.js mainApp.ts si incluye las dependencias



