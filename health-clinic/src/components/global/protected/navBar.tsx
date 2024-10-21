"use client";

import { Bell, Home, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// make the whole div colored to select the route
const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className=" fixed bottom-0 left-0 right-0 w-full h-[7%] flex border-black border-t-2 dark:border-white  bg-background gap-12">
      
      {/* Home */}
      <div
        className={`${
          pathName === "/home" ? "grow bg-primary" : "flex-none"
        } w-14 flex justify-center items-center transition-all duration-500 p-4  text-center `}
      >
        <Link
          href={"/home"}
          className={`${
            pathName === "/home" ? "bg-primary-foreground text-primary" : ""
          } flex items-center justify-center gap-2 p-2 rounded-xl`}
        >
          <Home />
          {pathName === "/home" ? <span>Home</span> : ""}
        </Link>
      </div>


      {/* About */}
      <div
        className={`${
          pathName === "/about" ? "grow bg-primary" : "flex-none"
        } w-14 flex justify-center items-center transition-all duration-500 p-4  text-center `}
      >
        <Link
          href={"/about"}
          className={`${
            pathName === "/about" ? "bg-primary-foreground text-primary" : ""
          } flex items-center justify-center gap-2 p-2 rounded-xl`}
        >
          <Info/>
          {pathName === "/about" ? <span>About</span> : ""}
        </Link>
      </div>

      {/* Notice */}

      <div
        className={`${
          pathName === "/notice" ? "grow bg-primary" : "flex-none"
        } w-14 flex justify-center items-center transition-all duration-500 p-4  text-center `}
      >
        <Link
          href={"/notice"}
          className={`${
            pathName === "/notice" ? "bg-primary-foreground text-primary" : ""
          } flex items-center justify-center gap-2 p-2 rounded-xl`}
        >
          <Bell />
          {pathName === "/notice" ? <span>Notice</span> : ""}
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
