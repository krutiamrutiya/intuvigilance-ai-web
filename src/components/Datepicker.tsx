import { DatePicker, type DatePickerProps, Typography } from "antd";

interface CustomDatepickerProps extends DatePickerProps {
  label: string;
  error: string;
  showError: boolean;
}

const { Title, Text } = Typography;

const CustomDatepicker = ({
  allowClear,
  className,
  disabled,
  format,
  locale,
  mode,
  nextIcon,
  placeholder,
  placement,
  prefix,
  prevIcon,
  size,
  status,
  suffixIcon,
  variant,
  defaultValue,
  multiple,
  value,
  picker,
  label,
  error,
  showError,
  onOk,
  disabledDate,
  onChange,
}: CustomDatepickerProps) => {
  return (
    <>
      <Title level={5}>{label}</Title>
      <DatePicker
        allowClear={allowClear}
        className={className}
        disabled={disabled}
        format={format}
        locale={locale}
        mode={mode}
        nextIcon={nextIcon}
        placeholder={placeholder}
        placement={placement}
        prefix={prefix}
        prevIcon={prevIcon}
        size={size}
        status={status}
        suffixIcon={suffixIcon}
        variant={variant}
        defaultValue={defaultValue}
        multiple={multiple}
        value={value}
        picker={picker}
        onOk={onOk}
        disabledDate={disabledDate}
        onChange={onChange}
      />
      {error && showError && <Text type="danger">{error}</Text>}
    </>
  );
};

export default CustomDatepicker;
