import React from 'react';
import { Server, Globe, Cpu, CheckCircle2, AlertTriangle, Activity } from 'lucide-react';
import { infrastructureData, environments } from '../data/mockData';
import { cn } from '../components/Layout';

const StatusDot = ({ status }: { status: string }) => {
  const colorClass = 
    status === 'Running' || status === 'Healthy' || status === 'Online' 
      ? 'bg-emerald-500' 
      : status === 'Warning'
      ? 'bg-amber-500'
      : 'bg-red-500';
      
  return (
    <div className="flex items-center gap-2">
      <span className={cn("w-2 h-2 rounded-full", colorClass)}></span>
      <span className="text-sm text-gray-300 font-medium">{status}</span>
    </div>
  );
};

export const Infrastructure: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Infrastructure</h1>
          <p className="text-gray-400 text-sm mt-1">Monitor your servers and application health.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {environments.map((env) => (
          <div key={env.name} className="bg-[#1a1d27] p-5 rounded-xl border border-[#2a2e3d]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-white">{env.name}</h3>
              <StatusDot status={env.status} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Version</span>
                <span className="font-mono text-gray-300">{env.version}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Last updated</span>
                <span className="text-gray-300">2 hours ago</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#2a2e3d]">
              <button className="w-full py-2 bg-[#0f111a] hover:bg-[#2a2e3d] text-gray-300 text-sm font-medium rounded-lg border border-[#2a2e3d] transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-white mt-8 mb-4">Resource Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {infrastructureData.map((item) => {
          const Icon = 
            item.id === 'ec2' ? Server : 
            item.id === 'nginx' ? Globe : 
            item.id === 'app' ? Cpu : Activity;
            
          return (
            <div key={item.id} className="bg-[#1a1d27] p-5 rounded-xl border border-[#2a2e3d] hover:border-gray-600 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 bg-[#0f111a] rounded-lg border border-[#2a2e3d]">
                  <Icon size={24} className="text-blue-400" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#0f111a] border border-[#2a2e3d]">
                  <span className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    item.status === 'Running' || item.status === 'Healthy' || item.status === 'Online'
                      ? "bg-emerald-500" : "bg-red-500"
                  )}></span>
                  <span className="text-xs font-medium text-gray-300">{item.status}</span>
                </div>
              </div>
              
              <h3 className="font-semibold text-white mb-3">{item.name}</h3>
              
              <div className="space-y-2">
                {Object.entries(item.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">{key}</span>
                    <span className={cn(
                      "text-gray-200",
                      key.toLowerCase() === 'cpu' || key.toLowerCase() === 'response' ? "font-mono" : ""
                    )}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 bg-[#1a1d27] rounded-xl border border-[#2a2e3d] overflow-hidden">
        <div className="p-5 border-b border-[#2a2e3d] flex justify-between items-center">
          <h2 className="font-semibold text-white">System Alerts</h2>
          <span className="px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-medium">
            1 Warning
          </span>
        </div>
        <div className="p-2">
          <div className="flex items-start gap-4 p-4 hover:bg-[#2a2e3d]/50 rounded-lg transition-colors">
            <div className="p-2 bg-amber-400/10 rounded-lg text-amber-400 mt-0.5">
              <AlertTriangle size={18} />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-200">High CPU Usage</h4>
              <p className="text-sm text-gray-400 mt-1">EC2 Instance t3.micro has been running above 80% CPU for the last 15 minutes.</p>
              <div className="text-xs text-gray-500 mt-2">15 minutes ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 hover:bg-[#2a2e3d]/50 rounded-lg transition-colors">
            <div className="p-2 bg-emerald-400/10 rounded-lg text-emerald-400 mt-0.5">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-200">Database Backup Complete</h4>
              <p className="text-sm text-gray-400 mt-1">Automated daily backup completed successfully. Size: 2.4GB.</p>
              <div className="text-xs text-gray-500 mt-2">4 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
