
/**
 * A simple value Object to store data
 */




     class KeyNoteVO {

        private _id:string;

        constructor(){}

        // getters and setters
        get id():string { return this._id; }
        set id(id:string) {  this._id = id; }
    }

export = KeyNoteVO;


