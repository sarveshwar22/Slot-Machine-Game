let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')
let inpspeed=document.getElementById('inputspeed')
let values = [
    '1','2','3','4','5','6','7','8','9','0'
]

function getRandomValue(){
    return values[Math.floor(Math.random()*10)]
}

setInterval(() => {
    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();
}, 300);
