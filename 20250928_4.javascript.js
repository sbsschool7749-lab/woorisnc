// 로그인 및 관리자 권한 확인하기

// 로그인이 되었는가 확인
// 로그인한 사용자의 권한 확인

let loggedIn = false; // true 로그인 함 false 로그인 안함
let userRole = 'user'; //  사용자의 권한 => 관리자 'admin' 일반사용자 'user' 

// prompt() 함수를 이용해서 로그인/로그오프를 선택하고 다시 관리자인지 일반사용자인지 선택한다

let login = prompt("a.로그인/ b.로그오프 (a,b 중 선택)")
userRole = prompt("a.관리자/ b.일반사용자 (a,b 중 선택)")

if(login == 'a') {
    loggedIn = true;
}   else {      
    loggedIn = false;
}

if(loggedIn == true) {
    console.log("로그인이 되었습니다.") // 로그인 되어 있는 상태
    alert('로그인이 되었습니다.)
    if(userRole == 'a') {
       console.log("관리자님,환영합니다.~") 
    } else {
        console.log("로그인이 필요합니다. 로그인 페이지로 이동합니다.")
    }   

    console.log("===================================");


