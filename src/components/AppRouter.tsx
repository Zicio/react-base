import { Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import Layout from "./layout/Layout";

const AppRouter = () => {
  const isAuth = true;
  return (
    <>
      <Route path="/" element={<Layout />}>
        {isAuth
          ? privateRoutes.map(({ path, component: Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })
          : publicRoutes.map(({ path, component: Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })}
      </Route>
    </>
  );
};
export default AppRouter;
