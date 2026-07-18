import PropTypes from 'prop-types';
import { memo } from 'react';

const variants = {
  success: 'bg-emerald-50 text-emerald-700',
  info: 'bg-blue-50 text-blue-700',
  warning: 'bg-amber-50 text-amber-700',
  danger: 'bg-rose-50 text-rose-700',
  neutral: 'bg-gray-100 text-gray-700'
};

const Badge = memo(({ children, variant = 'neutral', className = '' }) => {
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]} ${className}`}>{children}</span>;
});

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger', 'neutral']),
  className: PropTypes.string
};

Badge.displayName = 'Badge';

export default Badge;
