import { Spin, type SpinProps } from "antd";

const CustomLoader = ({
  delay,
  fullscreen,
  indicator,
  percent,
  size,
  spinning,
  tip,
  wrapperClassName,
  className,
}: SpinProps) => {
  return (
    <div className="preloader">
      <Spin
        delay={delay}
        fullscreen={fullscreen}
        indicator={indicator}
        percent={percent}
        size={size}
        spinning={spinning}
        tip={tip}
        wrapperClassName={wrapperClassName}
        className={className}
      />
    </div>
  );
};

export default CustomLoader;
