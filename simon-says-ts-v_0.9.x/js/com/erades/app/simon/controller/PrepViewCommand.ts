///<reference path='../../../../../../lib/puremvc/puremvc.d.ts'/>
///<reference path='../../../../../../lib/jquery/jquery.d.ts'/>
///<reference path='../view/components/KeyNoteList.ts' />
///<reference path='../abc/UINames.ts' />
///<reference path='../abc/MediatorNames.ts' />
///<reference path='../view/KeyNoteMediator.ts' />
///<reference path='../view/ControlsMediator.ts' />
/**
 * Configure and initialize view for the application.
 */

import UINames = module("com/erades/app/simon/abc/UINames");
import MediatorNames = module("com/erades/app/simon/abc/MediatorNames");
import KeyNoteList = module("com/erades/app/simon/view/components/KeyNoteList");
import KeyNoteMediator = module("com/erades/app/simon/view/KeyNoteMediator");
import ControlsMediator = module("com/erades/app/simon/view/ControlsMediator");


import SimpleCommand = module("org/puremvc/typescript/patterns/command/SimpleCommand");



	 class PrepViewCommand extends SimpleCommand {
		/**
		 * @override
		 */
		execute( note:puremvc.INotification ) {
            console.info("SIMON SAYS :: loadding mediators")
            var mainView:JQuery = note.getBody();
        	// View Components are initialized using the application main view selector
            var knList:KeyNoteList = new KeyNoteList( mainView.find(UINames.SIMON_ID) );

			// Mediators initialization
            var knMediator:KeyNoteMediator = new KeyNoteMediator(MediatorNames.KEY_NOTE,knList);
            var controlsMediator:ControlsMediator = new ControlsMediator(MediatorNames.CONTROLS,null);

			// PureMVC mediators registration
            this.facade.registerMediator( knMediator );
            this.facade.registerMediator(controlsMediator);

		}
	}

export = PrepViewCommand;
