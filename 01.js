// Array Traversing 

let data = [9, 45, 1, 7, 9, 2, 32, 0]

// for (let i = 0; i < data.length; i++) {
//     document.write(`Array ${i} is ${data[i]} <br>`)
// }

x = 4;

function getElement() {
    let el = document.getElementById("element").value
    if (el < data.length) {

        alert(data[el])
    }
    else {
        alert("The range is more than the range")
    }

}