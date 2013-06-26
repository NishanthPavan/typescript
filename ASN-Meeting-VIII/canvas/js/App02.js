var learn;
(function (learn) {
    (function (erades) {
        (function (typescript) {
            var Stage = (function () {
                function Stage() {
                    console.log("Esta clase se instancia una sola vez");
                }
                Stage.getInstance = function () {
                    if (Stage._instance == null) {
                        Stage._instance = new Stage();
                    }
                    return Stage._instance;
                };

                Stage.prototype.setCanvas = function (canvasId) {
                    this._canvasId = canvasId;
                    this._canvas = document.getElementById(this._canvasId);
                    this._ctx = this._canvas.getContext("2d");
                    console.log("Canvas preparado");
                };

                Stage.prototype.getCtx = function () {
                    return this._ctx;
                };

                Stage.prototype.getCanvas = function () {
                    return this._canvas;
                };
                return Stage;
            })();
            typescript.Stage = Stage;
        })(erades.typescript || (erades.typescript = {}));
        var typescript = erades.typescript;
    })(learn.erades || (learn.erades = {}));
    var erades = learn.erades;
})(learn || (learn = {}));
var learn;
(function (learn) {
    (function (erades) {
        (function (typescript) {
            var Box = (function () {
                function Box(x, y, width, height) {
                    if (typeof x === "undefined") { x = 0; }
                    if (typeof y === "undefined") { y = 0; }
                    if (typeof width === "undefined") { width = 10; }
                    if (typeof height === "undefined") { height = 10; }
                    this.x = x;
                    this.y = y;
                    this.width = width;
                    this.height = height;
                    this.deltaX = 3;
                    this.deltaY = 2;
                    this.x = x;
                    this.y = y;
                    this.height = height;
                    this.width = width;
                    this._ctx = typescript.Stage.getInstance().getCtx();
                    this._maxWidth = typescript.Stage.getInstance().getCanvas().width;
                    this._maxHeight = typescript.Stage.getInstance().getCanvas().height;
                    this._color = Math.round(Math.random() * 0xffffff).toString(16);
                }
                Box.prototype.move = function (deltaX, deltaY) {
                    var _this = this;
                    this.deltaX = deltaX;
                    this.deltaY = deltaY;

                    this._intervalo = setInterval(function () {
                        _this.redraw();
                    }, 10);
                };

                Box.prototype.redraw = function () {
                    this.drawRect();
                };

                Box.prototype.drawRect = function () {
                    this._ctx.clearRect(this.x, this.y, this.width, this.height);

                    this.x += this.deltaX;
                    this.y += this.deltaY;

                    this._ctx.fillStyle = this._color;
                    this._ctx.fillRect(this.x, this.y, this.width, this.height);

                    this.deltaX = (this.x > 0 && this.x < this._maxWidth - this.width) ? this.deltaX : -1 * this.deltaX;
                    this.deltaY = (this.y > 0 && this.y < this._maxHeight - this.height) ? this.deltaY : -1 * this.deltaY;
                };
                return Box;
            })();
            typescript.Box = Box;
        })(erades.typescript || (erades.typescript = {}));
        var typescript = erades.typescript;
    })(learn.erades || (learn.erades = {}));
    var erades = learn.erades;
})(learn || (learn = {}));
var ts = learn.erades.typescript;

function run() {
    ts.Stage.getInstance().setCanvas("mi_canvas");

    for (var i = 0; i < 20; i++) {
        var MiCaja = new ts.Box(Math.round(Math.random() * 380) + 10, Math.round(Math.random() * 380) + 10);
        MiCaja.move(Math.round(Math.random() * 10 - 5), Math.round(Math.random() * 10 - 5));
    }
}

run();
