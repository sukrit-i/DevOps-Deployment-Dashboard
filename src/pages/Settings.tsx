import React from 'react';
import { Save, Bell, Globe, Key, Shield, User } from 'lucide-react';


export const Settings: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 text-sm mt-1">Manage your dashboard preferences and configurations.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          <Save size={16} />
          Save Changes
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 bg-blue-600/10 text-blue-400 rounded-md text-sm font-medium transition-colors">
              <User size={18} />
              General
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#2a2e3d] rounded-md text-sm font-medium transition-colors">
              <Globe size={18} />
              Environments
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#2a2e3d] rounded-md text-sm font-medium transition-colors">
              <Bell size={18} />
              Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#2a2e3d] rounded-md text-sm font-medium transition-colors">
              <Key size={18} />
              Secrets
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#2a2e3d] rounded-md text-sm font-medium transition-colors">
              <Shield size={18} />
              Security
            </button>
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          <div className="bg-[#1a1d27] rounded-xl border border-[#2a2e3d] overflow-hidden">
            <div className="p-5 border-b border-[#2a2e3d]">
              <h2 className="font-semibold text-white">Project Information</h2>
              <p className="text-sm text-gray-400 mt-1">Basic details about your project.</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Name</label>
                <input 
                  type="text" 
                  defaultValue="DevOps Deployment Dashboard"
                  className="w-full bg-[#0f111a] border border-[#2a2e3d] text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Repository URL</label>
                <input 
                  type="text" 
                  defaultValue="https://github.com/organization/devops-dashboard"
                  className="w-full bg-[#0f111a] border border-[#2a2e3d] text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Default Branch</label>
                <select className="w-full bg-[#0f111a] border border-[#2a2e3d] text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow">
                  <option>main</option>
                  <option>master</option>
                  <option>develop</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1d27] rounded-xl border border-[#2a2e3d] overflow-hidden">
            <div className="p-5 border-b border-[#2a2e3d]">
              <h2 className="font-semibold text-white">Deployment Preferences</h2>
              <p className="text-sm text-gray-400 mt-1">Configure how deployments are handled.</p>
            </div>
            <div className="p-6 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" defaultChecked className="peer sr-only" />
                  <div className="w-10 h-5 bg-[#2a2e3d] rounded-full peer peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">Auto-deploy to Staging</div>
                  <div className="text-xs text-gray-400 mt-0.5">Automatically deploy when pushing to the default branch.</div>
                </div>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-10 h-5 bg-[#2a2e3d] rounded-full peer peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">Require Approval for Production</div>
                  <div className="text-xs text-gray-400 mt-0.5">Manual approval required before deploying to production environments.</div>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input type="checkbox" defaultChecked className="peer sr-only" />
                  <div className="w-10 h-5 bg-[#2a2e3d] rounded-full peer peer-checked:bg-blue-600 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">Notify on Failure</div>
                  <div className="text-xs text-gray-400 mt-0.5">Send alerts to configured channels when a deployment fails.</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
