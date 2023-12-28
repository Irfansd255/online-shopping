import axios from "axios";

const API_KEY_TOKEN =
  "b31ef65d67558ea42d301ce4bc85e94c277ac5f3208fb32fbbc7be05b6b2ccb2710bd980626f28a50925d6634531821565338c9e6f9358db1d684d7b4359ebb7b26428f19e689e57d12684cfa84c38be1c054dd8633fbf4802699deb6d6c8cf4b86c33cac228adc411b0383b2d64a21a371de8589cac87f555a5b0aefe33c4e9";

export const API_BASE_URL = "http://localhost:1337";

const params = {
  headers: {
    Authorization: `Bearer ${API_KEY_TOKEN}`
  }
};

export const fetchDtataFromApi = async url => {
  try {
    const result = await axios.get(API_BASE_URL + url, params);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
