import Background from "@/components/signup/background";
import SignupForm from "@/components/signup/signupform";

const Signup = () => {
    return (
        <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Background/>
            </div>
            <div className="relative z-10 w-full flex justify-center px-4">
                <SignupForm />
            </div>
        </div>
    )
}

export default Signup;