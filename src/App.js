import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "../utilities/UserContext";
import { Provider } from "react-redux";
import appStore from "../utilities/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [ userName, setUserName ] = useState(null);

  useEffect(() => {
    const data = {
      name: 'Kavita Tripathi'
    };
    setUserName(data.name);
    console.log(userName);
  }, []);

  return (
      <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <HeaderComponent />
      <Outlet />
      </UserContext.Provider>
      </Provider> 
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Grocery />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
