
///<reference path='../../../../../lib/puremvc/puremvc.d.ts'/>



///<reference path='../../../../../lib/jquery/jquery.d.ts'/>
///<reference path='abc/NotificationNames.ts'/>
///<reference path='controller/StartupCommand.ts'/>


/**
 * PureMVC <code>Facade</code> for this application.
 */




    import NotificationNames = module("com/erades/app/simon/abc/NotificationNames");
    import StartupCommand = module("com/erades/app/simon/controller/StartupCommand");

    import Facade = module("org/puremvc/typescript/patterns/facade/Facade");



	export class ApplicationFacade extends Facade {
		/**
		 * Start the application.
		 *
		 * @param app
		 * 		The HTML root node element of the application.
		 */
		startup( app:JQuery ){
			this.sendNotification( NotificationNames.STARTUP, app );
		}

		/**
		 * @override
		 *
		 * The <code>Model</code> <code>View</code> and <code>Controller</code> are initialized in a
		 * deliberate order to ensure internal dependencies are satisfied before operations are
		 * performed.
		 *
		 * <code>initializeController()</code> should be overridden for the specific purpose of
		 * registering your commands. Any attempt to register <code>Mediator</code>s here will
		 * result in an error being thrown because the View has not yet been initialized calling
		 * <code>this.parent()</code> is also required.
		 */
		initializeController():void {
			super.initializeController();
            console.info("SIMON SAYS:: INIT APP")
			this.registerCommand( NotificationNames.STARTUP, StartupCommand );
		}


		/**
		 * Singleton implementation for the <code>ApplicationFacade</code>.
		 *
		 * @return
		 * 		The <code>Facade</code> subclass instance used throughout the application.
		 */
		static getInstance():ApplicationFacade {
			if( !Facade.instance ){
                Facade.instance = new ApplicationFacade();
            }
			return <ApplicationFacade>Facade.instance;
		}
	}






