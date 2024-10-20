import { Bell, Home, Info } from "lucide-react";
import Link from "next/link";

// make the whole div colored to select the route
const Navbar = () => {
  return (
    <nav className=" fixed bottom-0 left-0 right-0 w-full h-[7%] flex justify-between border-black border-t-2 dark:border-white">
      <div className=" w-full flex justify-center items-center">
        <Link href={"/home"}>
          <Home />
        </Link>
      </div>
      <div className=" w-full flex justify-center items-center">
        <Link href={"/about"}>
          <Info />
        </Link>
      </div>
      <div className=" w-full flex justify-center items-center">
        <Link href={"/notice"}>
          <Bell />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
