import { formatCreatedAtDate, formatFuelType } from "../../util/helpers.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDeal } from "../../api.js";
import {
  CalendarDateFill,
  FuelPump,
  PinMapFill,
  TelephoneFill,
} from "react-bootstrap-icons";

function View() {
  const { id } = useParams();
  const [deal, setDeal] = useState({});
  const featuresExist = deal.dealFeatures && deal.dealFeatures.length > 0;
  let securityFeatures = [];
  let comfortFeatures = [];
  let otherFeatures = [];

  useEffect(() => {
    getDeal(id)
      .then((response) => {
        setDeal(response.data);
      })
      .catch((error) =>
        console.log(
          `Something went wrong, please send this to an administrator: "${error.message}"`
        )
      );
  }, []);

  if (featuresExist) {
    deal.dealFeatures.map((feature, i) => {
      switch (feature.type) {
        case "SECURITY":
          securityFeatures.push(feature);
          break;
        case "COMFORT":
          comfortFeatures.push(feature);
          break;
        case "OTHER":
          otherFeatures.push(feature);
          break;
      }
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-xs-12 col-sm-8">
          <h2>
            {deal.title} - {deal.year}
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
            <img src="https://picsum.photos/id/237/180/100" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="col ps-4 d-flex flex-column position-static">
            <div className="mb-2">
              <TelephoneFill /> +359 876 373 261
            </div>
            <div className="mb-2 text-body-secondary">
              <CalendarDateFill /> Публикувана на{" "}
              {formatCreatedAtDate(deal.createdAt)}
            </div>
            <div className="mb-2">
              <PinMapFill /> {deal.city}
            </div>
            <div className="mb-2">
              <FuelPump /> {formatFuelType(deal.fuelType)}
            </div>
            <hr />
          </div>

          {securityFeatures.length > 0 && (
            <div className="ps-4 pb-2 justify-content-start text-start w-100">
              <span className="mb-2">Сигурност</span>
              <br />
              {securityFeatures.map((feature, i) => (
                <span
                  key={i}
                  className="badge rounded-pill bg-secondary text-white me-1"
                >
                  {feature.name}
                </span>
              ))}
            </div>
          )}

          {comfortFeatures.length > 0 && (
            <div className="ps-4 pb-2 justify-content-start text-start w-100">
              <span className="mb-2">Комфорт</span>
              <br />
              {comfortFeatures.map((feature, i) => (
                <span
                  key={i}
                  className="badge rounded-pill bg-success text-light me-1"
                >
                  {feature.name}
                </span>
              ))}
            </div>
          )}

          {otherFeatures.length > 0 && (
            <div className="ps-4 pb-2 justify-content-start text-start w-100">
              <span className="mb-2">Други</span>
              <br />
              {otherFeatures.map((feature, i) => (
                <span
                  key={i}
                  className="badge rounded-pill bg-info text-white me-1"
                >
                  {feature.name}
                </span>
              ))}
            </div>
          )}
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
