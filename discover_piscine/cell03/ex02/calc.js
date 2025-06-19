// 1. เข้าถึงองค์ประกอบ HTML ต่างๆ ด้วย ID
const num1Input = document.getElementById('num1');
const operatorSelect = document.getElementById('operator');
const num2Input = document.getElementById('num2');
const tryMeBtn = document.getElementById('tryMeBtn');

// 2. เพิ่ม Event Listener ให้กับปุ่ม 'Try me!'
tryMeBtn.addEventListener('click', function() {
    // อ่านค่าจาก Input fields และ Operator
    const num1Str = num1Input.value;
    const num2Str = num2Input.value;
    const operator = operatorSelect.value;

    // แปลงค่าจาก string เป็น number
    // parseInt() จะแปลงสตริงเป็นจำนวนเต็ม
    const num1 = parseInt(num1Str);
    const num2 = parseInt(num2Str);

    let result; // ตัวแปรสำหรับเก็บผลลัพธ์

    // 3. ตรวจสอบ Input: ต้องเป็นจำนวนเต็มบวก (>= 0)
    // isNaN() ตรวจสอบว่าเป็น Not-a-Number (ไม่ใช่ตัวเลข) หรือไม่
    // || คือ OR operator
    // num < 0 ตรวจสอบว่าเป็นบวกหรือไม่
    if (isNaN(num1) || num1 < 0 || isNaN(num2) || num2 < 0) {
        alert('Error :('); // แสดง alert message
        console.log('Error :('); // แสดงใน console log
        return; // หยุดฟังก์ชันทันที
    }

    // 4. ทำการคำนวณตาม Operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // 5. ตรวจสอบการหารด้วยศูนย์
            if (num2 === 0) {
                alert("It's over 9000!"); // แสดง alert message
                console.log("It's over 9000!"); // แสดงใน console log
                return; // หยุดฟังก์ชัน
            }
            result = num1 / num2;
            break;
        case '%':
            // 5. ตรวจสอบ modulo ด้วยศูนย์
            if (num2 === 0) {
                alert("It's over 9000!"); // แสดง alert message
                console.log("It's over 9000!"); // แสดงใน console log
                return; // หยุดฟังก์ชัน
            }
            result = num1 % num2;
            break;
        default:
            alert('Invalid operator!');
            console.log('Invalid operator!');
            return;
    }

    // 6. แสดงผลลัพธ์ใน Alert message และ Console log
    alert('Result: ' + result);
    console.log('Result: ' + result);
});

// 7. ฟังก์ชัน Alert Pop-up ทุก 30 วินาที
// setInterval() จะเรียกใช้ฟังก์ชันซ้ำๆ ทุกๆ ช่วงเวลาที่กำหนด (เป็นมิลลิวินาที)
setInterval(function() {
    alert('Please, use me...'); // ข้อความที่ต้องการให้แสดง
}, 30000); // 30000 มิลลิวินาที = 30 วินาที