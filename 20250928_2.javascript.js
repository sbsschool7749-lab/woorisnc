console.log("안녕하세요");
console.log("안녕하세요");
console.log("안녕하세요");

// 반복문: 특정 작업을 여러번 실행할 때 사용
// for(초기화; 조건식; 증감식) {
//     반복실행할 코드;
//     ...;
// }

// 초기화 => 반복할 때 사용할 반복 제어변수를 초기화 한다.=>반복문 시작 시 초기화는 한번만 한다.
// 조건식 => 조건식이 참일 경우에 반복을 실행한다.
// 증감식 => 제어변수 또는 특정한 값을 증가하거나 감소시킨다.
// 증감식을 이용해서 조건식이 거짓이 되는 순간을 만든다. 조건식이 거짓이 되면 반복문은 종료한다.
// 반복문 실행순서
// 초기화 조건식 반복실행할 코드 증감식 조건식...=>조건식이 거짓이 되면 반복문 종료

for(let i = 0; i < 5;  i=i+1) {
    console.log("안녕하세요");  
}

// i=i+1 => i++ => i+=1

let foods = ['치킨', '피자', '족발', '보쌈', '햄버거'];
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log(foods[3]);
console.log(foods[4]);  



for(let i = 0; i < 5; i++) { //제어번수 i는 인덱스번호로 사용함
    console.log(foods[i]);
}   
console.log("===================================");


for(let i = 0; i < foods.length; i++) { 
    console.log(foods[i]);
}   
console.log("===================================");



