import template from './characters.pug';
import style from './characters.scss';

import { HandleError, elements } from '../../utils';
import router from '../../router';
import CharactersService from '../../services/characters';

let paginationStart = 1;
let paginationEnd = 10;

const checkPagination = (currentPage, totalPages) => {
  if (currentPage > paginationEnd && currentPage <= totalPages) {
    paginationStart = currentPage - 9;
    paginationEnd = currentPage;
  }

  if (currentPage < paginationStart) {
    paginationStart = currentPage;
    paginationEnd = currentPage + 9;
  }
};

const createComponent = (data, currentPage) => {
  const currentPageParsed = parseInt(currentPage, 10);
  checkPagination(currentPage, data.info.pages);

  const vars = {
    characters: data.results,
    pagination: {
      current: currentPageParsed,
      total: data.info.pages,
      start: paginationStart,
      end: paginationEnd,
    },
  };

  elements.content.innerHTML = template(vars);
  elements.content.style.cssText = style;
};

const setupListeners = () => {
  const links = elements.content.getElementsByTagName('a');
  const characters = elements.content.getElementsByClassName('character');

  Array.from(links).forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      router.navigate(link.getAttribute('href'));
    });
  });

  Array.from(characters).forEach((character) => {
    character.addEventListener('click', () => {
      router.navigate(`/details/${character.id}`);
    });
  });
};

const CharactersComponent = async (page) => {
  try {
    const response = await CharactersService.getAllCharacters(page);
    const data = await response.json();

    createComponent(data, page);
    setupListeners();
  } catch (error) {
    HandleError(error);
  }
};

export default CharactersComponent;
