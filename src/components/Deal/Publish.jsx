import {
  getBrands,
  getCities,
  getModels,
  getFeatures,
  publishDeal,
} from "../../api.js";
import conditionTypes from "../../static_data/condition_types.json";
import fuelTypes from "../../static_data/fuel_types.json";
import transmissionTypes from "../../static_data/transmission_types.json";
import wheelTypes from "../../static_data/wheel_types.json";
import coupeTypes from "../../static_data/coupe_types.json";
import { useEffect, useState } from "react";

function Publish() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [cities, setCities] = useState([]);
  const [features, setFeatures] = useState([]);
  const [dealFeatures, setDealFeatures] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [form, setForm] = useState({
    brandId: "",
    modelId: "",
    additionalTitle: "",
    coupeType: "SEDAN",
    cityId: "",
    price: 0,
    conditionType: "USED",
    wheelType: "LEFT",
    transmissionType: "MANUAL",
    fuelType: "PETROL",
    horsePower: 0,
    year: new Date().getFullYear(),
    features: dealFeatures,
    description: "",
    mileage: 0,
  });

  const validateForm = () => {
    const errors = {};

    if (!form.brandId) {
      errors.brandId = "Моля, изберете марка.";
    }

    if (!form.modelId) {
      errors.modelId = "Моля, изберете модел.";
    }

    if (!form.coupeType) {
      errors.coupeType = "Моля, изберете вид купе.";
    }

    if (!form.cityId) {
      errors.cityId = "Моля, изберете град.";
    }

    if (!form.price || form.price === 0) {
      errors.price = "Моля, въведете валидна цена.";
    }

    if (!form.conditionType) {
      errors.conditionType = "Моля, изберете състояние.";
    }

      if (!form.wheelType) {
          errors.wheelType = "Моля, изберете разположение на волан.";
      }

      if (!form.transmissionType) {
          errors.transmissionType = "Моля, изберете вид скоростна кутия.";
      }

      if (!form.fuelType) {
          errors.fuelType = "Моля, изберете вид двигател.";
      }

      if (!form.horsePower || form.horsePower === 0 || form.horsePower < 5) {
          errors.horsePower = "Моля, въведете валидна мощност на двигател.";
      }

      if (!form.mileage) {
          errors.mileage = "Моля, въведете пробег.";
      }

      if (!form.year) {
          errors.year = "Моля, въведете валидна година.";
      }

      if (!form.description) {
          errors.description = "Моля, въведете допълнителна информация.";
      }

    return errors;
  };

  useEffect(() => {
    getBrands()
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) =>
        console.log(
          `Something went wrong, please send this to an administrator: "${error.message}"`
        )
      );

    getCities()
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) =>
        console.log(
          `Something went wrong, please send this to an administrator: "${error.message}"`
        )
      );

    getFeatures()
      .then((response) => {
        setFeatures(response.data);
      })
      .catch((error) =>
        console.log(
          `Something went wrong, please send this to an administrator: "${error.message}"`
        )
      );
  }, []);

  function onBrandChange(event) {
    populateModelDropdown(event.target.value);
  }

  function populateModelDropdown(brandId) {
    getModels(brandId)
      .then((response) => {
        setModels(response.data);
      })
      .catch((error) =>
        console.log(
          `Something went wrong, please send this to an administrator: "${error.message}"`
        )
      );
  }

  const handleChange = (event) => {
    if (event.target.id === 'brandId') {
      onBrandChange(event);
    }

    setForm({
      ...form,
      [event.target.id]: (event.target.type === 'number') ? parseInt(event.target.value) || "" : event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      publishDeal(form)
          .then((response) => {
          })
          .catch((error) =>
              console.log(
                  `Something went wrong, please send this to an administrator: "${error.message}"`
              )
          );
    }
  };

  const handleFeatureCheck = (e) => {
    let updatedList = [...dealFeatures];
    e.target.checked
      ? (updatedList = [...dealFeatures, e.target.value])
      : updatedList.splice(dealFeatures.indexOf(e.target.value), 1);
    setDealFeatures(updatedList);
  };

  return (
    <div className="container">
      <main className="mb-5">
        <div className="pb-4 text-center">
          <h2>Нова обява</h2>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-12">
            <h4 className="mb-3">Основна информация</h4>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="brandId" className="form-label">
                    Марка
                  </label>
                  <select
                    onChange={handleChange}
                    value={form.brandId}
                    className={`form-select ${formErrors.brandId ? "is-invalid" : ""}`}
                    id="brandId"
                    required=""
                  >
                    {brands.map((brand) => {
                      return (
                        <option key={brand.id} value={brand.id}>
                          {brand.name}
                        </option>
                      );
                    })}
                  </select>
                  {formErrors.brandId && (
                      <div className="invalid-feedback">{formErrors.brandId}</div>
                  )}
                </div>

                <div className="col-sm-6">
                  <label htmlFor="modelId" className="form-label">
                    Модел
                  </label>
                  <select
                    onChange={handleChange}
                    value={form.modelId}
                    className={`form-select ${formErrors.modelId ? "is-invalid" : ""}`}
                    id="modelId"
                    required=""
                  >
                    {models.map((model) => {
                      return (
                        <option key={model.id} value={model.id}>
                          {model.name}
                        </option>
                      );
                    })}
                  </select>
                  {formErrors.modelId && (
                      <div className="invalid-feedback">{formErrors.modelId}</div>
                  )}
                </div>

                <div className="col-sm-6">
                  <label htmlFor="additionalTitle" className="form-label">
                    Допълнително описание (<i>...спорт пакет, фейслифт...</i>)
                  </label>
                  <div className="input-group has-validation">
                    <input
                      onChange={handleChange}
                      value={form.additionalTitle}
                      type="text"
                      className="form-control"
                      id="additionalTitle"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="coupeType" className="form-label">
                    Вид Купе
                  </label>
                  <select
                    onChange={handleChange}
                    value={form.coupeType}
                    className={`form-select ${formErrors.coupeType ? "is-invalid" : ""}`}
                    id="coupeType"
                    required=""
                  >
                    {Object.entries(coupeTypes).map(([key, coupeType]) => {
                      return (
                        <option key={key} value={coupeType.key}>
                          {coupeType.value}
                        </option>
                      );
                    })}
                  </select>
                    {formErrors.coupeType && (
                        <div className="invalid-feedback">{formErrors.coupeType}</div>
                    )}
                </div>

                <div className="col-sm-6">
                  <label htmlFor="cityId" className="form-label">
                    Град
                  </label>
                  <select
                    onChange={handleChange}
                    value={form.cityId}
                    className={`form-select ${formErrors.cityId ? "is-invalid" : ""}`}
                    id="cityId"
                    required=""
                  >
                    {cities.map((city) => {
                      return (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      );
                    })}
                  </select>
                  {formErrors.cityId && (
                      <div className="invalid-feedback">{formErrors.cityId}</div>
                  )}
                </div>

                <div className="col-sm-6">
                  <label htmlFor="price" className="form-label">
                    Цена
                  </label>
                  <div className="input-group has-validation">
                    <input
                      onChange={handleChange}
                      value={form.price}
                      type="number"
                      className={`form-control ${formErrors.price ? "is-invalid" : ""}`}
                      id="price"
                    />
                    {formErrors.price && (
                        <div className="invalid-feedback">{formErrors.price}</div>
                    )}
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Допълнителна информация</h4>

              <div className="row g-3">
                <div className="col-sm-3">
                  <h5 className="mb-3">Състояние</h5>
                  {Object.entries(conditionTypes).map(
                    ([key, conditionType]) => {
                      return (
                        <div key={key} className="form-check">
                          <input
                            onChange={handleChange}
                            defaultChecked={conditionType.key === "USED"}
                            name="condition"
                            id="conditionType"
                            value={conditionType.key}
                            type="radio"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor={conditionType.id}
                          >
                            {conditionType.value}
                          </label>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="col-sm-3">
                  <h5 className="mb-3">Разположение на волан</h5>
                  {Object.entries(wheelTypes).map(([key, wheelType]) => {
                    return (
                      <div key={key} className="form-check">
                        <input
                          onChange={handleChange}
                          defaultChecked={wheelType.key === "LEFT"}
                          name="wheelType"
                          id="wheelType"
                          value={wheelType.key}
                          type="radio"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor={wheelType.id}
                        >
                          {wheelType.value}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="col-sm-3">
                  <h5 className="mb-3">Скорости</h5>
                  {Object.entries(transmissionTypes).map(
                    ([key, transmissionType]) => {
                      return (
                        <div key={key} className="form-check">
                          <input
                            onChange={handleChange}
                            defaultChecked={transmissionType.key === "MANUAL"}
                            name="transmissionType"
                            id="transmissionType"
                            value={transmissionType.key}
                            type="radio"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor={transmissionType.id}
                          >
                            {transmissionType.value}
                          </label>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="col-sm-3">
                  <h5 className="mb-3">Тип двигател</h5>
                  {Object.entries(fuelTypes).map(([key, fuelType]) => {
                    return (
                      <div key={key} className="form-check">
                        <input
                          onChange={handleChange}
                          defaultChecked={fuelType.key === "PETROL"}
                          name="fuelType"
                          id="fuelType"
                          value={fuelType.key}
                          type="radio"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="fuelType"
                        >
                          {fuelType.value}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <hr className="my-4" />

              <div className="row g-4">
                <div className="col-sm-3">
                  <label htmlFor="horsePower" className="form-label">
                    Мощност (к.с.)
                  </label>
                  <div className="input-group has-validation">
                    <input
                      onChange={handleChange}
                      value={form.horsePower}
                      type="number"
                      className={`form-control ${formErrors.horsePower ? "is-invalid" : ""}`}
                      id="horsePower"
                    />
                      {formErrors.horsePower && (
                          <div className="invalid-feedback">{formErrors.horsePower}</div>
                      )}
                  </div>
                </div>
                <div className="col-sm-4">
                  <label htmlFor="mileage" className="form-label">
                    Пробег (км.)
                  </label>
                  <div className="input-group has-validation">
                    <input
                      onChange={handleChange}
                      value={form.mileage}
                      type="number"
                      className={`form-control ${formErrors.mileage ? "is-invalid" : ""}`}
                      id="mileage"
                    />
                      {formErrors.mileage && (
                          <div className="invalid-feedback">{formErrors.mileage}</div>
                      )}
                  </div>
                </div>
                <div className="col-sm-4">
                  <label htmlFor="year" className="form-label">
                    Година на производство
                  </label>
                  <div className="input-group has-validation">
                    <input
                      onChange={handleChange}
                      value={form.year}
                      min="1886"
                      max={new Date().getFullYear() + 1}
                      type="number"
                      className={`form-control ${formErrors.year ? "is-invalid" : ""}`}
                      id="year"
                    />
                      {formErrors.year && (
                          <div className="invalid-feedback">{formErrors.year}</div>
                      )}
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Екстри</h4>
              <div className="row">
                <div className="col-sm-4">
                  <h6 className="mb-3">Сигурност</h6>
                  {features
                    .filter((feature) => feature.type === "SECURITY")
                    .map((feature) => {
                      return (
                        <div key={feature.id} className="form-check">
                          <input
                            onClick={handleFeatureCheck}
                            value={feature.id}
                            name="securityFeatures"
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
                          </label>
                        </div>
                      );
                    })}
                </div>

                <div className="col-sm-4">
                  <h6 className="mb-3 mt-3">Комфорт</h6>
                  {features
                    .filter((feature) => feature.type === "COMFORT")
                    .map((feature) => {
                      return (
                        <div key={feature.id} className="form-check">
                          <input
                            onChange={handleFeatureCheck}
                            value={feature.id}
                            name="comfortFeatures"
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
                          </label>
                        </div>
                      );
                    })}
                </div>

                <div className="col-sm-4">
                  <h6 className="mb-3 mt-3">Други</h6>
                  {features
                    .filter((feature) => feature.type === "OTHER")
                    .map((feature) => {
                      return (
                        <div key={feature.id} className="form-check">
                          <input
                            onChange={handleFeatureCheck}
                            value={feature.id}
                            name="otherFeatures"
                            type="checkbox"
                            className="form-check-input"
                            id={feature.id}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={feature.id}
                          >
                            {feature.name}
                          </label>
                        </div>
                      );
                    })}
                </div>
              </div>

              <hr className="my-4" />
              <div className="row g-3">
                <div className="col-sm-12">
                  <label htmlFor="description" className="form-label">
                    Допълнителна информация
                  </label>
                  <div className="input-group has-validation">
                    <textarea
                      onChange={handleChange}
                      value={form.description}
                      className={`form-control ${formErrors.description ? "is-invalid" : ""}`}
                      id="description"
                      rows="6"
                    />
                      {formErrors.description && (
                          <div className="invalid-feedback">{formErrors.description}</div>
                      )}
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-success btn-lg" type="submit">
                Публикувай
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Publish;
