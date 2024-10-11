"use client";

import { ThemeToggle } from "@/components/global/themeToggle";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setIsAnimating(true);

    router.prefetch("/login")
    setTimeout(() => [router.push("/login")], 1000);
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center text-black bg-background dark:text-white">
      <div className="w-full flex justify-end absolute top-16 right-12 z-50">
              <ThemeToggle/>
            </div>
        <div className="h-screen w-4/5 flex flex-col items-center justify-between pt-40 pb-16 ">
          <div className="w-fit h-fit flex items-center flex-col gap-[5vh]">
            <div
              className={`text-[2em] flex flex-col justify-center items-center gap-[5vh] transition-opacity duration-1000 ${
                isAnimating ? "opacity-0" : ""
              }`}
            >
              <Image src='/images/logo.svg' alt="Clinic Logo" width={200} height={200} className="bg-red-50 rounded-full" priority={true}/>
              Shalom Health Clinic
            </div>

            <Button
              disabled={isAnimating}
              className={`text-[1.6em] px-16 py-8 transition-all duration-1000  ${
                isAnimating ? "translate-y-24" : ""
              }`}
              onClick={handleClick}
            >
              {isAnimating ? (
                <Loader2 className="animate-spin"></Loader2>
              ) : (
                "Get Started"
              )}
            </Button>

          </div>
          <footer>Copyright &copy; 2024</footer>
        </div>
      </div>
    </>
  );
}
