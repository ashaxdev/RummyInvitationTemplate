const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize",resizeCanvas);

/* PARTICLES */

let particles=[];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*3,
speed:Math.random()*0.5
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="gold";

particles.forEach(p=>{

p.y -= p.speed;

if(p.y < 0){
p.y = canvas.height;
}

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();

/* CAROUSEL */

const cards = document.querySelectorAll(".card");

const total = cards.length;
const radius = 260;

let rotation = 0;
let activeIndex = -1;

function positionCards(){

cards.forEach((card,i)=>{

const angle = (360/total)*i + rotation;

card.style.transform =
`rotateY(${angle}deg) translateZ(${radius}px)`;

});

}

positionCards();

/* CARD LOOP */

function showNextCard(){

/* reset cards */

cards.forEach(card=>{
card.classList.remove("active","flip","dim");
});

/* next card */

activeIndex = (activeIndex + 1) % total;

/* rotate carousel */

rotation -= 360/total;

positionCards();

/* push other cards back */

cards.forEach((card,i)=>{
if(i !== activeIndex){
card.classList.add("dim");
}
});

/* zoom active card */

setTimeout(()=>{

cards[activeIndex].classList.add("active");

/* flip card */

setTimeout(()=>{
cards[activeIndex].classList.add("flip");
},800);

},800);

/* next card after 7s */

setTimeout(showNextCard,5000);

}
setTimeout(showNextCard,2000);

const music = document.getElementById("bgMusic");
const hint = document.getElementById("tapHint");

document.addEventListener("click", function(){

music.play();

hint.style.display = "none";

}, { once:true });