import React from 'react'
import styles from  './welcome.module.css'

export default function Welcome(props) {
  return (
    <>
    <div className={styles.w_box}>
      <div className={styles.w_header}>
        <h2>Quiz App</h2>
        <small>Check Your Knowlege with quick test</small>
      </div>
      <div>
        <button onClick={props.next} type='button' className='quiz-button' id='start'>Start Quiz</button>
      </div>
    </div>
    </>
  )
}
