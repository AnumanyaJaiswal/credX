import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { memo } from 'react';

const StatCard = memo(({ icon: Icon, title, value, subtitle, accentClass, iconClass }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">{value}</p>
        </div>
        <div className={`rounded-2xl p-3 ${accentClass}`}>
          <Icon className={`h-6 w-6 ${iconClass}`} />
        </div>
      </div>
      <div className="mt-5 border-t border-gray-100 pt-4">
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </motion.article>
  );
});

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.string.isRequired,
  accentClass: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired
};

StatCard.displayName = 'StatCard';

export default StatCard;
