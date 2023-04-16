import LogoFillable from "./logo-fillable.svg";
import LogoBg from "./logo-bg.svg";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  logoClassName?: string;
  bgClassName?: string;
};

export default function Logo({
  width = 36,
  height = 36,
  className,
  logoClassName = "fill-teal-300",
  bgClassName = "fill-current",
}: Props) {
  return (
    <div style={{ width, height }} className={className}>
      <LogoBg
        className={`${bgClassName} absolute`}
        width={width}
        height={height}
      />
      <LogoFillable
        className={`${logoClassName} absolute`}
        width={width}
        height={height}
      />
    </div>
  );
}
