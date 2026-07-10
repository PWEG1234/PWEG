const ADMIN_PASSWORD="PWEG2026";


let games=[];


let imageData="";





function login(){


let pass=
document.getElementById("password").value;



if(pass===ADMIN_PASSWORD){


document.getElementById("login")
.style.display="none";


document.getElementById("dashboard")
.style.display="block";


loadGames();


}

else{


document.getElementById("error")
.innerHTML="رمز اشتباه است";


}


}





// پیش نمایش آپلود عکس


document
.getElementById("imageFile")
.addEventListener("change",function(){


let file=this.files[0];


let reader=new FileReader();



reader.onload=function(e){


imageData=e.target.result;


document
.getElementById("preview")
.src=imageData;


}


reader.readAsDataURL(file);


});







// اگر لینک عکس وارد شد


document
.getElementById("imageLink")
.addEventListener("input",function(){


if(this.value){


imageData=this.value;


document
.getElementById("preview")
.src=this.value;


}


});








function saveGame(){


let game={


title:
document.getElementById("gameTitle").value,


description:
document.getElementById("gameDesc").value,


download:
document.getElementById("downloadLink").value,


image:imageData


};




games.push(game);



localStorage.setItem(

"PWEG_GAMES",

JSON.stringify(games)

);



clearForm();


showGames();



}





function loadGames(){


let data=

localStorage.getItem("PWEG_GAMES");



if(data)

games=JSON.parse(data);



showGames();


}






function showGames(){


let box=
document.getElementById("games");


box.innerHTML="";



games.forEach((game,index)=>{


box.innerHTML+=`


<div class="game-item">


<img src="${game.image}">



<div>

<h3>

${game.title}

</h3>


<p>

${game.description}

</p>


<button onclick="deleteGame(${index})">

حذف

</button>


</div>



</div>


`;


});


}





function deleteGame(index){


games.splice(index,1);



localStorage.setItem(

"PWEG_GAMES",

JSON.stringify(games)

);



showGames();


}





function clearForm(){


document.getElementById("gameTitle").value="";

document.getElementById("gameDesc").value="";

document.getElementById("downloadLink").value="";

document.getElementById("imageLink").value="";

document.getElementById("preview").src="";

imageData="";


}
