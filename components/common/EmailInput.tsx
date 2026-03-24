"use client"

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EMAIL_DOMAINS = ["naver.com", "gmail.com", "daum.net", "nate.com"];

interface EmailInputProps {
  emailId: string;
  emailDomain: string;
  isCustomDomain: boolean;
  onEmailIdChange: (value: string) => void;
  onEmailDomainChange: (value: string) => void;
  onIsCustomDomainChange: (value: boolean) => void;
}

export function EmailInput({
  emailId,
  emailDomain,
  isCustomDomain,
  onEmailIdChange,
  onEmailDomainChange,
  onIsCustomDomainChange,
}: EmailInputProps) {
  const handleSelectChange = (value: string) => {
    if (value === "custom") {
      onIsCustomDomainChange(true);
      onEmailDomainChange("");
    } else {
      onIsCustomDomainChange(false);
      onEmailDomainChange(value);
    }
  };

  return (
    <div className="flex w-full justify-between items-center">
      {/* 아이디 */}
      <div className="flex-1 border-b-[2px] border-[#222] pb-[16px] pt-[8px] flex items-center">
        <Input
          type="text"
          placeholder="이메일 아이디"
          value={emailId}
          onChange={(e) => onEmailIdChange(e.target.value)}
          className="w-full bg-transparent font-pretendard text-h1 md:text-h1 font-semibold placeholder:text-[#3c3c434d] outline-none border-none focus-visible:ring-0 shadow-none px-0 h-auto rounded-none"
        />
      </div>

      <span className="font-pretendard text-h1 font-bold text-[#222] tracking-[-1.2px] pb-[8px] mx-4">@</span>

      {/* 도메인 */}
      <div className="w-[248px] border-b-[2px] border-[#222] pb-[16px] pt-[8px] flex items-center justify-between">
        {isCustomDomain ? (
          <Input
            type="text"
            placeholder="직접입력"
            value={emailDomain}
            onChange={(e) => onEmailDomainChange(e.target.value)}
            className="w-[180px] bg-transparent font-pretendard text-h1 md:text-h1 font-semibold text-black placeholder:text-[#3c3c434d] tracking-[-1.2px] outline-none border-none focus-visible:ring-0 shadow-none px-0 h-auto rounded-none"
          />
        ) : (
          <div className="w-[180px] font-pretendard text-h1 md:text-h1 font-semibold text-black tracking-[-1.2px] truncate">
            {emailDomain}
          </div>
        )}

        <Select
          value={isCustomDomain ? "custom" : emailDomain}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger className="w-[40px] border-none px-0 h-auto shadow-none focus:ring-0 justify-end [&>span]:hidden [&>svg]:w-[32px] [&>svg]:h-[32px] [&>svg]:text-black hover:bg-transparent data-[state=open]:bg-transparent">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="font-pretendard text-body" value="custom">직접입력</SelectItem>
            {EMAIL_DOMAINS.map((domain) => (
              <SelectItem key={domain} className="font-pretendard text-body" value={domain}>
                {domain}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
