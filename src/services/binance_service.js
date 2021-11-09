import axios from "axios";

export const getBinancePrices = async () => {
  return axios
    .get("https://api.binance.com/api/v3/ticker/price")
    .then((res) => res.data)
    .catch((err) => {
      return { message: "Une erreur est survenue", status: 500 };
    });
};
