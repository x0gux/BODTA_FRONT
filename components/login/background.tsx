import Image from "next/image";
import shape_1 from "@/public/svg/shape_1.svg";
import shape_2 from "@/public/svg/shape_2.svg";



const Background = () => {

    return( 
        <div className="w-full h-screen flex justify-between flex-col bg-white">
            <div className="w-full flex justify-start">
            <Image src={shape_1} width={100} height={100} alt="shape_1" className="w-[30%] h-auto" />
            </div>
            <div className="w-full flex justify-end">
            <Image src={shape_2} width={100} height={100} alt="shape_2" className="w-[30%] h-auto" />
            </div>
        </div>
    )

}

export default Background;


