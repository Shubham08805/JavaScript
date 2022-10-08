var b=5;
function outer(){
var a=10;
function inner(){
    console.log(a+b);
}
inner();
}
var result=outer();
// console.log(result);