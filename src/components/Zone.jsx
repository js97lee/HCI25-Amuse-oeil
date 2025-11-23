import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeButton from './HomeButton';
import { swiperConfig } from '../data/zoneData';
import '../pages/Zone.css';

function Zone({ zoneNumber, zoneInfo }) {
  const navigate = useNavigate();
  const [showWorks, setShowWorks] = useState(false);
  const swiperRef = useRef(null);

  const handleMediaError = (e) => {
    e.target.style.display = 'none';
    if (e.target.nextSibling) {
      e.target.nextSibling.style.display = 'block';
    }
  };

  return (
    <div className={`zone-container ${zoneNumber === 3 ? 'zone-3' : ''}`}>
      <HomeButton />
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
                    <div className="work-card-slider">
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
                        {work.description && work.description.ko && (
                          <div className="work-description">
                            <p className="work-description-text">{work.description.ko}</p>
                            {work.ingredients && work.ingredients.length > 0 && (
                              <div className="work-ingredients">
                                <p className="work-ingredients-title">재료:</p>
                                <ul>
                                  {work.ingredients.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
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
    </div>
  );
}

export default Zone;

