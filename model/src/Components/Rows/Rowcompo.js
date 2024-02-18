import React,{useEffect,useState} from 'react'
import { API_KEY } from '../../Constants/Constants';
import axios from '../../axios'
import './Rowcompo.css'
import YouTube from 'react-youtube';


function Rowcompo() {
    
    const[state,SetState]=useState([]);
    const[movieId,setMovieId]=useState(null)

useEffect(()=>{
    dataFetch();

},[])
const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };
const dataFetch=()=>{
    axios.get(`discover/movie?api_key=${API_KEY}`).then((respo)=>{
        console.log(respo.data.results);

        SetState(respo.data.results)

    })

}
const playmovie=(val)=>{
    console.log(val);
   axios.get(`/movie/${val}/videos?api_key=${API_KEY}`).then((value)=>{ 
    console.log(value.data.results[0].key)
        setMovieId(value.data.results[0].key)
    })
}
const closeMovie=()=>{
    setMovieId(null);
    console.log(movieId);
}

    return (
        <>
            <h2 className='tittle' >Popular Movies</h2>
        <div className='row'>
        
           {state.map((val)=>{
            return(
            <div className='posters'>
                <img onClick={()=>playmovie(val.id)} className='poster' alt='poster' src={`https://image.tmdb.org/t/p/original/${val.poster_path}`} />
               
                </div>
            )
            })}
           
                
        </div>
        <div className='spacing'>
    
      
    {movieId && <button className='btn' onClick={closeMovie}>X</button>}
    </div>
        { movieId && <YouTube videoId={movieId} opts={opts} />}
       

  

        </>
    )
}

export default Rowcompo