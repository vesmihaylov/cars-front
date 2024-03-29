import { Link } from "react-router-dom";
import { logout } from "../api.js";
import {
  BoxArrowRight,
  CarFrontFill,
  GearFill,
  HeartFill,
  HouseFill,
  Newspaper,
  PersonCheckFill,
  PersonFillUp,
} from "react-bootstrap-icons";

function Navigation() {
  const isAuthenticated = localStorage.getItem("JWT_TOKEN") !== null;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded mb-5">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-2">
              <Link className="nav-link d-flex align-items-center" to={`/`}>
                <HouseFill className="me-1" /> Начало
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to={`/deals/publish`}
                  >
                    <Newspaper className="me-1" /> Публикувай
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to={`/my-deals`}
                  >
                    <CarFrontFill className="me-1" /> Моите Обяви
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to={`/deals/favourite`}
                  >
                    <HeartFill className="me-1" /> Любими
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to={`/settings`}
                  >
                    <GearFill className="me-1" /> Настройки
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to={"#"}
                    onClick={logout}
                  >
                    <BoxArrowRight className="me-1" /> Изход
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to={`/register`}
                  >
                    <PersonCheckFill className="me-1" /> Регистрация
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link
                    className="nav-link d-flex align-items-center"
                    to={`/login`}
                  >
                    <PersonFillUp className="me-1" /> Вход
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
