const homePage = document.getElementById('home-page');
const aboutPage = document.getElementById('about-page');
const contactPage = document.getElementById('contact-page');

export const homePageBtn = document.getElementById('home-btn');
export const aboutPageBtn = document.getElementById('about-btn');
export const contactPageBtn = document.getElementById('contact-btn');
export const ftHomePageBtn = document.getElementById('ft-home-btn');
export const ftAboutPageBtn = document.getElementById('ft-about-btn');
export const ftContactPageBtn = document.getElementById('ft-contact-btn');

const showPage = (page, btn, isShown) => {
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  contactPage.style.display = 'none';
  homePageBtn.classList.remove("active");
  aboutPageBtn.classList.remove("active");
  contactPageBtn.classList.remove("active");

  if (isShown) {
    page.style.display = 'block';
    btn.classList.add("active");
  }
}

export const changePageHandler = (pageTitle) => {
  switch (pageTitle) {
    case "about":
      showPage(aboutPage, aboutPageBtn, true);
      break;
    case "contact":
      showPage(contactPage, contactPageBtn, true);
      break;
    default:
      showPage(homePage, homePageBtn, true);
      break;
  }
}

homePageBtn.addEventListener('click', changePageHandler.bind(this, "home"));
aboutPageBtn.addEventListener('click', changePageHandler.bind(this, "about"));
contactPageBtn.addEventListener('click', changePageHandler.bind(this, "contact"));
ftHomePageBtn.addEventListener('click', changePageHandler.bind(this, "home"));
ftAboutPageBtn.addEventListener('click', changePageHandler.bind(this, "about"));
ftContactPageBtn.addEventListener('click', changePageHandler.bind(this, "contact"));
