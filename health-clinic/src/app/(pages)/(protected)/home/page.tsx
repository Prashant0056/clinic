"use client"

import HomeHeader from "@/components/home/header";
import LogoutButton from "@/components/home/logoutButton";
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
        <div className="bg-blue-500 h-full">
            <HomeHeader name={"Prashant Rai"}/>
            <div className="bg-pink-700 h-[30%]">
                This is the image carousel
            </div>
            <div className="bg-lime-200 h-[5%]">
                Appointments
            </div>
            <div className="bg-yellow-400 h-[50%] p-10 flex flex-col justify-around">
                <div className="w-full h-[40%] rounded-3xl bg-white ">
                    Clinic visit
                </div>
                <div className="w-full h-[40%] rounded-3xl bg-white ">
                    Clinic visit
            <h1>This is the home page</h1>
            <LogoutButton/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;