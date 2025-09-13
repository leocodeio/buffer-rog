import Image from "next/image";

export const LandingImgLogo = ({ className }: { className: string }) => {
  return <Image
      src="/assets/blinkit.png"
      alt="logo"
      className={className}
      width={100}
      height={100}
    />
};
