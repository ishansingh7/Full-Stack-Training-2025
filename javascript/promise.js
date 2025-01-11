function promiseEg(flag) {
    return new Promise(function(resolve, reject) { 
        if (flag === 1) {
            resolve("This is a resolved promise");
        } else if (flag === 2) {
            reject("This is a rejected promise");
        } else {
            reject("Invalid flag value");
        }
    });
}
promiseEg(1).then((res)=>{
    console.log(res);
}) .catch((err)=> {
    console.log(rej);
});


