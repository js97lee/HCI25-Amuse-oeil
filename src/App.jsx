import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './App.css';
import { AppProvider } from './contexts/AppContext';
import Overview from './pages/Overview';
import RemuInteraction from './pages/RemuInteraction';
import Zone1 from './pages/Zone1';
import Zone2 from './pages/Zone2';
import Zone3 from './pages/Zone3';
import Zone4 from './pages/Zone4';
import Closing from './pages/Closing';
import Survey from './pages/Survey';
import AllWorks from './pages/AllWorks';
import GlobalMenu from './components/GlobalMenu';

function AppContent() {
  const backgroundMusicRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (backgroundMusicRef.current) {
      // 볼륨 설정
      backgroundMusicRef.current.volume = 0.3;
      backgroundMusicRef.current.loop = true;
      
      // 홈(/)으로 이동할 때마다 재생
      if (location.pathname === '/') {
        const playPromise = backgroundMusicRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // 자동 재생이 차단된 경우 (사용자 인터랙션 필요)
            console.log('Background music autoplay was prevented:', error);
          });
        }
      }
    }
  }, [location.pathname]);

  return (
    <>
      {/* 배경음악 */}
      <audio
        ref={backgroundMusicRef}
        src="/Poster/Afternoon Whimsy (1).mp3"
        loop
      />
      {/* 전역 메뉴 */}
      <GlobalMenu />
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
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
