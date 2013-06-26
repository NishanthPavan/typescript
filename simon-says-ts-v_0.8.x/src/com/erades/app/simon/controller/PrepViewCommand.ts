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
module com.erades.app.simon {

	export class PrepViewCommand extends puremvc.SimpleCommand {
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
}