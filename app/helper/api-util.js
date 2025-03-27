
export async function getAllEvents() {
    
    const res = await fetch(process.env.NEXT_PUBLIC_DATABASE_URL);
    if (!res.ok) {
        throw new Error(`Failed to fetch events: ${res.status}`);
    }
    
    const data = await res.json();

    const events = [];

    for (const key in data) {
        const event = {
            id: key,
            ...data[key]
        };
        events.push(event);
    }

    return events; 
}


export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    console.log("getFeaturedEvents", allEvents);

    return allEvents.filter((event) => event.isFeatured);
}


export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const allEvents = await getAllEvents();
  
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }