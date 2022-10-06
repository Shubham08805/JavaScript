// Grading Plan
// 100 - 80 : "A";
// 80 - 60 : "B";
// 60 - 40 : "C";
// 40 - 10 : "Fail"

const marks=90;
if(marks>80 && marks<=100){
     console.log("A");
}
else if(marks>60 && marks<=80){
    console.log("B");
}
else if(marks>40 && marks<=60){
    console.log("C");
}
else if(marks>10 && marks<=40){
    console.log("fail");
}
else{
    console.log("Provide valid marks");
}