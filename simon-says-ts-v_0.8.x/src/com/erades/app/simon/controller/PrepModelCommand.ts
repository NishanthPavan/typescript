///<reference path='../../../../../../lib/puremvc/puremvc.d.ts'/>
///<reference path='../abc/ProxyNames.ts' />
///<reference path='../model/GameProxy.ts' />
///<reference path='../model/soundProxy.ts' />
///<reference path='../abc/UINames.ts' />


/**
 * Configure and initialize model for the application.
 */
module com.erades.app.simon {


    export class PrepModelCommand extends puremvc.SimpleCommand {
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
}