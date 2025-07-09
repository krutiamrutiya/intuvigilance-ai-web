import { Button, type ButtonProps } from "antd";

interface CustomButtonProps extends ButtonProps {
  buttonText: string;
}

const CustomButton = ({
  block,
  color,
  danger,
  disabled,
  ghost,
  href,
  htmlType,
  icon,
  loading,
  iconPosition,
  shape,
  size,
  target,
  type,
  onClick,
  variant,
  buttonText,
  className,
}: CustomButtonProps) => {
  return (
    <Button
      block={block}
      color={color}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      href={href}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      iconPosition={iconPosition}
      shape={shape}
      size={size}
      target={target}
      type={type}
      onClick={onClick}
      variant={variant}
      className={className}
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
