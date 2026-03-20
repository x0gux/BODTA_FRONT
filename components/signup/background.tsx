import Image from "next/image";
import shape_3 from "@/public/svg/shape_3.svg";
import shape_4 from "@/public/svg/shape_4.svg";



const Background = () => {

    return( 
        <div className="w-full h-screen flex justify-between flex-col bg-white">
            <div className="w-full flex justify-start">
            <Image src={shape_3} width={100} height={100} alt="shape_1" className="w-[20%] h-auto" />
            </div>
            <div className="w-full flex justify-end">
            <Image src={shape_4} width={100} height={100} alt="shape_2" className="w-[20%] h-auto" />
            </div>
        </div>
    )

}

export default Background;


