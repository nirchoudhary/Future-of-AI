/* script.js */

document.addEventListener('DOMContentLoaded', function () {
    let colors = [
        'linear-gradient(to bottom, #f4f4f9, #e0e0e0)',
        'linear-gradient(to bottom, #e0e0e0, #c0c0c0)',
        'linear-gradient(to bottom, #c0c0c0, #a0a0a0)',
        'linear-gradient(to bottom, #a0a0a0, #f4f4f9)',
        'linear-gradient(to bottom, #e0f7fa, #b2ebf2)',
        'linear-gradient(to bottom, #ffe0b2, #ffcc80)'
    ];
    let currentIndex = 0;

    function changeBackground() {
        document.body.style.background = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeBackground, 5000); // Change background every 5 seconds
});
