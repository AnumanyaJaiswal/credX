import PropTypes from 'prop-types';
import { memo } from 'react';

const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md',
  secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  outline: 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
  danger: 'bg-red-50 text-red-600 hover:bg-red-100'
};

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base'
};

const Button = memo(({ children, variant = 'primary', size = 'md', className = '', icon: Icon, loading = false, disabled = false, ...props }) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
      ) : Icon ? (
        <Icon className="h-4 w-4" />
      ) : null}
      <span>{children}</span>
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  icon: PropTypes.elementType,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

Button.displayName = 'Button';

export default Button;
