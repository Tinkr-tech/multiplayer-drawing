const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

context.beginPath();
context.arc(50, 50, 20, 0, 2 * Math.PI);
context.fillStyle = 'green';
context.fill();
