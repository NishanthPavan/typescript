///<reference path='../../../../../../lib/puremvc/puremvc.d.ts'/>
///<reference path='../abc/NotificationNames.ts'/>




import NotificationNames = module("com/erades/app/simon/abc/NotificationNames");
// import p = module("puremvc-typescript-standard-1.0")

import Proxy = module("org/puremvc/typescript/patterns/proxy/Proxy");

     class GameProxy  extends Proxy {

        private _computerNotes:string[] = new Array();
        private _userNotes:string[] = new Array();
        private _currentCompNote:number = 0;
        private _currentUserNote:number = 0;
        private _inputActive:bool = true;
        private _numItems:number;

        constructor(proxyName:string, idArray:string[]){
            super(proxyName,idArray);
            this._numItems = idArray.length;

        }



        private resetUserNotes(){
            this._userNotes.length = 0
            this._currentUserNote = 0
        }


        private resetCompNotes(){
            this._computerNotes.length = 0
            this._currentCompNote = 0
        }

        public reset() {
            this.resetCompNotes()
            this.resetUserNotes()
        }

        public start(){
            this.reset();
            this.playSequence();

        }


        public CheckSequence(id){
            if (this._inputActive){
                //  We check user sequence
                if(this._computerNotes[this._currentUserNote] == id){
                    if (this._computerNotes.length > this._currentUserNote+1){
                        this._currentUserNote++;
                    } else {
                        // if user enter las note we play computer sequence
                        this.playSequence();
                    }
                } else {
                    // hemos fallado
                    this.sendNotification(NotificationNames.GAME_OVER,this._computerNotes.length-1)
                   //  this.start();
                }
            }
        }

        public playSequence() {
            this._inputActive = false;
            this.sendNotification(NotificationNames.KN_BLOCK);
            this.sendNotification(NotificationNames.NEXT_ROUND,this._computerNotes.length+1)
            this._currentCompNote = 0;
            setTimeout(() => {this.continueSequence()}, 2000);
        }

        private continueSequence(){
            if (this._computerNotes.length > this._currentCompNote) {
                this.sendNotification(NotificationNames.KN_CLICK, this._computerNotes[this._currentCompNote]);
                this._currentCompNote++;
                setTimeout(() => {this.continueSequence()}, 500);
            } else {
                // hemos lanzado el ultimo añadimos uno nuevo
                this.addNote();
            }
        }


        public addNote(){
            var randomNote:string = this.getRandomId()
            this._computerNotes.push(randomNote);
            this.sendNotification(NotificationNames.KN_CLICK, randomNote);
            this.sendNotification(NotificationNames.KN_ACTIVATE);
            this._inputActive = true;
            this.resetUserNotes()
        }

        private getIds(): string[] {
            return <string[]>this.data;
        }

        private getRandomId():string {
            var idNum = Math.round(Math.random()*(this._numItems-1));
            //console.log("RANDOM NUM = "+idNum)
            return this.data[idNum];
        }

    }

export = GameProxy;

