import axios from 'axios';

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

export const fetchArticles = async (searchQuery, currentPage) => {
  // const respons = await axios.get(`/search?query=${searchQuery}`);
  const respons = await axios.get('/search', {
    params: {
      query: searchQuery,
      hitsPerPage: 10,
      page: currentPage,
    },
  });

  return respons.data.hits;
};
