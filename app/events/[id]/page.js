import EventContent from 'app/components/event-detail/EventContent';
import EventLogistics from 'app/components/event-detail/EventLogistics';
import EventSummary from 'app/components/event-detail/EventSummary';
import EventItem from 'app/components/events/EventItem';
import Button from 'app/components/ui/Button';
import { getEventById } from 'app/helper/api-util';
import ErrorAlert from '../../components/ui/ErrorAlert';
import React from 'react'


const EventDetailPage = async ({params}) => {
  
  params = await params;
  const event = await getEventById(params.id);
  if(!event) return (
    <>
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
      <div className='center'>
        <Button href='/events'>Go Back To Events</Button>
      </div>
    </>
  )


  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    
    </>
  )
}

export default EventDetailPage