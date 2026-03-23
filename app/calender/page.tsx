"use client"

import { Calendar } from "@/components/ui/calendar";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CalendarPage = () => {

const instructors = [
  { id: 1, name: "김태현", team: "세종 널 크루", tags: ["#친근한", "#어린", "#재미있는"] },
  { id: 2, name: "이민우", team: "서초 서핑 클럽", tags: ["#전문가", "#카리스마", "#꼼꼼한"] },
  { id: 3, name: "박지성", team: "강남 볼트 유닛", tags: ["#열정적인", "#체계적인", "#친절한"] },
  { id: 4, name: "최유진", team: "세종 널 크루", tags: ["#밝은", "#에너제틱", "#유머러스"] },
];

    const [date, setDate] = useState<Date | undefined>(new Date(2026, 2, 3)); 
    const [selectedInstructor, setSelectedInstructor] = useState(instructors[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const filteredInstructors = useMemo(() => {
      return instructors.filter(inst => 
        inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.team.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }, [searchQuery]);
    // Mocking dates marked as FULL!
    const fullDates = [
      new Date(2026, 2, 9),
      new Date(2026, 2, 18),
      new Date(2026, 2, 19),
      new Date(2026, 2, 24)
    ];

    const weekDaysKorean = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

    return (
        <div className="w-full pt-32 pb-20 px-4 md:px-8 lg:px-10 xl:px-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 max-w-[2000px] mx-auto w-full grow">
                {/* Left side: Calendar (takes up more space) */}
                <div className="lg:flex-[3] w-full grow flex flex-col min-w-0">
                   {/* Custom Header for Month & Year */}
                   <div className="flex items-baseline gap-3 mb-10 h-[70px]">
                       <span className="text-[60px] sm:text-[72px] tracking-tighter leading-none text-black font-bold">
                           3
                       </span>
                       <span className="text-[14px] sm:text-[16px] leading-none text-gray-500 tracking-[0.3em] font-semibold">
                           MARCH
                       </span>
                   </div>
                   
                   <Calendar
                     mode="single"
                     selected={date}
                     onSelect={setDate}
                     defaultMonth={new Date(2026, 2)}
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
                
                {/* Right side: Cards (1/3 width) */}
                <div className="lg:flex-1 w-full lg:max-w-[360px] flex flex-col shrink-0 gap-10 pt-24">
                    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                        <DialogTrigger asChild>
                            <div className="border-[1.5px] border-[#36dc9a] bg-white rounded-[24px] p-10 flex flex-col items-center justify-center relative shadow-lg h-fit cursor-pointer hover:scale-[1.02] transition-transform group">
                              <div className="font-medium text-gray-500 text-[16px] tracking-tight mb-4 group-hover:text-[#36dc9a] transition-colors">{selectedInstructor.team}</div>
                              <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-[#36dc9a] text-[56px] font-black leading-none italic">{selectedInstructor.name}</span>
                                <span className="text-[26px] font-bold text-gray-800">강사</span>
                              </div>
                              <div className="flex flex-wrap justify-center gap-2">
                                {selectedInstructor.tags.map(tag => (
                                  <span key={tag} className="text-[13px] font-bold text-[#36dc9a] bg-[#36dc9a]/10 px-3 py-1 rounded-full uppercase">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Search className="w-5 h-5 text-[#36dc9a]" />
                              </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden border-none rounded-[24px]">
                            <DialogHeader className="p-6 bg-[#36dc9a] text-white">
                                <DialogTitle className="text-[24px] font-bold">강사 선택</DialogTitle>
                            </DialogHeader>
                            <div className="p-6 space-y-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input 
                                        placeholder="강사 이름 또는 팀명을 입력하세요" 
                                        className="pl-10 h-12 rounded-xl border-gray-100 focus:border-[#36dc9a] focus:ring-[#36dc9a]"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                                    {filteredInstructors.map(inst => (
                                        <button
                                            key={inst.id}
                                            onClick={() => {
                                                setSelectedInstructor(inst);
                                                setIsSearchOpen(false);
                                                setSearchQuery("");
                                            }}
                                            className={cn(
                                                "w-full flex items-center justify-between p-4 rounded-xl transition-all border-[1.5px]",
                                                selectedInstructor.id === inst.id 
                                                    ? "border-[#36dc9a] bg-[#36dc9a]/5" 
                                                    : "border-gray-50 hover:border-[#36dc9a]/30 hover:bg-gray-50"
                                            )}
                                        >
                                            <div className="text-left">
                                                <div className="font-bold text-[18px] text-gray-900">{inst.name} 강사</div>
                                                <div className="text-[13px] text-gray-500">{inst.team}</div>
                                            </div>
                                            {selectedInstructor.id === inst.id && (
                                                <div className="w-2 h-2 rounded-full bg-[#36dc9a]" />
                                            )}
                                        </button>
                                    ))}
                                    {filteredInstructors.length === 0 && (
                                        <div className="text-center py-10 text-gray-400">
                                            검색 결과가 없습니다.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <div className="border-[1.5px] border-[#36dc9a]/30 border-dashed bg-gray-50/50 rounded-[24px] h-[500px] flex items-center justify-center relative">
                      <div className="text-center">
                        <p className="text-[18px] text-gray-400 font-medium mb-2">날짜를 선택해주세요!</p>
                        <p className="text-[14px] text-gray-300">선택한 날짜의 상세 일정이 여기에 표시됩니다.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarPage;