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
import Popup from "../Popup.jsx";
import Button from "../Element/Button.jsx";
import PublishIcon from "@mui/icons-material/Publish";
import TextField from "../Element/TextField.jsx";
import Dropdown from "../Element/Dropdown.jsx";
import RadioGroup from "../Element/RadioGroup.jsx";

function Publish() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [cities, setCities] = useState([]);
  const [features, setFeatures] = useState([]);
  const [dealFeatures, setDealFeatures] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
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
        if (response.data.length > 0) {
          setForm((prevForm) => ({
            ...prevForm,
            brandId: response.data[0].id,
          }));
          populateModelDropdown(response.data[0].id);
        }
      })
      .catch((error) =>
        console.log(
          `Something went wrong, please send this to an administrator: "${error.message}"`
        )
      );

    getCities()
      .then((response) => {
        setCities(response.data);
        if (response.data.length > 0) {
          setForm((prevForm) => ({
            ...prevForm,
            cityId: response.data[0].id,
          }));
        }
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

  function onBrandChange(brandId) {
    setForm((prevForm) => ({
      ...prevForm,
      brandId,
      modelId: "",
    }));

    populateModelDropdown(brandId);
  }

  function populateModelDropdown(brandId) {
    getModels(brandId)
      .then((response) => {
        setModels(response.data);
        if (response.data.length > 0) {
          setForm((prevForm) => ({
            ...prevForm,
            modelId: response.data[0].id,
          }));
        }
      })
      .catch((error) =>
        console.log(
          `Something went wrong, please send this to an administrator: "${error.message}"`
        )
      );
  }

  const handleChange = (event, newValue = null, fieldType) => {
    const value = event.target.value;
    switch (fieldType) {
      case "conditionType":
      case "wheelType":
      case "transmissionType":
      case "fuelType":
        setForm((prevForm) => ({
          ...prevForm,
          [fieldType]: value,
        }));
        break;
      case "brandId":
        if (newValue) {
          onBrandChange(newValue.id);
          setForm((prevForm) => ({
            ...prevForm,
            brandId: newValue.id,
            modelId: "",
          }));
        }
        break;
      case "modelId":
        if (newValue) {
          setForm((prevForm) => ({
            ...prevForm,
            modelId: newValue.id,
          }));
        }
        break;
      case "coupeType":
        if (newValue) {
          setForm((prevForm) => ({
            ...prevForm,
            coupeType: newValue.id,
          }));
        }
        break;
      case "cityId":
        if (newValue) {
          setForm((prevForm) => ({
            ...prevForm,
            cityId: newValue.id,
          }));
        }
        break;
      default:
        setForm((prevForm) => ({
          ...prevForm,
          [event.target.id]:
            event.target.type === "number"
              ? parseInt(event.target.value) || ""
              : event.target.value,
        }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      publishDeal(form)
        .then((response) => {
          setShowPopup(true);
          window.setTimeout(() => {
            setShowPopup(false);
            window.location.href = "/my-deals";
          }, 3000);
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
        <Popup
          show={showPopup}
          onClose={() => setShowPopup(false)}
          message={"Вашата обява беше публикувана успешно!"}
          title={"Нова обява"}
        />
        <div className="pb-4 text-center">
          <h2>Нова обява</h2>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-12">
            <h4 className="mb-3">Основна информация</h4>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <Dropdown
                    id="brandId"
                    label="Марка"
                    options={brands}
                    getOptionLabel={(option) => option.name || ""}
                    value={
                      brands.find((brand) => brand.id === form.brandId) || null
                    }
                    onChange={(event, newValue) =>
                      handleChange(event, newValue, "brandId")
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        error={!!formErrors.brandId}
                        helperText={formErrors.brandId}
                        required
                      />
                    )}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                  />
                </div>

                <div className="col-sm-6">
                  <Dropdown
                    id="modelId"
                    label="Модел"
                    options={models}
                    value={
                      models.find((model) => model.id === form.modelId) || null
                    }
                    onChange={(event, newValue) =>
                      handleChange(event, newValue, "modelId")
                    }
                    error={formErrors.modelId}
                    helperText={formErrors.modelId}
                  />
                </div>

                <div className="col-sm-6">
                  <div className="input-group has-validation">
                    <TextField
                      fullWidth
                      label={
                        "Допълнително описание (...спорт пакет, фейслифт, нов внос...)"
                      }
                      onChange={handleChange}
                      value={form.additionalTitle}
                      type="text"
                      id="additionalTitle"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <Dropdown
                    id="coupeType"
                    label="Вид Купе"
                    options={coupeTypes}
                    value={
                      coupeTypes.find((type) => type.id === form.coupeType) ||
                      null
                    }
                    onChange={(event, newValue) =>
                      handleChange(event, newValue, "coupeType")
                    }
                    error={formErrors.coupeType}
                    helperText={formErrors.coupeType}
                    getOptionLabel={(option) => option.value || ""}
                  />
                </div>

                <div className="col-sm-6">
                  <Dropdown
                    id="cityId"
                    label="Град"
                    options={cities}
                    value={
                      cities.find((city) => city.id === form.cityId) || null
                    }
                    onChange={(event, newValue) =>
                      handleChange(event, newValue, "cityId")
                    }
                    error={formErrors.cityId}
                    helperText={formErrors.cityId}
                  />
                </div>

                <div className="col-sm-6">
                  <div className="input-group has-validation">
                    <TextField
                      error={formErrors.price}
                      helperText={
                        formErrors.price ? "Моля, въведете цена." : null
                      }
                      fullWidth
                      label={"Цена"}
                      onChange={handleChange}
                      value={form.price}
                      type="number"
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
                  <RadioGroup
                    label="Състояние"
                    options={conditionTypes}
                    fieldType="conditionType"
                    onChange={handleChange}
                    defaultValue="USED"
                  />
                </div>
                <div className="col-sm-3">
                  <RadioGroup
                    label="Разположение на волан"
                    options={wheelTypes}
                    fieldType="wheelType"
                    onChange={handleChange}
                    defaultValue="LEFT"
                  />
                </div>
                <div className="col-sm-3">
                  <RadioGroup
                    label="Скорости"
                    options={transmissionTypes}
                    fieldType="transmissionType"
                    onChange={handleChange}
                    defaultValue="MANUAL"
                  />
                </div>
                <div className="col-sm-3">
                  <RadioGroup
                    label="Тип двигател"
                    options={fuelTypes}
                    fieldType="fuelType"
                    onChange={handleChange}
                    defaultValue="PETROL"
                  />
                </div>
              </div>

              <hr className="my-4" />

              <div className="row g-4">
                <div className="col-sm-3">
                  <div className="input-group has-validation">
                    <TextField
                      error={formErrors.horsePower}
                      helperText={formErrors.horsePower}
                      fullWidth
                      label={"Мощност (к.с.)"}
                      onChange={handleChange}
                      value={form.horsePower}
                      type="number"
                      id="horsePower"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="input-group has-validation">
                    <TextField
                      error={formErrors.mileage}
                      helperText={formErrors.mileage}
                      fullWidth
                      label={"Пробег (км.)"}
                      onChange={handleChange}
                      value={form.mileage}
                      type="number"
                      id="mileage"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="input-group has-validation">
                    <TextField
                      error={formErrors.year}
                      helperText={formErrors.year}
                      min="1886"
                      max={new Date().getFullYear() + 1}
                      fullWidth
                      label={"Година на производство"}
                      onChange={handleChange}
                      value={form.year}
                      type="number"
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
                      className={`form-control ${
                        formErrors.description ? "is-invalid" : ""
                      }`}
                      id="description"
                      rows="6"
                    />
                    {formErrors.description && (
                      <div className="invalid-feedback">
                        {formErrors.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <Button
                startIcon={<PublishIcon />}
                color="success"
                text={"Публикувай обява"}
                type="submit"
                size="large"
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Publish;
