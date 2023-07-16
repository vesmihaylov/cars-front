import Navigation from "./Navigation.jsx";
import deals from "../../fake_data/deals.json";
import { Link } from "react-router-dom";

function MyDeals() {
  let myDeals = deals
    .filter((deal) => deal.price >= 10000)
    .map((filteredDeal) => {
      return (
        <li
          key={filteredDeal.id}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <Link
            className="list-group-item list-group-item-action border-0"
            to={`/deals/${filteredDeal.id}`}
          >
            {filteredDeal.name}
          </Link>
          <span className="badge bg-danger rounded-pill">
            {filteredDeal.price} лв.
          </span>
        </li>
      );
    });

  return (
    <div className="container mb-5">
      <h4 className="font-weight-bold py-3 mb-4">Моите обяви</h4>

      <div className="card overflow-hidden">
        <div className="row">
          <Navigation />
          <div className="col-9">
            <ul className="list-group">{myDeals}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDeals;
