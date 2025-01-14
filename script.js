// selecteurs

// document.querySelector("h4").style.background = "yellow";

// const balisehtml = document.querySelector("h4");

//click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const Response = document.querySelector("p");



questionContainer.addEventListener("click", ()=>{
    questionContainer.classList.toggle("question-clicked");
})
btn1.addEventListener("click",()=>{
    Response.classList.add("show-response");
    Response.style.background = "green";
})
btn2.addEventListener("click", ()=>{
    Response.classList.add("show-response");
    Response.style.background = "red";
    
})
 
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove" , (e)=>{
    console.log(e);
    
})



