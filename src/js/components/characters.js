import { CharactersService } from '../services/characters';
import { HandleError } from '../utils';
import { MainWrapper} from '../index';

export async function CharactersComponent() {
  try {
    const response = await CharactersService.getAllCharacters();
    const data = await response.json();

    createComponent(data);
  } catch (error) {
    HandleError(error);
  }
}

const createComponent = data => {
  const html = `  <div class="row">${getThumbnails(data.results)}</div>`;

  MainWrapper.innerHTML = html;
}

const getThumbnails = (characters) => {
  let result = ''
  characters.forEach(character => {
    result += `
      <div class="col s12 m3 l2">
        <div class="card character">
          <div class="card-image">
            <img src="${character.image}">
          </div>
          <div class="card-content">
            <span class="card-title">${character.name}</span>
          </div>
        </div>
      </div>
    `
  });
  
  return result;
}
