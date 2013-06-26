/**
 * User: rerades
 * Date: 26/05/13
 * Time: 20:53
 */


/*
El ámbito de this en la clase no se está refiriendo a la clase en si . sino al método start
para evitar esto en ES6 quieren introducir "fat arrow syntax"  ev =>

 */




class Tracker{

    count = 0;

    start() {
        window.onmousemove = function(ev){
            this.count++;
            console.log(this.count);
        }
    }
}


var myTracker = new Tracker();

myTracker.start();
