import { notify } from './notifyToMachMatches';
import countriesList from '../templates/countriesList.hbs';
import country from '../templates/country.hbs';

const resultRef = document.querySelector('.result-wrapper');

export const updateMarkup = data => {
  resultRef.innerHTML = '';
  if (!data) {
    resultRef.insertAdjacentHTML(
      'beforeend',
      '<h3>Cant find anyting, please try to input correct data!',
    );
    return;
  }
  if (data.length > 10) notify();

  if (data.length > 2 && data.length < 10)
    resultRef.insertAdjacentHTML('beforeend', countriesList(data));

  if (data.length === 1)
    resultRef.insertAdjacentHTML('beforeend', country(...data));
};
