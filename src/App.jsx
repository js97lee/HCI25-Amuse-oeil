import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Overview from './pages/Overview';
import RemuInteraction from './pages/RemuInteraction';
import Zone1 from './pages/Zone1';
import Zone2 from './pages/Zone2';
import Zone3 from './pages/Zone3';
import Zone4 from './pages/Zone4';
import Closing from './pages/Closing';
import Survey from './pages/Survey';
import AllWorks from './pages/AllWorks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/remu-interaction" element={<RemuInteraction />} />
        <Route path="/zone1" element={<Zone1 />} />
        <Route path="/zone2" element={<Zone2 />} />
        <Route path="/zone3" element={<Zone3 />} />
        <Route path="/zone4" element={<Zone4 />} />
        <Route path="/closing" element={<Closing />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/all-works" element={<AllWorks />} />
      </Routes>
    </Router>
  );
}

export default App;
