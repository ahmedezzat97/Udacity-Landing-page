/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
//Global variable that used in  multi sections of project
const body = document.getElementById("body");
const navi = document.getElementById("navbar__list");
const dark = document.getElementById("dark");
const sections = Array.from(document.querySelectorAll("section"));

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

const createLiElem = (section) => {
  for (section of sections) {
    const items = document.createElement("li");
    items.innerHTML = `<a class="menu__link" href="#${section.id}" data-nav="${section.id}">${section.dataset.nav}</a>`;
    navi.appendChild(items);
  }
};

////
///darkmode

dark.addEventListener("click", (theme) => {
  body.classList.toggle("dark");
});

////

const bounding = (rect) => {
  return rect.getBoundingClientRect().top;
};

///adding the active class to the section that in the viewport
const addActivaion = (statement, content) => {
  if (statement) {
    content.classList.add("your-active-class");
  }
};
///  removeing the active  class from prevent section(Switching between sections active class's )
const removeActivaion = (content) => {
  content.classList.remove("your-active-class");
};
/// Set sections as active

const secActive = () => {
  sections.forEach((content) => {
    const viewPortElem = bounding(content);
    const position1 = viewPortElem < 360;
    const position2 = viewPortElem >= -360;
    current = () => position1 && position2;

    removeActivaion(content);
    addActivaion(current(), content);
  });
};

// Scroll to anchor ID using scrollTO event
//// Scroll to section after clicking on them

/// when User click at any Section that in navigationbar will be redirect thim soomthly
navi.addEventListener("click", (ssb) => {
  ssb.preventDefault();
  if (ssb.target.dataset.nav) {
    document
      .getElementById(`${ssb.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      //as you can see the link of section will  be sit after the end of scrolling
      window.location.hash = `${ssb.target.dataset.nav}`;
    }, 460);
  }
});

///////// build the nav//////
createLiElem();

///Active section
window.addEventListener("scroll", secActive);
