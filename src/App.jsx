import './App.css'
import quotes from "./db/quote.json"
import { useState } from 'react'
import { getRandom } from './utils/random';
import QuoteBox from './components/QuoteBox';



const backGrounds = ["bg1", "bg2", "bg3", "bg4"]
function App() {
  
  
 
 
  const [quote, setQuote] = useState(getRandom(quotes));
  const [currentBg, setCurrentBg] = useState(getRandom(backGrounds))
  

  const handleChangeQuote = () => {
    setQuote(getRandom(quotes));
    setCurrentBg(getRandom(backGrounds));


  }

  return (
    <main className={`App ${currentBg}`}>      
      <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote} />
    </main>
  )
}

export default App
