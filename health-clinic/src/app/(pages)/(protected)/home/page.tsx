"use client"

import HomeCarousel from "@/components/home/carousel";
import HomeHeader from "@/components/home/header";
import LogoutButton from "@/components/home/logoutButton";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/userContext";
import createClient from "@/utils/supabase/client";
import { useEffect, useState } from "react";


const Home=()=>{

    const supabase = createClient()
    const {user, setUser, loading} = useUser()

    useEffect(()=>{
        if(user)
            return

        const fetchUserData = async()=>{
            const userData =await supabase.auth.getUser()
        setUser(userData.data?.user)
        }
        fetchUserData()
    },[])

    const name = user?.user_metadata.name
    

    return(
        <>  
        <div className="h-full">
            <HomeHeader name={name}/>
            <div className="h-[25%]">
                <HomeCarousel/>
            </div>
            <div className="bg-background h-[5%] mt-8 flex justify-center items-center">
                <p className="font-bold text-l">Shalom Physiotherapy Clinic</p>
            </div>
            <div className="h-[50%] p-10 flex flex-col justify-around text-center">
                <p className="font-bold text-l">Make an appointment</p>
                <Button size={"lg"} className="h-[30%]">Clinic Visit</Button>
                <Button size={"lg"} className="h-[30%]">Home Visit</Button>
            <LogoutButton/>
                </div>
            </div>
        </>
    )
}

export default Home;