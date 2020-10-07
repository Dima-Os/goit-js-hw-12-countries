import './styles.css';
import debounce from 'lodash';
import fetchCountries from './js/fetchCountries';
import { updateMarkup } from './js/updateMarkup';
import { notifyError } from './js/notifyToMachMatches';

export const inputRef = document.querySelector('.input');

const onInputHandler = event => {
  fetchCountries.query = event.target.value;
  if (fetchCountries.query !== '') {
    fetchCountries
      .fetchCountry()
      .then(data => {
        updateMarkup(data);
      })
      .catch(error => notifyError(error));
  }
};

inputRef.addEventListener('input', _.debounce(onInputHandler, 500));
