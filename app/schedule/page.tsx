import CalendarItemCard from "@/components/CalendarItemCard";
import { supabase } from "@/lib/supabase";
import type { CalendarEvent } from "@/lib/types";

const timeCodes = [
  "9:00",
  "9:30",
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
  const { data: events, error } = await supabase
    .from("event")
    .select("*")
    .order("time", { ascending: true });
    console.log("event.eventType):", events?.[0]?.eventType);

  if (error) {
    console.error(error);
    return <h1>Failed to load calendar events</h1>;
  }

  return (
    <div className="bg-red-50 w-full flex flex-col items-center">

      <div className="w-[90%] flex border border-gray-400 justify-center py-2">
        <h1 className="text-green-900 font-light text-4xl">
          Today&apos;s Schedule
        </h1>
      </div>

      <div className="w-[90%] grid grid-cols-2 border border-gray-400">

        {timeCodes.map((time) => {
          const eventsAtTime = getEventsAtTime(events, time);
          
          return (
            <div key={time} className="contents">

            
              <div className="h-30 border border-gray-400 flex items-center justify-end pr-5">
                <h2 className="text-xl text-black">
                  {time}
                </h2>
              </div>

              
              <div className="h-30 border border-gray-400 flex items-center gap-3 px-5">
                
                {eventsAtTime.map((event) => (
                  
                  <CalendarItemCard
                  key={event.id}
                  name={event.name}
                  type={event.type}
                  location={event.location}
                  time={event.time}
                />
                
                ))}
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}