
import CalendarItemCard from "@/components/CalendarItemCard";
import { supabase } from "@/lib/supabase";

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

export default async function schedulePage() {
  const { data: events, error } = await supabase
    .from("event")
    .select("*")
    .order("time", { ascending: true });
    console.log("EVENTS:", events);
console.log("ERROR:", error);
  if (error) {
    console.error(error);
    return <h1>Failed to load calendar events</h1>;
  }

  return (
    
    <div className="bg-red-50 w-full flex flex-col  items-center">
      {events.map((event) => (
  <CalendarItemCard
    key={event.id}
    name={event.eventName}
    type={event.eventType}
    location={event.location}
  />
))}
        <div className="w-[90%] flex  border border-gray-400 justify-center py-2">
          <h1 className="text-green-900 font-light text-4xl">Today&apos;s Schedule</h1>
        </div>
        <div className="w-[90%] grid grid-cols-2 border border-gray-400 h-auto">
          <div className="border border-gray-400 flex flex-col">
            
            {timeCodes.map((time) => (
              <div className="h-30 border border-gray-400 flex items-center justify-end pr-5" key={time}>
                <h2 className="text-xl text-black">{time}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
  );

};
