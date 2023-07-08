import axios from "axios";

const openExchangeApiClient = axios.create({
  baseURL: import.meta.env.VITE_OPEN_EXCHANGE_API_BASE_URL,
  params: {
    app_id: import.meta.env.VITE_OPEN_EXCHANGE_API_ID,
  },
  headers: {
    "Content-type": "application/json",
  },
});
export { openExchangeApiClient };
