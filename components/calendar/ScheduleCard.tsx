"use client"

interface ScheduleCardProps {
  selectedDate?: Date;
}

export function ScheduleCard({ selectedDate }: ScheduleCardProps) {
  return (
    <div className="border-[1.5px] border-[#36dc9a]/30 border-dashed bg-gray-50/50 rounded-[24px] h-[500px] flex items-center justify-center relative">
      <div className="text-center">
        {selectedDate ? (
          <>
            <p className="text-[18px] text-gray-700 font-medium mb-2">
              {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
            </p>
            <p className="text-[14px] text-gray-400">상세 일정이 여기에 표시됩니다.</p>
          </>
        ) : (
          <>
            <p className="text-[18px] text-gray-400 font-medium mb-2">날짜를 선택해주세요!</p>
            <p className="text-[14px] text-gray-300">선택한 날짜의 상세 일정이 여기에 표시됩니다.</p>
          </>
        )}
      </div>
    </div>
  );
}
