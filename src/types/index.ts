export interface Deployment {
  id: number;
  version: string;
  branch: string;
  commit: string;
  status: 'SUCCESS' | 'FAILED' | 'RUNNING' | 'CANCELLED';
  duration: string;
  triggeredBy: string;
  timestamp: string;
}

export interface PipelineStage {
  id: string;
  name: string;
  status: 'SUCCESS' | 'FAILED' | 'RUNNING' | 'PENDING';
  duration?: string;
}

export interface Metrics {
  totalDeployments: number;
  deploymentGrowth: number;
  successfulDeployments: number;
  failedDeployments: number;
  successRate: number;
  averageBuildTime: string;
  buildTimeChange: number;
  currentVersion: string;
}

export interface ChartData {
  name: string;
  deployments: number;
}

export interface EnvironmentInfo {
  name: string;
  status: 'Healthy' | 'Warning' | 'Error' | 'Offline';
  version?: string;
}

export interface InfrastructureItem {
  id: string;
  name: string;
  status: 'Running' | 'Healthy' | 'Online' | 'Offline' | 'Error';
  details: Record<string, string>;
}

export interface ActivityItem {
  id: string;
  time: string;
  description: string;
  status: 'SUCCESS' | 'FAILED' | 'INFO';
}
