// เลือก ft_list div ด้วย jQuery
const ftList = $('#ft_list');

// ฟังก์ชันบันทึก todos ลงใน cookie
function saveTodos() {
    const todos = [];
    // วนลูปผ่าน children ของ ft_list และดึง text content ด้วย jQuery
    ftList.children().each(function() {
        todos.push($(this).text());
    });
    // การจัดการ cookie ยังคงเป็น Vanilla JS
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
    console.log("To-Do saved:", todos);
}

// ฟังก์ชันโหลด todos จาก cookie (ยังคงเป็น Vanilla JS ส่วนใหญ่)
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

// ฟังก์ชันสร้าง To-Do element ใหม่ด้วย jQuery
function createTodoElement(todoText, shouldSave = true) {
    // สร้าง div, ตั้งค่า text และเพิ่ม class ด้วย jQuery ในคำสั่งเดียว
    const todoItem = $('<div>')*
        .text(todoText)
        .addClass('todo-item');

    // เพิ่ม Event Listener สำหรับการคลิกเพื่อลบด้วย jQuery
    todoItem.on('click', function() {
        const confirmDelete = confirm("Do you want to remove this TO DO?");
        if (confirmDelete) {
            $(this).remove(); // ลบ element ที่ถูกคลิกด้วย jQuery
            console.log("Removed To-Do:", todoText);
            saveTodos(); // บันทึกรายการที่อัปเดตแล้วลง cookie
        }
    });

    // เพิ่ม To-Do ใหม่ไว้ด้านบนสุดของรายการด้วย jQuery
    ftList.prepend(todoItem);

    if (shouldSave) {
        saveTodos(); // บันทึก To-Do ใหม่ลง cookie
    }
}

// เลือกปุ่ม "New" ด้วย jQuery
const newButton = $('#newButton');

// Event Listener สำหรับปุ่ม "New" ด้วย jQuery
newButton.on('click', function() {
    let todoText = prompt("Enter a new TO DO:");
    if (todoText !== null && todoText.trim() !== "") {
        createTodoElement(todoText.trim());
    } else if (todoText !== null) {
        console.log("To-Do creation cancelled.");
    } else {
        alert("TO DO cannot be empty.");
        console.log("Attempt to add empty To-Do.");
    }
});

// โหลด todos เมื่อ DOM พร้อมใช้งานด้วย jQuery
$(document).ready(function() {
    loadTodos();
});
// หรือใช้รูปแบบย่อ: $(function() { loadTodos(); });