// ============================================================================
// app/page.tsx   →   Displays a daily calendar of events happening at the zoo
// ============================================================================
// Creates a calendar with events ranging from 9am to 6pm, organized in half and hour chunks
// loads the event data from supabase
// compares the event's time to the pre-established 30 minute time slots and then generates a CalendarItemCard to fit into that slot
// ----------------------------------------------------------------------------

import CalendarItemCard from "@/components/CalendarItemCard";
import { createClient } from "@/lib/client";
import type { CalendarEvent } from "@/lib/types";

const timeCodes = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

function getEventsAtTime(arr: CalendarEvent[], time: string) {
  return arr.filter((event) => {
    return event.time.slice(0, 5) === time;
  });
}

export default async function schedulePage() {
  const supabase = createClient();
  const { data: events, error } = await supabase
    .from("event")
    .select("*")
    .order("time", { ascending: true });
    

  if (error) {
    console.error(error);
    return <h1>Failed to load calendar events</h1>;
  }

 


  return (
    <div className="bg-red-50 w-full flex flex-col items-center">

      <div className="lg:w-[70%] w-[90%] flex border border-gray-400  justify-center py-2">
        <h1 className="text-green-900 font-light text-4xl font-serif">
          Today&apos;s Schedule
        </h1>
        <p>
       
        </p>
      </div>
      
      <div className="lg:w-[70%] w-[90%] grid grid-cols-[80px_1fr] border border-gray-400">

        {timeCodes.map((time) => {
          const eventsAtTime = getEventsAtTime(events, time);
          
          return (
            <div key={time} className="contents">

            
              <div className="h-30 border w-auto border-gray-400 border-l-red-50 flex items-center justify-end pr-5">
                <h2 className="lg:text-xl text-sm text-green-900 font-semibold">
                  {time}
                </h2>
              </div>

              
              <div className="h-30 border border-gray-400 flex items-center gap-3 px-5">
                
                {eventsAtTime.map((event) => {


                  return (
                    <CalendarItemCard
                      key={event.id}
                      eventName={event.eventName}
                      eventType={event.eventType}
                      location={event.location}
                      time={event.time}
                    />
                  );
                })}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}
