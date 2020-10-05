import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const notify = () => {
  error({
    title: 'yep!',
    text: 'Too many matches found. Please enter a more specific query!',
    hide: true,
    delay: 1000,
  });
};
