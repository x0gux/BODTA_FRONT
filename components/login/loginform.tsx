"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LoginForm = () => {
    const [emailId, setEmailId] = useState("");
    const [emailDomain, setEmailDomain] = useState("");
    const [isCustomDomain, setIsCustomDomain] = useState(true);
    const router = useRouter();

    return (
        <div className="w-[640px] flex flex-col items-center">

            <div className="w-full flex flex-col gap-[88px]">
                

                <div className="w-full flex flex-col gap-[6px]">
                    <Label className="font-pretendard text-body font-regular text-black leading-[24px] tracking-[-0.8px]">
                        이메일
                    </Label>
                    <div className="flex w-full justify-between items-center">
                        <div className="w-[300px] border-b-[2px] border-[#222] pb-[16px] pt-[8px] flex items-center">
                            <Input 
                                type="text" 
                                placeholder="이메일 아이디" 
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                                className="w-full bg-transparent font-pretendard text-h1 md:text-h1 font-semibold placeholder:text-[#3c3c434d] outline-none border-none focus-visible:ring-0 shadow-none px-0 h-auto rounded-none" 
                            />
                        </div>

                        <span className="font-pretendard text-h1 font-bold text-[#222] tracking-[-1.2px] pb-[8px]">@</span>

                        <div className="w-[280px] border-b-[2px] border-[#222] pb-[16px] pt-[8px] flex items-center justify-between">
                            {isCustomDomain ? (
                                <Input 
                                    type="text" 
                                    placeholder="직접입력" 
                                    value={emailDomain}
                                    onChange={(e) => setEmailDomain(e.target.value)}
                                    className="w-[200px] bg-transparent font-pretendard text-h1 md:text-h1 font-semibold text-black placeholder:text-[#3c3c434d] tracking-[-1.2px] outline-none border-none focus-visible:ring-0 shadow-none px-0 h-auto rounded-none" 
                                />
                            ) : (
                                <div className="w-[200px] font-pretendard text-h1 md:text-h1 font-semibold text-black tracking-[-1.2px] truncate">
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
                                <SelectTrigger className="w-[40px] border-none px-0 h-auto shadow-none focus:ring-0 justify-end [&>span]:hidden [&>svg]:w-[32px] [&>svg]:h-[32px] [&>svg]:text-black hover:bg-transparent data-[state=open]:bg-transparent">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="font-pretendard text-body" value="custom">직접입력</SelectItem>
                                    <SelectItem className="font-pretendard text-body" value="naver.com">naver.com</SelectItem>
                                    <SelectItem className="font-pretendard text-body" value="gmail.com">gmail.com</SelectItem>
                                    <SelectItem className="font-pretendard text-body" value="daum.net">daum.net</SelectItem>
                                    <SelectItem className="font-pretendard text-body" value="nate.com">nate.com</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>


                <div className="w-full flex flex-col gap-[6px]">
                    <Label className="font-pretendard text-body font-regular text-black leading-[24px] tracking-[-0.8px]">
                        비밀번호 <span className="text-[#3b4bfb]">*</span>
                    </Label>
                    <div className="w-full border-b-[2px] border-[#222] pb-[16px] pt-[8px] flex items-center">
                        <Input 
                            type="password" 
                            placeholder="비밀번호를 입력해주세요" 
                            className="w-full bg-transparent font-pretendard text-h1 md:text-h1 font-semibold text-black placeholder:text-[#3c3c434d] tracking-[-1.2px] outline-none border-none focus-visible:ring-0 shadow-none px-0 h-auto rounded-none" 
                        />
                    </div>
                </div>

            </div>


            <Button className="mt-[63px] w-[310px] h-[68px] bg-[#36dc9a] hover:bg-[#36dc9a]/90 rounded-[12px] flex items-center justify-center text-white font-pretendard text-[28px] font-bold tracking-[-1.4px]">
                로그인
            </Button>


            <div className="mt-[29px] flex gap-[8px] items-center font-pretendard text-h2 font-thin tracking-[-1px]">
                <span className="text-[#222]">아직 회원이 아니라면?</span>
                <Button variant="link" className="text-[#36dc9a] font-pretendard text-h2 font-thin tracking-[-1px] hover:no-underline p-0 h-auto cursor-pointer" onClick={ ()=> {router.push("/signup")}}>회원가입하러 가기</Button>
            </div>
        </div>
    );
};

export default LoginForm;