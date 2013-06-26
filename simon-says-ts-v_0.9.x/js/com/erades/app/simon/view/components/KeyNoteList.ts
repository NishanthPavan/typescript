///<reference path='../../../../../../../lib/puremvc/puremvc.d.ts'/>
///<reference path='../../../../../../../lib/jquery/jquery.d.ts'/>
///<reference path='../../../../../../../lib/greensock/GreenSock.d.ts'/>
///<reference path='../../model/KeyNoteVO.ts'/>
///<reference path='../../abc/NotificationNames.ts'/>


import KeyNoteVO = module("com/erades/app/simon/model/KeyNoteVO");

     class KeyNoteList {

        //The key Note list panel HTML element.
        private KNList:JQuery = null;
        // the keyNote list
        private keyNotes:KeyNoteVO[] = new Array();


        constructor(view:JQuery) {
            this.KNList = view;
            this.initializeChildren();
        }


        private initializeChildren():void {

            this.KNList.children('ul').children('li').each(
                (index:number, value:HTMLAnchorElement) => {
                    var knVO:KeyNoteVO = new KeyNoteVO();
                    knVO.id = $(value).attr('id');
                    this.keyNotes.push(knVO)
                }
            );
        }



        get KeyNotes():KeyNoteVO[] {
            return this.keyNotes;
        }


        public fadeInOut(id:string):void {
            TweenMax.to("#" + id, 0.1, {opacity: 1, yoyo: true, repeat: 1, ease: Power3.easeOut});
        }


    }

export = KeyNoteList;


