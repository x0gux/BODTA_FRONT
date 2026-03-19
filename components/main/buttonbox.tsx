import { Button } from "../ui/button";

const Buttonbox = () => {
    return (
        <div className="flex gap-4 w-[30%] mt-8">
            <Button variant="outline" size="lg" className="flex-1 rounded-full font-semibold text-lg py-6">
                더 알아보기
            </Button>
            <Button size="lg" className="flex-1 rounded-full font-semibold text-lg py-6 bg-primary">
                예약하기
            </Button>
        </div>
    )
}

export default Buttonbox;