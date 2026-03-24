"use client"

import { useState } from "react";
import { useInstructor } from "@/hooks/useInstructor";
import { CalendarGrid } from "@/components/calendar/CalendarGrid";
import { InstructorCard } from "@/components/calendar/InstructorCard";
import { ScheduleCard } from "@/components/calendar/ScheduleCard";

const CalendarPage = () => {
  const today = new Date();
  const [date, setDate] = useState<Date | undefined>(today);
  const instructorHook = useInstructor();

  // Mocking dates marked as FULL!
  const fullDates = [
    new Date(today.getFullYear(), today.getMonth(), 9),
    new Date(today.getFullYear(), today.getMonth(), 18),
    new Date(today.getFullYear(), today.getMonth(), 19),
    new Date(today.getFullYear(), today.getMonth(), 24),
  ];

  return (
    <div className="w-full pt-32 pb-20 px-4 md:px-8 lg:px-10 xl:px-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 max-w-[2000px] mx-auto w-full grow">
        <CalendarGrid today={today} date={date} onSelect={setDate} fullDates={fullDates} />

        <div className="lg:flex-1 w-full lg:max-w-[360px] flex flex-col shrink-0 gap-10 pt-24">
          <InstructorCard hook={instructorHook} />
          <ScheduleCard selectedDate={date} />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;

