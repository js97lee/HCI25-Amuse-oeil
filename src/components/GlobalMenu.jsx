import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import './GlobalMenu.css';

function GlobalMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, isMuted, toggleMute, isMobile, toggleMobile } = useApp();

  // ESC 키로 메뉴 닫기
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // 메뉴 항목 클릭 시 닫기
  const handleMenuClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const menuItems = [
    { number: '01', label: 'Home', path: '/' },
    { number: '02', label: 'Exhibition', path: '/remu-interaction' },
    { number: '03', label: 'Flotique Realm', path: '/zone1' },
    { number: '04', label: 'Elyshell Garden', path: '/zone2' },
    { number: '05', label: 'Verdenaire Court', path: '/zone3' },
    { number: '06', label: 'Solivara Expanse', path: '/zone4' },
    { number: '07', label: 'All Works', path: '/all-works' },
  ];

  return (
    <>
      {/* 상단 네비게이션 */}
      <div className="global-top-navigation">
        {/* 왼쪽: 메뉴 버튼 */}
        <button 
          className="global-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          (MENU)
        </button>

        {/* 중앙: 브랜드 이름 - 홈으로 이동 */}
        <button 
          className="global-brand-title"
          onClick={() => navigate('/')}
          aria-label="Home"
        >
          AMUSE OEIL
        </button>

        {/* 오른쪽: 언어 토글, 디바이스 변경 및 음소거 버튼 */}
        <div className="global-top-navigation-right">
          <button 
            className="global-language-toggle"
            onClick={toggleLanguage}
          >
            {language === 'ko' ? '(EN)' : '(KO)'}
          </button>
          <button 
            className="global-device-toggle"
            onClick={toggleMobile}
          >
            {isMobile ? '(PC)' : '(MOBILE)'}
          </button>
          <button 
            className="global-mute-button"
            onClick={toggleMute}
          >
            (MUTE)
          </button>
        </div>
      </div>

      {/* 메뉴 오버레이 */}
      {isOpen && (
        <div className="global-menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="global-menu-content" onClick={(e) => e.stopPropagation()}>
            {/* 헤더 */}
            <div className="global-menu-header">
              <div className="global-menu-header-left">
                <span className="global-menu-icon">*</span>
                <span className="global-menu-tagline">Open for any collaborations and offers</span>
              </div>
              <div className="global-menu-header-right">
                <span className="global-menu-brand">STUDIO REALDAY®</span>
                <button 
                  className="global-menu-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>
            </div>

            {/* 메인 메뉴 */}
            <nav className="global-menu-nav">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  className={`global-menu-item ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item.path)}
                >
                  <span className="global-menu-number">{item.number}</span>
                  <span className="global-menu-label">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* 크레딧 섹션 */}
            <div className="global-menu-credits">
              <div className="global-menu-credits-title">CREDIT</div>
              <div className="global-menu-credits-content">
                <div className="global-menu-credits-column">
                  <div className="global-menu-credit-item">
                    <span className="global-menu-credit-label">Development</span>
                    <span className="global-menu-credit-value">JisuLee</span>
                  </div>
                  <div className="global-menu-credit-item">
                    <span className="global-menu-credit-label">Artist</span>
                    <div className="global-menu-credit-value-list">
                      <span className="global-menu-credit-value">
                        Jisu Lee <span className="global-menu-credit-separator">|</span> <a href="https://www.instagram.com/jisu.dd/" target="_blank" rel="noopener noreferrer" className="global-menu-credit-link">@Jisu.dd</a>
                      </span>
                      <span className="global-menu-credit-value">
                        Hayeon Lee <span className="global-menu-credit-separator">|</span> <a href="https://www.instagram.com/doozyism/" target="_blank" rel="noopener noreferrer" className="global-menu-credit-link">@doozyism</a>
                      </span>
                      <span className="global-menu-credit-value">
                        Hannah Kim <span className="global-menu-credit-separator">|</span> <a href="https://www.instagram.com/ahanna.u/" target="_blank" rel="noopener noreferrer" className="global-menu-credit-link">@ahanna.u</a>
                      </span>
                      <span className="global-menu-credit-value">
                        Seojung Moon <span className="global-menu-credit-separator">|</span> <a href="https://www.instagram.com/seo.zg/" target="_blank" rel="noopener noreferrer" className="global-menu-credit-link">@seo.zg</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="global-menu-contact">
                <span className="global-menu-contact-label">Contact</span>
                <span className="global-menu-contact-value">studio.realday@gmail.com</span>
              </div>
              <div className="global-menu-credits-logos">
                <div className="global-menu-logo-item">
                  <img 
                    src="/Logo/Studio.realday.svg" 
                    alt="Studio REALDAY"
                    className="global-menu-logo-image global-menu-logo-small"
                  />
                </div>
                <div className="global-menu-logo-item">
                  <img 
                    src="/Logo/Uncommon Gallery.svg" 
                    alt="UNCOMMON GALLERY"
                    className="global-menu-logo-image global-menu-logo-large"
                  />
                </div>
                <div className="global-menu-logo-item">
                  <img 
                    src="/Logo/Al Network.svg" 
                    alt="AI NETWORK"
                    className="global-menu-logo-image global-menu-logo-large"
                  />
                </div>
              </div>
            </div>

            {/* 푸터 메시지 */}
            <div className="global-menu-footer">
              <p>Just an ordinary exhibition. From HCI with love.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GlobalMenu;

