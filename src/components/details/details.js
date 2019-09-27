import template from './details.pug';
import './details.scss';

import { elements, HandleError } from '../../utils';
import CharactersService from '../../services/characters';

const createComponent = (character) => {
  elements.content.innerHTML = template({ character });
};

const DetailsComponent = async (id) => {
  try {
    const response = await CharactersService.getCharacterById(id);
    const data = await response.json();

    createComponent(data);
  } catch (error) {
    HandleError(error);
  }
};

export default DetailsComponent;
