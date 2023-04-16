import localFont from "next/font/local";
import Logo from "./Logo";

const logoFont = localFont({ src: "./Astromax Regular.woff2" });

type Props = {
  title: string;
  className?: string;
};

export default function Title({ title, className = "" }: Props) {
  return (
    <h1
      className={`${logoFont.className} font-compress text-2xl flex items-center gap-x-2 ${className}`}
    >
      <Logo
        width={36}
        height={36}
        logoClassName="fill-black"
        bgClassName="fill-current"
      />
      {title}
    </h1>
  );
}
