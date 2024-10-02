import { ThemeToggle } from "@/components/global/themeToggle";

const AuthLayout=({children}:{children: React.ReactNode})=>{
    return(
        <div className="relative bg-background h-screen p-10">
            <div className="w-full flex justify-end absolute top-16 right-12 z-50">
              <ThemeToggle/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;