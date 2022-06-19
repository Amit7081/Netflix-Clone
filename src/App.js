import './App.css';
import Row from './components/Row';
import requests from './request.js'
import Banner from './components/Banner.js'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
     <Banner/>

     <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge = {true}/>
     <Row title = "TRENDING NOW" fetchUrl={requests.fetchTrending}/>
     <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     


    </div>
  );
}

export default App;



// API Keys

// 4f596d0be68317c7c72387db581fa8fe

// https://api.themoviedb.org/3/movie/550?api_key=4f596d0be68317c7c72387db581fa8fe


// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjU5NmQwYmU2ODMxN2M3YzcyMzg3ZGI1ODFmYThmZSIsInN1YiI6IjYyYWUwNTEzNjJlODZmMDA4YWRhZGEyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0TwzxU0GFhVgvgZlWqxbj9faRY2q0vzVr-uu12dsuho

// 

