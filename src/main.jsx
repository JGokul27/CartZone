import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SingleProduct from "./pages/home/SingleProduct";
import Home from "./pages/home/Home";
import Jewel from "./pages/jewel/jewel";
import JewelProduct from "./pages/jewel/JewelProduct";
import Clothes from "./pages/clothes/Clothes";
import ClothesProduct from "./pages/clothes/ClothesProduct";

const router = createBrowserRouter(
  // {
  //   path: "/",
  //   element: <App />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/shop/:id",
  //       element: <SingleProduct />,
  //     },
  //   ],
  // },
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/shop/:id" element={<SingleProduct />} />
      <Route path="/jewel&access" element={<Jewel />} />
      <Route path="/jewel/:id" element={<JewelProduct />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/clothes/:id" element={<ClothesProduct />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
