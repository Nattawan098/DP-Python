const changeColorBtn = $('#changeColorBtn'); 
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

changeColorBtn.on('click', function() { // เปลี่ยนตรงนี้

    const newColor = getRandomColor();
    $('body').css('background-color', newColor); // เปลี่ยนตรงนี้
});