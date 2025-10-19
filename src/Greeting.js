// 1. 리액트 라이브러리를 불러온다.
import React from "react";
import logo from "./logo.svc";
// 2.Greeting이라는 함수 컴포넌트를 만든다.
function Greeting() {
    return <h1>저는 새로운 컴포넌트 입니다.!</h1>
}

// 3. 다른 파일에서 이 컴포넌트를 쓸 수 있도록 내보낸다.
export default Greeting