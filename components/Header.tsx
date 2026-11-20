import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-transparent via-[#140F2E]/50 to-[#140F2E]">
      <Link href="/" className="mr-10 flex items-center">
        <Image
          src="/christi-plus-logo.svg"
          alt="Christi+ logo"
          width={140}
          height={44}
          className="cursor-pointer"
        />
        <span className="ml-4 rounded-full border border-glam-gold/60 bg-glam-space/70 px-3 py-1 text-xs text-glam-gold">
          🚧 Work in progress
        </span>
      </Link>

      <div className="flex space-x-2">
        {/* Genre dropdown goes here later */}
        {/* Search goes here later */}
      </div>
    </header>
  );
}

export default Header;
