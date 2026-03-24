import { NavigationBox, Buttonbox } from "@/components/main";

const MainLayout = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-start px-36">
            <NavigationBox/>
            <Buttonbox/>
        </div>
    )
}

export default MainLayout;
