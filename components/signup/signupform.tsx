"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EmailInput } from "@/components/common/EmailInput";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const SignupForm = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setEmailId] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [isCustomDomain, setIsCustomDomain] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSignup = async () => {
    setErrorMsg("");
    if (!name || !password || !emailId || !emailDomain) {
      setErrorMsg("모든 항목을 입력해주세요.");
      return;
    }

    const fullEmail = `${emailId}@${emailDomain}`;

    try {
      setIsLoading(true);
      const user = await signUp(fullEmail, password, name);
      setUser(user);
      setShowSuccessModal(true);
    } catch (err: any) {
      setErrorMsg(err.message || "회원가입 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[640px] bg-white rounded-3xl p-10 md:p-12 flex flex-col gap-10">
      
      {errorMsg && (
        <div className="text-red-500 font-pretendard text-center font-semibold">
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Label className="font-pretendard text-body font-regular text-black leading-[24px] tracking-[-0.8px]">
          이름 <span className="text-[#3b4bfb]">*</span>
        </Label>
        <div className="relative">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
            className="h-[60px] w-full bg-transparent font-pretendard text-h1 md:text-h1 font-semibold text-black placeholder:text-[#3c3c434d] tracking-[-1.2px] outline-none border-none shadow-none focus-visible:ring-0 px-0 rounded-none"
          />
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#222]" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label className="font-pretendard text-body font-regular text-black leading-[24px] tracking-[-0.8px]">이메일</Label>
        <EmailInput
          emailId={emailId}
          emailDomain={emailDomain}
          isCustomDomain={isCustomDomain}
          onEmailIdChange={setEmailId}
          onEmailDomainChange={setEmailDomain}
          onIsCustomDomainChange={setIsCustomDomain}
        />
      </div>

      <div className="flex gap-4 mt-6">
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          className="flex-1 h-[68px] rounded-[12px] font-pretendard text-[28px] font-semibold tracking-[-1.4px] border-[#222] border-2 bg-white text-black hover:bg-gray-50"
        >
          이전
        </Button>
        <Button 
          onClick={handleSignup}
          disabled={isLoading}
          className="flex-1 h-[68px] rounded-[12px] font-pretendard text-[28px] font-semibold tracking-[-1.4px] bg-[#36dc9a] hover:bg-[#36dc9a]/90 text-white border-none flex items-center justify-center disabled:opacity-50"
        >
          {isLoading ? "진행 중..." : "가입완료"}
        </Button>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent showCloseButton={false} className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-[28px] font-pretendard font-semibold tracking-[-1.4px] pt-4">회원가입 완료!</DialogTitle>
            <DialogDescription className="text-center font-pretendard text-body tracking-[-0.8px] leading-[24px] pt-2 text-[#222]">
              BODTA에 오신 것을 환영합니다.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center mt-6 p-0 bg-transparent flex gap-4 w-full">
            <Button
              type="button"
              onClick={() => router.push("/")}
              className="bg-[#36dc9a] hover:bg-[#36dc9a]/90 text-white font-pretendard text-h1 font-semibold tracking-[-1.2px] rounded-[12px] h-[68px] w-full"
            >
              홈으로 가기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SignupForm;
