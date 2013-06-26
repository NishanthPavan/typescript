## [PureMVC][Greensock][CreateJS][RequireJS][JQuery] Demo: Simon Says: TypeScript [for TypeScript V 0.8.x]

This demo illustrates a TypeScript VERSION 0.8.x project using PureMVC and other frameworks

Libraries are loaded using requireJS

Simon app is compiled as an AMD module usign an Ant script (grabbed from Employee Admin demo @ https://github.com/PureMVC/puremvc-typescript-demo-employeeadmin/wiki)
to palliate TypeScript  (actual version 0.8.x) compiler issues building a single module using multiple TypeScript files. TypeScript will probably evolve on this point in a near future (version 0.9.x).

Known breaking changes on TypeScript between 0.8 and 0.9:

The ‘module’ keyword no longer creates a type
Description: In 0.9.0, a clearer distinction is made between roles of namespaces, types, and values. Modules now contribute only to namespaces and values and will no longer contribute a type.
Reason: This simplification of the role of modules allow modules to now extend classes and functions more easily.


## Screenshot


[Live Demo]


## Status
Development - [Version 1.0]
Abandon in favor to new TS version 0.9.x (http://)


## Platforms / Technologies
* [TypeScript](http://www.typescriptlang.org/)
* [require.js](http://www.requirejs.org/)
* [jQuery](http://jquery.com/)
* [GreenSock](http://www.greensock.com)
* [CreateJS - soundJS](http://www.createjs.com)
* [YUI Compressor](http://developer.yahoo.com/yui/compressor/)
* [Ant](http://ant.apache.org/)


## Inspiration (give to Caesar what belongs to Caesar)
This app has been made thanks to the inspiration and good work of other apps like:
* [PureMVC-TS employee demo] by Frederic Saunier (https://github.com/PureMVC/puremvc-typescript-demo-employeeadmin)
* [HTML5 Simon Says] by Dan Christopher (https://github.com/dbchristopher/HTML5-Simon-Says)

## Build
To build the project you'll need to download and install :
* [TypeScript compiler](http://www.typescriptlang.org/#Download)
* [Ant](http://ant.apache.org/)
* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html/) (Ant need a JDK not a JRE, also don't forget to change environment var JAVA_HOME to the JDK path).

1. Rename the file [user.properties.sample](https://github.com/PureMVC/puremvc-typescript-standard-framework/blob/master/user.properties.sample) to **user.properties**
2. Edit the file and replace **MY_TYPESCRIPT_COMPILER_PATH** bt the real TypeScript compiler full system path.
3. Use your favorite editor to run Ant or simply type <code>ant ./build

## License
* Simon-Says - Copyright © 2013 Rodrigo Erades
* PureMVC TypeScript Standard Framework - Copyright © 2012 Frederic Saunier
* PureMVC - Copyright © 2006-2012 Futurescale, Inc.
* All rights reserved.

* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  * Neither the name of Futurescale, Inc., PureMVC.org, nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.