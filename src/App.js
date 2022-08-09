import './App.css';
import { useEffect, useState } from 'react';
import fetchquote from './fetch-quotes';

function App() {
  const [quote, setQuote] = useState();

  const clickHandler = async () => {
    await fetchquote().then((res) => { console.log(quote); setQuote(res);});
  }
  useEffect(() => {
    if (quote) {
      fetchquote().then(res => setQuote(res));
    }
  })
  const quoteMachine = () => {
    let elem = quote
    return (<><h2>{elem.quote}</h2><h3>{elem.character}</h3><h3>{elem.anime}</h3></>)
  }
  return (
    <main>
      <div className="quote">
        {quoteMachine()}
        <button onClick={clickHandler}>Get Another Quote</button>
      </div>
    </main>
  );
}

export default App;
