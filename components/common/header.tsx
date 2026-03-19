import Link from "next/link";
import Image from "next/image";
import logo from "@/public/svg/logo_white.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black dark:bg-black">
      <div className="container mx-auto flex h-28 items-center justify-between px-24">
        
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <Image src={logo} alt="Logo" width={100} height={100} className="w-[20%] h-auto" priority />
        </Link>

        
        <nav className="flex items-center gap-24">
          <Link href="/checkschedule" className="">
            <p className="font-pretendard text-h2 font-semibold text-white">일정확인</p>
          </Link>
          <Link href="/calendar" className="">  
            <p className="font-pretendard text-h2 font-semibold text-white">강습일정</p>
          </Link>

          <Link href="/login" className="">
            <p className="font-pretendard text-h2 font-semibold text-white">로그인</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
