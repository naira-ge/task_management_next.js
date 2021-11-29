import { IBaseInputProps } from './types';
import styles from './styles.module.scss';

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
          className={styles.input}
          {...handlers}
        />
      <p className={styles.error}>{error}</p>
    </div>
  );
}

export default Input;
