import React from 'react';


class About extends React.Component{
    componentDidMount()
    {
         // Movies에서 보낸 state 안에있는 내가보낸 정보들이 loacion ->state -> custom field로 접근 가능 그래서 location으로 접근 
         //history는 redirect할 때 사용되는 함수들이 정의 되있음 
        const {location,history} =this.props;
        if(location.state===undefined)//만약 location에 state가 없다면 redirect를 해준다
        {
            history.push("/"); //만약 state 필드가 없으면 처음 페이지로 redirect 
        }
    }

    render()
    {
        const {location} =this.props;
        if(location.state) //state값이 있으면 state에서 title 값을 불러옴 
        {
            return <span>{location.state.title}</span>;
        }
        else
        {
            return null;
        }
    }
}

export default About;