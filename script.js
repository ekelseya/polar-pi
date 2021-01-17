// Below from http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html
let i = 1n;
let x = 3n * (10n ** 1020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}

const piString = String(pi / (10n ** 20n));

const piArray = [...piString];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// move origin
// ctx.translate(500, 500); //Arc path
ctx.translate(200, 100);

// mark origin for reference
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 5, 5);

// convert degrees into radians
const radCalc = degrees => (degrees)*Math.PI/180;
// convert polar coordinates to cartesian coordinates
const xConvert = (r, theta) => (r * Math.cos(theta));
const yConvert = (r, theta) => (r * Math.sin(theta));

ctx.strokeStyle = 'black';
ctx.lineWidth = 1;

let count = 0;

if (count < 1001){
    setInterval(render, 200);
}

function render() {
    let r = piArray[count];
    let theta = radCalc(r*36);
    let x = -(xConvert(r, theta)) * 10;
    let y = -(yConvert(r, theta)) * 10;
    // ctx.arcTo(0, 0, x, y, r*18); // Arc path
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.translate(x, y);
    count++;
}
