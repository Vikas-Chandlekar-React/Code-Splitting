import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Store from "./components/Store";
// import { About } from "./components/About";
import NavWrapper from "./components/NavWrapper";
import lazyLoad from "./custom/lazyLoad";

/** DESC : Using lazy load
 *  E.g. If user visit on '/' route then on '/' route related file downloaded
 *       Other routes files not downloaded.
 */

// LEARN : How to default import using lazy load
const Home = lazy(() => import("./components/Home"));
// const Store = lazy(() => import("./components/Store"));
const Store = lazyLoad("../components/Store");
// LEARN : How to named import using lazy load
const About = lazy(() =>
  import("./components/About").then((module) => {
    return {
      default: module.About,
    };
  })
);

// ACTION : lazyload with fake delay
// const Home = lazy(() => wait(2000).then(() => import("./components/Home")));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function wait(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  });
}
