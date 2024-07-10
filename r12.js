

function display4(a, b) {
    if (b === 0) {
        return 0;
    }
    if (b > 0) {
        return a + display4(a, b - 1);
    }
    return -display4(a, -b);
}

console.log(display4(-5, -3));

// display4(5, -3)  =>  -display4(5, 3)
// display4(5, 3)  =>  5 + 10
// d(5,2) => 5 + 5
// d(5,1) => 5 + 0
// 15


// console.log(display4(5, -3));
 