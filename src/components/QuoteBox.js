import { useState } from "react";
import quotes from "../quotes.json"
import QuoteButton from "./QuoteButton";

const QuoteBox = () => {
    const [quote, setQuote] = useState(quotes[randomQuote()])
    const changeQuote =()=>{
        setQuote(quotes[randomQuote()])
    }

    const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#008F7A", "#0081CF", "#4D8076", "#C34A36", "#008B74"]
    const randomColors = colors[Math.floor(Math.random() * colors.length)]
    
    document.body.style =`background: ${randomColors}`

    return (
        <div className="cardQuotes" style={{color:randomColors}}>
            <div className="quoteBox">
                <i className="fa-solid fa-quote-left"></i>
                <div className="quotes">
                    <p>{quote.quote}</p>
                    <p className="author">{quote.author}</p>
                </div>
            </div>
            
            <QuoteButton changeQuote={changeQuote} randomColors={randomColors}/>

        </div>

    );
}

const randomQuote =()=> Math.floor(Math.random() * quotes.length)


export default QuoteBox;