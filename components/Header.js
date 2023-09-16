//mext image
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[80px]">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6
        pý-8'>
          {/* logo */}
          <Link className="mt-5 " href={"/"}>
            <Image
              src={"/logo2.png"}
              width={330}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          {/* socials */}
          {/* <Socials/> */}

        </div>
      </div>
    </header>
  );
};

export default Header;
