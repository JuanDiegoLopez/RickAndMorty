import template from './details.pug';
import './details.scss';

import { elements, HandleError } from '../../../utils';
import CharactersService from '../../../services/characters';

class DetailsComponent {
  constructor(id) {
    this.id = id;
  }

  async createComponent() {
    try {
      const response = await CharactersService.getCharacterById(this.id);
      const data = await response.json();

      elements.content.innerHTML = template({ character: data });
    } catch (error) {
      HandleError(error);
    }
  }
}

export default DetailsComponent;
