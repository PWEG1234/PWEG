const AI_API =
"https://pweg-ai.pwegaparat.workers.dev/";


const aiInput =
document.getElementById("aiInput");


const aiSend =
document.getElementById("aiSend");


const aiMessages =
document.getElementById("aiMessages");



function addMessage(text,type){

    const div=document.createElement("div");

    div.className="message "+type;

    div.innerText=text;

    aiMessages.appendChild(div);

    aiMessages.scrollTop =
    aiMessages.scrollHeight;

}



function showLoading(){

    const div=document.createElement("div");

    div.id="loading";

    div.className="message ai";

    div.innerHTML="● ● ●";

    aiMessages.appendChild(div);

}



function hideLoading(){

    const load =
    document.getElementById("loading");

    if(load)
        load.remove();

}



aiSend.onclick=async()=>{


    const text=
    aiInput.value.trim();


    if(!text) return;


    addMessage(text,"user");


    aiInput.value="";


    showLoading();



    try{


        const res =
        await fetch(AI_API,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },


            body:JSON.stringify({

                message:text

            })

        });



        const data =
        await res.json();


        hideLoading();


        addMessage(
            data.answer ||
            "جوابی دریافت نشد",
            "ai"
        );


    }


    catch(error){


        hideLoading();


        addMessage(
        "خطا در ارتباط با سرور",
        "ai"
        );


    }


};
