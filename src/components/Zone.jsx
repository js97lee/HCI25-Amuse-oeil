import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperConfig } from '../data/zoneData';
import '../pages/Zone.css';

function Zone({ zoneNumber, zoneInfo }) {
  const navigate = useNavigate();
  const [showWorks, setShowWorks] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const swiperRef = useRef(null);

  const handleMediaError = (e) => {
    e.target.style.display = 'none';
    if (e.target.nextSibling) {
      e.target.nextSibling.style.display = 'block';
    }
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedWork) {
        setSelectedWork(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedWork]);

  return (
    <div className={`zone-container ${zoneNumber === 3 ? 'zone-3' : ''}`}>
      <div className="zone-content">
        {/* Zone 설명 섹션 - 작품 보기 전에만 표시 */}
        {!showWorks && (
          <div className="zone-intro-section fullscreen">
            <div className="zone-intro-image">
              <img 
                src={zoneInfo.image}
                alt={zoneInfo.name}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div className="zone-intro-content">
              <h2 className="zone-intro-name luxury-title">{zoneInfo.name}</h2>
              <div className="zone-intro-description">
                {zoneInfo.description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <button 
                className="view-works-button"
                onClick={() => setShowWorks(true)}
              >
                작품 보기
              </button>
            </div>
          </div>
        )}

        {/* 작품 섹션 - 작품 보기 버튼 클릭 후 표시 */}
        {showWorks && (
          <>
            <h1 className="zone-title luxury-title">{zoneInfo.name}</h1>
            <p className="zone-description">{zoneInfo.descriptionText}</p>
            <div className="works-slider-container">
              <Swiper
                ref={swiperRef}
                {...swiperConfig}
                className="works-swiper"
              >
                {zoneInfo.works.map((work, index) => (
                  <SwiperSlide key={index} className="work-slide">
                    <div 
                      className="work-card-slider"
                      onClick={() => setSelectedWork(work)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={`work-media-slider ${zoneNumber === 3 && work.chef === 'Tea Cocktail' ? 'tea-cocktail-vertical' : ''}`} data-swiper-parallax="-200">
                        {work.type === 'video' ? (
                          <video 
                            src={work.media}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onError={handleMediaError}
                          />
                        ) : (
                          <img 
                            src={work.media} 
                            alt={work.name}
                            onError={handleMediaError}
                          />
                        )}
                        <div className="placeholder-text" style={{ display: 'none' }}>
                          {work.name}
                        </div>
                      </div>
                      <div className="work-info-slider" data-swiper-parallax="-100">
                        <p className="work-name">{work.name}</p>
                        <h3 className="work-chef">{work.chef}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="zone-navigation">
              <button 
                className="nav-button prev"
                onClick={() => navigate(zoneInfo.prevPath)}
              >
                이전
              </button>
              <button 
                className="nav-button next"
                onClick={() => navigate(zoneInfo.nextPath)}
              >
                {zoneInfo.nextText || '다음 Zone으로'}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Zone 정보 푸터 */}
      <div className="zone-footer">
        <div className="zone-footer-number">
          {String(zoneNumber).padStart(2, '0')}
        </div>
        <div className="zone-footer-title">
          {zoneInfo.name}
        </div>
      </div>

      {/* 작품 설명 팝업 모달 */}
      {selectedWork && (
        <div 
          className="work-modal-overlay"
          onClick={() => setSelectedWork(null)}
        >
          <div 
            className="work-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="work-modal-close"
              onClick={() => setSelectedWork(null)}
            >
              ×
            </button>
            <div className="work-modal-media">
              {selectedWork.type === 'video' ? (
                <video 
                  src={selectedWork.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img 
                  src={selectedWork.media} 
                  alt={selectedWork.name}
                />
              )}
            </div>
            <div className="work-modal-info">
              <h2 className="work-modal-name">{selectedWork.name}</h2>
              <h3 className="work-modal-chef">{selectedWork.chef}</h3>
              {selectedWork.description && selectedWork.description.ko && (
                <div className="work-modal-description">
                  <p className="work-modal-description-text">
                    {selectedWork.description.ko}
                  </p>
                  {selectedWork.ingredients && selectedWork.ingredients.length > 0 && (
                    <div className="work-modal-ingredients">
                      <p className="work-modal-ingredients-title">재료:</p>
                      <ul>
                        {selectedWork.ingredients.map((ingredient, idx) => (
                          <li key={idx}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Zone;

