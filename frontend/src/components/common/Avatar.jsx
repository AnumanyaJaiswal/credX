import PropTypes from 'prop-types';
import { memo } from 'react';

const Avatar = memo(({ src, alt, fallback, size = 40, className = '' }) => {
  const sizeClasses = {
    24: 'h-6 w-6 text-xs',
    32: 'h-8 w-8 text-sm',
    40: 'h-10 w-10 text-sm',
    48: 'h-12 w-12 text-base'
  };

  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gradient-to-br from-blue-500 to-indigo-600 text-white ${sizeClasses[size]} ${className}`}>
      {src ? <img src={src} alt={alt} className="h-full w-full object-cover" /> : <span className="font-semibold">{fallback}</span>}
    </div>
  );
});

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  size: PropTypes.oneOf([24, 32, 40, 48]),
  className: PropTypes.string
};

Avatar.displayName = 'Avatar';

export default Avatar;
