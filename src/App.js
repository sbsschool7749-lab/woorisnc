import logo from './logo.svg';
import './App.css';

// 1.Greeting 컴포넌트를 import 한다.
import Greeting from './Greeting';
import logo from './logo.svg';

// 컴포넌트 : 화면을 조립하는 재사용 가능한 '레고블럭'
// => UI를 구성하는 독립적이고 재사용 가능한 코드 조각
// => jsx를 반환하는 자바스크립트 함수
// JSX(javaScript XML) : 리액트에서 UI를 표현하는 문법
// => 하나의 부모요소로 감싸야 한다.
// => ex) <div>
//           <h1>...</h1>
//           <p>...</p>
//           </div>

//   <>
//     <div>...</div>
//     <div>...</div>
//   </>

// => 자바스크립트 표현식을 {}안에 삽입 가능
// => 속성과 스타일도{}안에 작성, class는 className으로 사용.
// index.js : 리액트 앱의 진입점 
// => ReacrDom.render()코드를 통해서 "어떤 컴포넌트를 어디에 그릴지" 결정하는 가장 중요한 파일
// App.js : 리액트 앱의 메인 페이지에 해당하는 컴포넌트
// App.css, index.css : 컴포넌트나 전역 스타일을 꾸미는 css

//index.html : 리액트 앱에 유일한 html => <div id ="root"></div>이 안에 모든 UL를 넎는다.
//package.json : 프로젝트의 '주민등록등본' 같은 파일.
// => 프로젝트이름, 버전, 사용중인 라이브러리 목록, 명령어들이 기록


function App() {
  return (
     <>
     <div className = "App">
      <header className = "App-header">
       <img src ={iogo} className = 'App-lpgo' alt='logo'/>
       {/*2. 일반 html 태그처럼 컴포넌트를 사용한다. */}
       <Greeting />      
      </header>

      </div>
      <profile/> 
      <profile/>    

      <div className = "App">
       <UserCard/>
       </div>
    </>
  );
}

export default App;
