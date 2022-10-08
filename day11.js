function printVowel(char , time, anotherChar){
    setTimeout(()=>{
        console.log("char: " + char);
        anotherChar();
    },time);
}

// callback hell- nested callback functions passed to a function 
// creates a pyramid structure
printVowel("A",5000,()=>{
    printVowel("E",4000,()=>{
        printVowel("I",3000,()=>{
            printVowel("O",2000,()=>{
                printVowel("U",1000,()=>{
                    console.log("END");
                })
            })
        })
    })
})

// shallow copy- when you want to create an object using another object using assignment operator,
// both variables will point same memory location, change in one variable will impact both variables.

a=[1,2,3]
b=a
b[0]=5
console.log(a);


// Promises : helps you to make asynchronous behaviour of JS-(webapis) to sync
// used to avoid callback hell
// Promise is constructor function

function printVowel(){
    return new Promise((resolve,reject)=>{
        

    })
}