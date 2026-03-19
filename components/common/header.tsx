import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo_white.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black dark:bg-black">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>

        
        <nav className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:underline text-white">
            일정확인
          </Link>

          <Link href="/login" className="text-sm font-medium hover:underline text-white">
            강습일정
          </Link>

          <Link href="/login" className="text-sm font-medium hover:underline text-white">
            로그인
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
