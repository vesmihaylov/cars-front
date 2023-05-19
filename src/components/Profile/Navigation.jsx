import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="col-md-3 pt-0">
      <div className="list-group list-group-flush account-settings-links">
        <a
          className="list-group-item list-group-item-action"
          data-toggle="list"
        >
          <Link className="nav-link" to={`/settings`}>
            Настройки
          </Link>
        </a>
        <a
          className="list-group-item list-group-item-action"
          data-toggle="list"
        >
          <Link className="nav-link" to={`/change-password`}>
            Смяна на парола
          </Link>
        </a>
        <a
          className="list-group-item list-group-item-action"
          data-toggle="list"
        >
          <Link className="nav-link" to={`/my-deals`}>
            Моите обяви
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
