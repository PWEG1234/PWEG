// ==========================
// PWEG Effects
// ==========================



// حرکت پس زمینه با موس

const bg =
document.querySelector(".background");



document.addEventListener("mousemove",(e)=>{


let x =
e.clientX / window.innerWidth;


let y =
e.clientY / window.innerHeight;



bg.style.transform =

`
scale(1.1)
translate(${x*20}px,${y*20}px)
`;



});







// ورود انیمیشنی


const items=[

document.querySelector(".profile"),

document.querySelector("h1"),

document.querySelector(".subtitle"),

document.querySelector(".about"),

...document.querySelectorAll(".buttons a")

];




items.forEach((item,index)=>{


if(item){


item.style.opacity="0";

item.style.transform="translateY(50px)";



setTimeout(()=>{


item.style.transition="1s";

item.style.opacity="1";

item.style.transform="translateY(0)";


},300+(index*200));



}


});









// ساخت ذرات نور


for(let i=0;i<50;i++){


let star=document.createElement("div");


star.className="particle";


star.style.left=Math.random()*100+"%";


star.style.animationDelay=
Math.random()*10+"s";


star.style.animationDuration=
(5+Math.random()*10)+"s";



document.body.appendChild(star);



}







// افکت کلیک دکمه


document.querySelectorAll(".buttons a")

.forEach(button=>{


button.onclick=()=>{


button.style.transform="scale(.9)";


setTimeout(()=>{


button.style.transform="";


},150);


};



});

function openSupport(){

    const box = document.getElementById("supportOverlay");

    box.style.display = "flex";

}


function closeSupport(){

    const box = document.getElementById("supportOverlay");

    box.style.display = "none";

}


function closeSupportOutside(event){

    if(event.target.id === "supportOverlay"){

        closeSupport();

    }

}
