import { lazy } from "react";

export default function lazyLoad(path, namedExport) {
  return lazy(() => {
    // const promise = wait(1000).then(() => import(path));
    const promise = import(path);
    if (namedExport === null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}

function wait(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  });
}

