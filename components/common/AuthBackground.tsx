import Image, { StaticImageData } from "next/image";

interface AuthBackgroundProps {
  topShape: StaticImageData;
  bottomShape: StaticImageData;
}

const AuthBackground = ({ topShape, bottomShape }: AuthBackgroundProps) => {
  return (
    <div className="w-full h-screen flex justify-between flex-col bg-white">
      <div className="w-full flex justify-start">
        <Image src={topShape} width={100} height={100} alt="background-top" className="w-[20%] h-auto" />
      </div>
      <div className="w-full flex justify-end">
        <Image src={bottomShape} width={100} height={100} alt="background-bottom" className="w-[20%] h-auto" />
      </div>
    </div>
  );
};

export default AuthBackground;
