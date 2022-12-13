function createTable() {
    let num = document.getElementById("num").value;
    let i = 1;

do {
    document.getElementById("p1").innerHTML= `${num} X ${i} = ${num * i} <br>`;
    i++;
} while(i<=10);
}


//while loop

function printEvenOdd() {
    let i=1;
    while(i<=50) {
        if(i % 2==0) {
            document.getElementById("p3").innerHTML += `${i} is even number <br>`;

        } else {
            document.getElementById("p3").innerHTML += `${i} is Odd number <br> `;
        }
        i++;
    }
}

function factNumber() {
    let num2 = document.getElementById("num2").value;
    fact=1;
    for(i = num2; i>=1; i--) {
        fact= fact * i;
    }
    document.getElementById("p4").innerHTML+=`factorial number is ${fact} <br>`;

}


//for each ES-5
const arr = ["jyoti","simran", "puja"];
arr.forEach((ele)=> {
    document.getElementById("p5").innerHTML+=`${ele} <br>`;
})

//Set
let nameSet = new Set();
nameSet.add("abc");
nameSet.add("xyz");
nameSet.add("pqr");
console.log(nameSet);

//nameSet.delete("abc");
console.log(nameSet);

console.log(nameSet.size);

//for loop
for(let arr of nameSet) {

     document.getElementById("p6").innerHTML +=`${arr} <br>`;
}


//convert in unique array

let array = ["hare", "ram", "hare", "ram" ,"ram", "hare", "hare"];
console.log(array);

// let set = new set(array);
// console.log(set);

// let a = array.from(set);
// console.log(a);

console.log(array.from(new Set(array)));
