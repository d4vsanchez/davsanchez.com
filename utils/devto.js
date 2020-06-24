import axios from 'axios';

const DEVTO_USERNAME = 'd4vsanchez';
const DEVTO_API_URL = 'https://dev.to/api/';

const client = axios.create({
  baseURL: DEVTO_API_URL,
  timeout: 5000,
});

export const getArticles = async () => {
  const endpoint = `articles?username=${DEVTO_USERNAME}&per_page=5`;
  try {
    const response = await client.get(endpoint);
    return response.data;
  } catch (err) {
    console.error(`ERROR [Fetching Dev.to Articles]: ${err}`);
    throw err;
  }
};
