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
