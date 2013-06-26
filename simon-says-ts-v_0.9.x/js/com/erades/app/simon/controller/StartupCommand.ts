///<reference path='../../../../../../lib/puremvc/puremvc.d.ts'/>
///<reference path='PrepModelCommand.ts'/>
///<reference path='PrepViewCommand.ts'/>


/**
 * Start the application.
 */



import PrepModelCommand = module("com/erades/app/simon/controller/PrepModelCommand");
import PrepViewCommand = module("com/erades/app/simon/controller/PrepViewCommand");

import MacroCommand = module("org/puremvc/typescript/patterns/command/MacroCommand");


	 class StartupCommand extends MacroCommand {
		/**
		 * @override
		 *
		 * Add the Subcommands to startup the PureMVC apparatus.
		 *
		 * Generally, it is best to prep the Model (mostly registering  proxies)followed by
		 * preparation of the View (mostly registering Mediators).
		 */
		initializeMacroCommand() {
        	this.addSubCommand( PrepModelCommand );
			this.addSubCommand( PrepViewCommand );
		}
	}

export = StartupCommand;

















