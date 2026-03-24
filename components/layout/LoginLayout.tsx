import Background from "@/components/login/background";
import LoginForm from "@/components/login/loginform";

const LoginLayout = () => {
    return (
        <div className="relative w-full h-screen bg-black">
            <div className="absolute inset-0 z-0">
                <Background/>
            </div>
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginLayout;
