import { useState } from "react";
import { register } from "../../api.js";
import Popup from "../Popup.jsx";

function Register() {
  const [formErrors, setFormErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "SEDAN",
    type: "SELLER",
    phoneNumber: "",
  });

  const validateForm = () => {
    const errors = {};

    if (!form.name) {
      errors.name = "Моля, въведете име.";
    }

    if (!form.email) {
      errors.email = "Моля, въведете електронна поща.";
    }

    if (!form.password) {
      errors.password = "Моля, въведете парола.";
    }

    if (form.password.length < 8) {
      errors.password = "Паролата трябва да бъде поне 8 символа.";
    }

    if (!form.confirmPassword || form.confirmPassword !== form.password) {
      errors.confirmPassword = "Паролите не съответстват.";
    }

    if (!form.type) {
      errors.type = "Моля, изберете тип на профила.";
    }

    if (!form.phoneNumber) {
      errors.phoneNumber = "Моля, въведете телефонен номер.";
    }

    if (form.phoneNumber.length < 10 || form.phoneNumber.length > 15) {
      errors.phoneNumber = "Минималният брой символи е 10, максималният е 15.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      register(form)
        .then((response) => {
          setShowPopup(true);
          window.setTimeout(() => {
            setShowPopup(false);
            window.location.href = "/settings";
          }, 3000);
        })
        .catch((error) =>
          console.log(
            `Something went wrong, please send this to an administrator: "${error.message}"`
          )
        );
    }
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        message={"Вие се регистрирахте успешно!"}
        title={"Добре дошли!"}
      />
      <div className="card p-4">
        <h4 className="font-weight-bold py-3 mb-4 text-center">
          Нова регистрация
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Име
            </label>
            <input
              type="text"
              className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
              id="name"
              name="name"
              onChange={handleChange}
            />
            {formErrors.name && (
              <div className="invalid-feedback">{formErrors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Електронна поща
            </label>
            <input
              type="email"
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
              id="email"
              name="email"
              onChange={handleChange}
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Парола
            </label>
            <input
              type="password"
              className={`form-control ${
                formErrors.password ? "is-invalid" : ""
              }`}
              id="password"
              name="password"
              onChange={handleChange}
            />
            {formErrors.password && (
              <div className="invalid-feedback">{formErrors.password}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Потвърди парола
            </label>
            <input
              type="password"
              className={`form-control ${
                formErrors.confirmPassword ? "is-invalid" : ""
              }`}
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
            />
            {formErrors.confirmPassword && (
              <div className="invalid-feedback">
                {formErrors.confirmPassword}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Тип профил
            </label>
            <select
              className={`form-select ${formErrors.type ? "is-invalid" : ""}`}
              id="type"
              name="type"
              onChange={handleChange}
            >
              <option value="SELLER">Частно лице</option>
              <option value="COMPANY">Автокъща/Фирма</option>
            </select>
            {formErrors.type && (
              <div className="invalid-feedback">{formErrors.type}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Телефонен номер
            </label>
            9
            <input
              type="tel"
              className={`form-control ${
                formErrors.phoneNumber ? "is-invalid" : ""
              }`}
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
            />
            {formErrors.phoneNumber && (
              <div className="invalid-feedback">{formErrors.phoneNumber}</div>
            )}
          </div>
          <div className="d-grid justify-content-center mt-3">
            <button type="submit" className="btn btn-dark">
              Създай нов профил
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
