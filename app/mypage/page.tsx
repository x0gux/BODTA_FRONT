"use client";

import { TeacherUp , GetId } from "@/lib/auth";

const MyPage = () => {

    const handleInstructorApplication = async () => {
        await TeacherUp(await GetId(localStorage.getItem("username")!));
    }
    return (
        <div className="mt-30">
            <button onClick={handleInstructorApplication} >
                강사신청
            </button>
        </div>
    )

}
export default MyPage;