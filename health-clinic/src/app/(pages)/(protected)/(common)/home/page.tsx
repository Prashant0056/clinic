"use client";

import AppointmentForm from "@/components/appointment/clinic-visit/appointmentForms";
import HomeCarousel from "@/components/home/carousel";
import HomeHeader from "@/components/home/header";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUser } from "@/context/userContext";
import createClient from "@/utils/supabase/client";
import Image from "next/legacy/image";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const supabase = createClient();
  const { user, setUser, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) return;

    const fetchUserData = async () => {
      const userData = await supabase.auth.getUser();
      setUser(userData.data?.user);
    };
    fetchUserData();

    //fetch user appointment data


    router.prefetch("/about");
    router.prefetch("/notice");
  }, []);

  const name = user?.user_metadata.name;

  return (
    <>
      <div className="h-full">
        <HomeHeader name={name} />
        <div className="h-32 overflow-hidden">
          <HomeCarousel />
        </div>

        <div className="relative h-[58%] animate-fade-in-custom">
          {/* Front */}
          <div className="absolute inset-0 z-40 pt-10">
            <div className="h-full p-8 flex flex-col justify-around text-center">
              <p className="font-bold text-2xl bg-primary p-4 rounded-md text-white">
                Make an appointment
              </p>

              <div className="flex h-full flex-col gap-10 justify-center p-4">
               
                <Dialog>
                  <DialogTrigger asChild>
                  <Button
                  size={"lg"}
                  className="h-[30%] text-xl rounded-3xl bg-primary text-black dark:text-white "
                >
                  Clinic visit
                </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-md">
                    <DialogHeader>
                      <DialogTitle>Make a clinic visit appointment</DialogTitle>
                    </DialogHeader>
                        <AppointmentForm/>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                   
                <Button
                      size={"lg"}
                      className="h-[30%] text-xl rounded-3xl bg-secondary text-black dark:text-white "
                      
                    >
                      Home Visit
                    </Button>

                  </DialogTrigger>
                  <DialogContent className="rounded-md">
                    <DialogHeader>
                      <DialogTitle>Make a home visit appointment</DialogTitle>
                    </DialogHeader>
                       <AppointmentForm isHomeVisit={true}/>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className=" h-full w-full z-0 pt-48">
            <div className="">
              <Image
                src="/images/illustrations/home-doctor.svg"
                alt="Clinic Logo"
                width={500}
                height={500}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
