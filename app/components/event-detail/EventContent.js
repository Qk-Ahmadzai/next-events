import React from 'react'
import styles from './EventContent.module.css'

const EventContent = ({children}) => {
  return (
    <section className={styles.content}>
      {children}
    </section>
    )
}

export default EventContent