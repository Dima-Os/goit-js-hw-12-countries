import { error } from '@pnotify/core';
import { success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const notify = () => {
  error({
    title: 'yep!',
    text: 'Too many matches found. Please enter a more specific query!',
    hide: true,
    delay: 1500,
  });
};

export const notifyError = err => {
  error({
    title: 'Ahtung!',
    text: `${err}`,
    hide: true,
    delay: 1500,
  });
};

export const notifySuccess = () => {
  success({
    title: 'Sucsess!',
    text: 'Your query is sucsessful!;-)',
    hide: true,
    delay: 1000,
  });
};
