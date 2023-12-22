import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-10 rounded-full overflow-hidden border border-solid border-dark">
        <Image
          src="/assets/profile-img.png"
          alt="Logo"
          width={30}
          height={30}
          className="w-full h-auto rounded-full"
        />
      </div>
    </Link>
  );
};

export default Logo;
