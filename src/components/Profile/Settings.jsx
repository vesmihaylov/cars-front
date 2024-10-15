import Navigation from "./Navigation.jsx";
import Button from "../Element/Button.jsx";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Settings() {
  return (
    <div className="container">
      <h4 className="font-weight-bold py-3 mb-4">Настройки</h4>

      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <Navigation />
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="card-body">
                  <div className="form-group mb-2 mt-2">
                    <label>Потребителско име</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Въведете потребителско име..."
                    />
                  </div>
                  <div className="form-group mb-2 mt-2">
                    <label>Електронна поща</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Въведете електронна поща..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right mt-3">
        <Button
          startIcon={<CheckCircleOutlineIcon />}
          text={"Запази промени"}
        />
      </div>
    </div>
  );
}

export default Settings;
