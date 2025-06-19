const balloon = $('#balloon');
let size = 200;
const minSize = 200;
const maxSize = 420;
let currentColorIndex = 0;
const colors = ['red', 'green', 'blue'];
function updateBalloonStyle() {
    
    balloon.css({ 
        'width': `${size}px`,
        'height': `${size}px`,
        'background-color': colors[currentColorIndex]
    });
}

balloon.on('click', function() { 
    size += 10;
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    if (size > maxSize) {
        size = minSize;
        currentColorIndex = 0;
        alert("Balloon exploded!"); 
    }
    updateBalloonStyle();
});

balloon.on('mouseout', function() { 
    size -= 5;

    if (size < minSize) {
        size = minSize;
    }
    updateBalloonStyle();
});
updateBalloonStyle();