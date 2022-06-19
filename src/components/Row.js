import react, { useState , useEffect} from 'react';
import axios from '../axios';
import '../components/Rows.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_Url = "https://image.tmdb.org/t/p/original/" 
function Row(props){

    const [movies,setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState("");

    useEffect( () => {

async function fetchData(){
    const request = await axios.get(props.fetchUrl);
    setMovies(request.data.results);
    // console.log(request.data.results);
    return request.data.results;
}
fetchData();
    },[props.fetchUrl])

const opts =  {

    height:"390",
    width:"100%",
    playerVars: {
//   
        autoplay:1,
    },


};

const triggered = (movieItems) =>{

if(trailerUrl){
    setTrailerUrl('');
}

else{
    movieTrailer(movieItems?.name || "")
    .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
})
.catch((error) => console.log(error));
}

}
    return(

        <>
        <div className='row'>

     <h2>{props.title}</h2>

 <div className="row__posters">
    {
        movies.map( (movieItems) => (
            <img key = {movieItems.id}
            onClick={() => triggered(movieItems)}
            className={`row__poster ${props.isLarge && "row_LargePoster"}`}  src={`${base_Url}${props.isLarge?movieItems.poster_path: movieItems.backdrop_path}`} alt={movieItems.name} />
        ))
    }
 </div>

      { trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} />}

        </div>
        
        </>
    );

}
export default Row;