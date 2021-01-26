import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({id,year,title,summary,poster,genres}){
    return (
    <Link to ={{
        pathname:'/about',
        state:{
            year,
            title,
            summary,
            poster,
            genres
        }
    }}>
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
        <h3 className="movie__title" style={{backgroundColor: "red"}}>{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
            {genres.map((genres,index)=>( //genres ->item,index ->index
                <li key={index} className="genres__genre">{index}.{genres}</li>
            ))}
        </ul>
        <p className="movie__summary">{summary}</p>
        </div>
        </div>
        </Link>);
}

Movie.prototype={
    id:PropTypes.number.isRequired, //아이디
    title:PropTypes.string.isRequired, //제목 
    summary:PropTypes.string.isRequired,// 정리
    poster:PropTypes.string.isRequired, //이미지
    year:PropTypes.number.isRequired, //년도  
    genres:PropTypes.arrayOf(PropTypes.string).isRequired //장르 string 배열 
};

export default Movie;