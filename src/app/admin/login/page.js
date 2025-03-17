"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../utils/auth';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Music, User, Lock, ArrowRight } from 'lucide-react';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const success = login(credentials.email, credentials.password);

    if (success) {
      toast.success('Login successful!');
      router.push('/admin/dashboard');
    } else {
      toast.error('Invalid credentials. Please try again.');
    }

    setSubmitting(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <div className="w-20 h-20 relative flex items-center justify-center bg-gradient-to-r from-[#0378c0] to-[#8a00ff] rounded-full shadow-lg">
            <Music className="h-10 w-10 text-white" />
          </div>
        </motion.div>
        <motion.h2 
          className="mt-6 text-center text-3xl font-extrabold text-gray-900"
          variants={itemVariants}
        >
          OneOfUs Admin
        </motion.h2>
        <motion.p 
          className="mt-2 text-center text-sm text-gray-600"
          variants={itemVariants}
        >
          Access the VR music platform dashboard
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-100"
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            y: -5
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={credentials.email}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="admin@dshgsonic.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Admin@123"
                />
              </div>
            </div>

            <div>
              <motion.button
                type="submit"
                disabled={submitting}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#0378c0] to-[#8a00ff] hover:from-[#0360a0] hover:to-[#7500d9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <ArrowRight className={`h-5 w-5 ${submitting ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
                </span>
                {submitting ? 'Signing in...' : 'Sign in'}
              </motion.button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              {/* <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div> */}
              {/* <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Login credentials</span>
              </div> */}
            </div>

            {/* <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium">admin@dshgsonic.com</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-xs text-gray-500">Password</p>
                <p className="text-sm font-medium">Admin@123</p>
              </div>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}