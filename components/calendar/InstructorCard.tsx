"use client"

import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useInstructor } from "@/hooks/useInstructor";

interface InstructorCardProps {
  hook: ReturnType<typeof useInstructor>;
}

export function InstructorCard({ hook }: InstructorCardProps) {
  const {
    selectedInstructor,
    searchQuery,
    setSearchQuery,
    isSearchOpen,
    setIsSearchOpen,
    filteredInstructors,
    selectInstructor,
  } = hook;

  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogTrigger asChild>
        <div className="border-[1.5px] border-[#36dc9a] bg-white rounded-[24px] p-10 flex flex-col items-center justify-center relative shadow-lg h-fit cursor-pointer hover:scale-[1.02] transition-transform group">
          <div className="font-medium text-gray-500 text-[16px] tracking-tight mb-4 group-hover:text-[#36dc9a] transition-colors">
            {selectedInstructor.team}
          </div>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-[#36dc9a] text-[56px] font-black leading-none italic">
              {selectedInstructor.name}
            </span>
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
          <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2">
            {filteredInstructors.map(inst => (
              <button
                key={inst.id}
                onClick={() => selectInstructor(inst)}
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
  );
}
