"use client"

import UpdatePasswordForm from "@/components/forgot-password/updatePasswordForm";

const UpdatePassword=()=>{
    return(
        <div className="bg-background  h-full flex flex-col justify-center gap-6 animate-fade-in-custom">
            <div className="text-center pt-36">
                <h1 className="text-[2em] ">Reset Password</h1>
            </div>
            <div className=" px-4">
                <UpdatePasswordForm/>
            </div>
        </div>
    )
}

export default UpdatePassword;