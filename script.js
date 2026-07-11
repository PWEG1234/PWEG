/* ===========================
      PWEG SCRIPT
===========================*/


// ===========================
// MENU
// ===========================

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");


function openMenu(){

    sideMenu.classList.add("show");

    menuOverlay.classList.add("show");

}


function closeMenuFunc(){

    sideMenu.classList.remove("show");

    menuOverlay.classList.remove("show");

}



if(menuBtn){

    menuBtn.addEventListener("click", openMenu);

}


if(closeMenu){

    closeMenu.addEventListener("click", closeMenuFunc);

}


if(menuOverlay){

    menuOverlay.addEventListener("click", closeMenuFunc);

}



// بستن منو بعد از انتخاب گزینه

document.querySelectorAll(".side-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        closeMenuFunc();

    });

});




// ===========================
// SUPPORT WINDOW
// ===========================


const supportBtn = document.getElementById("supportBtn");

const supportOverlay = document.getElementById("supportOverlay");

const supportClose = document.getElementById("supportClose");



function openSupport(){

    if(supportOverlay){

        supportOverlay.style.display="flex";

    }

}



function closeSupport(){

    if(supportOverlay){

        supportOverlay.style.display="none";

    }

}



if(supportBtn){

    supportBtn.addEventListener("click",openSupport);

}



if(supportClose){

    supportClose.addEventListener("click",closeSupport);

}



// بستن با کلیک بیرون پنجره

if(supportOverlay){

    supportOverlay.addEventListener("click",(event)=>{


        if(event.target === supportOverlay){

            closeSupport();

        }


    });

}



// ===========================
// PARTICLES
// ===========================


function createParticle(){


    const particle=document.createElement("div");


    particle.className="particle";


    particle.style.left=Math.random()*100+"vw";


    particle.style.animationDuration=

    (5+Math.random()*10)+"s";


    particle.style.width=

    (2+Math.random()*5)+"px";


    particle.style.height=

    particle.style.width;



    document.body.appendChild(particle);



    setTimeout(()=>{


        particle.remove();


    },15000);



}



// ساخت ذرات

setInterval(createParticle,500);




// ===========================
// PAGE LOAD ANIMATION
// ===========================


window.addEventListener("load",()=>{


    document.body.classList.add("fade-in");


});



// ===========================
// PREVENT ERRORS
// ===========================


console.log("PWEG Website Loaded Successfully 🎮");
