import Navigation from "./Navigation.jsx";
import Button from "../Element/Button.jsx";
import TextField from "../Element/TextField.jsx";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

function Settings() {
  return (
    <Box className="container">
      <h4 className="font-weight-bold py-3 mb-4">Настройки</h4>

      <Box className="card overflow-hidden">
        <Grid container spacing={2}>
          <Grid xs={12} sm={3}>
            <Navigation />
          </Grid>
          <Grid xs={12} sm={9}>
            <Box className="tab-content">
              <Box className="tab-pane fade active show" id="account-general">
                <Box className="card-body">
                  <Box className="form-group mb-2 mt-4">
                    <TextField
                      label={"Потребителско име"}
                      type={"text"}
                      placeholder={"SunshineAutos"}
                    />
                  </Box>
                  <Box className="form-group mb-2 mt-4">
                    <TextField
                      label={"Електронна поща"}
                      type={"email"}
                      placeholder={"sunshineautos@email.rnd"}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box textAlign="left" mt={3}>
        <Button
          startIcon={<CheckCircleOutlineIcon />}
          text={"Запази промени"}
        />
      </Box>
    </Box>
  );
}

export default Settings;
