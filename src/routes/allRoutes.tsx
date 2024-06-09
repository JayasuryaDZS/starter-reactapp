import Home from "../pages/home";
import Contact from "../pages/contact";
import Login from "../pages/login";

const authProtectedRoutes = [
    { path: "/home", component: <Home /> },
    { path: "/contact", component: <Contact /> }
]

const publicRoutes = [
    { path: "/login", component: <Login /> }
]

export { authProtectedRoutes, publicRoutes }