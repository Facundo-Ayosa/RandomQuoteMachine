import './App.css';
import { useEffect, useState } from 'react';
import fetchquote from './fetch-quotes';
import quotes from './img/doubleQuotes.svg'

function App() {
  const [quote, setQuote] = useState({
		"quote": "Lend me 100 yen since I'm beautiful.",
		"character": "Aisa Himegami",
		"anime": "Toaru Majutsu no Index"
  });
  const [cardStatus, setCardStatus] = useState("active")
  //const clickHandler = () => {}
  const fetcher = async () => {
    setCardStatus("inactive");
    setTimeout(()=>{
      setCardStatus("active");
    },900);
    await fetchquote().then((res) => {
      if(res.quote.length > 150) {
        fetcher()
      } else {
        setQuote(res);
      }
    });
  }
  useEffect(() => {
    if (!quote) {
      fetcher();
    }
  })
  return (
    <div className="card">
      <img src={quotes} id="cardimg" alt=""/>
      <div id="quotecontainer" className={cardStatus}>
        <h2 className="quote">{quote ? quote.quote : ""}</h2>
        <h3 className="character">{quote ? ` - ${quote.character}` : ""}</h3>
        <h3 className="anime">{quote ? quote.anime : ""}</h3>
      </div>
      <div className="links">
        {/* Tweet Link */}
        <button className="btn" onClick={fetcher}>Get Another Quote</button>
      </div>
    </div>
  );
}

export default App;
