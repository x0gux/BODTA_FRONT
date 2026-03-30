"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { EmailInput } from "@/components/common/EmailInput";
import { logIn } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const LoginForm = () => {
    const router = useRouter();
    const { setUser } = useAuth();

    const [emailId, setEmailId] = useState("");
    const [emailDomain, setEmailDomain] = useState("");
    const [isCustomDomain, setIsCustomDomain] = useState(true);
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleLogin = async () => {
        setErrorMsg("");
        if (!emailId || !emailDomain || !password) {
            setErrorMsg("이메일과 비밀번호를 모두 입력해주세요.");
            return;
        }

        const fullEmail = `${emailId}@${emailDomain}`;

        try {
            setIsLoading(true);
            const user = await logIn(fullEmail, password);
            setUser(user);
            setShowSuccessModal(true);
            localStorage.setItem("username",user.name);
        } catch (err: any) {
            setErrorMsg(err.message || "로그인 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-[640px] flex flex-col items-center">
            
            {errorMsg && (
                <div className="text-red-500 font-pretendard mb-6 font-semibold">
                    {errorMsg}
                </div>
            )}

            <div className="w-full flex flex-col gap-[88px]">

                <div className="w-full flex flex-col gap-[6px]">
                    <Label className="font-pretendard text-body font-regular text-black leading-[24px] tracking-[-0.8px]">
                        이메일
                    </Label>
                    <EmailInput
                        emailId={emailId}
                        emailDomain={emailDomain}
                        isCustomDomain={isCustomDomain}
                        onEmailIdChange={setEmailId}
                        onEmailDomainChange={setEmailDomain}
                        onIsCustomDomainChange={setIsCustomDomain}
                    />
                </div>

                <div className="w-full flex flex-col gap-[6px]">
                    <Label className="font-pretendard text-body font-regular text-black leading-[24px] tracking-[-0.8px]">
                        비밀번호 <span className="text-[#3b4bfb]">*</span>
                    </Label>
                    <div className="w-full border-b-[2px] border-[#222] pb-[16px] pt-[8px] flex items-center">
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호를 입력해주세요"
                            className="w-full bg-transparent font-pretendard text-h1 md:text-h1 font-semibold text-black placeholder:text-[#3c3c434d] tracking-[-1.2px] outline-none border-none focus-visible:ring-0 shadow-none px-0 h-auto rounded-none"
                        />
                    </div>
                </div>

            </div>

            <Button 
                onClick={handleLogin}
                disabled={isLoading}
                className="mt-[63px] w-[310px] h-[68px] bg-[#36dc9a] hover:bg-[#36dc9a]/90 rounded-[12px] flex items-center justify-center text-white font-pretendard text-[28px] font-bold tracking-[-1.4px] disabled:opacity-50"
            >
                {isLoading ? "로그인 중..." : "로그인"}
            </Button>

            <div className="mt-[29px] flex gap-[8px] items-center font-pretendard text-h2 font-thin tracking-[-1px]">
                <span className="text-[#222]">아직 회원이 아니라면?</span>
                <Button variant="link" className="text-[#36dc9a] font-pretendard text-h2 font-thin tracking-[-1px] hover:no-underline p-0 h-auto cursor-pointer" onClick={() => { router.push("/signup") }}>회원가입하러 가기</Button>
            </div>

            <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
                <DialogContent showCloseButton={false} className="sm:max-w-md py-10 flex flex-col items-center justify-center">
                    <DialogHeader>
                        <DialogTitle className="text-center text-[28px] font-pretendard font-semibold tracking-[-1.4px] pt-4">로그인 성공!</DialogTitle>
                        <DialogDescription className="text-center font-pretendard text-body tracking-[-0.8px] leading-[24px] pt-2 text-[#222]">
                            BODTA에 오신 것을 환영합니다.
                        </DialogDescription>
                    </DialogHeader>
                    
                        <Button
                            type="button"
                            onClick={() => router.push("/")}
                            className="bg-[#36dc9a] hover:bg-[#36dc9a]/90 text-white font-pretendard text-h1 font-semibold tracking-[-1.2px] rounded-[12px] h-[68px] w-full"
                        >
                            홈으로 가기
                        </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default LoginForm;