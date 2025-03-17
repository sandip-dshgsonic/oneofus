"use client";

import { withAuth } from '../../utils/auth';
import Sidebar from './Sidebar';
import Header from './Header';
import { motion } from 'framer-motion';

const AdminLayout = ({ children, title }) => {
  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header title={title} />
        <motion.main 
          className="flex-1"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageVariants}
        >
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default withAuth(AdminLayout);