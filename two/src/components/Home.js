import React, { Suspense, lazy, useState, useTransition } from "react";
import lazyLoad from "../custom/lazyLoad";
// import { sum } from "../helper/sum";
import { AdminData } from "./AdminData";

// const AdminData = lazy(() =>
//   import("./AdminData").then((module) => {
//     return { default: module.AdminData };
//   })
// );

// ACTION : using custom lazyload function
// NOTE : Here, path must be relative to lazyLoad.js
// const AdminData = lazyLoad("../components/AdminData", "AdminData");

// ACTION : lazyload with fake delay
// const AdminData = lazy(() =>
//   wait(5000).then(() =>
//     import("./AdminData").then((module) => {
//       return { default: module.AdminData };
//     })
//   )
// );

function Home() {
  console.count("Home");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1>Home</h1>
      {/* {console.log(__dirname)} */}

      {/* PROBLEM : sum.js file already downloaded before user click on this button */}
      {/* <button onClick={() => alert(sum(2, 2))}>Add 2 + 2</button> */}

      {/* SOLUTION : here sum.js file downloaded when user click on this button */}
      <button
        onClick={() => {
          import("../helper/sum").then((module) => {
            alert(module.sum(2, 2));
          });
        }}
      >
        Add 2 + 2
      </button>

      <br />
      <br />
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>
      {/* LEARN : If we don't want to show fallback and display data when it downloaded until show old data */}
      {/* <button
        onClick={() => {
          startTransition(() => {
            setIsAdmin((prev) => !prev);
          });
        }}
      >
        Toggle Admin
      </button>
      {isPending && <h4> LOADING...</h4>} */}

      {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
      {/* DESC : When we visit '/' route AdminData component downloaded even if
                 isAdmin state false */}
      {/* <Suspense fallback={<h3>Loading.....</h3>}>
        {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
      </Suspense> */}
    </>
  );
}

export default Home;

function wait(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, wait);
  });
}
