import React from 'react'
import styles from './LogisticsItem.module.css'

const LogisticsItem = ({children, icon:Icon}) => {

  return (
    <li className={styles.item}>
      <span className={styles.icon}>  
        <Icon /> 
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  )
}

export default LogisticsItem

