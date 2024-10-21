import Navbar from "@/components/global/protected/navBar";
import { UserProvider } from "@/context/userContext";

const ProtectedLayout=({children}:{children: React.ReactNode})=>{
    return(
        <UserProvider>
        <div className="flex">
            {children}
            <Navbar/>
        </div>
        </UserProvider>
    )
}

export default ProtectedLayout;