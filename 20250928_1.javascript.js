/*
if (조건식) {
    조건식이 참일 때 실행할 코드;
    ...;
} else {
    조건식이 거짓일 때 실행할 코드;
    ...;
}
    =>거짓일 경우가 없을 때 
*/

   let age = 20;

//    age가 18 이상이면 투표권이 있고, 18세 미만이면 투표권이 없다.
//    관계연산자 : ==같다  !=같지않다 >=이상 >초과 <=이하 <미만
    
if (age >= 18) {
    console.log("투표권이 있습니다.");
} else {
    console.log("투표권이 없습니다.");
}

console.log("프로그램 종료");

let soore =90;
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 70점 미만 F
if (soore >= 90) {
    console.log("학점은 A입니다.");
}

// 논리 연산자
// and연산자: && => 모든 조건이 전부 참일 때 결과는 참인 경우 
// ~~ 이고, ~~이며, ~~그리고, ~~이면서
if (soore >= 80 && soore < 90) {
    console.log("학점은 B입니다."); 
}

// or연산자 : || => 조건 중 하나라도 참이면 결과는 참
// ~~이거나, ~~또는, ~~이든지 ~혹은
if (soore >= 80 || soore < 90) {
    console.log("학점은 B입니다.");     
}

// 부정연산자 : ! => 조건이 참이면 거짓, 거짓이면 참
// ~~이 아니다, ~~가 아니다
// score = 79;
if (!(score >= 80 || score < 90)) {
    console.log("학점은 B가 아닙니다.");     
 }

if(score >= 80 && score < 90) {
    console.log("학점은 B입니다.");
} 

if(score >= 70 && score < 80) {
    console.log("학점은 C입니다.");
} 

if(score <70 ) {
    console.log("학점은 F입니다.");
} 

// 여러개의 조건 처리
// if (조건식1) {
// 조건식1이 참일 때 실행할 코드;      
// ...}
// } else if (조건식2) {
// 조건식2가 참일 때 실행할 코드;      
// ...

if (score >= 90 ) {
    console.log("학점은 A 입니다.");     
  }  else if(score >= 80 ) {
    console.log("학점은 B입니다.");
  } else if(score >= 70 ) {
    console.log("학점은 C입니다.");
  } else {
    console.log("학점은 F입니다.");
  }