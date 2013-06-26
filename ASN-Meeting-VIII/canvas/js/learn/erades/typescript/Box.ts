/**
 * Created with JetBrains PhpStorm.
 * User: rerades
 * Date: 03/04/13
 * Time: 00:39
 */



///<reference path="Stage.ts"/>



module learn.erades.typescript {

     export class Box {
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
            this.x = x;
            this.y = y;
            this.height = height;
            this.width = width;
            this._ctx = Stage.getInstance().getCtx();
            this._maxWidth = Stage.getInstance().getCanvas().width;
            this._maxHeight = Stage.getInstance().getCanvas().height;
            this._color = Math.round(Math.random() * 0xffffff).toString(16);
        }


        public move(  deltaX , deltaY){
            this.deltaX = deltaX;
            this.deltaY = deltaY;
            // intervalo de refresco
            this._intervalo = setInterval(()=>{this.redraw();},10);
        }

        private redraw(){
            this.drawRect();
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
}