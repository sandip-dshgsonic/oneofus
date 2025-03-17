"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../utils/auth';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  UserPlus, 
  Settings, 
  LogOut,
  Menu,
  X,
  Music,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Waitlist', href: '/admin/waitlist', icon: UserPlus },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      x: -300, 
      opacity: 0,
      transition: { 
        duration: 0.2 
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({ 
      x: 0, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <motion.button
          type="button"
          className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          onClick={toggleMobileSidebar}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">Open sidebar</span>
          {isMobileSidebarOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </motion.button>
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={toggleMobileSidebar}
            />
            <motion.div 
              className="fixed inset-y-0 left-0 flex-1 flex flex-col max-w-xs w-full bg-white z-50 lg:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
            >
              <div className="h-full overflow-y-auto">
                <div className="flex items-center justify-center h-16 bg-gradient-to-r from-[#0378c0] to-[#8a00ff] text-white">
                  <Music className="h-6 w-6 mr-2" />
                  <h1 className="text-xl font-bold">OneOfUs Admin</h1>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={item.href}
                          className={`group flex items-center px-2 py-3 text-base font-medium rounded-md ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-[#0378c0]'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                          onClick={() => setIsMobileSidebarOpen(false)}
                        >
                          <item.icon
                            className={`mr-4 h-6 w-6 ${
                              isActive ? 'text-[#0378c0]' : 'text-gray-400 group-hover:text-gray-500'
                            }`}
                            aria-hidden="true"
                          />
                          {item.name}
                          {isActive && (
                            <ChevronRight className="ml-auto h-5 w-5 text-[#0378c0]" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    custom={navigation.length}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <button
                      onClick={logout}
                      className="group flex items-center px-2 py-3 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full mt-8"
                    >
                      <LogOut
                        className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Logout
                    </button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <motion.div 
            className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.1
            }}
          >
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center justify-center h-16 flex-shrink-0 px-4 bg-gradient-to-r from-[#0378c0] to-[#8a00ff] text-white">
                <Music className="h-6 w-6 mr-2" />
                <h1 className="text-xl font-bold">OneOfUs Admin</h1>
              </div>
              <nav className="mt-8 flex-1 px-2 space-y-2">
                {navigation.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={item.href}
                        className={`group flex items-center px-3 py-3 text-sm font-medium rounded-md ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-[#0378c0]'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <item.icon
                          className={`mr-3 h-5 w-5 ${
                            isActive ? 'text-[#0378c0]' : 'text-gray-400 group-hover:text-gray-500'
                          }`}
                          aria-hidden="true"
                        />
                        {item.name}
                        {isActive && (
                          <ChevronRight className="ml-auto h-4 w-4 text-[#0378c0]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <motion.button
                onClick={logout}
                className="flex-shrink-0 group block w-full rounded-md p-2 hover:bg-gray-50"
                whileHover={{ 
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  color: "#ef4444"
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center">
                  <LogOut className="inline-block h-5 w-5 text-gray-400 group-hover:text-red-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-red-500">
                      Logout
                    </p>
                  </div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;