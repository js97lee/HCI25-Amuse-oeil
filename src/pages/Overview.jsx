import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import './Overview.css';

function Overview() {
  const navigate = useNavigate();
  const { language, isMuted, toggleLanguage } = useApp();
  const [currentStep, setCurrentStep] = useState(0); // 0: 포스터만, 1: 설명과 시작
  const videoRef = useRef(null);
  const backgroundVideosRef = useRef([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 포스터 파일 목록 (Poster 폴더의 파일들)
  const posterFiles = [
    '/Poster/Amuse-oeil-sound-poster10-15.mp4',
    // 추가 포스터 파일들을 여기에 추가하세요
  ];

  // 비디오 음량 설정 (음소거)
  useEffect(() => {
    // 메인 포스터 비디오
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
    }
    
    // 배경 배너 비디오들
    backgroundVideosRef.current.forEach(video => {
      if (video) {
        video.volume = 0;
        video.muted = true;
      }
    });
  }, []);

  // 음소거 상태에 따라 비디오 음량 조절
  useEffect(() => {
    // 메인 포스터 비디오
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
    
    // 배경 배너 비디오들
    backgroundVideosRef.current.forEach(video => {
      if (video) {
        video.muted = isMuted;
      }
    });
  }, [isMuted]);

  // 스와이프 감지
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // 왼쪽으로 스와이프 (영문으로)
        if (language === 'ko') {
          toggleLanguage();
        }
      } else {
        // 오른쪽으로 스와이프 (한글로)
        if (language === 'en') {
          toggleLanguage();
        }
      }
    }
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // 한글 내용
  const koreanContent = {
    subtitle: '눈을 위한 디저트, 감정의 조각을 보다',
    subtitleEn: 'Desserts for the Eyes — Fragments of Emotion Revealed',
    paragraphs: [
      '디저트는 단순히 입으로 즐기는 음식이 아닙니다. 작은 조각 속에는 감정의 밀도가 응축되어 있으며, 기억을 담아내고 드러내는 감각의 언어로 작동합니다.',
      '〈Amuse-Oeil〉은 \'한 입의 즐거움\'을 뜻하는 Amuse-Bouche의 개념을 \'한 눈의 감각 경험\'으로 확장한 시각 실험 전시입니다. AI는 인간의 감정, 기억, 정체성을 학습하고, 이를 디저트 형태의 이미지와 오브제로 시각화합니다.',
      'AI는 언어로 설명하기 어려운 감정의 결을 포착하여 이미지와 형태로 풀어내는 도구로 기능합니다. 우리는 이를 통해 감정을 시각화하는 새로운 방식을 탐색합니다.',
      '작품은 감정을 이루는 색, 질감, 재료, 형태로 구성되며, 보이지 않는 내면의 구조와 흐름을 감각적으로 드러냅니다. 맛볼 수는 없지만, 바라보는 것만으로도 기억을 환기시키고 감각을 일깨우며, 관객의 시선에 따라 새롭게 반응하고 작동합니다.',
      '〈Amuse-Oeil〉은 감정을 이해하고 표현하려는 새로운 시도로, 디지털 시대의 감정 표현과 시각 언어의 재구성, 그리고 기술과 인간 사이의 감각적 관계를 탐구합니다.',
      '이제, 한 입의 시선과 하나의 감각을 시작하세요.',
      'Amuse-Oeil — 눈으로 맛보는 디저트.'
    ]
  };

  // 영문 내용
  const englishContent = {
    subtitle: 'Desserts for the Eyes — Fragments of Emotion Revealed',
    paragraphs: [
      'Desserts are not merely foods enjoyed by the mouth. Within each small piece lies a density of emotions, condensed memories, and a sensory language that reveals and communicates feeling.',
      '〈Amuse-Oeil〉is a visual experiment that expands the concept of Amuse-Bouche— "a bite of delight"—into Amuse for the Eye: "a single visual-sensory experience." Here, AI learns from human emotions, memories, and identities, and renders them into images and objects shaped like desserts. AI functions as a tool that captures the subtle textures of emotions too difficult to express in words, translating them into forms and images. Through this, we explore new ways of visualizing emotions.',
      'The works are composed of colors, textures, materials, and forms that constitute emotion, making visible the unseen structures and flows of the inner self. Though they cannot be tasted, they awaken memory and sensation through sight alone, reacting and transforming in response to each viewer\'s gaze.',
      '〈Amuse-Oeil〉 is an attempt to understand and express emotion anew—restructuring visual language in the digital era, and probing the sensory relationship between technology and humanity.',
      'Now, begin with a bite of vision, a single taste of sensation.',
      'Amuse-Oeil — Desserts for the Eyes.'
    ]
  };

  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div className="overview-container">

      {/* 롤링 배너 배경 */}
      <div className="poster-banner-background">
        <div className="poster-banner-track">
          {[...posterFiles, ...posterFiles, ...posterFiles, ...posterFiles].map((poster, index) => (
            <div key={index} className="poster-banner-item">
              {poster.endsWith('.mp4') ? (
                <video 
                  ref={el => {
                    backgroundVideosRef.current[index] = el;
                    if (el) {
                      el.volume = 0;
                      el.muted = true;
                    }
                  }}
                  src={poster}
                  autoPlay
                  loop
                  muted={true}
                  playsInline
                  className="poster-banner-media"
                />
              ) : (
                <img 
                  src={poster}
                  alt="전시 포스터"
                  className="poster-banner-media"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* 컨텐츠 오버레이 */}
      <div className="overview-content-overlay">
        {/* 스텝 0: 포스터만 보여주기 */}
        {currentStep === 0 && (
          <div className="intro-poster-step">
            <div className="intro-poster">
              {posterFiles[0] && (
                posterFiles[0].endsWith('.mp4') ? (
                  <video 
                    ref={el => {
                      videoRef.current = el;
                      if (el) {
                        el.volume = 0;
                        el.muted = true;
                      }
                    }}
                    src={posterFiles[0]}
                    autoPlay
                    loop
                    muted={true}
                    playsInline
                    className="intro-poster-media"
                    onClick={() => setCurrentStep(1)}
                  />
                ) : (
                  <img 
                    src={posterFiles[0]}
                    alt="전시 포스터"
                    className="intro-poster-media"
                    onClick={() => setCurrentStep(1)}
                  />
                )
              )}
            </div>
            <button 
              className="next-step-button"
              onClick={() => setCurrentStep(1)}
            >
              {language === 'ko' ? '다음' : 'Next'} →
            </button>
          </div>
        )}

        {/* 스텝 1: 설명과 시작 버튼 */}
        {currentStep === 1 && (
          <div className="intro-header">
            <div className="intro-poster">
              {posterFiles[0] && (
                posterFiles[0].endsWith('.mp4') ? (
                  <video 
                    ref={el => {
                      videoRef.current = el;
                      if (el) {
                        el.volume = 0;
                        el.muted = true;
                      }
                    }}
                    src={posterFiles[0]}
                    autoPlay
                    loop
                    muted={true}
                    playsInline
                    className="intro-poster-media"
                  />
                ) : (
                  <img 
                    src={posterFiles[0]}
                    alt="전시 포스터"
                    className="intro-poster-media"
                  />
                )
              )}
            </div>
            <div 
              className="intro-content"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button 
                className="back-step-button"
                onClick={() => setCurrentStep(0)}
              >
                ← {language === 'ko' ? '이전' : 'Back'}
              </button>
              <h1 className="exhibition-title luxury-title">AMUSE OEIL</h1>
              
              {language === 'ko' && (
                <p className="exhibition-subtitle">{koreanContent.subtitle}</p>
              )}
              {language === 'en' && (
                <p className="exhibition-subtitle">{englishContent.subtitle}</p>
              )}
              
              <div className={`exhibition-description ${language === 'en' ? 'english' : 'korean'}`}>
                {content.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <button 
                className="start-button"
                onClick={() => navigate('/remu-interaction')}
              >
                {language === 'ko' ? '전시 시작하기' : 'Start Exhibition'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Overview;

