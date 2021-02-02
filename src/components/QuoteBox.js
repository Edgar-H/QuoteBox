import React, { useState, useEffect} from 'react'
import axios from "axios";

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const QuoteApi = async () => {
    let arrayOfQuote = [];
    try {
      const data = await axios.get("https://api.quotable.io/random") //Obtener json
      arrayOfQuote = data.data;     // Transformando
      /* console.log(arrayOfQuote); */
    } catch (error) {
      /* console.log(error); */
    }
    try {
      setQuote(arrayOfQuote.content);
      setAuthor(arrayOfQuote.author)
    } catch (error) {
    }
  };

  useEffect(() => {
    QuoteApi();
  }, []);

    return(
    <div className="box">
        <div>
          <p>{quote}</p>
          <p>~ {author}</p>
        </div>
        <div className="btns">
          <input type="button" value="New Quote" onClick={QuoteApi}></input>
          <a href={`https://twitter.com/intent/tweet?text=${quote} ~${author}`} className="tweet" target="_blank">Tweet</a>
        </div>
    </div>
  )
};

export default QuoteBox;