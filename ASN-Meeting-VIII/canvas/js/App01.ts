/**
 * User: rerades
 * Date: 27/05/13
 * Time: 19:33
 * ----------------------------------------------------------------------------
 * Esta primera forma sería la más básica en donde escribimos la definición de
 * todas las clases o funciones en un único archivo y lo compilamos
 * ----------------------------------------------------------------------------
 *
 *
 */





// DEFININIMOS LA CLASE QUE CONTROLA EL CANVAS
// -------------------------------------------

  class Stage {

    private  _canvasId:string;
    private  _canvas:HTMLCanvasElement;
    private  _ctx:CanvasRenderingContext2D;
    private static _instance:Stage;


     constructor() {
        console.log("Esta clase se instancia una sola vez")
    }


    public static getInstance():Stage {
        if (Stage._instance == null) {
            Stage._instance = new Stage();
        }
        return Stage._instance;
    }



    public  setCanvas(canvasId:string){
        this._canvasId = canvasId
        this._canvas = <HTMLCanvasElement>document.getElementById(this._canvasId);
        this._ctx = this._canvas.getContext("2d");
        console.log("Canvas preparado");
    }


    public getCtx():CanvasRenderingContext2D{
        return this._ctx;
    }

    public getCanvas():HTMLCanvasElement{
        return this._canvas;
    }

 }  // fin Canvas


// DEFININIMOS LA CLASE BOX
// ------------------------




 class Box {
    // intervalo
    private _intervalo:number;
    // dimensiones de la caja
    private _color:string;

    // contexto
    private _ctx:CanvasRenderingContext2D;
    private _maxWidth:number;
    private _maxHeight:number;

    private deltaX:number = 3;
    private deltaY:number = 2;


    constructor( private x:number = 0, private y:number = 0, private width:number = 10, private height:number = 10 ){
      //  al declarar los parametros como atributos de clase no hace falta igualarlos
      // OJO --> esto sólo se puede hacer en el constructor (l el método move nos daría un error de compilación)
      //  this.x = x;
      //  this.y = y;
      //  this.height = height;
      //  this.width = width;
        this._ctx = Stage.getInstance().getCtx();
        this._maxWidth = Stage.getInstance().getCanvas().width;
        this._maxHeight = Stage.getInstance().getCanvas().height;
        this._color = Math.round(Math.random() * 0xffffff).toString(16);
    }

    public move(  deltaX , deltaY){
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        // intervalo de refresco
        this._intervalo = setInterval(()=>{this.drawRect();},10);
    }



    private drawRect():void{
        // borramos el anterior
        this._ctx.clearRect(this.x,this.y,this.width,this.height);
        // incrementamos la posición
        this.x += this.deltaX;
        this.y += this.deltaY;
        // dibujamos caja
        this._ctx.fillStyle = this._color;
        this._ctx.fillRect(this.x,this.y,this.width,this.height);
        // comprobamos sentido
        this.deltaX = (this.x > 0 && this.x < this._maxWidth - this.width) ? this.deltaX : -1 * this.deltaX ;
        this.deltaY = (this.y > 0 && this.y < this._maxHeight - this.height) ? this.deltaY : -1 * this.deltaY ;
    }
}



// Funcion principal
// -----------------

function run() {
    // pasamos la referencia del canvas
    Stage.getInstance().setCanvas("mi_canvas");
    for (var i = 0; i < 20; i++){
        //creamos una caja
        var MiCaja = new Box(Math.round(Math.random()*380)+10 , Math.round(Math.random()*380)+10);
        MiCaja.move(Math.round(Math.random()*10 - 5) , Math.round(Math.random()*10 - 5));
    }
}

// Iniciamos la App
// ----------------
run();

