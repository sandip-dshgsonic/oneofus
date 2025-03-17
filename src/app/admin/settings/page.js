"use client";

import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { toast } from 'react-hot-toast';
import { 
  User, 
  Bell, 
  Lock, 
  Database, 
  Globe, 
  Mail,
  Save,
  RefreshCw,
  Toggle
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [saving, setSaving] = useState(false);

  // Account settings form state
  const [accountForm, setAccountForm] = useState({
    name: 'Admin User',
    email: 'admin@dshgsonic.com',
    role: 'administrator',
  });

  // Email settings form state
  const [emailForm, setEmailForm] = useState({
    sendWelcomeEmail: true,
    sendStatusUpdateEmail: true,
    adminNotificationEmail: 'admin@dshgsonic.com',
    emailTemplate: 'default',
  });

  // Website settings form state
  const [websiteForm, setWebsiteForm] = useState({
    waitlistOpen: true,
    maxWaitlistUsers: 1000,
    showRemainingSpots: true,
    customMessage: 'Join our waitlist to get early access to our exciting music platform!',
  });

  // API settings form state
  const [apiForm, setApiForm] = useState({
    recaptchaEnabled: true,
    recaptchaSiteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
    recaptchaSecretKey: '••••••••••••••••••••••••••••••',
  });

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'email', label: 'Email Notifications', icon: Mail },
    { id: 'website', label: 'Website', icon: Globe },
    { id: 'api', label: 'API Settings', icon: Database },
  ];

  const handleAccountFormChange = (e) => {
    const { name, value } = e.target;
    setAccountForm({ ...accountForm, [name]: value });
  };

  const handleEmailFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmailForm({
      ...emailForm,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleWebsiteFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setWebsiteForm({
      ...websiteForm,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleApiFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApiForm({
      ...apiForm,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);

    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      toast.success('Settings saved successfully');
    }, 1500);
  };

  const renderAccountSettings = () => (
    <form onSubmit={handleSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={accountForm.name}
              onChange={handleAccountFormChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={accountForm.email}
              onChange={handleAccountFormChange}
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={accountForm.role}
              onChange={handleAccountFormChange}
            >
              <option value="administrator">Administrator</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>

          <div>
            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              name="current-password"
              id="current-password"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter current password to change"
            />
          </div>

          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              name="new-password"
              id="new-password"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Confirm new password"
            />
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {saving ? (
              <>
                <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Saving...
              </>
            ) : (
              <>
                <Save className="-ml-1 mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );

  const renderEmailSettings = () => (
    <form onSubmit={handleSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="sendWelcomeEmail"
                  name="sendWelcomeEmail"
                  type="checkbox"
                  checked={emailForm.sendWelcomeEmail}
                  onChange={handleEmailFormChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="sendWelcomeEmail" className="font-medium text-gray-700">
                  Send welcome email
                </label>
                <p className="text-gray-500">
                  Automatically send a welcome email when someone joins the waitlist
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="sendStatusUpdateEmail"
                  name="sendStatusUpdateEmail"
                  type="checkbox"
                  checked={emailForm.sendStatusUpdateEmail}
                  onChange={handleEmailFormChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="sendStatusUpdateEmail" className="font-medium text-gray-700">
                  Send status update emails
                </label>
                <p className="text-gray-500">
                  Notify users when their waitlist status changes
                </p>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="adminNotificationEmail" className="block text-sm font-medium text-gray-700">
              Admin Notification Email
            </label>
            <input
              type="email"
              name="adminNotificationEmail"
              id="adminNotificationEmail"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={emailForm.adminNotificationEmail}
              onChange={handleEmailFormChange}
              placeholder="Email to receive notifications"
            />
            <p className="mt-2 text-sm text-gray-500">
              This email will receive notifications when new users join the waitlist
            </p>
          </div>

          <div>
            <label htmlFor="emailTemplate" className="block text-sm font-medium text-gray-700">
              Email Template
            </label>
            <select
              id="emailTemplate"
              name="emailTemplate"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={emailForm.emailTemplate}
              onChange={handleEmailFormChange}
            >
              <option value="default">Default Template</option>
              <option value="minimal">Minimal</option>
              <option value="modern">Modern</option>
              <option value="branded">Branded</option>
            </select>
            <p className="mt-2 text-sm text-gray-500">
              Choose the email template style for all waitlist communications
            </p>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {saving ? (
              <>
                <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Saving...
              </>
            ) : (
              <>
                <Save className="-ml-1 mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );

  const renderWebsiteSettings = () => (
    <form onSubmit={handleSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="waitlistOpen"
                name="waitlistOpen"
                type="checkbox"
                checked={websiteForm.waitlistOpen}
                onChange={handleWebsiteFormChange}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="waitlistOpen" className="font-medium text-gray-700">
                Waitlist Open
              </label>
              <p className="text-gray-500">
                Allow new users to join the waitlist
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="maxWaitlistUsers" className="block text-sm font-medium text-gray-700">
              Maximum Waitlist Users
            </label>
            <input
              type="number"
              name="maxWaitlistUsers"
              id="maxWaitlistUsers"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={websiteForm.maxWaitlistUsers}
              onChange={handleWebsiteFormChange}
            />
            <p className="mt-2 text-sm text-gray-500">
              Set a limit for the number of users who can join the waitlist (0 = unlimited)
            </p>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="showRemainingSpots"
                name="showRemainingSpots"
                type="checkbox"
                checked={websiteForm.showRemainingSpots}
                onChange={handleWebsiteFormChange}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="showRemainingSpots" className="font-medium text-gray-700">
                Show Remaining Spots
              </label>
              <p className="text-gray-500">
                Display the number of remaining spots on the waitlist form
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="customMessage" className="block text-sm font-medium text-gray-700">
              Custom Waitlist Message
            </label>
            <div className="mt-1">
              <textarea
                id="customMessage"
                name="customMessage"
                rows={3}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Enter a custom message for the waitlist form"
                value={websiteForm.customMessage}
                onChange={handleWebsiteFormChange}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              This message will be displayed on the waitlist signup form
            </p>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {saving ? (
              <>
                <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Saving...
              </>
            ) : (
              <>
                <Save className="-ml-1 mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );

  const renderApiSettings = () => (
    <form onSubmit={handleSubmit}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="recaptchaEnabled"
                name="recaptchaEnabled"
                type="checkbox"
                checked={apiForm.recaptchaEnabled}
                onChange={handleApiFormChange}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="recaptchaEnabled" className="font-medium text-gray-700">
                Enable reCAPTCHA
              </label>
              <p className="text-gray-500">
                Protect the waitlist form from spam and bots
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="recaptchaSiteKey" className="block text-sm font-medium text-gray-700">
              reCAPTCHA Site Key
            </label>
            <input
              type="text"
              name="recaptchaSiteKey"
              id="recaptchaSiteKey"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={apiForm.recaptchaSiteKey}
              onChange={handleApiFormChange}
            />
          </div>

          <div>
            <label htmlFor="recaptchaSecretKey" className="block text-sm font-medium text-gray-700">
              reCAPTCHA Secret Key
            </label>
            <input
              type="password"
              name="recaptchaSecretKey"
              id="recaptchaSecretKey"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={apiForm.recaptchaSecretKey}
              onChange={handleApiFormChange}
            />
          </div>

          <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Bell className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">API Key Note</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    For security reasons, changes to API credentials require verification. Make sure to keep your keys secure and never share them publicly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {saving ? (
              <>
                <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Saving...
              </>
            ) : (
              <>
                <Save className="-ml-1 mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <AdminLayout title="Settings">
      <div className="space-y-6">
        <div className="bg-white shadow-sm rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <tab.icon
                      className={`mr-2 h-5 w-5 ${
                        activeTab === tab.id ? 'text-blue-500' : 'text-gray-400'
                      }`}
                    />
                    {tab.label}
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {activeTab === 'account' && renderAccountSettings()}
        {activeTab === 'email' && renderEmailSettings()}
        {activeTab === 'website' && renderWebsiteSettings()}
        {activeTab === 'api' && renderApiSettings()}
      </div>
    </AdminLayout>
  );
}