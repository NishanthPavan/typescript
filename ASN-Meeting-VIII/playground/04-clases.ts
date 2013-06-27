/**
 Hablar de las  clases , constructor variables de clase, métodos,  privado, publico , estaticos

 1) Crear una clase

 2) atributos de clase --> modificadores privado  / público

 *   hacer la prueba de declarar un atributo privado ver que nos genera error pero que funcionaría
 al correr el JS porque JS no diferencia privado/publico

 *  Se pueden declarar las variables de clase pasándolas como parámetros
 --> constructor (public ancho:number, private alto:number)

 *  incluso dse pudden dar valores por defecto
 --> constructor (public ancho:number = 0, private alto:number = 10)

 *  Podemos pasar parámetros opcionales dentro de nuestras clases c?:boolean

 *  Sobrecarga de métodos y constructor
 ... you have to first write a method declaration for each of the overloads and then
 one method implementation that checks its arguments to decide which overload was called.
 The signature of the implementation has to be compatible with all of the overloads
 ejemplo:
 dist(a:number):number;
 dist(a?:number):number {
                 var dist:number = Math.sqrt(this.x*this.x + this.y*this.y);
                 return dist;
             }


 *  el atributo ...rest  == * en AS

 function getObj(...rest:string[]){
	    rest.forEach((v,i)=>{alert("valor = "+v +"/n indice = "+i)});
    }

 getObj("hola","mundo")

 *   ES5 -> métodos como variables get foo()  [tsc --target ES5]

 *  Herencia

 * Interfaces
 interface IFigura {
	  area:() => number;
 }

 */
