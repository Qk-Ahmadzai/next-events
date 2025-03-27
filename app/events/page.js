import React from 'react'
import {getAllEvents} from 'app/helper/api-util'
import EventList from '../components/events/EventList'
import EventSearch from 'app/components/events/EventSearch'

// Add this export to force dynamic rendering
export const dynamic = 'force-dynamic';


const AllEventsPage = async () => {

  const featuredEvents = await getAllEvents()

  return (
    <>
      <div>
        <EventSearch />
        <EventList items={featuredEvents} />
      </div>
    </>
  )
}

export default AllEventsPage