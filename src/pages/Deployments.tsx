import React from 'react';
import { Search, Filter, CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';
import { deploymentHistory } from '../data/mockData';
import { cn } from '../components/Layout';

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    SUCCESS: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
    FAILED: "bg-red-400/10 text-red-400 border-red-400/20",
    RUNNING: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    CANCELLED: "bg-gray-400/10 text-gray-400 border-gray-400/20",
  }[status];

  const Icon = {
    SUCCESS: CheckCircle2,
    FAILED: XCircle,
    RUNNING: Clock,
    CANCELLED: AlertCircle,
  }[status] || AlertCircle;

  return (
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border", styles)}>
      <Icon size={12} />
      {status}
    </span>
  );
};

export const Deployments: React.FC = () => {
  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Deployments</h1>
          <p className="text-gray-400 text-sm mt-1">View and manage your application deployments.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#1a1d27] border border-[#2a2e3d] text-white text-sm font-medium rounded-lg hover:bg-[#2a2e3d] transition-colors">
            Configure
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
            New Deployment
          </button>
        </div>
      </div>

      <div className="bg-[#1a1d27] rounded-xl border border-[#2a2e3d] flex-1 flex flex-col min-h-0">
        <div className="p-4 border-b border-[#2a2e3d] flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search deployments..." 
              className="w-full bg-[#0f111a] border border-[#2a2e3d] text-white text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-[#0f111a] border border-[#2a2e3d] text-gray-300 text-sm rounded-lg hover:bg-[#2a2e3d] transition-colors">
            <Filter size={16} />
            Filter Status
          </button>
        </div>

        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#0f111a]/50 text-gray-400">
              <tr>
                <th className="px-6 py-4 font-medium">Deployment</th>
                <th className="px-6 py-4 font-medium">Version</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Branch/Commit</th>
                <th className="px-6 py-4 font-medium">Duration</th>
                <th className="px-6 py-4 font-medium">Time</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2e3d]">
              {deploymentHistory.map((deploy) => (
                <tr key={deploy.id} className="hover:bg-[#2a2e3d]/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-200">#{deploy.id}</div>
                    <div className="text-xs text-gray-500">{deploy.triggeredBy}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono bg-[#0f111a] px-2 py-1 rounded border border-[#2a2e3d] text-gray-300">
                      {deploy.version}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={deploy.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">{deploy.branch}</span>
                      <span className="text-gray-500">•</span>
                      <span className="font-mono text-gray-400 text-xs">{deploy.commit}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-400">
                    {deploy.duration}
                  </td>
                  <td className="px-6 py-4 text-gray-400">
                    {deploy.timestamp}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Logs
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-[#2a2e3d] flex justify-between items-center text-sm text-gray-400">
          <span>Showing 1 to {deploymentHistory.length} of {deploymentHistory.length} entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded bg-[#0f111a] border border-[#2a2e3d] disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 rounded bg-blue-600 text-white border border-blue-600">1</button>
            <button className="px-3 py-1 rounded bg-[#0f111a] border border-[#2a2e3d] disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
