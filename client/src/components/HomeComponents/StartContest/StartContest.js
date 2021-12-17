import React from 'react';
import styles from './StartContest.module.scss'

const StartContest = () => {
  return (
    <article className={styles.container}>
      <p  className={styles.content}>Ready to get started? Launch a contest and start receiving submissions instantly.</p>
      <a className={styles.btn} href="/start-contest">
      <i class="far fa-lightbulb"></i>
         start a contest
      </a>
    </article>
  );
}

export default StartContest;
