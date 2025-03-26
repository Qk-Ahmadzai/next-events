"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { getAllEvents } from '../dummy-data'
import EventList from '../components/events/EventList'
import EventSearch from 'app/components/events/EventSearch'

const AllEventsPage = () => {

  const router = useRouter()
  const featuredEvents = getAllEvents()

  const onEventSearch = (year, month) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <>
      <div>
        <EventSearch onEventSearch={onEventSearch}/>
        <EventList items={featuredEvents} />
      </div>
    </>
  )
}

export default AllEventsPage