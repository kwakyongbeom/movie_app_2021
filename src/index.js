import React from 'react';//component를 만들기 위해선 항상 react를 import 해야함
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />,document.getElementById('root')); //react application 하나의 component만을 rendering 해야하기 때문에, 그 component가 App이다 
//root라는 id를 갖는 태그안에 데이터들이 들어감 , root는 어디에있냐면 index.html에 있다
