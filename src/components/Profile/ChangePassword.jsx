import Navigation from "./Navigation.jsx";
import Button from "../Element/Button.jsx";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function ChangePassword() {
  return (
    <div className="container">
      <h4 className="font-weight-bold py-3 mb-4">Смяна на парола</h4>

      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <Navigation />
          <div className="col-md-9">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="card-body">
                  <div className="form-group mb-2 mt-2">
                    <label>Текуща парола</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Въведете текущата парола..."
                    />
                  </div>
                  <div className="form-group mb-2 mt-2">
                    <label>Нова парола</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Въведете новата парола..."
                    />
                  </div>
                  <div className="form-group mb-2 mt-2">
                    <label>Повторете нова парола</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Повторете нова парола..."
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

export default ChangePassword;
