import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
