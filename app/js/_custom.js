const FONT_NAME = "Montserrat";

document.fonts.load('10pt "Montserrat"').then(renderText);
document.addEventListener("DOMContentLoaded", function() {
});

window.addEventListener('scroll', event => {
  let navLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    console.log(section);

    if(section.offsetTop - 40 <= fromTop && section.offsetTop + section.offsetHeight - 40 > fromTop){
      link.classList.add('active');
    }
    else{
      link.classList.remove('active');
    }
  });
});
function renderText(){
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
