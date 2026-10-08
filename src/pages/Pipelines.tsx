import React from 'react';
import { pipelineStages } from '../data/mockData';
import { CheckCircle2, CircleDashed, Clock, ChevronRight, Play, XCircle } from 'lucide-react';

export const Pipelines: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Pipelines</h1>
          <p className="text-gray-400 text-sm mt-1">Monitor your CI/CD pipeline execution.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
          <Play size={16} fill="currentColor" />
          Run Pipeline
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Pipeline View */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1a1d27] rounded-xl border border-[#2a2e3d] overflow-hidden">
            <div className="p-5 border-b border-[#2a2e3d] flex justify-between items-center bg-[#0f111a]/30">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-semibold text-white text-lg">Main branch workflow</h2>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 text-xs font-medium">
                    Passed
                  </span>
                </div>
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="font-mono text-gray-300">#42</span>
                  <span>•</span>
                  <span>Triggered by push to main</span>
                  <span>•</span>
                  <span>1 hour ago</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-200">Total duration</div>
                <div className="text-xl font-bold text-white font-mono">2m 14s</div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-1">
                {pipelineStages.map((stage, index) => (
                  <div key={stage.id} className="relative flex items-start gap-4 p-3 rounded-lg hover:bg-[#2a2e3d]/50 transition-colors group cursor-pointer">
                    {index !== pipelineStages.length - 1 && (
                      <div className="absolute left-[27px] top-[40px] bottom-[-10px] w-[2px] bg-[#2a2e3d] group-hover:bg-[#3a3f52] transition-colors"></div>
                    )}
                    <div className="mt-0.5 bg-[#1a1d27] z-10 p-1">
                      {stage.status === 'SUCCESS' ? (
                        <CheckCircle2 className="text-emerald-500" size={20} />
                      ) : stage.status === 'RUNNING' ? (
                        <CircleDashed className="text-blue-500 animate-spin" size={20} />
                      ) : (
                        <CircleDashed className="text-gray-500" size={20} />
                      )}
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium text-gray-200">{stage.name}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Automated job</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-mono text-gray-400 flex items-center gap-1.5">
                          <Clock size={14} />
                          {stage.duration}
                        </span>
                        <ChevronRight size={16} className="text-gray-600 group-hover:text-gray-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-[#1a1d27] p-5 rounded-xl border border-[#2a2e3d]">
            <h3 className="text-base font-semibold text-white mb-4">Pipeline Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-400">Success Rate (30d)</span>
                  <span className="text-white font-medium">95.2%</span>
                </div>
                <div className="w-full bg-[#0f111a] rounded-full h-2 border border-[#2a2e3d]">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '95.2%' }}></div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-[#2a2e3d]">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Slowest Stages</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Test</span>
                    <span className="font-mono text-gray-300">45s</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Install</span>
                    <span className="font-mono text-gray-300">35s</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Build</span>
                    <span className="font-mono text-gray-300">25s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1d27] p-5 rounded-xl border border-[#2a2e3d]">
            <h3 className="text-base font-semibold text-white mb-4">Recent Runs</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-[#0f111a] border border-[#2a2e3d] hover:border-gray-600 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    {i === 3 ? (
                      <XCircle className="text-red-500" size={16} />
                    ) : (
                      <CheckCircle2 className="text-emerald-500" size={16} />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-200">#{43 - i}</div>
                      <div className="text-xs text-gray-500">{i} {i === 1 ? 'hour' : 'hours'} ago</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
