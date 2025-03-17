"use client";

import { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { 
  UserPlus, 
  Users, 
  Activity, 
  Calendar, 
  ChevronRight, 
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Percent,
  AlertTriangle,
  Mail,
  Phone
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import Chart component
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalWaitlistUsers: 0,
    newUsersToday: 0,
    conversionRate: 0,
    avgSignupsPerDay: 0,
  });

  const [recentEntries, setRecentEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await Promise.all([
        fetchStats(),
        fetchRecentEntries(),
        fetchChartData()
      ]);
    } catch (error) {
      console.error("Dashboard data fetch error:", error);
      setError("Failed to load dashboard data. Please check your API connection.");
      // Set some demo data for a better user experience
      setDemoData();
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/waitlist/stats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Stats API returned ${response.status}`);
      }

      const data = await response.json();
      
      if (data && data.success) {
        setStats({
          totalWaitlistUsers: data.totalWaitlistUsers || 0,
          newUsersToday: data.newUsersToday || 0,
          conversionRate: data.conversionRate || 0,
          avgSignupsPerDay: data.avgSignupsPerDay || 0,
        });
      } else {
        throw new Error("Invalid stats data format");
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
      throw error;
    }
  };

  const fetchRecentEntries = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/waitlist?page=1&limit=5&sort=createdAt&order=desc`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Recent entries API returned ${response.status}`);
      }

      const data = await response.json();
      
      if (data && data.data) {
        setRecentEntries(data.data);
      } else {
        throw new Error("Invalid entries data format");
      }
    } catch (error) {
      console.error('Error fetching recent entries:', error);
      throw error;
    }
  };

  const fetchChartData = async () => {
    // In a real app, you'd fetch this from an API endpoint
    // For now, we'll generate demo data
    const demoData = generateDemoChartData();
    setChartData(demoData);
    
    // Set status distribution data for the pie chart
    setStatusData([
      { name: 'Pending', value: 65, color: '#FBBF24' },
      { name: 'Contacted', value: 25, color: '#3B82F6' },
      { name: 'Approved', value: 10, color: '#10B981' },
    ]);
  };

  const setDemoData = () => {
    // Set demo stats
    setStats({
      totalWaitlistUsers: 128,
      newUsersToday: 12,
      conversionRate: 24.5,
      avgSignupsPerDay: 8.3,
    });
    
    // Set demo recent entries
    setRecentEntries([
      {
        _id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
      {
        _id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1 (555) 987-6543',
        status: 'contacted',
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
      {
        _id: '3',
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        phone: '+1 (555) 567-8901',
        status: 'approved',
        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      },
      {
        _id: '4',
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        phone: '+1 (555) 234-5678',
        status: 'pending',
        createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
      },
      {
        _id: '5',
        name: 'Michael Wilson',
        email: 'michael.wilson@example.com',
        phone: '+1 (555) 345-6789',
        status: 'contacted',
        createdAt: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
      },
    ]);
    
    // Set demo chart data
    setChartData(generateDemoChartData());
    
    // Set status distribution data for the pie chart
    setStatusData([
      { name: 'Pending', value: 65, color: '#FBBF24' },
      { name: 'Contacted', value: 25, color: '#3B82F6' },
      { name: 'Approved', value: 10, color: '#10B981' },
    ]);
  };

  const generateDemoChartData = () => {
    const days = 14;
    const today = new Date();
    const data = [];

    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      
      // Generate some realistic-looking random data
      const signups = Math.floor(Math.random() * 15) + 3; // Between 3-18
      const pending = Math.floor(signups * 0.7);
      const contacted = Math.floor(signups * 0.2);
      const approved = signups - pending - contacted;
      
      data.push({
        date: date.toISOString().split('T')[0],
        signups,
        pending,
        contacted,
        approved,
        conversionRate: Math.round((approved / signups) * 100)
      });
    }

    return data;
  };

  const statsCards = [
    {
      title: 'Total Waitlist Users',
      value: stats.totalWaitlistUsers,
      icon: Users,
      color: 'bg-blue-500',
      change: '+5.25%',
      changeType: 'increase',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      title: 'New Users Today',
      value: stats.newUsersToday,
      icon: UserPlus,
      color: 'bg-green-500',
      change: '+12.5%',
      changeType: 'increase',
      gradient: 'from-green-400 to-green-600',
    },
    {
      title: 'Conversion Rate',
      value: `${stats.conversionRate}%`,
      icon: Percent,
      color: 'bg-purple-500',
      change: '-2.3%',
      changeType: 'decrease',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Avg. Signups Per Day',
      value: stats.avgSignupsPerDay,
      icon: Calendar,
      color: 'bg-orange-500',
      change: '+3.7%',
      changeType: 'increase',
      gradient: 'from-orange-400 to-orange-600',
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'contacted':
        return 'bg-blue-100 text-blue-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleRetry = () => {
    fetchData();
  };

  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Child item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <AdminLayout title="Dashboard">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-96">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            <RefreshCw className="h-12 w-12 text-blue-500 mb-4" />
          </motion.div>
          <motion.p 
            className="text-gray-500 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading dashboard data...
          </motion.p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-96 max-w-md mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
          </motion.div>
          <motion.h3 
            className="text-lg font-medium text-gray-900 mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Connection Error
          </motion.h3>
          <motion.p 
            className="text-gray-500 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {error}
          </motion.p>
          <motion.p 
            className="text-sm text-gray-500 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Displaying demo data for preview purposes. Make sure your backend server is running and configured correctly.
          </motion.p>
          <motion.button
            onClick={handleRetry}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry Connection
          </motion.button>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            variants={itemVariants}
          >
            {statsCards.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all hover:shadow-md hover:-translate-y-1"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
                variants={itemVariants}
              >
                <div className={`h-2 bg-gradient-to-r ${stat.gradient}`}></div>
                <div className="p-5">
                  <div className="flex items-center">
                    <div className={`rounded-lg p-3 ${stat.color} bg-opacity-10`}>
                      <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.title}
                        </dt>
                        <dd>
                          <div className="text-2xl font-semibold text-gray-900">
                            {stat.value}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm flex items-center">
                    {stat.changeType === 'increase' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`font-medium ${
                        stat.changeType === 'increase'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>{' '}
                    <span className="text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
            variants={itemVariants}
          >
            {/* Signups Chart */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-5 lg:col-span-2"
              variants={itemVariants}
              whileHover={{ 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Waitlist Signups</h3>
                <div className="text-xs text-gray-500">Last 14 days</div>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorSignups" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="date" 
                      tickFormatter={(val) => formatDate(val)}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis tick={{ fontSize: 12 }} width={30} />
                    <Tooltip 
                      formatter={(value) => [`${value} signups`, 'Total']}
                      labelFormatter={(label) => formatDate(label)}
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        padding: '8px 12px'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="signups"
                      stroke="#3B82F6"
                      fillOpacity={1}
                      fill="url(#colorSignups)"
                      animationDuration={2000}
                      animationEasing="ease-in-out"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Status Distribution Pie Chart */}
            <motion.div 
              className="bg-white rounded-xl shadow-sm p-5"
              variants={itemVariants}
              whileHover={{ 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Status Distribution</h3>
              </div>
              <div className="h-72 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      innerRadius={40}
                      dataKey="value"
                      nameKey="name"
                      animationDuration={1500}
                      animationEasing="ease-out"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        padding: '8px 12px'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </motion.div>

          {/* Recent Entries */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-5"
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Waitlist Entries</h3>
              <Link 
                href="/admin/waitlist" 
                className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
              >
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="overflow-hidden">
              {recentEntries.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No recent entries found
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentEntries.map((entry, index) => (
                        <motion.tr 
                          key={entry._id} 
                          className="hover:bg-gray-50"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{entry.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <div className="flex items-center text-sm text-gray-500">
                                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                                <span className="truncate max-w-[150px]">{entry.email}</span>
                              </div>
                              {entry.phone && (
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                  <Phone className="h-4 w-4 text-gray-400 mr-2" />
                                  {entry.phone}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                entry.status
                              )}`}
                            >
                              {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(entry.createdAt).toLocaleDateString()}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AdminLayout>
  );
}