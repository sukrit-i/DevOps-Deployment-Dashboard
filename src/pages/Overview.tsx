import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Activity, Clock, CheckCircle, XCircle, ArrowUpRight, ArrowDownRight, GitCommit } from 'lucide-react';
import { metricsData, deploymentChartData, currentDeployment, recentActivity, repoInfo } from '../data/mockData';
import { cn } from '../components/Layout';

const MetricCard = ({ title, value, change, icon: Icon, trend }: any) => (
  <div className="bg-[#1a1d27] p-5 rounded-xl border border-[#2a2e3d]">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-[#0f111a] rounded-lg">
        <Icon size={20} className="text-gray-400" />
      </div>
      {change && (
        <span className={cn(
          "flex items-center text-xs font-medium px-2 py-1 rounded-full",
          trend === 'up' ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"
        )}>
          {trend === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
          {change}
        </span>
      )}
    </div>
    <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-white mt-1">{value}</p>
  </div>
);

export const Overview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Overview</h1>
          <p className="text-gray-400 text-sm mt-1">Monitor your deployments and infrastructure.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
            Trigger Pipeline
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          title="Total Deployments" 
          value={metricsData.totalDeployments}
          change={`+${metricsData.deploymentGrowth}%`}
          trend="up"
          icon={Activity}
        />
        <MetricCard 
          title="Success Rate" 
          value={`${metricsData.successRate}%`}
          icon={CheckCircle}
        />
        <MetricCard 
          title="Failed Deployments" 
          value={metricsData.failedDeployments}
          icon={XCircle}
        />
        <MetricCard 
          title="Avg Build Time" 
          value={metricsData.averageBuildTime}
          change={`${Math.abs(metricsData.buildTimeChange)}%`}
          trend="down"
          icon={Clock}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-[#1a1d27] p-5 rounded-xl border border-[#2a2e3d]">
          <h2 className="text-base font-semibold text-white mb-6">Deployment Frequency</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={deploymentChartData}>
                <defs>
                  <linearGradient id="colorDeployments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2e3d" vertical={false} />
                <XAxis dataKey="name" stroke="#6b7280" tick={{fill: '#6b7280', fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis stroke="#6b7280" tick={{fill: '#6b7280', fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1d27', borderColor: '#2a2e3d', color: '#f3f4f6' }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Area type="monotone" dataKey="deployments" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorDeployments)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current Status */}
        <div className="space-y-6">
          <div className="bg-[#1a1d27] p-5 rounded-xl border border-[#2a2e3d]">
            <h2 className="text-base font-semibold text-white mb-4">Current Status</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Environment</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-sm text-gray-200">Production</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Version</span>
                <span className="text-sm font-mono text-gray-200 bg-[#0f111a] px-2 py-1 rounded">{currentDeployment.version}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Last Deploy</span>
                <span className="text-sm text-gray-200">{currentDeployment.timestamp}</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-[#2a2e3d]">
              <h3 className="text-sm font-medium text-white mb-4">Pipeline Status</h3>
              <div className="flex justify-between items-center text-sm">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-xs text-gray-400">Build</span>
                </div>
                <div className="h-[2px] flex-1 bg-emerald-500/20 mx-2"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-xs text-gray-400">Test</span>
                </div>
                <div className="h-[2px] flex-1 bg-emerald-500/20 mx-2"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-xs text-gray-400">Deploy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-[#1a1d27] p-5 rounded-xl border border-[#2a2e3d]">
          <h2 className="text-base font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={activity.id} className="flex gap-4 relative">
                {index !== recentActivity.length - 1 && (
                  <div className="absolute left-2 top-6 bottom-[-16px] w-[2px] bg-[#2a2e3d]"></div>
                )}
                <div className={cn(
                  "w-4 h-4 rounded-full mt-1 z-10 border-2 border-[#1a1d27]",
                  activity.status === 'SUCCESS' ? "bg-emerald-500" :
                  activity.status === 'FAILED' ? "bg-red-500" : "bg-blue-500"
                )}></div>
                <div>
                  <p className="text-sm text-gray-200">{activity.description}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Repository Info */}
        <div className="bg-[#1a1d27] p-5 rounded-xl border border-[#2a2e3d]">
          <h2 className="text-base font-semibold text-white mb-4">Repository Info</h2>
          <div className="bg-[#0f111a] rounded-lg p-4 space-y-4 border border-[#2a2e3d]">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Project</span>
              <span className="text-sm text-gray-200">{repoInfo.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Branch</span>
              <span className="text-sm text-gray-200 flex items-center gap-1">
                <GitCommit size={14} className="text-gray-500" /> {repoInfo.branch}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Latest Commit</span>
              <span className="text-sm font-mono text-gray-200">{repoInfo.latestCommit}</span>
            </div>
            <div className="pt-4 border-t border-[#2a2e3d] flex justify-between">
              <div className="text-center">
                <div className="text-emerald-400 text-sm font-medium">Passing</div>
                <div className="text-xs text-gray-500">Build</div>
              </div>
              <div className="text-center">
                <div className="text-emerald-400 text-sm font-medium">Passing</div>
                <div className="text-xs text-gray-500">CI</div>
              </div>
              <div className="text-center">
                <div className="text-emerald-400 text-sm font-medium">Passing</div>
                <div className="text-xs text-gray-500">CD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
