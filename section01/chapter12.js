//1. 함수 표현식
function funcA(){
    // console.log("funA");
}

let varA = funcA;
varA();

let varB = function funcB() { //익명 함수
    // console.log(" funcB");
};

varB();

//2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varc(10));