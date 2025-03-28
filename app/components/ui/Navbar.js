import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'  

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
          <Link href="/">NextEvent</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar