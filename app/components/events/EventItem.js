import React from 'react'
import styles from "./EventItem.module.css";
import Button from '../ui/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

const EventItem = ({event}) => {

    const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });


  return (
    <>
        <li className={styles.item}>
            <img src={'/' + event.image} alt={event.title} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{event.title}</h2>
                
                    <div className={styles.date}>
                        <DateIcon /><time>{humanReadableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon /><address>{event.location?.replace(', ', '\n')} </address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button href={`/events/${event.id}`}> 
                    <span>Explore Event</span>
                    <span className={styles.icon}> <ArrowRightIcon/> </span>
                    </Button>
                </div>
            </div>
            

        </li>
    </>
  )
}

export default EventItem