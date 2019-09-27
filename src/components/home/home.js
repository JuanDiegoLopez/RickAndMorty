import CharactersService from '../../services/characters';
import { elements, HandleError } from '../../utils';
import router from '../../router';

import template from './home.pug';
import './home.scss';

const createComponent = (characters) => {
  elements.content.innerHTML = template({ characters });

  const button = elements.content.querySelector('.btn');
  button.addEventListener('click', () => {
    router.navigate('/characters/1');
  });
};

const HomeComponent = async () => {
  try {
    const response = await CharactersService.getMainCharacters();
    const data = await response.json();

    createComponent(data);
  } catch (error) {
    HandleError(error);
  }
};

export default HomeComponent;
