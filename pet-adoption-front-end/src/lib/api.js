import axios from "axios";

const BaseUrl = 'http://localhost:5500';

export async function getProductById(id, token) {
  const response = await axios.get(
    BaseUrl + '/products/' + id, 
    getAuthConfig(token)
  );
  return response.data;
}