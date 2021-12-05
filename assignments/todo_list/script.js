
let inputField = document.querySelector("input");  // to take value from input field
let divClass = document.querySelector('.todos');  // to add new p tag inside div field
let count = 0;
function addtodo(){
    let inputData = inputField.value;
    let ptag = document.createElement("p");
    ptag.innerHTML=inputData;
    ptag.setAttribute("key",count); 
    divClass.append(ptag);
    inputField.value="";
    console.log(count);
    count+=1;

    // adding event listeners to check if someone clicks p tag thna to remove it
    
    
}
divClass.addEventListener("click",function(e){
    console.log(e.target);
    divClass.removeChild(e.target);
});