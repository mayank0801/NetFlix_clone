import React, { useState,useEffect} from 'react';
import axios from './axios';
import "./Row.css";
import Yotube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow}){
    const [movies,setMovies]=useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");

useEffect(()=>{
    //run once
    async function fetchData(){
        const request=await axios.get(fetchUrl);
        // console.log(request);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
    
},[fetchUrl]);

// console.table(movies);

const opts={
    height:"390",
    width:"99%",
    playerVars: {
        autoplay:0,
    },
}

const handleClick=(movie)=>{
    if(trailerUrl){
        setTrailerUrl('');
    }else {
        movieTrailer(movie?.title || "")
        .then(url=>{
        const urlParams=new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
         })
         .catch((error)=>console.log(error));
    }
}



    return (
        <div className="row">
            {/*     Title         */}
            <h2>{title}</h2>
            <div className="row_posters">
                
           


            {movies.map(movie=>(
                <img
                key={movie.id}
                onClick={()=>handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src=
                {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                 alt={movie.name}/>
            ))}


            </div>
        
               {trailerUrl && <Yotube videoId={trailerUrl} opts={opts}/>}

        
        </div>
    );
}

export default Row;