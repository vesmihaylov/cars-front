import Navigation from "./Navigation.jsx";
import Button from "../Element/Button.jsx";
import TextField from "../Element/TextField.jsx";
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
                  <div className="form-group mb-2 mt-4">
                    <TextField
                      label={"Текуща парола"}
                      type={"password"}
                      placeholder={"Въведете текущата парола..."}
                    />
                  </div>
                  <div className="form-group mb-2 mt-4">
                    <TextField
                      label={"Нова парола"}
                      type={"password"}
                      placeholder={"Въведете новата парола..."}
                    />
                  </div>
                  <div className="form-group mb-2 mt-4">
                    <TextField
                      label={"Повторете нова парола"}
                      type={"password"}
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
