let scrollContainer = document.querySelector(".gallery");
let backButton = document.getElementById("backBtn");
let nextButton = document.getElementById("nextBtn");

scrollContainer.addEventListener('wheel',(evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY
})

nextButton.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth'
  scrollContainer.scrollLeft += 900;
})

backButton.addEventListener('click', () => {
  scrollContainer.style.scrollBehavior = 'smooth'
  scrollContainer.scrollLeft -= 900;
})