import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PostIdPage from "../pages/PostIdPage";
import PostsPage from "../pages/PostsPage";

export const privateRoutes = [
  { path: "/about", component: AboutPage },
  { path: "/posts", component: PostsPage },
  { path: "/posts/:id", component: PostIdPage },
  { path: "/*", component: NotFoundPage },
];

export const publicRoutes = [{ path: "/login", component: LoginPage }];
