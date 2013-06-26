/**
 * User: rerades
 * Date: 28/05/13
 * Time: 16:41
 */


/// <reference path="../../../../../defs/toastr/toastr.d.ts" />
/// <reference path="../../../../../defs/jquery/jquery.d.ts" />

declare var $: JQueryStatic;
declare var toastr: Toastr;


      export class StageAMD {

        private  _canvasId:string;
        private  _canvas:HTMLCanvasElement;
        private  _ctx:CanvasRenderingContext2D;
        private static _instance:StageAMD;







        constructor() {
            toastr.info("Clase Stage Creada")
        }


        public static getInstance():StageAMD {
            if (StageAMD._instance == null) {
                StageAMD._instance = new StageAMD();
            }
            return StageAMD._instance;
        }




        public  setCanvas(canvasId:string){
            this._canvasId = canvasId
            this._canvas = <HTMLCanvasElement>document.getElementById(this._canvasId);

            // cambiamos las dimensiones del canvas para ajustarlo al máximo
            this._canvas.height = window.innerHeight;
            this._canvas.width = window.innerWidth;

            this._ctx = this._canvas.getContext("2d");
            // console.log("Canvas preparado");



        }


        public getCtx():CanvasRenderingContext2D{
            return this._ctx;
        }

        public getCanvas(){
            return this._canvas;
        }

    }  // fin Canvas
