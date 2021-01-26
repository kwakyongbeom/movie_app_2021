import React from "react";//component를 만들기 위해선 항상 react를 import 해야함
import {HashRouter,Route} from "react-router-dom";  //HashRouter는 uri 끝에 /#이 붙음 github pages를 위해, 기본 Router는 BrowserRouter가 있음 
import About from "./routes/About.js";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
function App()
{
  //Route는 2가지 prop이 있다 하나는 경로를 선언하고, 두번 째는 해당 경로에 대한 UI 즉 페이지 선언이다 
  // 우리가 /about 을오 이동시 component About 이 나온다
  //여기서 uri 동작방식은 하나라도 해당 path가 겹치면 전부 렌더링한다
  //예를 들어  초반 페이지인 /은  /,/about 모두 겹친다 그러므로 오류발생 
  //이 때 exact 속성을 사용하면 완전히 일치 할때만 렌더링함  
  //또한 Navigation안에 Link component를 사용하기 때문에 항상 Route component안에 있어야 한다 .
  return (
  <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>  
  </HashRouter>);
}

export default App;