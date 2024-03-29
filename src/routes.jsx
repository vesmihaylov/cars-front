import { Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import View from "./components/Deal/View.jsx";
import FavouriteDeals from "./components/Profile/FavouriteDeals.jsx";
import Error from "./components/Error.jsx";
import List from "./components/Deal/List.jsx";
import Settings from "./components/Profile/Settings.jsx";
import Register from "./components/Profile/Register.jsx";
import Login from "./components/Profile/Login.jsx";
import ChangePassword from "./components/Profile/ChangePassword.jsx";
import MyDeals from "./components/Profile/MyDeals.jsx";
import Publish from "./components/Deal/Publish.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<List />} />
        <Route path="deals/:id" element={<View />} />
        <Route
          path="deals/favourite"
          element={
            <ProtectedRoute>
              <FavouriteDeals />
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="my-deals"
          element={
            <ProtectedRoute>
              <MyDeals />
            </ProtectedRoute>
          }
        />
        <Route
          path="deals/publish"
          element={
            <ProtectedRoute>
              <Publish />
            </ProtectedRoute>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export { RouterConfig };
