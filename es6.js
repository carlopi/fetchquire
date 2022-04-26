function fetchquire(path) {
  return new Promise((y, n) => y(fetch(path)))
    .then((r) => r.arrayBuffer())
    .catch((e) =>
      new Promise((y, n) => {
        import("fs").then(r=>r.readFile(new URL(path, import.meta.url), (e, d) => {
          if (e) n(e);
          else y(d);
        }));
      })
        .catch((e) => new Error("Fetchquire failed"))
    );
}

export default fetchquire;
