import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(()=>{
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      .then((response)=> response.json())
      .then(JSON => {
        setMovie(JSON);
        setLoading(false);
      });
  },[]);
  
  return ( 
    //참고:https://devbirdfeet.tistory.com/47
    //오류 해결: https://devbirdfeet.tistory.com/48
      //Objects, {} in JavaScript does not have the method
      // .map(). It's only for Arrays, [].
      //data.map() -> data.products.map() 형태로 사용(products=배열이름)
      //배열의 아이템들만 map() 하기
      //따라서 movies배열의 아이템들을
    <div>
    {loading ? <strong>Loading...</strong> :
      movie.data.movies.map(m => console.log(m.title))
    }
    </div>
  );
  
    
}

export default App;