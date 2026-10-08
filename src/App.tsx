import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Overview } from './pages/Overview';
import { Deployments } from './pages/Deployments';
import { Pipelines } from './pages/Pipelines';
import { Infrastructure } from './pages/Infrastructure';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="deployments" element={<Deployments />} />
          <Route path="pipelines" element={<Pipelines />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
