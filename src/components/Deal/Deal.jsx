import { Link } from "react-router-dom";
import { formatCreatedAtDate, formatFuelType } from "../../util/helpers.js";

function Deal({ deal }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-4 col-6 mb-3">
      <div className="card mb-2" style={{ width: "18rem" }}>
        <div>
          <img
            src="https://picsum.photos/id/237/180/100"
            className="card-img-top"
            alt={deal.title}
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {deal.price} лв.
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{deal.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {formatFuelType(deal.fuelType)}, {deal.mileage} км.
          </h6>
          <h6 className="card-subtitle mt-2 text-muted">{deal.city.name}</h6>
        </div>
        <div className="card-footer text-muted small text-center">
          {formatCreatedAtDate(deal.createdAt)}
          <Link className="btn btn-dark mt-2" to={`/deals/${deal.id}`}>
            Виж повече
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Deal;
