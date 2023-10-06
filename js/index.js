'use strict';

const obsCallback = function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entry);
    });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const nav = document.querySelector('.header')
const observer = new IntersectionObserver(obsCallback, obsOptions);
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickNav = function (entries) {
  const [entry] = entries; // Destructuring

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0.59,

  rootMargin: `-${navHeight}px`,
});

if(document.getElementById('hero')) {
  headerObserver.observe(document.getElementById("hero"));
}


const faqFigures = document.querySelectorAll('.faq__figure');

  faqFigures.forEach((faqFigure) => {
    const openFaq = faqFigure.querySelector('.figure--head');
    const body = faqFigure.querySelector('.figure--body');
  
    openFaq.addEventListener('click', () => {
      const isOpen = faqFigure.classList.contains('faq--open');
    //   if(this.classList.contains('fi-rs-plus')) {
    //     this.classList.add('fi-rs-minus')
    //   }

      
      // Close all FAQ items
      faqFigures.forEach((item) => {
        item.classList.remove('faq--open');
        item.querySelector('.figure--body').style.display = 'none';

      });
  
      // If the clicked FAQ item is not open, open it
      if (!isOpen) {
        faqFigure.classList.add('faq--open');
        body.style.display = 'block';
      }
    });
});
  