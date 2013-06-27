/**
 * KeyNote component <code>Mediator</code>.
 */


import KeyNoteList = require("../view/components/KeyNoteList");
import KeyNoteVO = require("../model/KeyNoteVO");
import NotificationNames = require("../abc/NotificationNames");
import SoundProxy = require("../model/SoundProxy");
import ProxyNames = require("../abc/ProxyNames");
import GameProxy = require("../model/GameProxy");


import Mediator = require("org/puremvc/typescript/patterns/mediator/Mediator");
import INotification = require("org/puremvc/typescript/interfaces/INotification");

	 class KeyNoteMediator extends Mediator {


		/**
		 * Constructs a <code>KeyNoteMediator</code> instance.
		 *
		 * @param name
		 * 		Name for this <code>Mediator</code>.
		 *
		 * @param viewComponent
		 * 		The <code>KeyNoteList</code> UI Component this <code>Mediator</code> manage.
		 */
		constructor( name:string, viewComponent:KeyNoteList ) {
			super( name, viewComponent );
			this.registerListeners();
		}

		/**
		 * Register event listeners for each  KeyNote
		 */
		private registerListeners():void {
			var knList:KeyNoteList = this.getKeyNoteList();
            knList.KeyNotes.forEach((kn:KeyNoteVO) => {
                $("#"+kn.id).on("click", () => {this.sendNotification(NotificationNames.KN_CLICK, kn.id)})
            });
		}



		/**
		 * @override
		 */
		listNotificationInterests():string[] {
			return [
                NotificationNames.KN_CLICK
			];
		}


		/**
		 * @override
		 */
		handleNotification( note:INotification ):void {
			switch( note.getName() ) {

				case NotificationNames.KN_CLICK:
                    // Change color
                    this.getKeyNoteList().fadeInOut(note.getBody())
                    // play sound
                    var soundProxy:SoundProxy = <SoundProxy>this.facade.retrieveProxy(ProxyNames.SOUND_PROXY)
                    soundProxy.playSound(note.getBody());
                    // check game secuence
                    var gameProxy:GameProxy = <GameProxy>this.facade.retrieveProxy(ProxyNames.GAME_PROXY)
                    gameProxy.CheckSequence(note.getBody());
                  break;
			}
		}


        /**
         * Return the <code>KeyNoteList</code> UI component this <code>Mediator</code> manage.
         *
         * @return
         * 		The <code>KeyNoteList</code> UI component this	<code>Mediator</code> manage.
         */
        private getKeyNoteList():KeyNoteList {
            return <KeyNoteList>this.viewComponent;
        }



	}

export = KeyNoteMediator;