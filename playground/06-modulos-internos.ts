/*
 *
 * MODULOS INTERNOS
 * Demostrar el uso de modulos para ordenar nuestro código  (parecido a paquetes)
 *
 * module
 * export e import
 *
 *
 * module com.xyz {}
 * import cx = com.xyz
 *
 * MODULOS EXTERNOS   --> soporte para commonsJS  y AMD
 *
 *
 *
 * */


// MODULOS INTERNOS
// ----------------
/*
module com.erades.figures {


    export class Punto {

        private _x:number;
        private _y:number;
        constructor ( x:number ,  y:number){
            this._x = x;
            this._y = y;
        }
        getDist(){
            return Math.sqrt(this._x*this._x + this._y*this._y);
        }
    }

}


var p = new com.erades.figures.Punto(10,20);

alert(p.getDist().toString())
*/


// Podemos crerar varios archivos que pertenezcan al mismo módulo
// si son de distinto módulo tendremos que importar todo el módulo

/*
module com.erades.figures {
// module com.erades.figures3D {
// import figures = com.erades.figures;
    export class Punto3D extends figures.Punto {
        constructor (public x:number , public y:number, public z:number){
            super(x,y)
        }
        getDist(){
            return Math.sqrt(super.getDist()*super.getDist()+this.z*this.z);
        }
    }
}

var p3d = new com.erades.figures.Punto3D(10,20,30)
alert(p3d.getDist().toString());
*/

