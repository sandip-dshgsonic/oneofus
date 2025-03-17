// "use client";

// import { useState, useEffect } from 'react';
// import AdminLayout from '../../components/admin/AdminLayout';
// import { toast } from 'react-hot-toast';
// import { 
//   Search, 
//   Download, 
//   ChevronDown, 
//   ChevronUp, 
//   Filter,
//   Check,
//   X,
//   Edit,
//   Mail,
//   Phone,
//   Clock,
//   Calendar,
//   RefreshCw
// } from 'lucide-react';

// export default function WaitlistPage() {
//   const [waitlist, setWaitlist] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [status, setStatus] = useState('all');
//   const [sortField, setSortField] = useState('createdAt');
//   const [sortDirection, setSortDirection] = useState('desc');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalEntries, setTotalEntries] = useState(0);
//   const [selectedEntry, setSelectedEntry] = useState(null);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [statusUpdateLoading, setStatusUpdateLoading] = useState(false);
  
//   const entriesPerPage = 10;

//   useEffect(() => {
//     fetchWaitlist();
//   }, [currentPage, sortField, sortDirection, status]);

//   const fetchWaitlist = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/waitlist?page=${currentPage}&limit=${entriesPerPage}&sort=${sortField}&order=${sortDirection}${
//           status !== 'all' ? `&status=${status}` : ''
//         }${searchTerm ? `&search=${searchTerm}` : ''}`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch waitlist data');
//       }

//       const data = await response.json();
//       setWaitlist(data.data || []);
//       setTotalPages(Math.ceil(data.count / entriesPerPage) || 1);
//       setTotalEntries(data.count || 0);
//     } catch (error) {
//       console.error('Error fetching waitlist:', error);
//       toast.error('Failed to load waitlist entries');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortField(field);
//       setSortDirection('asc');
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setCurrentPage(1);
//     fetchWaitlist();
//   };

//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleUpdateStatus = async (id, newStatus) => {
//     setStatusUpdateLoading(true);
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/waitlist/${id}`,
//         {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ status: newStatus }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to update status');
//       }

//       toast.success(`Status updated to ${newStatus}`);
      
//       // Update local data without refetching
//       setWaitlist(
//         waitlist.map((item) =>
//           item._id === id ? { ...item, status: newStatus } : item
//         )
//       );
      
//       setShowUpdateModal(false);
//     } catch (error) {
//       console.error('Error updating status:', error);
//       toast.error('Failed to update status');
//     } finally {
//       setStatusUpdateLoading(false);
//     }
//   };

//   const handleExportCSV = () => {
//     try {
//       const headers = ['Name', 'Email', 'Phone', 'Status', 'Date Joined'];
      
//       const csvContent = [
//         headers.join(','),
//         ...waitlist.map(entry => [
//           entry.name.replace(/,/g, ' '),
//           entry.email,
//           entry.phone,
//           entry.status,
//           new Date(entry.createdAt).toLocaleDateString()
//         ].join(','))
//       ].join('\n');
      
//       const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.setAttribute('href', url);
//       link.setAttribute('download', `waitlist_export_${new Date().toISOString().split('T')[0]}.csv`);
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       toast.success('Waitlist data exported successfully');
//     } catch (error) {
//       console.error('Error exporting data:', error);
//       toast.error('Failed to export data');
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//     });
//   };

//   const formatTime = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'contacted':
//         return 'bg-blue-100 text-blue-800';
//       case 'approved':
//         return 'bg-green-100 text-green-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const SortIcon = ({ field }) => {
//     if (sortField !== field) return <ChevronDown className="h-4 w-4 text-gray-400" />;
//     return sortDirection === 'asc' ? (
//       <ChevronUp className="h-4 w-4 text-blue-600" />
//     ) : (
//       <ChevronDown className="h-4 w-4 text-blue-600" />
//     );
//   };

//   return (
//     <AdminLayout title="Waitlist Management">
//       <div className="space-y-6">
//         {/* Filters and Search */}
//         <div className="bg-white shadow-sm rounded-lg p-5">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-4">
//             <div className="flex items-center space-x-4">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Waitlist Entries
//               </h2>
//               <div className="inline-flex text-sm items-center rounded-full px-2.5 py-0.5 bg-blue-100 text-blue-800">
//                 <span className="font-medium">{totalEntries}</span>
//                 <span className="ml-1">total</span>
//               </div>
//             </div>
            
//             <button
//               onClick={handleExportCSV}
//               className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 rounded-md text-sm font-medium"
//             >
//               <Download className="h-4 w-4 mr-2" />
//               Export CSV
//             </button>
//           </div>
          
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="w-full md:w-2/3">
//               <form onSubmit={handleSearch} className="flex">
//                 <div className="relative flex-grow">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Search className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     placeholder="Search by name or email"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Search
//                 </button>
//               </form>
//             </div>
            
//             <div className="w-full md:w-1/3">
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Filter className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <select
//                   className="block w-full pl-10 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
//                   value={status}
//                   onChange={handleStatusChange}
//                 >
//                   <option value="all">All Status</option>
//                   <option value="pending">Pending</option>
//                   <option value="contacted">Contacted</option>
//                   <option value="approved">Approved</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Data Table */}
//         <div className="bg-white shadow-sm rounded-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                     onClick={() => handleSort('name')}
//                   >
//                     <div className="flex items-center space-x-1">
//                       <span>Name</span>
//                       <SortIcon field="name" />
//                     </div>
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                     onClick={() => handleSort('email')}
//                   >
//                     <div className="flex items-center space-x-1">
//                       <span>Email</span>
//                       <SortIcon field="email" />
//                     </div>
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Phone
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                     onClick={() => handleSort('status')}
//                   >
//                     <div className="flex items-center space-x-1">
//                       <span>Status</span>
//                       <SortIcon field="status" />
//                     </div>
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
//                     onClick={() => handleSort('createdAt')}
//                   >
//                     <div className="flex items-center space-x-1">
//                       <span>Date Joined</span>
//                       <SortIcon field="createdAt" />
//                     </div>
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {loading ? (
//                   <tr>
//                     <td colSpan="6" className="px-6 py-20">
//                       <div className="flex justify-center">
//                         <RefreshCw className="h-8 w-8 text-blue-500 animate-spin" />
//                       </div>
//                       <p className="text-center text-gray-500 mt-4">Loading waitlist data...</p>
//                     </td>
//                   </tr>
//                 ) : waitlist.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="px-6 py-20 text-center text-gray-500">
//                       No waitlist entries found
//                     </td>
//                   </tr>
//                 ) : (
//                   waitlist.map((entry) => (
//                     <tr key={entry._id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">{entry.name}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <Mail className="h-4 w-4 text-gray-400 mr-2" />
//                           <div className="text-sm text-gray-500">{entry.email}</div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <Phone className="h-4 w-4 text-gray-400 mr-2" />
//                           <div className="text-sm text-gray-500">{entry.phone}</div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
//                             entry.status
//                           )}`}
//                         >
//                           {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex flex-col">
//                           <div className="flex items-center text-sm text-gray-500">
//                             <Calendar className="h-4 w-4 text-gray-400 mr-2" />
//                             {formatDate(entry.createdAt)}
//                           </div>
//                           <div className="flex items-center text-xs text-gray-400 mt-1">
//                             <Clock className="h-3 w-3 mr-1" />
//                             {formatTime(entry.createdAt)}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-center">
//                         <button
//                           className="text-blue-600 hover:text-blue-900 font-medium text-sm"
//                           onClick={() => {
//                             setSelectedEntry(entry);
//                             setShowUpdateModal(true);
//                           }}
//                         >
//                           Update Status
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
          
//           {/* Pagination */}
//           <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//             <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//               <div>
//                 <p className="text-sm text-gray-700">
//                   Showing{' '}
//                   <span className="font-medium">
//                     {waitlist.length > 0 ? (currentPage - 1) * entriesPerPage + 1 : 0}
//                   </span>{' '}
//                   to{' '}
//                   <span className="font-medium">
//                     {Math.min(currentPage * entriesPerPage, totalEntries)}
//                   </span>{' '}
//                   of <span className="font-medium">{totalEntries}</span> results
//                 </p>
//               </div>
//               <div>
//                 <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                   <button
//                     onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                     disabled={currentPage === 1}
//                     className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <span className="sr-only">Previous</span>
//                     <ChevronUp className="h-5 w-5 rotate-90" />
//                   </button>
                  
//                   {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//                     const page = totalPages <= 5 
//                       ? i + 1 
//                       : currentPage <= 3 
//                         ? i + 1 
//                         : currentPage >= totalPages - 2 
//                           ? totalPages - 4 + i 
//                           : currentPage - 2 + i;
                    
//                     return (
//                       <button
//                         key={page}
//                         onClick={() => setCurrentPage(page)}
//                         className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
//                           currentPage === page
//                             ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
//                             : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
//                         }`}
//                       >
//                         {page}
//                       </button>
//                     );
//                   })}
                  
//                   <button
//                     onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//                     disabled={currentPage === totalPages}
//                     className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <span className="sr-only">Next</span>
//                     <ChevronDown className="h-5 w-5 rotate-90" />
//                   </button>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Status Update Modal */}
//       {showUpdateModal && selectedEntry && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-md w-full p-6">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-lg font-medium text-gray-900">Update Status</h3>
//               <button
//                 onClick={() => setShowUpdateModal(false)}
//                 className="text-gray-400 hover:text-gray-500"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
            
//             <div className="mb-6">
//               <p className="text-sm text-gray-500 mb-4">
//                 Change the status for <span className="font-medium text-gray-900">{selectedEntry.name}</span>
//               </p>
              
//               <div className="space-y-3">
//                 {['pending', 'contacted', 'approved'].map(statusOption => (
//                   <button
//                     key={statusOption}
//                     onClick={() => handleUpdateStatus(selectedEntry._id, statusOption)}
//                     disabled={statusUpdateLoading}
//                     className={`flex items-center w-full px-4 py-3 rounded-md border ${
//                       selectedEntry.status === statusOption
//                         ? 'border-blue-500 bg-blue-50'
//                         : 'border-gray-300'
//                     }`}
//                   >
//                     <div className={`flex-shrink-0 h-5 w-5 rounded-full ${
//                       getStatusColor(statusOption).replace('text-', 'bg-').replace('-100', '-400')
//                     }`} />
//                     <span className="ml-3 font-medium">
//                       {statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
//                     </span>
//                     {selectedEntry.status === statusOption && (
//                       <Check className="ml-auto h-5 w-5 text-blue-500" />
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowUpdateModal(false)}
//                 className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md text-sm font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => setShowUpdateModal(false)}
//                 className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-sm font-medium"
//               >
//                 Done
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </AdminLayout>
//   );
// }




"use client";

import { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { toast } from 'react-hot-toast';
import { 
  Search, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Filter,
  Check,
  X,
  Edit,
  Mail,
  Phone,
  Clock,
  Calendar,
  RefreshCw,
  Trash2  // Add Trash2 icon
} from 'lucide-react';

export default function WaitlistPage() {
  const [waitlist, setWaitlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('all');
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalEntries, setTotalEntries] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [statusUpdateLoading, setStatusUpdateLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);  // Add state for delete modal
  const [deleteLoading, setDeleteLoading] = useState(false);  // Add state for delete loading
  
  const entriesPerPage = 10;

  useEffect(() => {
    fetchWaitlist();
  }, [currentPage, sortField, sortDirection, status]);

  const fetchWaitlist = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/waitlist?page=${currentPage}&limit=${entriesPerPage}&sort=${sortField}&order=${sortDirection}${
          status !== 'all' ? `&status=${status}` : ''
        }${searchTerm ? `&search=${searchTerm}` : ''}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch waitlist data');
      }

      const data = await response.json();
      setWaitlist(data.data || []);
      setTotalPages(Math.ceil(data.count / entriesPerPage) || 1);
      setTotalEntries(data.count || 0);
    } catch (error) {
      console.error('Error fetching waitlist:', error);
      toast.error('Failed to load waitlist entries');
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchWaitlist();
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleUpdateStatus = async (id, newStatus) => {
    setStatusUpdateLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/waitlist/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      toast.success(`Status updated to ${newStatus}`);
      
      // Update local data without refetching
      setWaitlist(
        waitlist.map((item) =>
          item._id === id ? { ...item, status: newStatus } : item
        )
      );
      
      setShowUpdateModal(false);
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    } finally {
      setStatusUpdateLoading(false);
    }
  };

  // Add delete handler function
//   const handleDeleteEntry = async () => {
//     if (!selectedEntry) return;
    
//     setDeleteLoading(true);
//     try {
//       // Make sure the URL is correctly formatted
// const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/waitlist/${selectedEntry._id}`,
//     {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//       if (!response.ok) {
//         throw new Error('Failed to delete entry');
//       }

//       toast.success('Waitlist entry deleted successfully');
      
//       // Remove the deleted entry from the local state
//       setWaitlist(waitlist.filter((item) => item._id !== selectedEntry._id));
      
//       // Update total entries count
//       setTotalEntries(prev => prev - 1);
      
//       // If we deleted the last entry on the current page, go to the previous page
//       if (waitlist.length === 1 && currentPage > 1) {
//         setCurrentPage(prev => prev - 1);
//       }
      
//       setShowDeleteModal(false);
//     } catch (error) {
//       console.error('Error deleting entry:', error);
//       toast.error('Failed to delete entry');
//     } finally {
//       setDeleteLoading(false);
//     }
//   };

// Updated delete handler to ensure correct URL structure
const handleDeleteEntry = async () => {
    if (!selectedEntry) return;
    
    setDeleteLoading(true);
    try {
      // Log the URL to debug
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/waitlist/${selectedEntry._id}`;
      console.log("Delete URL:", url);
      
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete entry: ${response.status}`);
      }
  
      toast.success('Waitlist entry deleted successfully');
      
      // Remove the deleted entry from the local state
      setWaitlist(waitlist.filter((item) => item._id !== selectedEntry._id));
      
      // Update total entries count
      setTotalEntries(prev => prev - 1);
      
      // If we deleted the last entry on the current page, go to the previous page
      if (waitlist.length === 1 && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      } else {
        // Fetch the updated data to refresh the page
        fetchWaitlist();
      }
      
      setShowDeleteModal(false);
      setSelectedEntry(null);
    } catch (error) {
      console.error('Error deleting entry:', error);
      toast.error('Failed to delete entry');
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleExportCSV = () => {
    try {
      const headers = ['Name', 'Email', 'Phone', 'Status', 'Date Joined'];
      
      const csvContent = [
        headers.join(','),
        ...waitlist.map(entry => [
          entry.name.replace(/,/g, ' '),
          entry.email,
          entry.phone,
          entry.status,
          new Date(entry.createdAt).toLocaleDateString()
        ].join(','))
      ].join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `waitlist_export_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Waitlist data exported successfully');
    } catch (error) {
      console.error('Error exporting data:', error);
      toast.error('Failed to export data');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
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

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <ChevronDown className="h-4 w-4 text-gray-400" />;
    return sortDirection === 'asc' ? (
      <ChevronUp className="h-4 w-4 text-blue-600" />
    ) : (
      <ChevronDown className="h-4 w-4 text-blue-600" />
    );
  };

  return (
    <AdminLayout title="Waitlist Management">
      <div className="space-y-6">
        {/* Filters and Search */}
        <div className="bg-white shadow-sm rounded-lg p-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Waitlist Entries
              </h2>
              <div className="inline-flex text-sm items-center rounded-full px-2.5 py-0.5 bg-blue-100 text-blue-800">
                <span className="font-medium">{totalEntries}</span>
                <span className="ml-1">total</span>
              </div>
            </div>
            
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 rounded-md text-sm font-medium"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3">
              <form onSubmit={handleSearch} className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search by name or email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Search
                </button>
              </form>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="approved">Approved</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Name</span>
                      <SortIcon field="name" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('email')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Email</span>
                      <SortIcon field="email" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('status')}>
                    <div className="flex items-center space-x-1">
                      <span>Status</span>
                      <SortIcon field="status" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('createdAt')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Date Joined</span>
                      <SortIcon field="createdAt" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-20">
                      <div className="flex justify-center">
                        <RefreshCw className="h-8 w-8 text-blue-500 animate-spin" />
                      </div>
                      <p className="text-center text-gray-500 mt-4">Loading waitlist data...</p>
                    </td>
                  </tr>
                ) : waitlist.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-20 text-center text-gray-500">
                      No waitlist entries found
                    </td>
                  </tr>
                ) : (
                  waitlist.map((entry) => (
                    <tr key={entry._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{entry.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-400 mr-2" />
                          <div className="text-sm text-gray-500">{entry.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-400 mr-2" />
                          <div className="text-sm text-gray-500">{entry.phone}</div>
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                            {formatDate(entry.createdAt)}
                          </div>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {formatTime(entry.createdAt)}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex justify-center space-x-3">
                          <button
                            className="text-blue-600 hover:text-blue-900 font-medium text-sm"
                            onClick={() => {
                              setSelectedEntry(entry);
                              setShowUpdateModal(true);
                            }}
                          >
                            Update
                          </button>
                          <button
                            className="text-red-600 hover:text-red-900 font-medium text-sm"
                            onClick={() => {
                              setSelectedEntry(entry);
                              setShowDeleteModal(true);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{' '}
                  <span className="font-medium">
                    {waitlist.length > 0 ? (currentPage - 1) * entriesPerPage + 1 : 0}
                  </span>{' '}
                  to{' '}
                  <span className="font-medium">
                    {Math.min(currentPage * entriesPerPage, totalEntries)}
                  </span>{' '}
                  of <span className="font-medium">{totalEntries}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronUp className="h-5 w-5 rotate-90" />
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = totalPages <= 5 
                      ? i + 1 
                      : currentPage <= 3 
                        ? i + 1 
                        : currentPage >= totalPages - 2 
                          ? totalPages - 4 + i 
                          : currentPage - 2 + i;
                    
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === page
                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronDown className="h-5 w-5 rotate-90" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Update Modal */}
      {showUpdateModal && selectedEntry && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Update Status</h3>
              <button
                onClick={() => setShowUpdateModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-4">
                Change the status for <span className="font-medium text-gray-900">{selectedEntry.name}</span>
              </p>
              
              <div className="space-y-3">
                {['pending', 'contacted', 'approved'].map(statusOption => (
                  <button
                    key={statusOption}
                    onClick={() => handleUpdateStatus(selectedEntry._id, statusOption)}
                    disabled={statusUpdateLoading}
                    className={`flex items-center w-full px-4 py-3 rounded-md border ${
                      selectedEntry.status === statusOption
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300'
                    }`}
                  >
                    <div className={`flex-shrink-0 h-5 w-5 rounded-full ${
                      getStatusColor(statusOption).replace('text-', 'bg-').replace('-100', '-400')
                    }`} />
                    <span className="ml-3 font-medium">
                      {statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
                    </span>
                    {selectedEntry.status === statusOption && (
                      <Check className="ml-auto h-5 w-5 text-blue-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowUpdateModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowUpdateModal(false)}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-sm font-medium"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedEntry && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Delete Entry</h3>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-center bg-red-100 text-red-600 rounded-full w-12 h-12 mx-auto mb-4">
                <Trash2 className="h-6 w-6" />
              </div>
              
              <p className="text-sm text-gray-500 text-center mb-2">
                Are you sure you want to delete this entry?
              </p>
              <p className="text-sm font-medium text-gray-900 text-center">
                {selectedEntry.name} ({selectedEntry.email})
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                This action cannot be undone.
              </p>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md text-sm font-medium"
                disabled={deleteLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteEntry}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md text-sm font-medium flex items-center"
                disabled={deleteLoading}
              >
                {deleteLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}