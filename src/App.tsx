import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const router = createBrowserRouter(createRoutesFromElements(<AppRouter />));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
