// 변수 : 데이터를 저장하는 저장 공간. 필요할 때 꺼내쓰고 다시 저장 가능
// 변수선언 : var, let, const
// 변수명 = 값; 오른쪽에 있는 값을 왼쪽에 변수에 대입(저장)한다.

// let 으로 변수 선언하기=> 값을 바꿀 수 있는 변수를 만들 때 사용   
// name  이라는 변수를 만들고, 고길동이라는 문자열을 저장
let name = "고길동"; //문자열 자료형
console.log("고길동");
// name 변수의 값을 둘리로 변경
name = "둘리";
console.log(name);

// let name = "마이콜";   에러발생, let으로 선언된 변수는 중복선언 불가

// const로 상수 선언하기. 한번 저장된 값을 변경할 수 없다.
const PI = 3.14; //숫자 자료형
console.log(PI);

// PI = 3.14159; //에러발생, const로 선언된 변수는 재할당 불가
// 자료형 : 변수에 담을 수 있는 데이터의 종류=>문자열, 숫자, 블리언
// 문자열 : "", ' ' 로 감싸진 데이터
// 숫자 : 정수, 실수
// 블리언 : true, false (참, 거짓)
let message = "안녕하세요"; //문자열
let age = 20; //숫자
let isstudent = true; //블리언
console.log(message);
console.log(age);
console.log(isstudent);

// typeof 연산자 : 변수에 저장된 데이터의 자료형을 알려주는 연산자
// typeof 변수명(값,객체,함수...)
console.log(typeof message); 
console.log(typeof age); 
console.log(typeof isstudent); 

// 배열 : 여러개의 데이터를 순서대로 담는 목록을 말한다

// fruits 라는 이름의 변수에 여러개의 값을 배열로 저장
let fruits = ["사과", "바나나", "오렌지","딸기"]; //배열선언
console.log(fruits);

// 배열의 네번째 항목(요소)에 접근하기 => 배열명,[인덱스번호]
console.log(fruits[3]); //사과

// 배열의 첫번째 항목에 접근하기
console.log(fruits[0]); 

// 배열에 새로운 항목 추가 => 배열명. push(값)
fruits.push("샤인머스켓");
console.log(fruits);

// 배열의 길이(항목의 개수) => 배열명.length
console.log(fruits.length); //5
 