function dep(a, b) {
    
    let numA = Number(a);
    let numB = Number(b);

    let sum = numA + numB;
    console.log("The sum of " + numA + " and " + numB + " is " + sum);

    return sum;
}

// Call the function
dep("10", "20");
