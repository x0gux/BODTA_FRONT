'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function SignupForm() {
  const [emailId, setEmailId] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [isCustomDomain, setIsCustomDomain] = useState(true);

  return (
    <div className="w-full max-w-[640px] bg-white rounded-3xl p-10 md:p-12 flex flex-col gap-10">

      <div className="flex flex-col gap-2">
        <Label className="font-pretendard text-body font-regular text-black leading-[24px] tracking-[-0.8px]">
          이름 <span className="text-[#3b4bfb]">*</span>
        </Label>
        <div className="relative">
          <Input 
            type="text" 
            placeholder="이름을 입력해주세요." 
            className="h-[60px] w-full bg-transparent font-pretendard text-h1 md:text-h1 font-semibold text-black placeholder:text-[#3c3c434d] tracking-[-1.2px] outline-none border-none shadow-none focus-visible:ring-0 px-0 rounded-none"
          />
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#222]" />
        </div>
      </div>


      <div className="flex flex-col gap-2">
        <Label className="font-pretendard text-body font-regular text-black leading-[24px] tracking-[-0.8px]">
          비밀번호 <span className="text-[#3b4bfb]">*</span>
        </Label>
        <div className="relative">
          <Input 
            type="password" 
            placeholder="비밀번호를 입력해주세요" 
            className="h-[60px] w-full bg-transparent font-pretendard text-h1 md:text-h1 font-semibold text-black placeholder:text-[#3c3c434d] tracking-[-1.2px] outline-none border-none shadow-none focus-visible:ring-0 px-0 rounded-none"
          />
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#222]" />
        </div>
      </div>


      <div className="flex flex-col gap-2">
        <Label className="font-pretendard text-body font-regular text-black leading-[24px] tracking-[-0.8px]">이메일</Label>
        <div className="flex w-full justify-between items-center">
          <div className="flex-1 border-b-[2px] border-[#222] pb-2 pt-2 flex items-center">
            <Input 
              type="text" 
              placeholder="이메일 아이디" 
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full bg-transparent font-pretendard text-h1 md:text-h1 font-semibold text-black placeholder:text-[#3c3c434d] tracking-[-1.2px] outline-none border-none focus-visible:ring-0 shadow-none px-0 h-[44px] rounded-none" 
            />
          </div>
          
          <span className="font-pretendard text-h1 md:text-h1 font-semibold text-[#222] tracking-[-1.2px] pb-[8px] mx-4">@</span>
          
          <div className="w-[248px] border-b-[2px] border-[#222] pb-2 pt-2 flex items-center justify-between">
            {isCustomDomain ? (
                <Input 
                    type="text" 
                    placeholder="직접입력" 
                    value={emailDomain}
                    onChange={(e) => setEmailDomain(e.target.value)}
                    className="w-[180px] bg-transparent font-pretendard text-h1 md:text-h1 font-bold text-black placeholder:text-[#3c3c434d] tracking-[-1.2px] outline-none border-none focus-visible:ring-0 shadow-none px-0 h-[44px] rounded-none" 
                />
            ) : (
                <div className="w-[180px] font-pretendard text-h1 md:text-h1 font-bold text-black tracking-[-1.2px] truncate">
                    {emailDomain}
                </div>
            )}
            
            <Select 
                value={isCustomDomain ? "custom" : emailDomain}
                onValueChange={(value) => {
                    if (value === "custom") {
                        setIsCustomDomain(true);
                        setEmailDomain("");
                    } else {
                        setIsCustomDomain(false);
                        setEmailDomain(value);
                    }
                }}
            >
                <SelectTrigger className="w-[40px] border-none px-0 h-[40px] shadow-none focus:ring-0 justify-end [&>span]:hidden [&>svg]:w-[24px] [&>svg]:h-[24px] [&>svg]:text-black hover:bg-transparent data-[state=open]:bg-transparent">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem className="font-pretendard text-body" value="custom">직접입력</SelectItem>
                    <SelectItem className="font-pretendard text-body" value="naver.com">naver.com</SelectItem>
                    <SelectItem className="font-pretendard text-body" value="gmail.com">gmail.com</SelectItem>
                    <SelectItem className="font-pretendard text-body" value="daum.net">daum.net</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </div>
      </div>


      <div className="flex gap-4 mt-6">
        <Button variant="outline" className="flex-1 h-[68px] rounded-[12px] font-pretendard text-[28px] font-semibold tracking-[-1.4px] border-[#222] border-2 bg-white text-black hover:bg-gray-50">
          이전
        </Button>
        <Button className="flex-1 h-[68px] rounded-[12px] font-pretendard text-[28px] font-semibold tracking-[-1.4px] bg-[#36dc9a] hover:bg-[#36dc9a]/90 text-white border-none flex items-center justify-center">
          가입완료
        </Button>
      </div>
    </div>
  );
}
