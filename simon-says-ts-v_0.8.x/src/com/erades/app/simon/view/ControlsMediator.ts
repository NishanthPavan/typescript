///<reference path='../../../../../../lib/puremvc/puremvc.d.ts'/>
///<reference path='../../../../../../lib/jquery/jquery.d.ts'/>
///<reference path='../../../../../../lib/greensock/GreenSock.d.ts'/>
///<reference path='../abc/NotificationNames.ts'/>
///<reference path='../abc/ProxyNames.ts'/>
///<reference path='../model/GameProxy.ts'/>

/**
 *  A <code>ControlsMediator</code> to handle all butons and other interactive
 *  UIcomoponents besides keyNotes from Simon
 */


module com.erades.app.simon {

    export class ControlsMediator extends puremvc.Mediator {

        /**
         * Constructs a <code>ControlsMediator</code> instance.
         *
         * @param name
         * 		Name for this <code>Mediator</code>.
         *
         * @param viewComponent
         * 		The <code>JQuery</code> UI Component this <code>Mediator</code> manage.
         */
         constructor( name:string, viewComponent:JQuery ) {
            super( name, viewComponent );
            this.registerListeners();
        }

        /**
         * Register event listeners for the app
         */
        private registerListeners():void {
            $("#startBtn").on("click", () => {this.sendNotification(NotificationNames.START_BTN_CLICK, null)})
            $("#countdown").on("click", () => {this.sendNotification(NotificationNames.START_OVER_BTN_CLICK, null)})
        }


        /**
         * Return the <code>JQuery</code> UI component this <code>Mediator</code> manage.
         *
         * @return
         * 		The <code>JQuery</code> UI component this	<code>Mediator</code> manage.
         */
        private get viewComponent():JQuery {
            return <JQuery>this.viewComponent;
        }

        /**
         * @override
         */
            listNotificationInterests():string[] {
            return [
                NotificationNames.START_BTN_CLICK,
                NotificationNames.NEXT_ROUND,
                NotificationNames.GAME_OVER,
                NotificationNames.START_OVER_BTN_CLICK
            ];
        }

        /**
         * @override
         */
            handleNotification( note:puremvc.INotification ):void {

            switch( note.getName() ) {

                case NotificationNames.START_BTN_CLICK:
                     this.initGame();
                  break;

                case NotificationNames.NEXT_ROUND:
                    this.showRoundNumber(note.getBody());
                  break;

                case NotificationNames.GAME_OVER:
                    this.showGameOver(note.getBody());
                    break;

                case NotificationNames.START_OVER_BTN_CLICK:
                    this.restart();
                    break;

            }
        }

        private initGame():void{
            // We hide intro text
            $("#intro").css("display", "none");
            // init the game
            this.sendNotification(NotificationNames.START_GAME);
            var gameProxy:GameProxy = <GameProxy> /*</>*/ this.facade.retrieveProxy( ProxyNames.GAME_PROXY );
            gameProxy.start();
        }

        private showRoundNumber(roundNum:string):void {
            // Show sequence number
            $("#countdown").html(roundNum)
            $("#countdown").css({'opacity':'0','font-size':'5000%','display':'none'})
            TweenMax.to("#countdown",0.5,{display:'block',fontSize:'400%',ease:Power4.easeOut,opacity:1, yoyo:true, repeat:1, delay:0.5})
        }





        private showGameOver(roundNum:number){
            $("#countdown").html("<p>GAME OVER</p><div id='score'>score: "+roundNum+"</div> <div id='start-over'><a href='#'>Play again?</a></div>")  //
            TweenMax.to("#score", 0, { display:'none',rotationX:270, transformOrigin:"left top", transformPerspective:600});
            TweenMax.to("#start-over", 0, { display:'none',rotationX:90, transformOrigin:"left top", transformPerspective:600});
            $("#countdown").css({'opacity':'0','font-size':'2000%','display':'none'})
            TweenMax.to("#countdown",0.5,{display:'block',fontSize:'400%',ease:Power4.easeOut,opacity:1,  delay:0.5 , onComplete:showScore})

            function showScore(){
                TweenMax.to("#score", 1.3, {delay:0.5, display:'block', rotationX:360, transformOrigin:"50% top", transformPerspective:600, ease:Elastic.easeOut});
                TweenMax.to("#start-over", 1, {delay:1.5, display:'block', rotationX:0, transformOrigin:"50% top", transformPerspective:600, ease:Elastic.easeOut});
            }
        }

        private restart(){
            var gameProxy:GameProxy = <GameProxy> /*</>*/ this.facade.retrieveProxy( ProxyNames.GAME_PROXY );
            TweenMax.to("#countdown", 0.8, {opacity:0, ease:Power4.easeOut, top:'40%',scale:0.8,onComplete:this.restoreDefault, onCompleteParams:[gameProxy]});


        }

        private  restoreDefault(gProxy){
        $("#countdown").css({'display':'none',top:'50%'})

        gProxy.start();
    }



    }

}

