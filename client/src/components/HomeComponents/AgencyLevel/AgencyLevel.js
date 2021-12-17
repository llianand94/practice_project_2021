import React from 'react';
import articles from './agencyData.json';
import styles from './AgencyLevel.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const iconColors= [{}];

const AgencyLevel = () => {  
  return (
    <section>
      <h2>agency level experience</h2>
      {articles.map((article,i)=>{
        return <article key={i}>
          <div style={article.iconBg} className={styles.iconWrapper}><i className={`${article.icon} fa-2x`}></i></div>
          <h3>{article.capture}</h3>
          <p>{article.discription}<Link to={article.link}>Learn More</Link></p>
        </article>
      })}
    </section>
  );
}

export default AgencyLevel;
