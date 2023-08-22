import { lazy } from "react";

export default function lazyLoad(path, namedExport) {
  // console.log(path);
  // console.log(namedExport);
  return lazy(() => {
    // const promise = wait(1000).then(() => import(path));

    // const promise = import(path);
    
    // ACTION : For ignore warning using vite
    /** DESC : More Details : https://github.com/vitejs/vite/pull/7533 */

    const promise = import(/* @vite-ignore */ path);
    if (namedExport === null || namedExport === undefined) {
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
