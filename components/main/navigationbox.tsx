import Image from "next/image";
import logo from "@/public/svg/logo.svg";

const NavigationBox = () => {
    return (
        <div className="flex flex-col gap-8">
            <p className="font-pretendard text-h1 font-bold text-black">보드 강습 관리는? 보드타</p>
            <Image src={logo} width={100} height={100} alt="logo" className="w-[100%] h-auto" />
        </div>
    )
}

export default NavigationBox;