import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="Настройки"
          value="/settings"
          component={Link}
          to="/settings"
        />
        <Tab
          label="Смяна на парола"
          value="/change-password"
          component={Link}
          to="/change-password"
        />
        <Tab
          label="Моите обяви"
          value="/my-deals"
          component={Link}
          to="/my-deals"
        />
      </Tabs>
    </Box>
  );
}

export default Navigation;
