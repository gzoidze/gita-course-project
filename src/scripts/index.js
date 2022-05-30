import { changePageHandler} from './ChangePage.js';
import { initializeSlider } from './slider.js';
import { formValidation } from './FormValidation.js';
import { fetchData } from './fetchData.js';

$(document).ready(function(){
  $('.loader').fadeOut(2000);
  $('.page-container').fadeIn(2000);

  fetchData();
  initializeSlider();
  formValidation();
});
