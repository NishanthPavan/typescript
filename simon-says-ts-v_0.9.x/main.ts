/**
 * Standard main.js file used by Require.js to load each module in a parallel process but
 * respecting dependencies declaration precedence order before initializing each.
 *
 *
 * Have a look at : http://www.tekool.net/blog/2012/11/07/puremvc-for-typescript/ for more explanations
 * on how the Ant task bundled in the project create the appropriate AMD module file using multiple
 * module files as TypeScript still has some problem with that.
 */

/***************************************************************************************************
 *
 * Define the Require.js config for the Simon Says app
 *
 * @url http://requirejs.org/
 */


///<reference path="lib/require/requirejs.d.ts"/>
///<reference path="lib/jquery/jquery.d.ts"/>
///<reference path="js/com/erades/app/simon/ApplicationFacade.ts"/>



require.config({
        baseUrl: 'js',

        paths: {
            createjs: '../lib/createJs/createjs.min', // for loading sound
            TweenMax: '../lib/greensock/TweenMax.min', //for animations
            CSSPlugin: '../lib/greensock/CSSPlugin.min' // for animation of CSS porperties
        }
    }
);

/***************************************************************************************************
 * Start loading each module and its dependencies.
 ***************************************************************************************************/
require(

    [
        'com/erades/app/simon/ApplicationFacade',
        // 'puremvc',
        'TweenMax',
        'CSSPlugin',
        'createjs'
    ],

    function (ApplicationFacade) {
        //Wait for the DOM to be ready before setting up the application.
        jQuery(function () {
            var applicationFacade/*ApplicationFacade*/ = ApplicationFacade.getInstance();
            applicationFacade.startup(jQuery("body"));
        })
    }
);


