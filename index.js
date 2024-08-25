const menuIcon= document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click",()=>{
    if(menu.className="hidden"){
        menu.classList.remove("hidden");

    }
    else{
        menu.classList.add("hidden");

    }
});
const mybotton= document.getElementById("my-btn");
const para = document.getElementById("demo");

mybotton.addEventListener("click",()=>{
    para.innerHTML="ENJOY YOUR SUBSCRIPTION";
});


