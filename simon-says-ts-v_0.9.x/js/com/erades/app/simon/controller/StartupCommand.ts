/**
 * Start the application.
 */



import PrepModelCommand = require("../controller/PrepModelCommand");
import PrepViewCommand = require("../controller/PrepViewCommand");

import MacroCommand = require("org/puremvc/typescript/patterns/command/MacroCommand");


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


















