new WOW().init();
//Font to preload
const FONT_NAME = "Montserrat";
const NAVBAR_ID = document.querySelector("#navbar-icon");

//Preload font
document.fonts.load('10pt "Montserrat"').then(drawCanvas);

//Responsive Navigation
window.addEventListener('scroll', () => {
  let navLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add('active');
    }
    else{
      link.classList.remove('active');
    }
  });
});

//Responsive Navigation
NAVBAR_ID.addEventListener('click', () => {
  let navbar = document.querySelector("#topnav");
  if(navbar.className === "navbar-list"){
    navbar.className += " responsive";
  }
  else{
    navbar.className = "navbar-list";
  }
});

//Draw Cnavas
function drawCanvas(){
  let w;
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  if(window.innerWidth > 768){
    w = window.innerWidth;
    canvas.width = w - w/4 - 75;
  }
  else if(window.innerWidth < 576){
    w = 450;
    canvas.width = w - w/4 - 35;
  }
  else{
    w = 768;
    canvas.width = w - w/4 - 35;
  }
  let k = 1366/w;
  canvas.height = canvas.height/k;
  canvas.style.transform = "translateY(-" + (125/k) + "px)";
  ctx.beginPath();
  ctx.arc(37/k, 270/k, 16/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(37/k, 270/k);
  ctx.lineTo(156/k, 200/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(195/k, 190/k, 56/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(195/k, 190/k);
  ctx.lineTo(375/k, 280/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(375/k, 270/k, 41/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(375/k, 270/k);
  ctx.lineTo(500/k, 170/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(520/k, 160/k, 56/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(520/k, 160/k);
  ctx.lineTo(430/k, 65/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(430/k, 65/k, 16/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(520/k, 160/k);
  ctx.lineTo(650/k, 40/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(650/k, 45/k, 41/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(520/k, 160/k);
  ctx.lineTo(800/k, 160/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(800/k, 160/k, 95/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.font = 38/k + "px Montserrat";
  ctx.fillText("225", (195 - 34)/k, (190 + 12)/k);
  ctx.font = 26/k + "px Montserrat";
  ctx.fillText("430", (375 - 25)/k, (270 + 10)/k);
  ctx.font = 38/k + "px Montserrat";
  ctx.fillText("362", (520 - 34)/k, (160 + 12)/k);
  ctx.font = 21/k + "px Montserrat";
  ctx.fillText("1570", (650 - 22)/k, (45 + 7)/k);
  ctx.font = 72/k + "px Montserrat";
  ctx.fillText("122", (800 - 54)/k, (160 + 22)/k);
  ctx.fillStyle = "#3f3b48";
  if(window.innerWidth <= 576){
    ctx.font = 12/k*1.5 + "px Montserrat";
    ctx.fillText("HAPPY CLIENTS", (195 - 70)/k, (190 + 80)/k);
    ctx.fillText("COMPLETED PROJECTS", (375 - 100)/k, (270 + 65)/k);
    ctx.fillText("BEST SHOTS", (520 - 60)/k, (160 + 80)/k);
    ctx.fillText("COFFES MADE", (650 - 70)/k, (45 + 65)/k);
    ctx.fillText("WINNING AWARDS", (800 - 90)/k, (160 + 120)/k);
  }
  else{
    ctx.font = 12/k + "px Montserrat";
    ctx.fillText("HAPPY CLIENTS", (195 - 48)/k, (190 + 80)/k);
    ctx.fillText("COMPLETED PROJECTS", (375 - 70)/k, (270 + 65)/k);
    ctx.fillText("BEST SHOTS", (520 - 38)/k, (160 + 80)/k);
    ctx.fillText("COFFES MADE", (650 - 45)/k, (45 + 65)/k);
    ctx.fillText("WINNING AWARDS", (800 - 55)/k, (160 + 120)/k);
  }
}

//Resize Canvas
window.addEventListener('resize', () => {
  let w;
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  if(window.innerWidth > 768){
    w = window.innerWidth;
    canvas.width = w - w/4 - 75;
  }
  else if(window.innerWidth < 576){
    w = 450;
    canvas.width = w - w/4 - 35;
  }
  else{
    w = 768;
    canvas.width = w - w/4 - 35;
  }
  let k = 1366/w;
  ctx.clearRect(0, 0, canvas.widht, canvas.height);
  canvas.height = w/16*4;
  canvas.style.transform = "translateY(-" + (125/k) + "px)";
  ctx.beginPath();
  ctx.arc(37/k, 270/k, 16/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(37/k, 270/k);
  ctx.lineTo(156/k, 200/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(195/k, 190/k, 56/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(195/k, 190/k);
  ctx.lineTo(375/k, 280/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(375/k, 270/k, 41/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(375/k, 270/k);
  ctx.lineTo(500/k, 170/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(520/k, 160/k, 56/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(520/k, 160/k);
  ctx.lineTo(430/k, 65/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(430/k, 65/k, 16/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(520/k, 160/k);
  ctx.lineTo(650/k, 40/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(650/k, 45/k, 41/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.moveTo(520/k, 160/k);
  ctx.lineTo(800/k, 160/k);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(800/k, 160/k, 95/k, 0, 2 * Math.PI);
  ctx.fillStyle = "#3f3b48";
  ctx.fill();
  ctx.strokeStyle = "#3f3b48";
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.font = 38/k + "px Montserrat";
  ctx.fillText("225", (195 - 34)/k, (190 + 12)/k);
  ctx.font = 26/k + "px Montserrat";
  ctx.fillText("430", (375 - 25)/k, (270 + 10)/k);
  ctx.font = 38/k + "px Montserrat";
  ctx.fillText("362", (520 - 34)/k, (160 + 12)/k);
  ctx.font = 21/k + "px Montserrat";
  ctx.fillText("1570", (650 - 22)/k, (45 + 7)/k);
  ctx.font = 72/k + "px Montserrat";
  ctx.fillText("122", (800 - 54)/k, (160 + 22)/k);
  ctx.fillStyle = "#3f3b48";
  if(window.innerWidth <= 576){
    ctx.font = 12/k*1.5 + "px Montserrat";
    ctx.fillText("HAPPY CLIENTS", (195 - 70)/k, (190 + 80)/k);
    ctx.fillText("COMPLETED PROJECTS", (375 - 100)/k, (270 + 65)/k);
    ctx.fillText("BEST SHOTS", (520 - 60)/k, (160 + 80)/k);
    ctx.fillText("COFFES MADE", (650 - 70)/k, (45 + 65)/k);
    ctx.fillText("WINNING AWARDS", (800 - 90)/k, (160 + 120)/k);
  }
  else{
    ctx.font = 12/k + "px Montserrat";
    ctx.fillText("HAPPY CLIENTS", (195 - 48)/k, (190 + 80)/k);
    ctx.fillText("COMPLETED PROJECTS", (375 - 70)/k, (270 + 65)/k);
    ctx.fillText("BEST SHOTS", (520 - 38)/k, (160 + 80)/k);
    ctx.fillText("COFFES MADE", (650 - 45)/k, (45 + 65)/k);
    ctx.fillText("WINNING AWARDS", (800 - 55)/k, (160 + 120)/k);
  }
})
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
const slideNumber = document.querySelector('#count');
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
  if(counter < 4){
    slideNumber.innerHTML = "0" + (counter + 1);
  }
  else{
    slideNumber.innerHTML = "01";
  }
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
  if(counter > 1){
    slideNumber.innerHTML = "0" + (counter - 1);
  }
  else{
    slideNumber.innerHTML = "04";
  }
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

//SCROLLBAR FOR POSTS
new SimpleBar(document.querySelector('#posts-scrollbar'),{
  autoHide : false,
  scrollbarMinSize : 90,
  scrollbarMaxSize : 90
});
