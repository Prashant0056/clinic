import { ThemeToggle } from "../global/themeToggle";
import { Avatar, AvatarFallback } from "../ui/avatar";

const HomeHeader = ({ name }: { name: string }) => {
  return (
    <div className="bg-background h-[10%] flex p-4 justify-between border border-gray-700 border-b-2">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className="font-bold bg-primary text-white">
            {name.split(" ")[0][0] + name.split(" ")[1][0]}
          </AvatarFallback>
        </Avatar>
        <p className="text-xl">Welcome! {name}</p>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default HomeHeader;
