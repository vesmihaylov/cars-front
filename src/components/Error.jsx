import { Link } from "react-router-dom";
import { CarFrontFill } from "react-bootstrap-icons";

function Error() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">
          404 <CarFrontFill />
        </h1>
        <p className="fs-3">
          <span className="text-danger">Опа!</span> Страницата не беше намерена.
        </p>
        <p className="lead">Това, което търсите не беше намерено.</p>
        <Link className="btn btn-dark" to={`/`}>
          Начало
        </Link>
      </div>
    </div>
  );
}

export default Error;
