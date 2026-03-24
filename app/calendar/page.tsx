"use client"

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useInstructor } from "@/hooks/useInstructor";
import { InstructorCard } from "@/components/calendar/InstructorCard";
import { ScheduleCard } from "@/components/calendar/ScheduleCard";

const MONTH_NAMES_EN = [
  "JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE",
  "JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"
];

const weekDaysKorean = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

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
        {/* Left side: Calendar */}
        <div className="lg:flex-[3] w-full grow flex flex-col min-w-0">
          {/* Custom Header for Month & Year */}
          <div className="flex items-baseline gap-3 mb-10 h-[70px]">
            <span className="text-[60px] sm:text-[72px] tracking-tighter leading-none text-black font-bold">
              {today.getMonth() + 1}
            </span>
            <span className="text-[14px] sm:text-[16px] leading-none text-gray-500 tracking-[0.3em] font-semibold">
              {MONTH_NAMES_EN[today.getMonth()]}
            </span>
          </div>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={new Date(today.getFullYear(), today.getMonth())}
            showOutsideDays={true}
            className="!w-full w-full !max-w-none bg-transparent p-0 mx-0 border-none shadow-none"
            modifiers={{ full: fullDates }}
            classNames={{
              root: "!w-full !max-w-none grow flex flex-col items-stretch",
              months: "!w-full !max-w-none grow flex items-stretch",
              month: "!w-full !max-w-none grow h-full flex flex-col items-stretch",
              nav: "hidden",
              month_caption: "hidden",
              table: "w-full !w-full border-collapse !table table-fixed m-0 grow flex-1",
              tbody: "!table-row-group w-full border-b border-[#9b9b9c]",
              head_row: "!table-row w-full",
              weekdays: "!table-row h-[32px]",
              weekday: "!table-cell align-middle text-center text-[12px] sm:text-[14px] font-semibold text-white bg-[#727171] first:bg-[#36dc9a] last:bg-[#36dc9a] p-0 m-0",
              week: "!table-row border-t border-[#9b9b9c]",
              day: "!table-cell h-[110px] sm:h-[150px] border-l border-[#ebecec] first:border-l-0 p-0 relative !aspect-auto !rounded-none align-top overflow-hidden",
              outside: "text-muted-foreground opacity-30 bg-white",
              today: "bg-gray-50",
            }}
            formatters={{
              formatWeekdayName: (date) => weekDaysKorean[date.getDay()]
            }}
            components={{
              DayButton: (props: any) => {
                const { day, modifiers, ...buttonProps } = props;
                const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6;
                return (
                  <button
                    {...buttonProps}
                    className={cn(
                      "w-full h-full flex flex-col items-start focus:outline-none relative transition-all cursor-pointer rounded-none p-3 group",
                      modifiers.full ? "bg-[#dc5836] text-white" : "bg-transparent hover:bg-gray-50/80",
                      modifiers.selected ? "ring-4 ring-[#36dc9a] ring-inset z-10 bg-[#36dc9a]/5" : ""
                    )}
                  >
                    <div className="flex justify-between items-start w-full">
                      <span className={cn(
                        "text-[18px] sm:text-[22px] leading-none font-semibold",
                        isWeekend && !modifiers.full ? "text-[#36dc9a]" : "text-gray-900",
                        modifiers.outside ? "opacity-30" : "",
                        modifiers.full ? "text-white" : ""
                      )}>
                        {day.date.getDate()}
                      </span>
                      {modifiers.full && (
                        <span className="font-bold text-[11px] sm:text-[13px] px-2 py-0.5 bg-white/20 rounded shadow-sm text-white uppercase tracking-wider">FULL!</span>
                      )}
                    </div>
                  </button>
                )
              }
            }}
          />
        </div>

        {/* Right side: Cards */}
        <div className="lg:flex-1 w-full lg:max-w-[360px] flex flex-col shrink-0 gap-10 pt-24">
          <InstructorCard hook={instructorHook} />
          <ScheduleCard selectedDate={date} />
        </div>
      </div>
    </div>
  )
}

export default CalendarPage;
