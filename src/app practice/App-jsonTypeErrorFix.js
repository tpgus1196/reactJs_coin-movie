import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  //async 키워드 붙은 함수(.then() 사용하지 않기 위함)
  //async-await 사용 안하면 에러남
    //TypeError: response.json is not a function
  useEffect(async()=>{
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const JSON = await response.json()
    setLoading(false);
    setMovie(JSON.data.movies);
    //반드시 여기에서 JSON.data.movies 명시해야함.
    //오류) 여기서 JSON만 입력하고, 아래 return값에서 
    //movie.data.movies.map(m => <div>{m.title}</div>) 하면 안나옴
    
  },[]);
  
  return ( 
    
    <div>
    {loading ? <strong>Loading...</strong> :
      movie.map(m => <div>{m.title}</div>)
    }
    </div>
  );
  
    
}

export default App;
