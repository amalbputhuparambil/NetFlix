import React,{useEffect,useState} from 'react'
import { API_KEY } from '../../Constants/Constants'
import axios  from '../../axios'
import './Banner.css'

function Banner() {
    const[n,setn]=useState(null)
    const[state,setState]=useState([]);
    useEffect(()=>{
        DataFetch()
  const n=Math.trunc(Math.random()*20)+1;
  setn(n);
 
    },[])
   const DataFetch = () =>{
    axios.get(`discover/movie?api_key=${API_KEY}`).then((Respo)=>{
       console.log(Respo.data.results);
        setState(Respo.data.results);  
    })
    
   }
   
    return (
     
        <div className='banner'>
             
            <>
                <img className='image' src={`https://image.tmdb.org/t/p/original/${state[n]&&state[n].poster_path}`}/>
            <div className='bck'>

                <h1 className='title'>{state[n] && state[n].title}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{state[n] && state[n].overview}</h1>
          
     
        </div></>

        </div>
    
    )
}

export default Banner