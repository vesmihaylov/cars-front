import deals from "../../fake_data/deals.json";
import { useParams } from "react-router-dom";
import {
  CalendarDateFill,
  PinMapFill,
  TelephoneFill,
} from "react-bootstrap-icons";

function View() {
  const { id } = useParams();
  let deal = deals.find((deal) => deal.id === parseInt(id));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-xs-12 col-sm-8">
          <h2>
            {deal.name} - {deal.year}
          </h2>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-12">
          <button
            type="button"
            className="btn btn-outline-success rounded-pill"
          >
            <h3 className="mt-1 mb-1">{deal.price} лв.</h3>
          </button>
        </div>
      </div>
      <div className="row mb-2 mt-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <img src={deal.thumbnailPath} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="col ps-4 d-flex flex-column position-static">
            <div className="mb-2">
              <TelephoneFill /> +359 876 373 261
            </div>
            <div className="mb-2 text-body-secondary">
              <CalendarDateFill /> Публикувана на {deal.dateAdded}
            </div>
            <div className="mb-2">
              <PinMapFill /> {deal.city}
            </div>
            <hr />
          </div>
          <div className="ps-4 pb-2 justify-content-start text-start w-100">
            <span className="mb-2">Сигурност</span>
            <br />
            {deal["security-extras"].map((security, i) => {
              return (
                <span
                  key={i}
                  className="badge rounded-pill bg-secondary text-white me-1"
                >
                  {security}
                </span>
              );
            })}
          </div>
          <div className="ps-4 pb-2 justify-content-start text-start w-100">
            <span className="mb-2">Комфорт</span>
            <br />
            {deal["comfort-extras"].map((comfort, i) => {
              return (
                <span
                  key={i}
                  className="badge rounded-pill bg-success text-light me-1"
                >
                  {comfort}
                </span>
              );
            })}
          </div>
          <div className="ps-4 pb-2 justify-content-start text-start w-100">
            <span className="mb-2">Други</span>
            <br />
            {deal["other-extras"].map((other, i) => {
              return (
                <span
                  key={i}
                  className="badge rounded-pill bg-info text-white me-1"
                >
                  {other}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="p-2 mb-3 bg-body-tertiary rounded">
          <h2>Коментар от собственик</h2>
          <p className="fst-italic">{deal.description}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
