import { notify } from './notifyToMachMatches';
import { notifySuccess } from './notifyToMachMatches';
import countriesList from '../templates/countriesList.hbs';
import country from '../templates/country.hbs';
import listListenerHandler from './listListenerHandler';
import { inputRef } from '../index';

const resultRef = document.querySelector('.result-wrapper');

export const updateMarkup = data => {
  resultRef.innerHTML = '';
  if (data.length > 10) return notify();

  if (data.length > 2 && data.length < 10) {
    resultRef.insertAdjacentHTML('beforeend', countriesList(data));
    listListenerHandler.addListListener();
    return;
  }

  if (data.length === 1) {
    notifySuccess();
    if (listListenerHandler.listRef) listListenerHandler.removeListListener();
    inputRef.value = '';
    resultRef.insertAdjacentHTML('beforeend', country(...data));
  }
};
