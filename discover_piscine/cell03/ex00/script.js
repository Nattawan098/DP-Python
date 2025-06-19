const changeColorBtn = document.getElementById('changeColorBtn');

function getRandomColor() {
   
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    
    return `rgb(${r}, ${g}, ${b})`;
}

changeColorBtn.addEventListener('click', function() {
    
    const newColor = getRandomColor();

    document.body.style.backgroundColor = newColor;
});
