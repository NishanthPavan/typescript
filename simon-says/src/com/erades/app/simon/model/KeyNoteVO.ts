///<reference path='../../../../../../lib/puremvc/puremvc.d.ts'/>
///<reference path='../../../../../../lib/jquery/jquery.d.ts'/>


/**
 * A simple value Object to store data
 */


module com.erades.app.simon {


    export class KeyNoteVO {

        private _id:string;

        constructor(){}

        // getters and setters
        get id():string { return this._id; }
        set id(id:string) {  this._id = id; }
    }


}
