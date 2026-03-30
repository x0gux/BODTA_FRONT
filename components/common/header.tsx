"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/svg/logo_white.svg";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <div className="fixed top-0 z-100 w-full bg-black dark:bg-black">
      <div className="container mx-auto flex h-28 items-center justify-between px-24">

        <Link href="/" className="text-xl font-bold tracking-tighter">
          <Image src={logo} alt="Logo" width={100} height={100} className="w-[8vw] h-auto" priority />
        </Link>

        <nav className="flex items-center gap-24">
          <Link href="/checkschedule">
            <p className="font-pretendard text-h2 font-semibold text-white">일정확인</p>
          </Link>
          <Link href="/calendar">
            <p className="font-pretendard text-h2 font-semibold text-white">강습일정</p>
          </Link>

          {user ? (
            <button onClick={() => {router.push("/mypage")}} className="font-pretendard text-h2 font-semibold text-[#36dc9a] cursor-pointer flex">
              {user.name}<p className="text-white">님</p>
            </button>
          ) : (
            <Link href="/login">
              <p className="font-pretendard text-h2 font-semibold text-white">로그인</p>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
