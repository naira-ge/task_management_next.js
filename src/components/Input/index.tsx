import { IBaseInputProps } from './types';

function Input ( {
  className,
  name,
  value,
  placeholder = '',
  type = 'input',
  required = true,
  label,
  error,
  autoComplete,
  ...handlers
}: IBaseInputProps) {
  return (
    <div className={className} >
      <label>{label}</label>
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          required={required}
          autoComplete={autoComplete}
          {...handlers}
        />
      <span>{error}</span>
    </div>
  );
}

export default Input;
