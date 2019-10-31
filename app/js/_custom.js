//Font to preload
const FONT_NAME = "Montserrat";

//Preload font
document.fonts.load('10pt "Montserrat"').then(drawCanvas);

//Responsive Navigation
window.addEventListener('scroll', () => {
  let navLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if(section.offsetTop - 40 <= fromTop && section.offsetTop + section.offsetHeight - 40 > fromTop){
      link.classList.add('active');
    }
    else{
      link.classList.remove('active');
    }
  });
});

//Draw Cnavas
function drawCanvas(){
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(37, 270, 16, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(37, 270);
  ctx.lineTo(156, 200);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(195, 190, 56, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(195, 190);
  ctx.lineTo(375, 280);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(375, 270, 41, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(375, 270);
  ctx.lineTo(500, 170);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(520, 160, 56, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(520, 160);
  ctx.lineTo(430, 65);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(430, 65, 16, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(520, 160);
  ctx.lineTo(650, 40);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(650, 45, 41, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(520, 160);
  ctx.lineTo(800, 160);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(800, 160, 95, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.font = "38px Montserrat";
  ctx.fillText("225", 195 - 34, 190 + 12);
  ctx.font = "26px Montserrat";
  ctx.fillText("430", 375 - 25, 270 + 10);
  ctx.font = "38px Montserrat";
  ctx.fillText("362", 520 - 34, 160 + 12);
  ctx.font = "21px Montserrat";
  ctx.fillText("1570", 650 - 22, 45 + 7);
  ctx.font = "72px Montserrat";
  ctx.fillText("122", 800 - 54, 160 + 22);
  ctx.fillStyle = "#3f3b48";
  ctx.font = "12px Montserrat";
  ctx.fillText("HAPPY CLIENTS", 195 - 48, 190 + 80);
  ctx.fillText("COMPLETED PROJECTS", 375 - 70, 270 + 65);
  ctx.fillText("BEST SHOTS", 520 - 38, 160 + 80);
  ctx.fillText("COFFES MADE", 650 - 45, 45 + 65);
  ctx.fillText("WINNING AWARDS", 800 - 55, 160 + 120);
}

//CAROUSEL

//Carousel containers
const descriptionSlider = document.querySelector('.description-slider-container');
const imgSlider = document.querySelector('.img-slider');
const iconsSlider = document.querySelector('.technologies-icons-container');
//Carousel contents
const descriptionContents = document.querySelectorAll('.description-slider-container .description-container');
const imgContents = document.querySelectorAll('.img-slider .slide-img');
const iconsContents = document.querySelectorAll('.technologies-icons-container .technologies-icons');
//Carousel buttons
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
//Counter
let counter = 1;
//Sizes
const descriptionSize = descriptionContents[0].clientWidth;
const imgSize = imgContents[0].clientWidth;
const iconsSize = iconsContents[0].clientWidth;

//First Transform
descriptionSlider.style.transform = 'translateX(' + (-descriptionSize * counter) + 'px)';
imgSlider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
iconsSlider.style.transform = 'translateX(' + (-iconsSize * counter) + 'px)';
//Button Listeners
nextBtn.addEventListener('click', () => {
  if(counter >= descriptionContents.length - 1) return;
  descriptionSlider.style.transition = 'transform 0.3s ease-in-out';
  imgSlider.style.transition = 'transform 0.3s ease-in-out';
  iconsSlider.style.transition = 'transform 0.3s ease-in-out';
  counter++;
  descriptionSlider.style.transform = 'translateX(' + (-descriptionSize * counter) + 'px)';
  imgSlider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
  iconsSlider.style.transform = 'translateX(' + (-iconsSize * counter) + 'px)';
});
prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  descriptionSlider.style.transition = 'transform 0.3s ease-in-out';
  imgSlider.style.transition = 'transform 0.3s ease-in-out';
  iconsSlider.style.transition = 'transform 0.3s ease-in-out';
  counter--;
  descriptionSlider.style.transform = 'translateX(' + (-descriptionSize * counter) + 'px)';
  imgSlider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
  iconsSlider.style.transform = 'translateX(' + (-iconsSize * counter) + 'px)';
});
//Return to original image
descriptionSlider.addEventListener('transitionend', () => {
  let a = descriptionContents[counter].id;
  if (a === 'lastClone') {
    descriptionSlider.style.transition = "none";
    imgSlider.style.transition = "none";
    iconsSlider.style.transition = "none";
    let b = descriptionContents.length - 2;
    counter = b;
    descriptionSlider.style.transform = 'translateX(' + (-descriptionSize * counter) + 'px)';
    imgSlider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
    iconsSlider.style.transform = 'translateX(' + (-iconsSize * counter) + 'px)';
  }
  if(a === 'firstClone'){
    descriptionSlider.style.transition = "none";
    imgSlider.style.transition = "none";
    iconsSlider.style.transition = "none";
    let b = descriptionContents.length - counter;
    counter = b;
    descriptionSlider.style.transform = 'translateX(' + (-descriptionSize * counter) + 'px)';
    imgSlider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
    iconsSlider.style.transform = 'translateX(' + (-iconsSize * counter) + 'px)';
  }
});
