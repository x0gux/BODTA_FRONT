"use client"

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ScheduleCardProps {
  selectedDate?: Date;
}

export function ScheduleCard({ selectedDate }: ScheduleCardProps) {
  const [time, setTime] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  if (selectedDate) {
    return (
      <div className="bg-white border-[1.5px] border-[#36dc9a] h-auto pb-8 w-full overflow-clip rounded-[24px] relative flex flex-col shrink-0 px-2">
        <p className="font-semibold text-[#36dc9a] text-[18px] tracking-[-0.7px] ml-6 mt-7 mb-6">
          {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
        </p>

        <div className="px-6 flex flex-col gap-[20px]">
          {/* Time Select */}
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="w-full h-[56px] border-[#36dc9a] rounded-2xl text-[16px] px-5 font-normal tracking-[-0.65px] data-[placeholder]:text-black focus:ring-[#36dc9a]">
              <SelectValue placeholder="시간 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="14:30">2:30 ~ 3:30 (1시간)</SelectItem>
              <SelectItem value="15:30">3:30 ~ 4:30 (1시간)</SelectItem>
              <SelectItem value="16:30">4:30 ~ 5:30 (1시간)</SelectItem>
            </SelectContent>
          </Select>

          {/* Item Select */}
          <Select value={item} onValueChange={setItem}>
            <SelectTrigger className="w-full h-[56px] border-[#36dc9a] rounded-2xl text-[16px] px-5 font-normal tracking-[-0.65px] data-[placeholder]:text-black focus:ring-[#36dc9a]">
              <SelectValue placeholder="보드 대여" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="board">보드 대여</SelectItem>
              <SelectItem value="gear">장비 대여</SelectItem>
              <SelectItem value="none">대여 안 함</SelectItem>
            </SelectContent>
          </Select>

          {/* People Select */}
          <Select value={people} onValueChange={setPeople}>
            <SelectTrigger className="w-full h-[56px] border-[#36dc9a] rounded-2xl text-[16px] px-5 font-normal tracking-[-0.65px] data-[placeholder]:text-black focus:ring-[#36dc9a]">
              <SelectValue placeholder="인원 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1인</SelectItem>
              <SelectItem value="2">2인</SelectItem>
              <SelectItem value="3">3인</SelectItem>
              <SelectItem value="4">4인</SelectItem>
            </SelectContent>
          </Select>

          {/* Contact Input */}
          <Input 
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="연락처 ex) 010-1234-5678"
            className="w-full h-[56px] border-[#36dc9a] rounded-2xl text-[16px] px-5 font-normal tracking-[-0.65px] placeholder:text-[#b7bfbc] focus-visible:ring-1 focus-visible:ring-[#36dc9a] focus-visible:border-[#36dc9a]"
          />

          {/* Submit Button */}
          <Button 
            className="w-full h-[56px] bg-[#36dc9a] hover:bg-[#36dc9a]/90 text-white rounded-2xl text-[16px] font-semibold tracking-[-0.65px] mt-4 shadow-none"
            onClick={() => {
              console.log("Reservation sumbitted:", { selectedDate, time, item, people, contact });
              alert("예약이 완료되었습니다.");
            }}
          >
            강습 예약하기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-[1.5px] border-[#36dc9a]/30 border-dashed bg-gray-50/50 rounded-[24px] h-[372px] flex items-center justify-center relative shadow-sm">
      <div className="text-center">
        <p className="text-[18px] text-gray-400 font-medium mb-2">날짜를 선택해주세요!</p>
        <p className="text-[14px] text-gray-300">선택한 날짜의 상세 일정이 여기에 표시됩니다.</p>
      </div>
    </div>
  );
}
