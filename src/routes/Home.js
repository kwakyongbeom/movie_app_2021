import React from "react";//component를 만들기 위해선 항상 react를 import 해야함
import PropTypes from "prop-types";  //prop-types import 
import axios from "axios"; //axios import (data-fetch를 위해)
import Movie from "../components/Movies" //Movie component 
import "../Home.css";


class Home extends React.Component{ //필수적인 상속 
  
  state={ //component의 데이터를 넣을 공간,
    count:0,
    isLoading:true,
    movies:[]
  };

  add =() =>{
    this.setState(current => ({count:current.count+1})); //setState는 state를 변경할 때 적용 여기서 current는 현재 state정보들을 갖고있음 
  };

  getMovies=async () =>{ //비동기 함수 
    const {
      data:{
        data:{movies} //데이터 형테가  x.data.data.movies 이것을 효과적으로 줄이기위해  {data:{data:{movies}}} ->data안의 data안의 movies잡음(이제부터 movies로 접근) ES6 문법
      }
    }=await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); //해당 uri에 대한 json 데이터가 올 때까지 기다리겠따
    console.log(movies); //이렇게 movies로 가볍게 접근가능 

    this.setState({movies,isLoading:false}); // state안의 movies에 axios로 받은 movies fetch 원래는 movies(state):movies(axios) 여야 하는데 둘의 이름이 같아 movies만 넣으면 됨 
  };
  componentDidMount() //render 완료 후 실행됨  ,data를 fetch 하는 역할 
  {
    this.getMovies();
  }

  render() //실질적으로 화면에 그리는 함수 
  {
    //render에서 state 사용시 this.state.변수로 접근 
    const {isLoading,movies} = this.state;  //{isLoading}:state안의 isLoading 변수에 바로 접근 함 
    
    //JSX이기 때문에 html tag의 calss라 하면안되고 ClassName이라 해야함 여기서 class 라하면 위에 정의된 component class로 인식됨
   return (<section className="container">
    {isLoading? //isLoading이 true면  
    <div className="loader"> 
      <span className="loader__text">Loading</span>
    </div>: //isLoading이 false면 
    <div className="movies">
      {
        movies.map(movie => {
     
          return (<Movie // 각 prop 에  값전달
            key={movie.id} //항상 key prop 정의 해야함 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            genres={movie.genres}
            />
            );
        })
      }
    </div>
    }
    </section>
    );
  }
  
  
}

export default Home;
