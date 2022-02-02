import React from 'react';
import Header from '../../components/Header/Header';
import PricingPanel from '../../components/PricingPanel/PricingPanel';
import SpinnerLoader from '../../components/Spinner/Spinner';
import articles from './pricingData.json';

const PricingPage = (props) => {
  const {isFetching} = props; 
  return (
    <>
      <Header/>
      {isFetching ? <SpinnerLoader /> : (
        <>
        <section className='prising-section'>
          {articles.map((article)=>(
          <PricingPanel article={article}/>
          ))}
        </section>
        </>
      )}
    </>
  );
}

export default PricingPage;
