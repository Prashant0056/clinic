import NoticeBody from "@/components/global/notice/noticeBody";
import NoticeHeader from "@/components/global/notice/noticeHeader";



const NoticePage=()=>{
    return (
        <div className="w-full">
            <NoticeHeader/>
            <div className=" bg-background h-full">
                <NoticeBody/>
            </div>
        </div>
    )
}  

export default NoticePage;