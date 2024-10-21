"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";


const notices = [
    {
        title: "Staff Meeting",
        date: new Date(),
        description: "A staff meeting will be held on October 1st to discuss project updates and departmental goals."
    },
    {
        title: "Health & Safety Training",
        date: new Date(),
        description: "Mandatory health and safety training for all employees on October 5th at 10 AM in the main hall."
    },
    {
        title: "Quarterly Review",
        date: new Date(),
        description: "Join us for the quarterly performance review on October 10th. Refreshments will be provided."
    },
    {
        title: "Office Closure",
        date: new Date(),
        description: "The office will be closed on October 12th for a public holiday. Normal hours resume on October 13th."
    },
    {
        title: "Team Building Event",
        date: new Date(),
        description: "A team-building event is scheduled for October 15th. Please RSVP by October 10th."
    },
    {
        title: "New Policy Implementation",
        date: new Date(),
        description: "New company policies will be implemented starting October 18th. Please review the attached document."
    },
    {
        title: "Guest Speaker Session",
        date: new Date(),
        description: "We are excited to host a guest speaker on October 20th to discuss industry trends. Don’t miss it!"
    },
    {
        title: "Charity Fundraiser",
        date: new Date(),
        description: "Join us for a charity fundraiser on October 22nd. All proceeds will go to local charities."
    },
    {
        title: "Training Workshop",
        date: new Date(),
        description: "A workshop on time management will be held on October 25th. Sign up by October 20th."
    },
    {
        title: "Annual Company Picnic",
        date: new Date(),
        description: "Save the date! The annual company picnic will take place on October 28th. Bring your families!"
    },
    {
        title: "Feedback Survey",
        date: new Date(),
        description: "Please complete the employee feedback survey by October 30th. Your input is valuable!"
    }
];



const NoticeBody = ()=>{
    return(
        <div className="flex flex-col gap-4 w-full p-4 h-full">
            {notices.map((item,index)=>{
                return (
                <div>

                    {/* <Card className="drop-shadow-md dark:shadow-white/50" onClick={()=>console.log("test")}>
                        <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.date.getFullYear()}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {item.description}
                        </CardContent>
                    </Card> */}

                    <Drawer>
                        <DrawerTrigger asChild>
                            <Card className="drop-shadow-md dark:shadow-white/50" onClick={()=>console.log("test")}>
                        <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.date.toLocaleString()}</CardDescription>
                        </CardHeader>
                    </Card>
                        </DrawerTrigger>
                        <DrawerContent>
                        <Card className="drop-shadow-md dark:shadow-white/50" onClick={()=>console.log("test")}>
                        <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.date.getFullYear()}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {item.description}
                        </CardContent>
                    </Card>
                        </DrawerContent>
                    </Drawer>
                </div>
                    
                )
            })}
        </div>
    )
}


export default NoticeBody;