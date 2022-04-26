(function(){

function fetchquire(path) {
  return new Promise((y, n) => y(fetch(path)))
    .then((r) => r.arrayBuffer())
    .catch((e) =>
      new Promise((y, n) => {
        require("fs").readFile(require("path").join(__dirname, path), (e, d) => {
          if (e) n(e);
          else y(d);
        });
      })
        .catch((e) => new Promise((y, n) => {Deno.readFile(path).then(x=>y(x),x=>n(x));}))
        .catch((e) => new Promise((y, n) => y(read(path, "binary"))))
        .catch((e) => new Error("Fetchquire failed"))
    );
}

// The following JavaScript code originates from:
// https://github.com/jashkenas/underscore/blob/master/underscore.js
// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var __root =
((typeof self === 'object') && (self.self === self) && self) ||
((typeof global === 'object') && (global.global === global) && global) ||
this;

if (__root.fetchquire === undefined)
	__root.fetchquire = fetchquire;

})();
