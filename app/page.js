import React from 'react'
import { getFeaturedEvents } from './helper/api-util'
import EventList from './components/events/EventList'

// Enable Incremental Static Regeneration (ISR) - revalidate every 60 seconds
export const revalidate = 60; // ← This will refresh data every minute


const FeaturedEventsPage = async () => {
  const featuredEvents = await getFeaturedEvents();

  return (
    <>
      <div>
        <EventList items={featuredEvents} />
      </div>
    </>
  )
}

export default FeaturedEventsPage