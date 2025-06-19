// 1. เข้าถึงองค์ประกอบ HTML
const newButton = document.getElementById('newButton');
const ftList = document.getElementById('ft_list'); // div หลักสำหรับ To-Do list

// 2. ฟังก์ชันสำหรับบันทึก To-Do List ลงใน Cookie
function saveTodos() {
    const todos = [];
    // วนลูปผ่านทุก child element (div.todo-item) ของ ftList
    ftList.querySelectorAll('.todo-item').forEach(item => {
        todos.push(item.textContent); // ดึงข้อความของแต่ละ To-Do item
    });
    // แปลง array ของ To-Do เป็น JSON string แล้วบันทึกลงใน cookie
    // encodeURIComponent ใช้เพื่อป้องกันปัญหาตัวอักษรพิเศษใน cookie
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
    console.log("To-Dos saved:", todos);
}

// 3. ฟังก์ชันสำหรับโหลด To-Do List จาก Cookie
function loadTodos() {
    // แยก cookie ออกมาเป็น key-value pairs
    const cookies = document.cookie.split(';');
    let todosData = null;

    // ค้นหา cookie ที่มีชื่อ "todos"
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith('todos=')) {
            todosData = decodeURIComponent(cookie.substring(6)); // 6 คือความยาวของ "todos="
            break;
        }
    }

    if (todosData) {
        try {
            const todos = JSON.parse(todosData); // แปลง JSON string กลับเป็น array
            // สร้าง To-Do item จากข้อมูลที่โหลดมา
            todos.forEach(todoText => {
                createTodoElement(todoText, false); // false คือไม่ต้องบันทึกซ้ำตอนโหลด
            });
            console.log("To-Dos loaded:", todos);
        } catch (e) {
            console.error("Error parsing todos cookie:", e);
        }
    } else {
        console.log("No To-Dos found in cookie.");
    }
}

// 4. ฟังก์ชันสำหรับสร้าง To-Do Element ใน DOM
function createTodoElement(todoText, shouldSave = true) {
    // สร้าง div ใหม่สำหรับ To-Do item
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item'; // กำหนด class เพื่อจัดสไตล์
    todoItem.textContent = todoText; // กำหนดข้อความของ To-Do

    // เพิ่ม Event Listener สำหรับการคลิกเพื่อลบ To-Do
    todoItem.addEventListener('click', function() {
        // แสดงหน้าต่างยืนยันการลบ
        const confirmDelete = confirm('Do you want to remove this TO DO?');
        if (confirmDelete) {
            // ลบ To-Do item ออกจาก DOM
            ftList.removeChild(todoItem);
            saveTodos(); // บันทึก To-Do List หลังจากลบ
            console.log("Removed To-Do:", todoText);
        }
    });

    // เพิ่ม To-Do item ไปที่ด้านบนสุดของ ft_list
    // insertBefore(newElement, referenceElement)
    // ถ้า ftList มี child element แล้ว ให้แทรกก่อน child ตัวแรก
    // ถ้า ftList ว่างเปล่า (ไม่มี child), appendChild จะทำงานเหมือนกัน
    if (ftList.firstChild) {
        ftList.insertBefore(todoItem, ftList.firstChild);
    } else {
        ftList.appendChild(todoItem);
    }

    // บันทึก To-Do List หลังจากเพิ่ม To-Do ใหม่ (ถ้า shouldSave เป็น true)
    if (shouldSave) {
        saveTodos();
    }
}

// 5. เพิ่ม Event Listener ให้กับปุ่ม 'New'
newButton.addEventListener('click', function() {
    // แสดง prompt เพื่อให้ผู้ใช้ป้อน To-Do ใหม่
    const todoText = prompt('Enter a new TO DO:');

    // ตรวจสอบว่าข้อความที่ป้อนไม่ว่างเปล่า
    // trim() ใช้ลบช่องว่างที่อยู่หน้าและหลังข้อความ
    if (todoText !== null && todoText.trim() !== '') {
        createTodoElement(todoText.trim()); // สร้าง To-Do item
        console.log("Added new To-Do:", todoText.trim());
    } else if (todoText === null) {
        console.log("To-Do creation cancelled.");
    } else {
        alert("TO DO cannot be empty."); // แจ้งเตือนถ้าป้อนค่าว่าง
        console.log("Attempted to add empty To-Do.");
    }
});

// 6. โหลด To-Do List จาก Cookie เมื่อหน้าเว็บโหลดเสร็จ
// เมื่อ DOMContentLoaded ทำงาน หมายความว่า HTML ถูกโหลดและพร้อมใช้งานแล้ว
document.addEventListener('DOMContentLoaded', loadTodos);