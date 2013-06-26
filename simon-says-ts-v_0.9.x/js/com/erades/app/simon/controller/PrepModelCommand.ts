///<reference path='../../../../../../lib/puremvc/puremvc.d.ts'/>
///<reference path='../abc/ProxyNames.ts' />
///<reference path='../model/GameProxy.ts' />
///<reference path='../model/SoundProxy.ts' />
///<reference path='../abc/UINames.ts' />


/**
 * Configure and initialize model for the application.
 */

import GameProxy = module("com/erades/app/simon/model/GameProxy");
import ProxyNames = module("com/erades/app/simon/abc/ProxyNames");
import UINames = module("com/erades/app/simon/abc/UINames");
import SoundProxy = module("com/erades/app/simon/model/SoundProxy");


import SimpleCommand = module("org/puremvc/typescript/patterns/command/SimpleCommand");

     class PrepModelCommand extends SimpleCommand {
        /**
         * @override
         */
            execute(note:puremvc.INotification):void {
            console.info("SIMON SAYS :: loadding proxies")

            // --------------------
            // Data initialization.
            // --------------------

            /**
             * To centralize all UI info incluiding file names  I create a  UINames to grabb data from
             */

            var gameProxy:puremvc.IProxy = new GameProxy(ProxyNames.GAME_PROXY, UINames.ID_ARRAY)
            var soundProxy:puremvc.IProxy = new SoundProxy(ProxyNames.SOUND_PROXY, UINames.SOUND_ARRAY);

            this.facade.registerProxy(gameProxy);
            this.facade.registerProxy(soundProxy);
        }
    }

export = PrepModelCommand;
