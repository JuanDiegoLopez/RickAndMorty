import './scss/style.scss';
import './scss/grid.scss';
import Logo from './assets/logo.png';


import router from './router';

import { elements } from './utils';

import HomeComponent from './components/home/home';
import CharactersComponent from './components/characters/characters';
import DetailsComponent from './components/details/details';

const setupRouter = () => {
  router.config({
    mode: 'history',
  });

  router.add(/home/, HomeComponent);
  router.add(/characters\/(.*)/, CharactersComponent);
  router.add(/details\/(.*)/, DetailsComponent);
  router.listen();
};

const init = () => {
  const navbarItems = elements.navbar.getElementsByTagName('a');

  Array.from(navbarItems).forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      router.navigate(element.getAttribute('href'));
    });
  });

  const logoImage = new Image();
  logoImage.src = Logo;

  const logoElement = document.getElementsByClassName('brand-logo')[0];
  logoElement.appendChild(logoImage);

  setupRouter();
  router.navigate('/home');
};

init();
