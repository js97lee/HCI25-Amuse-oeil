import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [language, setLanguage] = useState('ko'); // 'ko' or 'en'
  const [isMuted, setIsMuted] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // 모바일 모드

  // localStorage에서 언어 설정 불러오기
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    const savedMobileMode = localStorage.getItem('mobileMode');
    if (savedMobileMode === 'true') {
      setIsMobile(true);
    }
  }, []);

  // 모바일 모드 적용
  useEffect(() => {
    if (isMobile) {
      document.documentElement.classList.add('mobile-mode');
      document.body.classList.add('mobile-mode');
    } else {
      document.documentElement.classList.remove('mobile-mode');
      document.body.classList.remove('mobile-mode');
    }
  }, [isMobile]);

  // 언어 변경 시 localStorage에 저장
  const toggleLanguage = () => {
    const newLanguage = language === 'ko' ? 'en' : 'ko';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const toggleMobile = () => {
    setIsMobile(prev => {
      const newValue = !prev;
      localStorage.setItem('mobileMode', newValue.toString());
      return newValue;
    });
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, toggleLanguage, isMuted, toggleMute, isMobile, toggleMobile }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

