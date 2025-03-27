"use client"
import React from 'react'
import {useRef} from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'
import styles from './EventSearch.module.css'

const EventSearch = ({onEventSearch}) => {
    const router = useRouter()
    const yearInput = useRef();
    const monthInput = useRef();

   const submitHandler = (e) => {
    e.preventDefault();

    const year = yearInput.current.value;
    const month = monthInput.current.value;

    router.push(`/events/${year}/${month}`)
   }; 


 

  return (
    <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
            <div className={styles.control}>
                <label htmlFor='year'>Year</label>
                <select id='year' ref={yearInput}>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                </select>
            </div>
            <div className={styles.control}>
                <label htmlFor='month'>Month</label>
                <select id='month' ref={monthInput}>
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>    
                    <option value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                </select>
            </div>
        </div>
        <Button>Find Events</Button>
    </form>
  )
}

export default EventSearch