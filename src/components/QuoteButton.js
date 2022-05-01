const QuoteButton = ({changeQuote, randomColors}) => {
    return ( 
        
        <div className="buttonBox">
            <button className="button" onClick={changeQuote} style={{background: randomColors}}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div> 
     );
}
 
export default QuoteButton;
