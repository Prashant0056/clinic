"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AboutPage=()=>{


    const router = useRouter()

    useEffect(()=>{
        router.prefetch('/home')
        router.prefetch('/notice')
    },[])


    return(
        <p>This is about page</p>
    )
}

export default AboutPage;