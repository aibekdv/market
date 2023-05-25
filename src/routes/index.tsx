import { HomePage } from "@/pages";
import { Route, Routes } from "react-router-dom";

const routes = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element:<h1>Hello</h1>,
    path: "*",
  },
];

export default () => (
  <Routes>
    {routes.map(({ element, path }, key) => (
      <Route element={element} path={path} key={key} />
    ))}
  </Routes>
);
