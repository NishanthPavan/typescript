



/**
 * User: rerades
 * Date: 28/05/13
 * Time: 16:42
 */

/// <reference path="../../../../../defs/toastr/toastr.d.ts" />

// en TS 0.8.x
// import st = module("./StageAMD");
// ahora en TS 0.9.x
import st = require("./StageAMD");


declare var toastr: Toastr;

    export class BoxAMD {
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
        private deltaZ:number = 0.01;

        private z:number = 1;
        private zMax:number = 3;
        private zMin:number = 1;



        constructor( private x:number = 0, private y:number = 0, private width:number = 10, private height:number = 10 ){
            this.x = x;
            this.y = y;
            this.height = height;
            this.width = width;

            this._ctx = st.StageAMD.getInstance().getCtx()
            this._maxWidth = st.StageAMD.getInstance().getCanvas().width;
            this._maxHeight = st.StageAMD.getInstance().getCanvas().height;
            this._color = Math.round(Math.random() * 0xffffff).toString(16);

        }




        private destroy(){
            toastr.warning("Destroy "+this._intervalo)
            // paramos el timer de move
            clearInterval(this._intervalo);

        }




        public move(  deltaX , deltaY, deltaZ){
            this.deltaX = deltaX;
            this.deltaY = deltaY;
            this.deltaZ = deltaZ;
            // intervalo de refresco
            this._intervalo = setInterval(()=>{this.drawRect();},10);
        }


        private drawRect():void{
            // borramos el anterior
            this._ctx.clearRect(this.x,this.y, this.width * this.z+1, this.height * this.z+1);
            // incrementamos la posición
            this.x += this.deltaX;
            this.y += this.deltaY;
            this.z += this.deltaZ;

            // dibujamos caja
            this._ctx.fillStyle = this._color;
            this._ctx.fillRect(this.x,this.y,this.width * this.z, this.height * this.z);
            // comprobamos sentido
            this.deltaX = (this.x > 0 && this.x < this._maxWidth - this.width) ? this.deltaX : -1 * this.deltaX ;
            this.deltaY = (this.y > 0 && this.y < this._maxHeight - this.height) ? this.deltaY : -1 * this.deltaY ;
            this.deltaZ = (this.z > this.zMin && this.z < this.zMax) ? this.deltaZ : -1 * this.deltaZ ;
        }
    }