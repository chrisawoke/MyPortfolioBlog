import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-10 rounded-full overflow-hidden border border-solid border-dark mr-2">
        <Image
          src="/assets/profile-img.png"
          alt="Logo"
          width={30}
          height={30}
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">Chris Awoke</span>
    </Link>
  );
};

export default Logo;
