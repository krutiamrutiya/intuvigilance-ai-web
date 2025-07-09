import { Select, type SelectProps, Typography } from "antd";

interface CustomSelectProps extends SelectProps {
  label?: string;
  required?: boolean;
  error?: string | undefined;
  showError?: boolean | undefined | "";
}
const { Text } = Typography;
const CustomSelect = ({
  label,
  required,
  allowClear,
  defaultValue,
  disabled,
  popupRender,
  fieldNames,
  loading,
  mode,
  maxCount,
  options,
  placeholder,
  placement,
  prefix,
  removeIcon,
  searchValue,
  status,
  value,
  variant,
  onBlur,
  onChange,
  onClear,
  onOpenChange,
  error,
  showError,
  className,
  defaultOpen,
}: CustomSelectProps) => {
  return (
    <div className="label-field">
      {label && (
        <label>
          <span className="field-label">
            {label}
            {required && <span className="required">*</span>}
          </span>
        </label>
      )}
      <Select
        defaultValue={defaultValue}
        allowClear={allowClear}
        disabled={disabled}
        popupRender={popupRender}
        fieldNames={fieldNames}
        loading={loading}
        mode={mode}
        maxCount={maxCount}
        options={options}
        placeholder={placeholder}
        placement={placement}
        prefix={prefix}
        removeIcon={removeIcon}
        searchValue={searchValue}
        status={status}
        value={value}
        variant={variant}
        onBlur={onBlur}
        onChange={onChange}
        onClear={onClear}
        className={className}
        onOpenChange={onOpenChange}
        defaultOpen={defaultOpen}
      />
      {error && showError && <Text className="error">{error}</Text>}
    </div>
  );
};

export default CustomSelect;
