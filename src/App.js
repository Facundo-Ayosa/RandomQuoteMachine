import './App.css';
import { useEffect, useState } from 'react';
import fetchquote from './fetch-quotes';
import quotes from './img/doubleQuotes.svg'

function App() {
  const [quote, setQuote] = useState();
  var refreshed = false;
  const clickHandler = () => {
    let elem = document.getElementById("active");
    if (!(elem === null)) {
      elem.id = "inactive"
    }
    setTimeout(()=>{
      if (!(elem === null)) {
        elem.id = "active"
      }
    },900);
    fetcher()
  }
  const fetcher = async () => {
    await fetchquote().then((res) => {
        setQuote(res);
    });
    refreshed = !refreshed;
  }
  useEffect(() => {
    if ((quote === undefined && !refreshed)) {
      fetcher();
      refreshed = !refreshed
    }
  })
  return (
    <div className="card" id="quotebox">
      <img src={quotes} id="cardimg" alt=""/>
      <div id="active">
        <h2 className="quote" id="text">{quote ? quote.quote : ""}</h2>
        <h3 className="character" id="author">{quote ? ` - ${quote.character}` : ""}</h3>
        <h3 className="anime">{quote ? quote.anime : ""}</h3>
      </div>
      <div className="links">
        <a id="tweet-quote" href={quote ? quote.tweetURL : ""} target="_blank" rel="noreferrer">Tweet it!</a>
        <button id="new-quote" className="btn" onClick={clickHandler}>Get Another Quote</button>
      </div>
    </div>
  );
}

export default App;
