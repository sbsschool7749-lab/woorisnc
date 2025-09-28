// 구구단 출력하기

// 단을 입력받고 해당 단의 구구단을 출력한다


// let dan = parseInt(prompt("몇 단을 출력할까요?"));

// for (let i = 1; i <= 9; i++) {
//     console.log(`${dan} x ${i} = ${dan * i}`);
// }       


let dan = Number(prompt("======== 단 입력========"));
// alert(dab + " 단")

console.log("======== " + dan + " 단 출력 ========");
// 구구단을 출력하는 반복문을 만든다.
// for(초기화(시작조건); 조건식(반복조건), 증감식(반복 후 작업))

for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
}

