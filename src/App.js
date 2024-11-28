import Wrapper from "./Layout/Wrapper";
import "./Components.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import AllProducts from "./Pages/AllProducts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { check_token } from "./Redux/AuthSlice";
import CreateProduct from "./Pages/CreateProduct";
import EditProduct from "./Pages/EditProduct";
import Profile from "./Pages/Profile";

function App() {
  const queryclient = new QueryClient();
  const dispatch = useDispatch();

  function PrivateRoute({ children }) {
    let token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined && token !== "" ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }
  const public_route = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/about",
      component: <AboutUs />,
    },
    {
      path: "/contact",
      component: <Contact />,
    },
    {
      path: "/login",
      component: <Login />,
    },
  ];

  const private_route = [
    {
      path: "/profile",
      component: <Profile />,
    },
    {
      path: "/addproduct",
      component: <CreateProduct />,
    },
    {
      path: "/our_products",
      component: <AllProducts />,
    },
    {
      path: "/editproduct/:id",
      component: <EditProduct />,
    },
  ];

  useEffect(() => {
    dispatch(check_token());
  }, []);
  return (
    <>
      <ToastContainer />

      <QueryClientProvider client={queryclient}>
        <Router>
          <Wrapper>
            <Routes>
              {public_route.map((route) => (
                <Route path={route.path} element={route.component} />
              ))}
              {private_route.map((route) => (
                <Route
                  path={route.path}
                  element={<PrivateRoute>{route.component}</PrivateRoute>}
                />
              ))}
            </Routes>
          </Wrapper>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
