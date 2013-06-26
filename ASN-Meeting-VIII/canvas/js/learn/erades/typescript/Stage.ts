/**
 * Created with JetBrains PhpStorm.
 * User: rerades
 * Date: 02/04/13
 * Time: 23:10
 * To change this template use File | Settings | File Templates.
 */


 module learn.erades.typescript {


     export class Stage {

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

        public getCanvas(){
            return this._canvas;
        }

    }  // fin Canvas

}
