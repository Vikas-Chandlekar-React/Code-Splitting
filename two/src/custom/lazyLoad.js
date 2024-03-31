import { lazy } from "react";

export default function lazyLoad(path, namedExport) {
  console.log(path);
  console.log(namedExport);
  const path1 = `${path}`;
  // console.log(path1, typeof path1);
  // const path2 = "../components/Store.js";
  return lazy(() => {
    const promise = import(`${path}`);

    if (namedExport === null || namedExport === undefined) {
      console.log("Default Import");
      console.log(promise);
      return promise;
    } else {
      console.log("Named Import");
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}

function wait(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  });
}
