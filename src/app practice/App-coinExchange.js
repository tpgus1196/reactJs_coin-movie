import {useEffect, useState} from "react";
//오류...
//option에 value값이 비트코인 기본값에서 안바뀐다....



function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setExchange] = useState();
  const [dollar, setDollar] = useState();
  const [result, setResult] = useState();
  const onChange = (event) => setExchange(event.target.value);
  const onSelected = (event) => setDollar(Math.floor(event.target.value*100)/100); //소수점 2자리까지 나타내기


  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=>response.json())
      .then((json) =>
        {setCoins(json);
        setLoading(false);
      }
      );
  },[]);

  const onSubmit =(e) =>{
    e.preventDefault();
    if(coin === ""){
      return
    } else{
      setExchange("");
    };
  };
  const onClick = (event) => {
    event.preventDefault();
    setResult(Math.floor(coin*dollar*100)/100);
  }
 
  

  return (
    <div>
      {loading && <strong>Loading...</strong>}

      {!loading && 
      <form onSubmit={onSubmit}>
        <h1>Coin Exchange calculator({coins.length})</h1>
        <select  onChange={onSelected}>
        {coins.map((c)=>(
          <option value={c.quotes.USD.price}>
            {c.name} ({c.symbol}) 
          </option>
        )
        )}
      </select>
  
        <div>
            <input
              placeholder="Amounts of your coins?"
              value={coin}
              type="number"
              onChange={onChange}
              ></input>
            <button onClick={onClick}>Exchange into dollars</button>
        </div>
        <p> * {dollar}</p>
        <strong>You can exchange the coins into ({result}) amounts of dollars! </strong>
      </form>
      
     
        }
    </div>
  );
  
    
}

export default App;
