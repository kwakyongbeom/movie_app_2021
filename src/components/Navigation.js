import React from 'react';
import {Link } from "react-router-dom"; //a tag의 href를 사용하지 않기 위해 react는 href쓰면 안됨 전체를 새로고침 하기때문에

function Navigation()
{
    return(
        <div>
        <Link to="/">Home</Link>
        <Link to={{
            pathname:"/about", // 목적지
            state:{// prop 전달,route로 정보 보내기 
                fromNavigation:true //obj에 fromNavigation 속성 ㅗ내기 
            }
        }}>About</Link>
        </div>

    );
}

export default Navigation;