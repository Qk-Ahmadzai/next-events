import React from 'react'
import styles from './ResultTitle.module.css'
import Button from '../ui/button';

const ResultTitle = ({year, month}) => {
    const humanReadableDate = new Date(year, month - 1).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric'
    }); 
  return (
    <section className={styles.title}>
        <h1>Events in {humanReadableDate}</h1>
        <Button href='/events'>Show all events</Button>
    </section>
  )
}

export default ResultTitle