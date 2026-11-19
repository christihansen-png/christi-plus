import Image from "next/image";
import Link from "next/link";


function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-transparent via-[#140F2E]/50 to-[#140F2E]">
      <Link href="/" className="mr-10">
        <Image
          src="/christi-plus-logo.svg"
          alt="Christi+ logo"
          width={140}
          height={44}
          className="cursor-pointer"
        />
      </Link>

      <div className="flex space-x-2">
        {/* Genre dropdown goes here later */}
        {/* Search goes here later */}
      </div>
    </header>
  );
}

export default Header;