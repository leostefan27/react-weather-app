const formatUVIndex = (index) => {
  let formattedValue;

  if (index <= 2) {
    formattedValue = "Low";
  } else if (index <= 5) {
    formattedValue = "Moderate";
  } else if (index <= 7) {
    formattedValue = "High";
  } else if (index <= 10) {
    formattedValue = "Very High";
  } else {
    formattedValue = "Extreme";
  }

  return formattedValue;
};

export default formatUVIndex;
