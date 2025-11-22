import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import HomeButton from '../components/HomeButton';
import './Zone.css';

function Zone1() {
  const navigate = useNavigate();
  const [showWorks, setShowWorks] = useState(false);
  const swiperRef = useRef(null);

  const works = [
    { chef: 'Tea Cocktail', name: '티 칵테일 1', media: '/works/zone1/Tea-1.mp4', type: 'video' },
    { chef: 'Zen', name: 'Zen의 디저트 1', media: '/works/zone1/Zen-1.mp4', type: 'video' },
    { chef: 'Remi', name: 'Remi의 디저트 1', media: '/works/zone1/Remi-1.mp4', type: 'video' },
    { chef: 'Lara', name: 'Lara의 디저트 1', media: '/works/zone1/Lara-1.mp4', type: 'video' }
  ];

  const zoneInfo = {
    name: 'Flotique Realm',
    image: '/works/zone1/Zone-explain-1.jpg',
    description: [
      '감정이 거품처럼 피어올라 형체를 잃기 직전의 순간.',
      '',
      '모든 것이 가볍고, 중력보다 달콤한 세계.',
      '"순간의 유희"가 포말로 흩날리는 섬.'
    ]
  };

  return (
    <div className="zone-container">
      <HomeButton />
      <div className="zone-content">
        {/* Zone 설명 섹션 - 작품 보기 전에만 표시 */}
        {!showWorks && (
          <div className="zone-intro-section fullscreen">
            <div className="zone-intro-image">
              <img 
                src={zoneInfo.image}
                alt={zoneInfo.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
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
            <h1 className="zone-title luxury-title">Zone 1</h1>
            <p className="zone-description">
              첫 번째 존에서 티 칵테일과 세 명의 쉐프의 작품을 만나보세요.
            </p>
            <div className="works-slider-container">
              <Swiper
                ref={swiperRef}
                modules={[EffectCoverflow, Parallax]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.5}
                spaceBetween={40}
                parallax={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 300,
                  modifier: 1,
                  slideShadows: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 40,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 60,
                  },
                }}
                className="works-swiper"
              >
                {works.map((work, index) => (
                  <SwiperSlide key={index} className="work-slide">
                    <div className="work-card-slider">
                      <div className="work-media-slider" data-swiper-parallax="-200">
                        {work.type === 'video' ? (
                          <video 
                            src={work.media}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : (
                          <img 
                            src={work.media} 
                            alt={work.name}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        )}
                        <div className="placeholder-text" style={{ display: 'none' }}>
                          {work.name}
                        </div>
                      </div>
                      <div className="work-info-slider" data-swiper-parallax="-100">
                        <h3 className="work-chef">{work.chef}</h3>
                        <p className="work-name">{work.name}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="zone-navigation">
              <button 
                className="nav-button prev"
                onClick={() => navigate('/remu-interaction')}
              >
                이전
              </button>
              <button 
                className="nav-button next"
                onClick={() => navigate('/zone2')}
              >
                다음 Zone으로
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Zone1;

