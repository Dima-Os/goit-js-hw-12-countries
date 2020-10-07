export default {
  countriesQuery: '',
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
  fetchCountrybyName() {
    return fetch(
      `https://restcountries.eu/rest/v2/name/${this.query}?fullText=true`,
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(console.log(response.status));
    });
  },
  get query() {
    return this.countriesQuery;
  },
  set query(value) {
    this.countriesQuery = value;
  },
};
