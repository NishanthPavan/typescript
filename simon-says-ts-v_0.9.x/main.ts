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
            // puremvc: '../lib/puremvc/puremvc-typescript-standard-1.0-min' // PureMVC framework for producttion
            // puremvc: 'lib/puremvc/puremvc-typescript-standard-1.0', // PureMVC framework [Comment this line is you uncomment above] FIXME:: Don't know why this file is failing
            // "com.erades.app.simon": 'bin/simon-typescript-1.0-min'  // App min for production
            // "com.erades.app.simon": 'bin/simon-typescript-1.0' // Comment this line if you uncomment above
        },

        shims: {
            "com.erades.app.simon": { deps: ["puremvc"]}
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

    function (simonApp) {
        //Wait for the DOM to be ready before setting up the application.
        jQuery(function () {
            var applicationFacade/*ApplicationFacade*/ = simonApp.ApplicationFacade.getInstance();
            applicationFacade.startup(jQuery("body"));
        })
    }
);


