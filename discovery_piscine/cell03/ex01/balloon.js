// 1. เข้าถึงองค์ประกอบลูกโป่งด้วย ID
const balloon = document.getElementById('balloon');

// 2. กำหนดขนาดเริ่มต้นของลูกโป่ง
let currentSize = 200; // เริ่มต้นที่ 200px

// 3. กำหนดลำดับสี
// โจทย์บอก: แดง -> เขียว -> น้ำเงิน -> แดง...
const colors = ['red', 'green', 'blue'];
let currentColorIndex = 0; // index 0 คือ 'red'

// 4. เพิ่ม Event Listener สำหรับการคลิกที่ลูกโป่ง
balloon.addEventListener('click', function() {
    // A. เพิ่มขนาดลูกโป่ง 10px
    currentSize += 10;

    // B. อัปเดตขนาดใน CSS
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';

    // C. ตรวจสอบว่าลูกโป่งระเบิดหรือไม่
    if (currentSize > 420) { // ถ้าระเบิด
        // กลับไปขนาดเดิม (200px)
        currentSize = 200;
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';

        // กลับไปสีแดง (red)
        currentColorIndex = 0; // index 0 คือ 'red'
        balloon.style.backgroundColor = colors[currentColorIndex];

    } else { // ถ้ายังไม่ระเบิด ให้เปลี่ยนสี
        // D. เปลี่ยนสีตามลำดับ
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        // % colors.length ใช้เพื่อให้ index วนกลับไป 0 เมื่อถึงสีสุดท้าย (blue)
        // เช่น ถ้า currentColorIndex เป็น 2 (blue), (2+1)%3 = 0 (red)

        balloon.style.backgroundColor = colors[currentColorIndex];
    }
});

