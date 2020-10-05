import './styles.css';

fetch('https://restcountries.eu/rest/v2/name/uk').then(res => {
  return res.json().then(data => console.log(data));
});
