import React from 'react'
import styles from './EventLogistics.module.css'
import LogisticsItem from './LogisticsItem';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';

const EventLogistics = ({event}) => {


    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

  return (
    <section className={styles.logistics}>
        <div className={styles.image}>
            <img src={`/${event.image}`} alt={event.title} />
        </div>
        <ul className={styles.list}>                      
            <LogisticsItem icon={DateIcon}>
            <time>{humanReadableDate}</time>
            </LogisticsItem>
            <LogisticsItem icon={AddressIcon}>
            <address>{event.location?.replace(', ', '\n')}</address>
            </LogisticsItem>
        </ul>
    </section>
  )
}

export default EventLogistics

