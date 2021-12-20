x=20
y=10
// x = x+y;
x+=y
console.log(x)
//30
x -= y += 9
console.log(x)
//11
console.log(y)
var thisss=(x > 19) ? "too young":"old enough"
console.log(thisss)
let string1="Hello ";
let string2="There!";

console.log(string1+string2)
if (x<y) {
    console.log("hi!")
 }
//3 components for loop
var expression = "Learning is Fun!";

//your code goes here
for (i=0;i<3;i++) {
    console.log(expression)
}

//print loop by evens
var i = 5;
for (k=0; k<10;k+=2) {
    //i=i+k
    i += k;
    //i is being changed constantly through the loop
    let elemP2 = document.createElement('p');
    elemP2.textContent=(`I= ${i} and K=${k}.`)
    document.body.appendChild(elemP2);
}

var day=1
switch (day) {
    case 1: 
       console.log("good day")
       break;
    case 2: 
    console.log("bad day")
       break;
    default: 
    console.log("meh day")
  }
var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

for (i=0;i<myArray.length;i++)
{let ele = document.createElement('p');
    ele.textContent=(myArray[i])
    document.body.appendChild(ele);
}
