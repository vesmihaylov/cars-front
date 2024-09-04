import { useState, useEffect } from "react";
import { login } from "../../api.js";
import Popup from "../Popup.jsx";

function Login() {
  const [formErrors, setFormErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    if (token) {
      window.location.href = "/";
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!form.email) {
      errors.email = "Моля, въведете електронна поща.";
    }

    if (!form.password) {
      errors.password = "Моля, въведете парола.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      login(form)
        .then((response) => {
          localStorage.setItem("JWT_TOKEN", response.data.token);
          setShowPopup(true);
          window.setTimeout(() => {
            setShowPopup(false);
            window.location.href = "/";
          }, 1000);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            setFormErrors({
              ...errors,
              heading: "Невалидни данни за вход.",
            });
          }
          console.log(
            `Something went wrong, please send this to an administrator: "${error.message}"`
          );
        });
    }
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Popup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        message={"Вие влязохте успешно!"}
        title={"Здравейте!"}
      />
      <div className="card p-4">
        <h4 className="font-weight-bold py-3 mb-4 text-center">
          Вход в системата
        </h4>
        {formErrors.heading && (
          <div className="alert alert-danger" role="alert">
            {formErrors.heading}
          </div>
        )}
        <form onSubmit={handleSubmit}>
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
          <div className="d-grid justify-content-center mt-3">
            <button type="submit" className="btn btn-dark">
              Влез
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
