import securityExtras from "../../fake-data/security-extras.json";
import comfortExtras from "../../fake-data/comfort-extras.json";
import otherExtras from "../../fake-data/other-extras.json";
import { getBrands, getCities, getModels, getFeatures } from "../../api.js";
import { useEffect, useState } from "react";

function Publish() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [cities, setCities] = useState([]);
  const [features, setFeatures] = useState([]);
  const [currentBrand, setCurrentBrand] = useState(null);

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
  }, []);

  useEffect(() => {
    getCities()
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) =>
        console.log(
          `Something went wrong, please send this to an administrator: "${error.message}"`
        )
      );
  }, []);

  useEffect(() => {
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
    setCurrentBrand(event.target.value);
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

  return (
    <div className="container">
      <main className="mb-5">
        <div className="pb-4 text-center">
          <h2>Нова обява</h2>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-12">
            <h4 className="mb-3">Основна информация</h4>
            <form className="needs-validation" noValidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="brand" className="form-label">
                    Марка
                  </label>
                  <select
                    onChange={onBrandChange}
                    className="form-select"
                    id="brand"
                    required=""
                  >
                    <option value="all">Всички</option>
                    {brands.map((brand) => {
                      return (
                        <option key={brand.id} value={brand.id}>
                          {brand.name}
                        </option>
                      );
                    })}
                  </select>
                  <div className="invalid-feedback">
                    Моля, изберете марка автомобил.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Модел
                  </label>
                  <select className="form-select" id="brand" required="">
                    <option value="all">Всички</option>
                    {models.map((model) => {
                      return (
                        <option key={model.id} value={model.id}>
                          {model.name}
                        </option>
                      );
                    })}
                  </select>
                  <div className="invalid-feedback">
                    Моля, изберете модел на дадената марка.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="username" className="form-label">
                    Допълнително описание (<i>...спорт пакет, фейслифт...</i>)
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      id="extra-title"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="coupe_type" className="form-label">
                    Вид Купе
                  </label>
                  <select className="form-select" id="coupe_type" required="">
                    <option value="">Всички</option>
                    <option>Седан</option>
                    <option>Хечбек</option>
                    <option>Комби</option>
                    <option>Купе</option>
                    <option>Кабрио</option>
                    <option>Джип</option>
                    <option>Пикап</option>
                    <option>Ван</option>
                    <option>Катафалка</option>
                  </select>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="city" className="form-label">
                    Град
                  </label>
                  <select className="form-select" id="city" required="">
                    <option value="all">Всички</option>
                    {cities.map((city) => {
                      return (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      );
                    })}
                  </select>
                  <div className="invalid-feedback">Моля, изберете град.</div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="price" className="form-label">
                    Цена
                  </label>
                  <div className="input-group has-validation">
                    <input type="number" className="form-control" id="price" />
                  </div>
                  <div className="invalid-feedback">Моля, въведете цена.</div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Допълнителна информация</h4>

              <div className="row g-3">
                <div className="col-sm-2">
                  <h5 className="mb-3">Състояние</h5>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="all"
                      checked
                    />
                    <label className="form-check-label" htmlFor="all">
                      Всички
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="new"
                    />
                    <label className="form-check-label" htmlFor="new">
                      Ново
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="used"
                    />
                    <label className="form-check-label" htmlFor="used">
                      Употребявано
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="damaged"
                    />
                    <label className="form-check-label" htmlFor="damaged">
                      Ударено
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="broken"
                    />
                    <label className="form-check-label" htmlFor="broken">
                      Повредено
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="parts"
                    />
                    <label className="form-check-label" htmlFor="parts">
                      За части
                    </label>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h5 className="mb-3">Разположение на волан</h5>
                  <div className="form-check">
                    <input
                      id="left_wheel"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      checked
                    />
                    <label className="form-check-label" htmlFor="left_wheel">
                      Ляво
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="right_wheel"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="right_wheel">
                      Дясно
                    </label>
                  </div>
                </div>
                <div className="col-sm-2">
                  <h5 className="mb-3">Скорости</h5>
                  <div className="form-check">
                    <input
                      id="manual"
                      name="manual"
                      type="radio"
                      className="form-check-input"
                      checked
                    />
                    <label className="form-check-label" htmlFor="manual">
                      Ръчни
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="automatic"
                      name="automatic"
                      type="radio"
                      className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="automatic">
                      Автоматични
                    </label>
                  </div>
                </div>
                <div className="col-sm-2">
                  <label htmlFor="power" className="form-label">
                    Мощност (к.с.)
                  </label>
                  <div className="input-group has-validation">
                    <input type="number" className="form-control" id="power" />
                  </div>
                </div>
                <div className="col-sm-2">
                  <label htmlFor="year" className="form-label">
                    Година на производство
                  </label>
                  <div className="input-group has-validation">
                    <input
                      min="1886"
                      max={new Date().getFullYear() + 1}
                      type="number"
                      className="form-control"
                      id="year"
                    />
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
