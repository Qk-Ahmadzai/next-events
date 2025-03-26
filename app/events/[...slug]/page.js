import EventList from 'app/components/events/EventList';
import ResultTitle from 'app/components/events/ResultTitle';
import ErrorAlert from 'app/components/ui/ErrorAlert';
import Button from 'app/components/ui/button';
import { getFilteredEvents } from 'app/dummy-data'
import React from 'react'

const FilteredEventPage =  async ({params}) => {

  params = await params;
  const year = +params.slug[0]
  const month = +params.slug[1]
  
  if(isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12){ 
    return <p>Invalid filter. Please adjust your values!</p>
  }
  
  const events = getFilteredEvents({year, month})

  if(!events || events.length === 0){
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!!!</p>
        </ErrorAlert>
        <div className='center'>
          <Button href='/events'> Show All Events </Button>
        </div>
      </>
  )}

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultTitle year={year} month={month}/>
      <EventList items={events}/>
    </>
  )
}

export default FilteredEventPage