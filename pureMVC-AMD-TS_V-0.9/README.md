# <a href="http://puremvc.github.io/" target="_blank">PureMVC</a> AMD compliant for TypeScript V 0.9.x

I made a refactoring of all classes from framework <a href="http://puremvc.github.io/" target="_blank">PureMVC</a> to make it AMD compliant with the new version of typeScript V 0.9.x
You can fin here the source code ofht the framework to be included in any project.
Just make sure you use these params at compiling with tsc:

--module AMD
--target ES5
also it is very convenient to use:  --sourcemap

* Demo
you can see a demo project om my Simon Says project (V 0.9.x) (<a href="https://github.com/area73/typescript/tree/master/simon-says-ts-v_0.9.x">https://github.com/area73/typescript/tree/master/simon-says-ts-v_0.9.x</a>)

## License
* PureMVC TypeScript Standard Framework - Copyright © 2012 Frederic Saunier
* PureMVC - Copyright © 2006-2012 Futurescale, Inc.
* PureMVC -refactoring to meet TS v 9.0.x and AMD - Rodigo Erades
* All rights reserved.

* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  * Neither the name of Futurescale, Inc., PureMVC.org, nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.