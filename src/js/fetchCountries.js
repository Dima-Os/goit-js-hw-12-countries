export default {
  countryQuery: '',
  fetchCountry() {
    return fetch(`https://restcountries.eu/rest/v2/name/${this.query}`).then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(console.log(response.status));
      },
    );
  },
  get query() {
    return this.countryQuery;
  },
  set query(value) {
    this.countryQuery = value;
  },
};
