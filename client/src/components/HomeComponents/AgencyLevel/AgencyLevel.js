import React from 'react';
import articles from './agencyData.json';
import styles from './AgencyLevel.module.scss';
import { Link } from 'react-router-dom';



const AgencyLevel = () => {  
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>agency level experience</h2>
      <div className={styles.articlesWrapper}>
        {articles.map((article,i)=>{
        return <article key={i} className={styles.article}>
          <div style={{"background-color":article.iconBg}} className={styles.iconWrapper}><i style={{"color":article.iconColor}} className={`${article.icon} fa-2x`}></i></div>
          <h3 className={styles.capture}>{article.capture}</h3>
          <p  className={styles.discription}>{article.discription}<Link   className={styles.articleLink} to={article.link}>Learn More</Link></p>
        </article>
      })}
      </div>
      
      <Link className={styles.btnLink} to='/managed-contests'>learn more about agency services</Link>
    </section>
  );
}

export default AgencyLevel;
