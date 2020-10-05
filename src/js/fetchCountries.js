export default {
  countryQuery: '',

  fetchCountry() {
    return fetch(`https://restcountries.eu/rest/v2/name/${this.query}`)
      .then(response => response.json())
      .then(data => data);
  },
  get query() {
    return this.countryQuery;
  },
  set query(value) {
    this.countryQuery = value;
  },
};
