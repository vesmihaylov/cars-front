import { Link } from "react-router-dom";

function Navigation() {
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
            <li className="nav-item">
              <Link className="nav-link" to={`/`}>
                Начало
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/deals/favourite`}>
                Любими
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Профил
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown">
                <li>
                  <Link className="nav-link" to={`/deals/publish`}>
                    Публикувай Обява
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={`/my-deals`}>
                    Моите Обяви
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={`/settings`}>
                    Настройки
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
