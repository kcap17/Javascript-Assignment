
let allTodo = document.querySelectorAll("button")[0];  // All todos
let completed = document.querySelectorAll("button")[1]  // Completed Todos
let pending = document.querySelectorAll("button")[2] // Pending Todos
let div = document.querySelector("div.todos")
/* function addtodo(){
    let inputData = inputField.value;
    let ptag = document.createElement("p");
    ptag.innerHTML=inputData;
    ptag.setAttribute("key",count); 
    divClass.append(ptag);
    inputField.value="New todolist!"; 
    console.log(count);
    count+=1;
} */
let todos=[]

async function todoFetching(){
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const json = await response.json();
    todos = json.slice(0,100);
    console.log(todos);
  }
  catch(e){
    console.log(e);
  }
}

allTodo.addEventListener('click', function(){
  div.innerHTML ="";
  todos.forEach((todo,index)=>{
    const newTodo=document.createElement('p');
    newTodo.setAttribute('key',index);
    newTodo.innerHTML =todo.title;
    div.appendChild(newTodo);
  })
});
completed.addEventListener('click', function(){
  div.innerHTML ="";
  todos.forEach((todo,index)=>{
    if(todo.completed===true){
    const newTodo=document.createElement('p');
    newTodo.setAttribute('key',index);
    newTodo.innerHTML =todo.title;
    div.appendChild(newTodo);
    }
  })
});
pending.addEventListener('click', function(){
  div.innerHTML ="";
  todos.forEach((todo,index)=>{
    if(todo.completed===false){
    const newTodo=document.createElement('p');
    newTodo.setAttribute('key',index);
    newTodo.innerHTML =todo.title;
    div.appendChild(newTodo);
    }
  })
});

todoFetching();


