import React from 'react';
import styles from './PricingPanel.module.scss';

const PricingPanel = (props) => {
  const {article:{color,panelTitle,panelBody,price,description}} = props;  
  return (
    <article className={styles.container}>
      <div className={styles.panelWrapper} style={{'color':color, 'border': `4px solid ${color}`}}>
        <h3>{panelTitle}</h3>
        <p className={styles.invisible}>{panelBody}</p>
        <span>${price}</span>
        <i class="fas fa-minus"></i>
      </div>
      <ol>
        {description.map((elem)=>{
          if(Array.isArray(elem)){            
            elem.map((innerElem)=>(<li className={styles.item} 
                title={innerElem.comment}>{innerElem.li}</li>))
            
          }
        return <li className={styles.item} 
            title={elem.comment}>{elem.li}</li>}
        )}
      </ol>
    </article>
  );
}

export default PricingPanel;
