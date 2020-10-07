import fetchCountries from './fetchCountries';
import { updateMarkup } from './updateMarkup';
export default {
  onClickHandler(event) {
    fetchCountries.query = event.target.textContent;
    fetchCountries.fetchCountrybyName().then(data => {
      updateMarkup(data);
    });
  },
  addListListener() {
    this.listRef = document.querySelector('.countries-list');
    this.listRef.addEventListener('click', this.onClickHandler);
  },
  removeListListener() {
    this.listRef.removeEventListener('click', this.onClickHandler);
  },
};
