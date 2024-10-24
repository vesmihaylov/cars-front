import Navigation from "./Navigation.jsx";
import Button from "../Element/Button.jsx";
import TextField from "../Element/TextField.jsx";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

function ChangePassword() {
  return (
    <Box className="container">
      <h4 className="font-weight-bold py-3 mb-4">Смяна на парола</h4>
      <Box className="container mb-5">
        <Box className="card overflow-hidden">
          <Grid container spacing={2}>
            <Grid xs={12} sm={3}>
              <Navigation />
            </Grid>
            <Grid xs={12} sm={9}>
              <Box className="card-body">
                <Box className="form-group mb-2 mt-4">
                  <TextField
                    label={"Текуща парола"}
                    type={"password"}
                    placeholder={"Въведете текущата парола..."}
                  />
                </Box>
                <Box className="form-group mb-2 mt-4">
                  <TextField
                    label={"Нова парола"}
                    type={"password"}
                    placeholder={"Въведете новата парола..."}
                  />
                </Box>
                <Box className="form-group mb-2 mt-4">
                  <TextField
                    label={"Повторете нова парола"}
                    type={"password"}
                  />
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
    </Box>
  );
}

export default ChangePassword;
