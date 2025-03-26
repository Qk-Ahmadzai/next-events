import Link from 'next/link'
import React, { Children } from 'react'
import styles from './Button.module.css'

const Button = ({children, href, onClick}) => {

  if(href){
    return (
      <Link href={href} className={styles.btn}>  
         {children} 
      </Link>
      
    )
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
 
}

export default Button