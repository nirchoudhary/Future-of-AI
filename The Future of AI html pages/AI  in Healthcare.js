/* script.js */

document.addEventListener('DOMContentLoaded', function () {
    let colors = ['#f4f4f9', '#e0e0e0', '#c0c0c0', '#a0a0a0'];
    let currentIndex = 0;

    function changeBackground() {
        document.body.style.background = `linear-gradient(to bottom, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
        currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeBackground, 1000 ); // Change background every 5 seconds
    
});
