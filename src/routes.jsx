import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import View from "./components/Deal/View.jsx";
import FavouriteDeals from "./components/Profile/FavouriteDeals.jsx";
import Error from "./components/Error.jsx";
import List from "./components/Deal/List.jsx";
import Settings from "./components/Profile/Settings.jsx";
import ChangePassword from "./components/Profile/ChangePassword.jsx";
import MyDeals from "./components/Profile/MyDeals.jsx";
import Publish from "./components/Deal/Publish.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/deals/:id",
        element: <View />,
      },
      {
        path: "/deals/favourite",
        element: <FavouriteDeals />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/my-deals",
        element: <MyDeals />,
      },
      {
        path: "/deals/publish",
        element: <Publish />,
      },
    ],
  },
]);

export { router };
