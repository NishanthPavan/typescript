///<reference path='../../../../../../lib/puremvc/puremvc.d.ts'/>
///<reference path='../abc/NotificationNames.ts'/>
///<reference path='../../../../../../lib/createJs/easeljs.d.ts'/>
///<reference path='../../../../../../lib/createJs/SoundJS.d.ts'/>
///<reference path='../../../../../../lib/createJs/preloadjs.d.ts'/>
///<reference path='../../../../../../lib/createJs/tweenjs.d.ts'/>


import NotificationNames = module("com/erades/app/simon/abc/NotificationNames");


import Proxy = module("org/puremvc/typescript/patterns/proxy/Proxy");




    class SoundProxy extends Proxy {

        private numSoundLoaded:number = 1;

        constructor(proxyName:string, idArray:{}[]) {
            super(proxyName, idArray);
            this.init();
        }


        private init() {
            createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)); // HWe need a proxy in order to have a correct  scope
            createjs.Sound.registerManifest(this.data);
        }


        private soundLoaded(event) {
            // we get a fileload event every time a file has been loaded on the queue
            if (this.data.length == this.numSoundLoaded) {
                this.sendNotification(NotificationNames.SOUNDS_LOADED);
            } else {
                this.numSoundLoaded++;
            }
        }


        public playSound(targetId) {
            //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
            createjs.Sound.play(targetId, createjs.Sound.INTERRUPT_EARLY, 0, 0, false, 1);
        }
    }

export = SoundProxy;


