import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Home from "./page/Home";
import type { NavLinkType } from "./type/type";
import About from "./page/About";
import Blog from "./page/Blog";
import Service from "./page/Service";
import Hook from "./page/Hooks";
import PageNotFound from "./page/404";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import ServiceDetail from "./page/ServiceDetail";
import AuthLayout from "./components/AuthLayout";
import Register from "./page/Register";
import ServiceEdit from "./page/ServiceEdit";
import Post from "./page/Posts";
import PostDetails from "./page/Posts/$id";
import CreatePost from "./page/Posts/new";
import EditPost from "./page/Posts/$id.edit";
import HookDetails from "./page/Hooks/$slug";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";


export default function App() {

  const navLinks: NavLinkType[] = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/about", text: "About" },
    { id: 3, href: "/service", text: "Service" },
    { id: 4, href: "/blog", text: "Blog" },
    { id: 5, href: "/hook", text: "Hook" },
    { id: 6, href: "/auth", text: "Auth" },
    { id: 6, href: "/login", text: "Login" },
    { id: 7, href: "/register", text: "Register" },
    { id: 7, href: "/posts", text: "Post" },
    { id:8,  href:"/movie", text:"Movie"},
  ];


  return (
    <>
      <Routes>
        <Route path="/" element={<Nav navLinks={navLinks} />}>   //This is navbar


          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          {/* <Route path="/service" element={<Service />} /> */}
          {/* <Route path="/service/:serviceId" element={<ServiceDetail />} /> */}
          <Route path="hook" element={<Hook />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />

          {/* <Route path="/auth" element={<AuthLayout />}> */}
            <Route path="login" element={<Login />} />
            {/* <Route index element={<Login />} /> */}
            <Route path="register" element={<Register />} />
          {/* </Route> */}

          <Route path="/service" element={<Service />}>
            <Route path=":serviceId" element={<ServiceDetail />} />
            <Route path=":serviceId/edit" element={<ServiceEdit />} />
          </Route>

         
          <Route path="posts" element={<Post />}>
            <Route path="new" element={<CreatePost />} />
            <Route path=":id" element={<PostDetails />} />
            <Route path=":id/edit" element={<EditPost />} />
          </Route>

          <Route path="hook" element={<Hook />}>
            <Route path=":slug" element={<HookDetails />} />
          </Route>


        <Route path="movie" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />


        </Route>
      </Routes>

      {/* <Nav navLinks={navLinks} /> */}
    </>
  );
}
