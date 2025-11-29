import { useRef, useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { zoneData } from '../data/zoneData';
import './AllWorks.css';

function AllWorks() {
  const navigate = useNavigate();
  const galleryRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(null);

  // zoneData에서 모든 작품 데이터 가져오기
  const allWorks = useMemo(() => {
    const works = [];
    for (let zoneNum = 1; zoneNum <= 4; zoneNum++) {
      const zone = zoneData[zoneNum];
      if (zone && zone.works) {
        zone.works.forEach(work => {
          works.push({
            zone: zoneNum,
            chef: work.chef,
            name: work.name,
            media: work.media,
            type: work.type,
            price: work.price || 900
          });
        });
      }
    }
    return works;
  }, []);

  // 중앙 아이템 감지
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const updateCenterItem = () => {
      const items = gallery.querySelectorAll('.all-works-gallery-item');
      if (items.length === 0) return;

      const galleryRect = gallery.getBoundingClientRect();
      const galleryCenter = galleryRect.left + galleryRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(galleryCenter - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    };

    // 스크롤 시 중앙 아이템 업데이트
    const handleScroll = () => {
      updateCenterItem();
    };

    // 초기 중앙 아이템 설정
    updateCenterItem();

    gallery.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateCenterItem);

    return () => {
      gallery.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCenterItem);
    };
  }, [allWorks.length]);

  // 자동 스크롤 애니메이션 (무한 루프)
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let scrollPosition = 0;
    let isPaused = false;
    let animationFrameId = null;
    const scrollSpeed = 1.5;

    const scroll = () => {
      if (!isPaused && gallery) {
        scrollPosition += scrollSpeed;
        gallery.scrollLeft = scrollPosition;
        
        // 끝에 도달하면 처음으로 부드럽게 이동
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          gallery.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // 호버 시 일시정지
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    gallery.addEventListener('mouseenter', handleMouseEnter);
    gallery.addEventListener('mouseleave', handleMouseLeave);

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      gallery.removeEventListener('mouseenter', handleMouseEnter);
      gallery.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [allWorks.length]);

  const handleScroll = (direction) => {
    const gallery = galleryRef.current;
    if (gallery) {
      const scrollAmount = 400;
      gallery.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="all-works-container">
      {/* 상단 헤더 */}
      <div className="all-works-header">
        <div className="all-works-header-left">
          <button 
            className="all-works-title" 
            onClick={() => navigate('/')}
            aria-label="Home"
          >
            AMUSE OEIL
          </button>
        </div>
        <div className="all-works-header-right">
          <button className="all-works-nav-link" onClick={() => navigate('/')}>
            HOME
          </button>
          <button className="all-works-close" onClick={() => navigate('/')}>
            (CLOSE)
          </button>
        </div>
      </div>

      {/* 가로 스크롤 갤러리 */}
      <div className="all-works-gallery-wrapper">
        <div className="all-works-gallery" ref={galleryRef}>
          <div className="all-works-gallery-track">
            {/* 원본 작품들 */}
            {allWorks.map((work, index) => (
              <div 
                key={`original-${index}`} 
                className={`all-works-gallery-item ${index === centerIndex ? 'center' : ''}`}
              >
                <div className="all-works-gallery-image">
                  {work.type === 'video' ? (
                    <video 
                      src={work.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'block';
                        }
                      }}
                    />
                  ) : (
                    <img 
                      src={work.media} 
                      alt={work.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'block';
                        }
                      }}
                    />
                  )}
                </div>
                <div className="all-works-gallery-info">
                  <div className="all-works-gallery-title">{work.name.toUpperCase()}</div>
                  <div className="all-works-gallery-meta">{work.chef}</div>
                  <div className="all-works-gallery-price">${work.price}</div>
                </div>
              </div>
            ))}
            {/* 루프를 위한 복제 작품들 */}
            {allWorks.map((work, index) => (
              <div 
                key={`duplicate-${index}`} 
                className={`all-works-gallery-item ${(index + allWorks.length) === centerIndex ? 'center' : ''}`}
              >
                <div className="all-works-gallery-image">
                  {work.type === 'video' ? (
                    <video 
                      src={work.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'block';
                        }
                      }}
                    />
                  ) : (
                    <img 
                      src={work.media} 
                      alt={work.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'block';
                        }
                      }}
                    />
                  )}
                </div>
                <div className="all-works-gallery-info">
                  <div className="all-works-gallery-title">{work.name.toUpperCase()}</div>
                  <div className="all-works-gallery-meta">{work.chef}</div>
                  <div className="all-works-gallery-price">${work.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 네비게이션 화살표 */}
        <div className="all-works-nav-arrows">
          <button 
            className="all-works-nav-arrow"
            onClick={() => handleScroll('left')}
            aria-label="Previous"
          >
            ←
          </button>
          <button 
            className="all-works-nav-arrow"
            onClick={() => handleScroll('right')}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* 하단 푸터 */}
      <div className="all-works-footer">
        <div className="all-works-footer-left">
          <span className="all-works-footer-number">{allWorks.length}</span>
        </div>
        <div className="all-works-footer-right">
          <span className="all-works-footer-text">Amuse Oeil</span>
        </div>
      </div>
    </div>
  );
}

export default AllWorks;

