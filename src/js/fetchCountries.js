export default {
  countryQuery: '',
  fetchCountry() {
    fetch(`https://restcountries.eu/rest/v2/name/${this.countryQuery}`).then(
      res => {
        return res.json().then(data => console.log(data));
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
