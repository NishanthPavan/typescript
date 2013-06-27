/**
 * Configure and initialize model for the application.
 */

import GameProxy = require("../model/GameProxy");
import ProxyNames = require("../abc/ProxyNames");
import UINames = require("../abc/UINames");
import SoundProxy = require("../model/SoundProxy");


import SimpleCommand = require("org/puremvc/typescript/patterns/command/SimpleCommand");
import INotification = require("org/puremvc/typescript/interfaces/INotification");
import IProxy = require("org/puremvc/typescript/interfaces/IProxy");

     class PrepModelCommand extends SimpleCommand {
        /**
         * @override
         */
            execute(note:INotification):void {
            console.info("SIMON SAYS :: loadding proxies")

            // --------------------
            // Data initialization.
            // --------------------

            /**
             * To centralize all UI info incluiding file names  I create a  UINames to grabb data from
             */

            var gameProxy:IProxy = new GameProxy(ProxyNames.GAME_PROXY, UINames.ID_ARRAY)
            var soundProxy:IProxy = new SoundProxy(ProxyNames.SOUND_PROXY, UINames.SOUND_ARRAY);

            this.facade.registerProxy(gameProxy);
            this.facade.registerProxy(soundProxy);
        }
    }

export = PrepModelCommand;

