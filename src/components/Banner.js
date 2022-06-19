import {useState,useEffect} from 'react';
import axios from '../axios';
import requests from '../request';
import "./Banner.css";

const Banner = () => {


const [movies , setMovies] = useState([]);

useEffect( () => {

    async function fetchData(){
     
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request.data.results[])

setMovies(
    request.data.results[Math.floor(Math.random() * request.data.results.length-1)]
);   
return request;

}

    fetchData();
},[])
console.log(movies);

function truncate(str,n) {
    return str?.length > n ?str.substr(0,n-1) + "..." : str;
}
return(

<>
<header className='BannerB'
 style = {{
    backgroundSize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
    backgroundPosition:"center center",

        }}
>

    <div className="Banner_ka_contents">

    <h1 className='Banner_title'>{movies?.title || movies?.name || movies?.original_name}</h1>
    <div className="banner_buttons">

        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>

    </div>

    <h3 className="Banner_overview">{truncate(movies?.overview,150)}</h3>

    </div>
    <div className="fade_bottoms"> </div>
  
</header>

</>

);


}
export default Banner;





