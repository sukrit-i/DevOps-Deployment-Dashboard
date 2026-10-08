import type { 
  Deployment, 
  PipelineStage, 
  Metrics, 
  ChartData, 
  EnvironmentInfo, 
  InfrastructureItem,
  ActivityItem 
} from '../types';

export const metricsData: Metrics = {
  totalDeployments: 42,
  deploymentGrowth: 12,
  successfulDeployments: 40,
  failedDeployments: 2,
  successRate: 95.2,
  averageBuildTime: '2m 34s',
  buildTimeChange: -14,
  currentVersion: 'v1.4.2'
};

export const currentDeployment: Deployment = {
  id: 42,
  version: 'v1.4.2',
  branch: 'main',
  commit: 'a83f91c',
  status: 'SUCCESS',
  duration: '2m 14s',
  triggeredBy: 'GitHub Actions',
  timestamp: '8 minutes ago'
};

export const deploymentHistory: Deployment[] = [
  currentDeployment,
  {
    id: 41,
    version: 'v1.4.1',
    branch: 'main',
    commit: 'b49a21d',
    status: 'SUCCESS',
    duration: '2m 20s',
    triggeredBy: 'GitHub Actions',
    timestamp: '1 hour ago'
  },
  {
    id: 40,
    version: 'v1.4.0',
    branch: 'feature/new-ui',
    commit: 'c72b10e',
    status: 'FAILED',
    duration: '1m 15s',
    triggeredBy: 'GitHub Actions',
    timestamp: '3 hours ago'
  },
  {
    id: 39,
    version: 'v1.3.9',
    branch: 'main',
    commit: 'd51f34a',
    status: 'SUCCESS',
    duration: '2m 45s',
    triggeredBy: 'GitHub Actions',
    timestamp: 'Yesterday'
  },
  {
    id: 38,
    version: 'v1.3.8',
    branch: 'main',
    commit: 'e92a83b',
    status: 'SUCCESS',
    duration: '2m 31s',
    triggeredBy: 'GitHub Actions',
    timestamp: 'Yesterday'
  }
];

export const pipelineStages: PipelineStage[] = [
  { id: '1', name: 'Checkout', status: 'SUCCESS', duration: '5s' },
  { id: '2', name: 'Install', status: 'SUCCESS', duration: '35s' },
  { id: '3', name: 'Lint', status: 'SUCCESS', duration: '12s' },
  { id: '4', name: 'Test', status: 'SUCCESS', duration: '45s' },
  { id: '5', name: 'Build', status: 'SUCCESS', duration: '25s' },
  { id: '6', name: 'Deploy', status: 'SUCCESS', duration: '10s' },
  { id: '7', name: 'Health Check', status: 'SUCCESS', duration: '2s' }
];

export const deploymentChartData: ChartData[] = [
  { name: 'Mon', deployments: 4 },
  { name: 'Tue', deployments: 7 },
  { name: 'Wed', deployments: 5 },
  { name: 'Thu', deployments: 8 },
  { name: 'Fri', deployments: 12 },
  { name: 'Sat', deployments: 2 },
  { name: 'Sun', deployments: 4 },
];

export const environments: EnvironmentInfo[] = [
  { name: 'Production', status: 'Healthy', version: 'v1.4.2' },
  { name: 'Staging', status: 'Healthy', version: 'v1.5.0-rc1' },
  { name: 'Development', status: 'Healthy', version: 'v1.5.0-dev' }
];

export const infrastructureData: InfrastructureItem[] = [
  {
    id: 'ec2',
    name: 'EC2 Instance',
    status: 'Running',
    details: {
      Region: 'ap-south-1',
      Instance: 't3.micro',
      CPU: '32%'
    }
  },
  {
    id: 'nginx',
    name: 'Nginx',
    status: 'Running',
    details: {
      Version: '1.x'
    }
  },
  {
    id: 'app',
    name: 'Application',
    status: 'Healthy',
    details: {
      Version: 'v1.4.2'
    }
  },
  {
    id: 'web',
    name: 'Website',
    status: 'Online',
    details: {
      Response: '142 ms'
    }
  }
];

export const recentActivity: ActivityItem[] = [
  { id: '1', time: '8 minutes ago', description: 'Deployment #42 succeeded', status: 'SUCCESS' },
  { id: '2', time: '1 hour ago', description: 'Pipeline #41 completed', status: 'SUCCESS' },
  { id: '3', time: '3 hours ago', description: 'Deployment #40 failed', status: 'FAILED' },
  { id: '4', time: 'Yesterday', description: 'New build v1.4.1 deployed', status: 'INFO' }
];

export const repoInfo = {
  name: 'DevOps Deployment Dashboard',
  branch: 'main',
  latestCommit: 'a83f91c',
  buildStatus: 'Passing',
  ciStatus: 'Passing',
  cdStatus: 'Passing'
};
