"use client"

import createClient from '@/utils/supabase/client';
import {User as SupabaseUser, User} from '@supabase/supabase-js'
import React, { createContext, useContext, useEffect, useState } from 'react';



interface UserContextType {
    user : SupabaseUser | null;
    loading :boolean;
    setUser : React.Dispatch<React.SetStateAction<SupabaseUser|null>>
}


const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children : React.ReactNode}>=({children})=>{
    const [user, setUser] = useState<SupabaseUser | null>(null);
    const [loading,setLoading] = useState(true)

    const supabase = createClient()

    useEffect(()=>{
        const fetchSession = async()=>{
            const {data,error} = await supabase.auth.getSession()
            setUser(data.session?.user ?? null)
            setLoading(false)
        }

        fetchSession();

        const {data: authListener} = supabase.auth.onAuthStateChange((_,session)=>{
            setUser(session?.user ?? null)
        })

        return ()=>{
            authListener.subscription.unsubscribe();
        }

    },[])

    return(
        
        <UserContext.Provider value={{user,setUser,loading}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};