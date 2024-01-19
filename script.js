let btn = document.querySelector("button");
btn.addEventListener('click',changeColor)

function changeColor(){

let x=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

let a = Math.floor(Math.random()*16)
let b = Math.floor(Math.random()*16)
let c = Math.floor(Math.random()*16)
let d = Math.floor(Math.random()*16)
let e = Math.floor(Math.random()*16)
let f = Math.floor(Math.random()*16)


let one = x[a];
let two = x[b];
let three = x[c]
let four = x[d]
let five = x[e]
let six = x[f]

let color = `#${one}${two}${three}${four}${five}${six}`

console.log(color)

let r =document.getElementById("res")
r.innerHTML=color

document.body.style.backgroundColor=color;


}