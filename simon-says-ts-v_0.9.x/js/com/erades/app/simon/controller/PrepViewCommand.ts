/**
 * Configure and initialize view for the application.
 */

import UINames = require("../abc/UINames");
import MediatorNames = require("../abc/MediatorNames");
import KeyNoteList = require("../view/components/KeyNoteList");
import KeyNoteMediator = require("../view/KeyNoteMediator");
import ControlsMediator = require("../view/ControlsMediator");


import SimpleCommand = require("org/puremvc/typescript/patterns/command/SimpleCommand");
import INotification = require("org/puremvc/typescript/interfaces/INotification");



	 class PrepViewCommand extends SimpleCommand {
		/**
		 * @override
		 */
		execute( note:INotification ) {
            console.info("SIMON SAYS :: loadding mediators")
            var mainView:JQuery = note.getBody();
        	// View Components are initialized using the application main view selector
            var knList:KeyNoteList = new KeyNoteList( mainView.find(UINames.SIMON_ID) );

			// Mediators initialization
            var knMediator:KeyNoteMediator = new KeyNoteMediator(MediatorNames.KEY_NOTE,knList);
            var controlsMediator:ControlsMediator = new ControlsMediator(MediatorNames.CONTROLS,null);
            // var keyMediator:KeyMediator = new KeyMediator(MediatorNames.KEY,null);

			// PureMVC mediators registration
            this.facade.registerMediator( knMediator );
            this.facade.registerMediator(controlsMediator);
            // this.facade.registerMediator(controlsMediator);

		}
	}

export = PrepViewCommand;


