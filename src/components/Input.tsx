import { Input, type InputProps, Typography } from "antd";

interface CustomInputProps extends InputProps {
  label?: string;
  isPassword?: boolean;
  error?: string | undefined;
  showError?: boolean | string | undefined;
  inputType?: string | undefined;
  autoSize?: Record<string, any>;
}
const { Text } = Typography;
const CustomInput = ({
  allowClear,
  defaultValue,
  disabled,
  id,
  prefix,
  suffix,
  size,
  type,
  variant,
  value,
  onChange,
  onPressEnter,
  onClear,
  onBlur,
  className,
  label,
  name,
  error,
  showError,
  required,
  placeholder,
  addonAfter,
  inputType,
  autoSize,
}: CustomInputProps) => {
  const renderInputField = (inputType: string) => {
    switch (inputType) {
      case "password": {
        return (
          <Input.Password
            id={id}
            name={name}
            placeholder={placeholder}
            allowClear={allowClear}
            disabled={disabled}
            prefix={prefix}
            status={showError ? "error" : ""}
            suffix={suffix}
            size={size}
            variant={variant}
            value={value}
            onChange={onChange}
            onPressEnter={onPressEnter}
            onClear={onClear}
            onBlur={onBlur}
            className={className}
            defaultValue={defaultValue}
          />
        );
      }
      case "text": {
        return (
          <Input
            id={id}
            name={name}
            allowClear={allowClear}
            placeholder={placeholder}
            disabled={disabled}
            prefix={prefix}
            status={showError ? "error" : ""}
            suffix={suffix}
            size={size}
            variant={variant}
            value={value}
            onChange={onChange}
            onPressEnter={onPressEnter}
            onClear={onClear}
            onBlur={onBlur}
            className={className}
            type={type}
            defaultValue={defaultValue}
            addonAfter={addonAfter}
          />
        );
      }
      case "textarea": {
        return (
          <Input.TextArea
            id={id}
            name={name}
            allowClear={allowClear}
            placeholder={placeholder}
            disabled={disabled}
            status={showError ? "error" : ""}
            size={size}
            variant={variant}
            value={value}
            onClear={onClear}
            className={className}
            defaultValue={defaultValue}
            onChange={
              onChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
            }
            onBlur={
              onBlur as unknown as React.FocusEventHandler<HTMLTextAreaElement>
            }
            autoSize={autoSize}
          />
        );
      }
    }
  };

  return (
    <div>
      {label && (
        <label>
          <span className="field-label">
            {label}
            {required && <span className="required">*</span>}
          </span>
        </label>
      )}
      {renderInputField(inputType ?? "text")}
      {error && showError && <Text className="error">{error}</Text>}
    </div>
  );
};

export default CustomInput;
