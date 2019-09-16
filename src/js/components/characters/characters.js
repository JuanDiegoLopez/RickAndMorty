import { CharactersService } from '../../services/characters';
import { HandleError } from '../../utils';
import { MainWrapper, router} from '../../index';
import template from './characters.pug';

let paginationStart = 1;
let paginationEnd = 10;

export async function CharactersComponent(page) {
  try {
    const response = await CharactersService.getAllCharacters(page);
    const data = await response.json();

    createComponent(data, page);
  } catch (error) {
    HandleError(error);
  }
}

const createComponent = (data, currentPage) => {
  currentPage = parseInt(currentPage);
  
  if (currentPage > paginationEnd && currentPage <= data.info.pages) {
    paginationStart = currentPage - 9;
    paginationEnd = currentPage;
  }
  
  if (currentPage < paginationStart) {
    paginationStart = currentPage;
    paginationEnd = currentPage + 9;
  }

  const vars = {
    characters: data.results, 
    pagination: {
      current: currentPage,
      total: data.info.pages,
      start: paginationStart,
      end: paginationEnd
    }
  };

  MainWrapper.innerHTML = template(vars);

  const charactersCollection = MainWrapper.getElementsByClassName('character');
  const charactersArray = [...charactersCollection];

  charactersArray.forEach(element => {
    element.addEventListener('click', () => {
      router.navigate(`/details/${element.id}`);
    });
  });

  setupPagination();
}

const setupPagination = () => {
  const links = MainWrapper.getElementsByTagName('a');
  
  for (const link of links) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      router.navigate(link.getAttribute('href'));
    });
  }
};