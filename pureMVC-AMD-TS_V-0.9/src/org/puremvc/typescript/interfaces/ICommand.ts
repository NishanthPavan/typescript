

	/**
	 * The interface definition for a PureMVC Command.
	 */

import INotifier = require("./INotifier");
    import INotification = require("./INotification");


	interface ICommand extends INotifier {
		/**
		 * Fulfill the use-case initiated by the given <code>INotification</code>.
		 * 
		 * In the Command Pattern, an application use-case typically begins with some user action,
		 * which results in an <code>INotification</code> being broadcast, which is handled by
		 * business logic in the <code>execute</code> method of an <code>ICommand</code>.
		 * 
		 * @param notification
		 * 		The <code>INotification</code> to handle.
		 */
		execute( notification:INotification ):void;
	}

export = ICommand;






