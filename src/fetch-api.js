import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const KEY = 'qaeFENwMhWpA9TRxTpQwIY4OwnMpLRwhTKof_BH9d-8';

export const fetchImeges = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: KEY,
      query: searchQuery,
      page,
      per_page: 12,
    },
  });
  return response.data.results;
};
