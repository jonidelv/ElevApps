document.addEventListener('DOMContentLoaded', () => {
  const elements = [
    document.querySelector('.container'),
    document.querySelector('.logo'),
    document.querySelector('.title'),
    document.querySelector('.subtitle'),
    document.querySelector('.description'),
    document.querySelector('.cta-button')
  ];

  const animateElement = (element, delay) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0) scale(1)';
    }, delay);
  };

  elements.forEach((element, index) => {
    animateElement(element, index * 200);
  });
});