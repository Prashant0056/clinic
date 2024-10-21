import { Bell } from "lucide-react";
import { date } from "zod";




const NoticeHeader=()=>{
    return(
        <div className="bg-background flex p-4 gap-4 justify-center border-black dark:border-white border-b-2 sticky top-0 z-10">
            <div className="flex gap-2">
                <Bell/> <p className="text-xl">Notices</p> 
            </div>
    </div>
    )
}

export default NoticeHeader;