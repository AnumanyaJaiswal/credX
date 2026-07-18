import PropTypes from 'prop-types';
import { Menu, Search, Bell } from 'lucide-react';
import Avatar from '../common/Avatar';

const Header = ({ onMenuClick }) => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-white/80 px-6 py-4 backdrop-blur">
      <div>
        <p className="text-sm font-medium text-blue-600">Premium company workspace</p>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Company Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">Manage your job postings and review AI-matched candidates</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 sm:flex">
          <Search className="h-4 w-4" />
          <span>Find candidate</span>
        </div>
        <button className="rounded-full border border-gray-200 bg-white p-2.5 text-gray-600 transition hover:bg-gray-100">
          <Bell className="h-4 w-4" />
        </button>
        <button onClick={onMenuClick} className="rounded-full border border-gray-200 bg-white p-2.5 text-gray-700 lg:hidden">
          <Menu className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm">
          <Avatar fallback="TC" size={32} />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">Taylor Chen</p>
            <p className="text-xs text-gray-500">Hiring Lead</p>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onMenuClick: PropTypes.func.isRequired
};

export default Header;
