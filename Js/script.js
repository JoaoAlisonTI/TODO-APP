let inputTask = document.getElementById("input-task");
let todoList = document.getElementById("todo-list");
let myTodo = document.querySelectorAll(".todo");
let deleteBtn = document.querySelectorAll(".delete-btn");
let spanTotal = document.getElementById("total");
let spanConcluidas = document.getElementById("concluidas");

let totalConcluidas = 0;
spanConcluidas.innerHTML = totalConcluidas;
let totalTasks = 0;
spanTotal.innerHTML = totalTasks;
let minimalValue = 3;
let listNum = 0;

//Função de adicionar
addList=()=>{
    // get
    let inputText = filterList(inputTask.value);
    // set 
   if (inputText) {
    todoList.innerHTML += 
          `<div class="todo" id="list${listNum}">
            
              <div onclick="verificarConcluidas(${listNum})" class="todo-status" id="todo-status${listNum}">
              <select id="mySelect${listNum}">
                <option value="nada">⚫</option>
                <option value="concluida">✅</option>
              </select>
              </div>
              
              <div class="todo-title" id="text${listNum}">${inputText}</div>
              
              <div class="todo-actions" id="todo-actions">
              <button onclick="deleteModal(${listNum})" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="delete-btn"><i class="bi bi-trash"></i></button>
              </div>
     
          </div>`;
        
        
        spanTotal.innerHTML++;
        inputTask.value=" ";
        listNum++;
   }
   
}

filterList=(x)=>{
       if (x) {
            if (x.length >= minimalValue) {
                return x;
            }
            else{
              
            }
       }
       else{
            return false;
       }
}


//Deletando as atividades
deleteModal = (listId) => {
  let todoTitle = document.getElementById(`text${listId}`).innerHTML;
  
  document.getElementById("modal-body").innerHTML = `<div id="text-div" class="alert alert-dark" role="alert"><h4>${todoTitle}</h4></div>
  <hr>
  <button onclick="deleteConfirm(${listId})" class="confirmar-btn" id="confirmar-btn" data-bs-dismiss="modal">DELETAR</button>`;
  
}

deleteConfirm = (listId) => {
    let myTodo = document.getElementById(`list${listId}`);
    todoList.removeChild(myTodo);
    
    spanTotal.innerHTML--;
    
}


//Total de tasks concluidas
verificarConcluidas = (listId) => {
let meuSelect = document.getElementById(`mySelect${listId}`);

meuSelect.addEventListener('change', function(){
    if (meuSelect.value === "concluida") {
    spanConcluidas.innerHTML++;
  } else if (meuSelect.value === "nada") {
    spanConcluidas.innerHTML--;
  }
})
}
  

//Refatorar o código adicionando div nos elementos da linha