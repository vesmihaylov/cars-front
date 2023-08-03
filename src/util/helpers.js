function formatCreatedAtDate(date) {
  const formattedDateTime = new Date(date);
  const currentDate = new Date();

  if (
    formattedDateTime.getDate() === currentDate.getDate() &&
    formattedDateTime.getMonth() === currentDate.getMonth() &&
    formattedDateTime.getFullYear() === currentDate.getFullYear()
  ) {
    return (
      "Публикувана днес в " +
      formattedDateTime.toLocaleTimeString("bg-BG", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }

  return (
    "Публикувана на " +
    formattedDateTime.toLocaleString("bg-BG", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  );
}

function formatFuelType(fuelType) {
  let formattedFuelType = "";
  switch (fuelType) {
    case "PETROL":
      formattedFuelType = "Бензин";
      break;
    case "DIESEL":
      formattedFuelType = "Дизел";
      break;
    case "GAS_AND_PETROL":
      formattedFuelType = "Газ/Бензин";
      break;
    case "METHANE_AND_PETROL":
      formattedFuelType = "Метан/Бензин";
      break;
    case "HYBRID":
      formattedFuelType = "Хибрид";
      break;
    case "ELECTRIC":
      formattedFuelType = "Електричество";
      break;
  }

  return formattedFuelType;
}

export { formatCreatedAtDate, formatFuelType };
