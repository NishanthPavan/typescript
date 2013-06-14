if( typeof define === "function" )
{
	define( "com.erades.app.simon", ['puremvc'], function(puremvc)
	{
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var NotificationNames = (function () {
                            function NotificationNames() { }
                            NotificationNames.STARTUP = "startup";
                            NotificationNames.KN_CLICK = "KeyNoteClick";
                            NotificationNames.KN_BLOCK = "KeyNoteBlock";
                            NotificationNames.KN_ACTIVATE = "KeyNoteActivate";
                            NotificationNames.START_BTN_CLICK = "startBtnClick";
                            NotificationNames.START_GAME = "startGame";
                            NotificationNames.SOUNDS_LOADED = "soundsLoaded";
                            NotificationNames.GAME_OVER = "gameOver";
                            NotificationNames.NEXT_ROUND = "nextRound";
                            NotificationNames.START_OVER_BTN_CLICK = "startOverBtnClick";
                            return NotificationNames;
                        })();
                        simon.NotificationNames = NotificationNames;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var ProxyNames = (function () {
                            function ProxyNames() { }
                            ProxyNames.GAME_PROXY = "gameProxy";
                            ProxyNames.SOUND_PROXY = "soundPorxy";
                            return ProxyNames;
                        })();
                        simon.ProxyNames = ProxyNames;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var __extends = this.__extends || function (d, b) {
            function __() { this.constructor = d; }
            __.prototype = b.prototype;
            d.prototype = new __();
        };
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var GameProxy = (function (_super) {
                            __extends(GameProxy, _super);
                            function GameProxy(proxyName, idArray) {
                                                _super.call(this, proxyName, idArray);
                                this._computerNotes = new Array();
                                this._userNotes = new Array();
                                this._currentCompNote = 0;
                                this._currentUserNote = 0;
                                this._inputActive = true;
                                this._numItems = idArray.length;
                            }
                            GameProxy.prototype.resetUserNotes = function () {
                                this._userNotes.length = 0;
                                this._currentUserNote = 0;
                            };
                            GameProxy.prototype.resetCompNotes = function () {
                                this._computerNotes.length = 0;
                                this._currentCompNote = 0;
                            };
                            GameProxy.prototype.reset = function () {
                                this.resetCompNotes();
                                this.resetUserNotes();
                            };
                            GameProxy.prototype.start = function () {
                                this.reset();
                                this.playSequence();
                            };
                            GameProxy.prototype.CheckSequence = function (id) {
                                if(this._inputActive) {
                                    if(this._computerNotes[this._currentUserNote] == id) {
                                        if(this._computerNotes.length > this._currentUserNote + 1) {
                                            this._currentUserNote++;
                                        } else {
                                            this.playSequence();
                                        }
                                    } else {
                                        this.sendNotification(simon.NotificationNames.GAME_OVER, this._computerNotes.length - 1);
                                    }
                                }
                            };
                            GameProxy.prototype.playSequence = function () {
                                var _this = this;
                                this._inputActive = false;
                                this.sendNotification(simon.NotificationNames.KN_BLOCK);
                                this.sendNotification(simon.NotificationNames.NEXT_ROUND, this._computerNotes.length + 1);
                                this._currentCompNote = 0;
                                setTimeout(function () {
                                    _this.continueSequence();
                                }, 2000);
                            };
                            GameProxy.prototype.continueSequence = function () {
                                var _this = this;
                                if(this._computerNotes.length > this._currentCompNote) {
                                    this.sendNotification(simon.NotificationNames.KN_CLICK, this._computerNotes[this._currentCompNote]);
                                    this._currentCompNote++;
                                    setTimeout(function () {
                                        _this.continueSequence();
                                    }, 500);
                                } else {
                                    this.addNote();
                                }
                            };
                            GameProxy.prototype.addNote = function () {
                                var randomNote = this.getRandomId();
                                this._computerNotes.push(randomNote);
                                this.sendNotification(simon.NotificationNames.KN_CLICK, randomNote);
                                this.sendNotification(simon.NotificationNames.KN_ACTIVATE);
                                this._inputActive = true;
                                this.resetUserNotes();
                            };
                            GameProxy.prototype.getIds = function () {
                                return this.data;
                            };
                            GameProxy.prototype.getRandomId = function () {
                                var idNum = Math.round(Math.random() * (this._numItems - 1));
                                return this.data[idNum];
                            };
                            return GameProxy;
                        })(puremvc.Proxy);
                        simon.GameProxy = GameProxy;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var SoundProxy = (function (_super) {
                            __extends(SoundProxy, _super);
                            function SoundProxy(proxyName, idArray) {
                                                _super.call(this, proxyName, idArray);
                                this.numSoundLoaded = 1;
                                this.init();
                            }
                            SoundProxy.prototype.init = function () {
                                createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));
                                createjs.Sound.registerManifest(this.data);
                            };
                            SoundProxy.prototype.soundLoaded = function (event) {
                                if(this.data.length == this.numSoundLoaded) {
                                    this.sendNotification(simon.NotificationNames.SOUNDS_LOADED);
                                } else {
                                    this.numSoundLoaded++;
                                }
                            };
                            SoundProxy.prototype.playSound = function (targetId) {
                                createjs.Sound.play(targetId, createjs.Sound.INTERRUPT_EARLY, 0, 0, false, 1);
                            };
                            return SoundProxy;
                        })(puremvc.Proxy);
                        simon.SoundProxy = SoundProxy;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var UINames = (function () {
                            function UINames() { }
                            UINames.SIMON_ID = "#simon";
                            UINames.ID_ARRAY = [
                                '1', 
                                '2', 
                                '3', 
                                '4', 
                                '5', 
                                '6', 
                                '7'
                            ];
                            UINames.SOUND_ARRAY = [
                                {
                                    src: "lib/sound/C4.mp3|lib/sound/C4.ogg",
                                    id: 1
                                }, 
                                {
                                    src: "lib/sound/D4.mp3|lib/sound/D4.ogg",
                                    id: 2
                                }, 
                                {
                                    src: "lib/sound/E4.mp3|lib/sound/E4.ogg",
                                    id: 3
                                }, 
                                {
                                    src: "lib/sound/F4.mp3|lib/sound/F4.ogg",
                                    id: 4
                                }, 
                                {
                                    src: "lib/sound/G4.mp3|lib/sound/G4.ogg",
                                    id: 5
                                }, 
                                {
                                    src: "lib/sound/A4.mp3|lib/sound/A4.ogg",
                                    id: 6
                                }, 
                                {
                                    src: "lib/sound/B4.mp3|lib/sound/B4.ogg",
                                    id: 7
                                }, 
                                
                            ];
                            return UINames;
                        })();
                        simon.UINames = UINames;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var PrepModelCommand = (function (_super) {
                            __extends(PrepModelCommand, _super);
                            function PrepModelCommand() {
                                _super.apply(this, arguments);
        
                            }
                            PrepModelCommand.prototype.execute = function (note) {
                                console.info("SIMON SAYS :: loadding proxies");
                                var gameProxy = new simon.GameProxy(simon.ProxyNames.GAME_PROXY, simon.UINames.ID_ARRAY);
                                var soundProxy = new simon.SoundProxy(simon.ProxyNames.SOUND_PROXY, simon.UINames.SOUND_ARRAY);
                                this.facade.registerProxy(gameProxy);
                                this.facade.registerProxy(soundProxy);
                            };
                            return PrepModelCommand;
                        })(puremvc.SimpleCommand);
                        simon.PrepModelCommand = PrepModelCommand;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var KeyNoteVO = (function () {
                            function KeyNoteVO() {
                            }
                            Object.defineProperty(KeyNoteVO.prototype, "id", {
                                get: function () {
                                    return this._id;
                                },
                                set: function (id) {
                                    this._id = id;
                                },
                                enumerable: true,
                                configurable: true
                            });
                            return KeyNoteVO;
                        })();
                        simon.KeyNoteVO = KeyNoteVO;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var KeyNoteList = (function () {
                            function KeyNoteList(view) {
                                this.KNList = null;
                                this.keyNotes = new Array();
                                this.KNList = view;
                                this.initializeChildren();
                            }
                            KeyNoteList.prototype.initializeChildren = function () {
                                var _this = this;
                                this.KNList.children('ul').children('li').each(function (index, value) {
                                    var knVO = new simon.KeyNoteVO();
                                    knVO.id = $(value).attr('id');
                                    _this.keyNotes.push(knVO);
                                });
                            };
                            Object.defineProperty(KeyNoteList.prototype, "KeyNotes", {
                                get: function () {
                                    return this.keyNotes;
                                },
                                enumerable: true,
                                configurable: true
                            });
                            KeyNoteList.prototype.fadeInOut = function (id) {
                                TweenMax.to("#" + id, 0.1, {
                                    opacity: 1,
                                    yoyo: true,
                                    repeat: 1,
                                    ease: Power3.easeOut
                                });
                            };
                            return KeyNoteList;
                        })();
                        simon.KeyNoteList = KeyNoteList;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var MediatorNames = (function () {
                            function MediatorNames() { }
                            MediatorNames.KEY_NOTE = "keyNoteMediator";
                            MediatorNames.CONTROLS = "ControlsMediator";
                            return MediatorNames;
                        })();
                        simon.MediatorNames = MediatorNames;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var KeyNoteMediator = (function (_super) {
                            __extends(KeyNoteMediator, _super);
                            function KeyNoteMediator(name, viewComponent) {
                                                _super.call(this, name, viewComponent);
                                this.registerListeners();
                            }
                            KeyNoteMediator.prototype.registerListeners = function () {
                                var _this = this;
                                var knList = this.getKeyNoteList();
                                knList.KeyNotes.forEach(function (kn) {
                                    $("#" + kn.id).on("click", function () {
                                        _this.sendNotification(simon.NotificationNames.KN_CLICK, kn.id);
                                    });
                                });
                            };
                            KeyNoteMediator.prototype.listNotificationInterests = function () {
                                return [
                                    simon.NotificationNames.KN_CLICK
                                ];
                            };
                            KeyNoteMediator.prototype.handleNotification = function (note) {
                                switch(note.getName()) {
                                    case simon.NotificationNames.KN_CLICK:
                                        this.getKeyNoteList().fadeInOut(note.getBody());
                                        var soundProxy = this.facade.retrieveProxy(simon.ProxyNames.SOUND_PROXY);
                                        soundProxy.playSound(note.getBody());
                                        var gameProxy = this.facade.retrieveProxy(simon.ProxyNames.GAME_PROXY);
                                        gameProxy.CheckSequence(note.getBody());
                                        break;
                                }
                            };
                            KeyNoteMediator.prototype.getKeyNoteList = function () {
                                return this.viewComponent;
                            };
                            return KeyNoteMediator;
                        })(puremvc.Mediator);
                        simon.KeyNoteMediator = KeyNoteMediator;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var ControlsMediator = (function (_super) {
                            __extends(ControlsMediator, _super);
                            function ControlsMediator(name, viewComponent) {
                                                _super.call(this, name, viewComponent);
                                this.registerListeners();
                            }
                            ControlsMediator.prototype.registerListeners = function () {
                                var _this = this;
                                $("#startBtn").on("click", function () {
                                    _this.sendNotification(simon.NotificationNames.START_BTN_CLICK, null);
                                });
                                $("#countdown").on("click", function () {
                                    _this.sendNotification(simon.NotificationNames.START_OVER_BTN_CLICK, null);
                                });
                            };
                            Object.defineProperty(ControlsMediator.prototype, "viewComponent", {
                                get: function () {
                                    return this.viewComponent;
                                },
                                enumerable: true,
                                configurable: true
                            });
                            ControlsMediator.prototype.listNotificationInterests = function () {
                                return [
                                    simon.NotificationNames.START_BTN_CLICK, 
                                    simon.NotificationNames.NEXT_ROUND, 
                                    simon.NotificationNames.GAME_OVER, 
                                    simon.NotificationNames.START_OVER_BTN_CLICK
                                ];
                            };
                            ControlsMediator.prototype.handleNotification = function (note) {
                                switch(note.getName()) {
                                    case simon.NotificationNames.START_BTN_CLICK:
                                        this.initGame();
                                        break;
                                    case simon.NotificationNames.NEXT_ROUND:
                                        this.showRoundNumber(note.getBody());
                                        break;
                                    case simon.NotificationNames.GAME_OVER:
                                        this.showGameOver(note.getBody());
                                        break;
                                    case simon.NotificationNames.START_OVER_BTN_CLICK:
                                        this.restart();
                                        break;
                                }
                            };
                            ControlsMediator.prototype.initGame = function () {
                                $("#intro").css("display", "none");
                                this.sendNotification(simon.NotificationNames.START_GAME);
                                var gameProxy = this.facade.retrieveProxy(simon.ProxyNames.GAME_PROXY);
                                gameProxy.start();
                            };
                            ControlsMediator.prototype.showRoundNumber = function (roundNum) {
                                $("#countdown").html(roundNum);
                                $("#countdown").css({
                                    'opacity': '0',
                                    'font-size': '5000%',
                                    'display': 'none'
                                });
                                TweenMax.to("#countdown", 0.5, {
                                    display: 'block',
                                    fontSize: '400%',
                                    ease: Power4.easeOut,
                                    opacity: 1,
                                    yoyo: true,
                                    repeat: 1,
                                    delay: 0.5
                                });
                            };
                            ControlsMediator.prototype.showGameOver = function (roundNum) {
                                $("#countdown").html("<p>GAME OVER</p><div id='score'>score: " + roundNum + "</div> <div id='start-over'><a href='#'>Play again?</a></div>");
                                TweenMax.to("#score", 0, {
                                    display: 'none',
                                    rotationX: 270,
                                    transformOrigin: "left top",
                                    transformPerspective: 600
                                });
                                TweenMax.to("#start-over", 0, {
                                    display: 'none',
                                    rotationX: 90,
                                    transformOrigin: "left top",
                                    transformPerspective: 600
                                });
                                $("#countdown").css({
                                    'opacity': '0',
                                    'font-size': '2000%',
                                    'display': 'none'
                                });
                                TweenMax.to("#countdown", 0.5, {
                                    display: 'block',
                                    fontSize: '400%',
                                    ease: Power4.easeOut,
                                    opacity: 1,
                                    delay: 0.5,
                                    onComplete: showScore
                                });
                                function showScore() {
                                    TweenMax.to("#score", 1.3, {
                                        delay: 0.5,
                                        display: 'block',
                                        rotationX: 360,
                                        transformOrigin: "50% top",
                                        transformPerspective: 600,
                                        ease: Elastic.easeOut
                                    });
                                    TweenMax.to("#start-over", 1, {
                                        delay: 1.5,
                                        display: 'block',
                                        rotationX: 0,
                                        transformOrigin: "50% top",
                                        transformPerspective: 600,
                                        ease: Elastic.easeOut
                                    });
                                }
                            };
                            ControlsMediator.prototype.restart = function () {
                                var gameProxy = this.facade.retrieveProxy(simon.ProxyNames.GAME_PROXY);
                                TweenMax.to("#countdown", 0.8, {
                                    opacity: 0,
                                    ease: Power4.easeOut,
                                    top: '40%',
                                    scale: 0.8,
                                    onComplete: this.restoreDefault,
                                    onCompleteParams: [
                                        gameProxy
                                    ]
                                });
                            };
                            ControlsMediator.prototype.restoreDefault = function (gProxy) {
                                $("#countdown").css({
                                    'display': 'none',
                                    top: '50%'
                                });
                                gProxy.start();
                            };
                            return ControlsMediator;
                        })(puremvc.Mediator);
                        simon.ControlsMediator = ControlsMediator;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var PrepViewCommand = (function (_super) {
                            __extends(PrepViewCommand, _super);
                            function PrepViewCommand() {
                                _super.apply(this, arguments);
        
                            }
                            PrepViewCommand.prototype.execute = function (note) {
                                console.info("SIMON SAYS :: loadding mediators");
                                var mainView = note.getBody();
                                var knList = new simon.KeyNoteList(mainView.find(simon.UINames.SIMON_ID));
                                var knMediator = new simon.KeyNoteMediator(simon.MediatorNames.KEY_NOTE, knList);
                                var controlsMediator = new simon.ControlsMediator(simon.MediatorNames.CONTROLS, null);
                                this.facade.registerMediator(knMediator);
                                this.facade.registerMediator(controlsMediator);
                            };
                            return PrepViewCommand;
                        })(puremvc.SimpleCommand);
                        simon.PrepViewCommand = PrepViewCommand;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var StartupCommand = (function (_super) {
                            __extends(StartupCommand, _super);
                            function StartupCommand() {
                                _super.apply(this, arguments);
        
                            }
                            StartupCommand.prototype.initializeMacroCommand = function () {
                                this.addSubCommand(simon.PrepModelCommand);
                                this.addSubCommand(simon.PrepViewCommand);
                            };
                            return StartupCommand;
                        })(puremvc.MacroCommand);
                        simon.StartupCommand = StartupCommand;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        var com;
        (function (com) {
            (function (erades) {
                (function (app) {
                    (function (simon) {
                        var ApplicationFacade = (function (_super) {
                            __extends(ApplicationFacade, _super);
                            function ApplicationFacade() {
                                _super.apply(this, arguments);
        
                            }
                            ApplicationFacade.prototype.startup = function (app) {
                                this.sendNotification(simon.NotificationNames.STARTUP, app);
                            };
                            ApplicationFacade.prototype.initializeController = function () {
                                _super.prototype.initializeController.call(this);
                                console.info("SIMON SAYS:: INIT APP");
                                this.registerCommand(simon.NotificationNames.STARTUP, simon.StartupCommand);
                            };
                            ApplicationFacade.getInstance = function getInstance() {
                                if(!puremvc.Facade.instance) {
                                    puremvc.Facade.instance = new ApplicationFacade();
                                }
                                return puremvc.Facade.instance;
                            };
                            return ApplicationFacade;
                        })(puremvc.Facade);
                        simon.ApplicationFacade = ApplicationFacade;                
                    })(app.simon || (app.simon = {}));
                    var simon = app.simon;
                })(erades.app || (erades.app = {}));
                var app = erades.app;
            })(com.erades || (com.erades = {}));
            var erades = com.erades;
        })(com || (com = {}));
        
		return com.erades.app.simon;
	});
}