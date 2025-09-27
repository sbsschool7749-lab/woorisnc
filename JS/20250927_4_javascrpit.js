// 사용자 프로필 정보 관리하기
// 회원의 프로필 정보를 변수에 담아 관리하는 상황입니다. 아이디나 이름은 한번 정하면 바뀌지 않지만
// 레벨이나 포인트는 계속 변동될 수 있습니다.

// 사용자 프로필
// 1.변수 선언과 초기화
// 한번 가입하면 바뀌지 않는 정보는 상수(const)로 선언
 const userID ='GillDong123'; //아이디
 const userName = '고길동'; //이름

//  레벨이나 포인트처럼 자주 바뀌는 정보는 Let으로 선언=>  userLevel, userPoints

 let userLevel = 1; //레벨
 let userPoints = 0; //포인트

// 로그인 상태는 true(로그인), false(로그아웃)로 표현 가능=> 블리언 자료형
    let isLoggedIn = true; //로그인 상태로 초기화  
    
// 2.프로필 정보 출력
console.log("사용자 아이디: " + userID);
console.log("사용자 이름: " + userName);
console.log("사용자 레벨: " + userLevel);
console.log("사용자 포인트: " + userPoints);
console.log("로그인 상태: " + isLoggedIn);

// 사용자 활동에 따른 정보 변경
// 1.레벨업

console.log("사용자가 활동을 시작합니다.");
userLevel = userLevel + 1; //레벨 1 증가
userPoints = userPoints + 100;

console.log("사용자 레벨: " + userLevel);
console.log("사용자 포인트: " + userPoints);
console.log("로그인 상태: " + isLoggedIn);

// 로그아웃
isLoggedIn = false; //로그아웃
console.log("로그인 상태: " + isLoggedIn);


