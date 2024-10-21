import Link from "next/link";
import { ThemeToggle } from "../global/themeToggle";
import { Avatar, AvatarFallback } from "../ui/avatar";

const HomeHeader = ({ name }: { name: string }) => {

  const initials = name?.split(" ")[0][0] + name?.split(" ")[1][0]

  return (
    <div className="bg-background h-[10%] flex p-4 justify-between border-black dark:border-white border-b-2">
      <div className="flex items-center gap-2 animate-fade-in-custom">
        <Link href={'/profile'}>
        <Avatar>
          <AvatarFallback className="font-bold bg-primary text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
        </Link>
        <p className="text-xl font-bold">Welcome! </p><span className="text-primary text-xl animate-fade-in-custom"> {name}</span>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default HomeHeader;
