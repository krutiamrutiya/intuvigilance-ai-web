import { Checkbox, type CheckboxProps } from "antd";

interface CustomCheckboxProps extends CheckboxProps {
  label: string;
}
const CustomCheckbox = ({
  checked,
  defaultChecked,
  disabled,
  indeterminate,
  onChange,
  label,
  name,
  className
}: CustomCheckboxProps) => {
  return (
    <Checkbox
      name={name}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      indeterminate={indeterminate}
      onChange={onChange}
      className={className}
    >
      {label}
    </Checkbox>
  );
};

export default CustomCheckbox;
