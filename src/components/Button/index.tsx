import { ButtonProps } from './types';

function Button ( {
  className,
  children,
  title,
  disabled,
  loading,
  onClick,
}: ButtonProps) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {/*loading ? <SpinnerIcon /> :*/ title || children}
    </button>
  );
}

export default Button;
