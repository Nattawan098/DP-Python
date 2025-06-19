const ftList = <span class="math-inline">\('\#ft\_list'\); 
function saveTodos\(\) \{
const todos \= \[\];
ftList\.children\(\)\.each\(function\(\) \{
todos\.push\(</span>(this).text()); 
    });
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/"; 
    console.log("To-Do saved:", todos); 
}

function loadTodos() {
    const cookieData = document.cookie.split(';');
    let todosData = null;

    for (let i = 0; i < cookieData.length; i++) {
        let cookie = cookieData[i].trim();
        if (cookie.startsWith("todos=")) {
            todosData = JSON.parse(decodeURIComponent(cookie.substring(6)));
            break;
        }
    }

    if (todosData) {
        try {
            todosData.forEach(todoText => {
                createTodoElement(todoText, false);
            });
            console.log("To-Do loaded:", todosData);
        } catch (e) {
            console.error("Error parsing todos cookie:", e);
        }
    } else {
        console.log("No To-Do found in cookie.");
    }
}

function createTodoElement(todoText, shouldSave = true) {
    const todoItem = $('<div>') 
        .text(todoText) 
        .addClass('todo-item'); 

