import './styles/QuoteBox.css'
import React from 'react';
import "./styles/Button.css"
import Button from './button';


const QuoteBox = ({handleChangeQuote, quote}) => {
  
  return (
  <section className='quoteBox'>
  <h1 className='title'>INFOGALAX</h1>

  
    <article className='phrase__container'>
      <p>
        {quote.phrase} </p>
    </article>

   
    <Button handleChangeQuote={handleChangeQuote} />

  <footer className='footer'><h4>Fuente:{quote.author}</h4></footer>

  </section>
  );
};

export default QuoteBox;

