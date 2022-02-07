import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  
  const  getMovie = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const JSON = await response.json()
    setLoading(false);
    setMovie(JSON.data.movies);
  }
  useEffect(()=>{
   getMovie();  
  },[]);
  
  return ( 
    
    <div>
    {loading ? <strong>Loading...</strong> :
      movie.map(m => 
      <div key={m.id}>
        <img src={m.medium_cover_image}/>
        <h1>{m.title}</h1>
        <a href={m.url}>
        <button>Download</button>
        </a>
        <p>{m.summary}</p>

        <ul>
          {m.genres.map((g)=><li key={g}>{g}</li>)}
        </ul>
        </div>
      )
    }
    </div>
  );
  
    
}

export default App;
