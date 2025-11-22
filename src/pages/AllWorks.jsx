import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import './AllWorks.css';

function AllWorks() {
  const navigate = useNavigate();

  // 16개 작품 데이터 (Zone 1-4, 각 Zone마다 티 칵테일 + Zen/Remi/Lara)
  const allWorks = [
    { zone: 1, chef: 'Tea Cocktail', name: '티 칵테일 1', media: '/works/zone1/Tea-1.mp4', type: 'video' },
    { zone: 1, chef: 'Zen', name: 'Zen의 디저트 1', media: '/works/zone1/Zen-1.mp4', type: 'video' },
    { zone: 1, chef: 'Remi', name: 'Remi의 디저트 1', media: '/works/zone1/Remi-1.mp4', type: 'video' },
    { zone: 1, chef: 'Lara', name: 'Lara의 디저트 1', media: '/works/zone1/Lara-1.mp4', type: 'video' },
    { zone: 2, chef: 'Tea Cocktail', name: '티 칵테일 2', media: '/works/zone2/Tea-2.mp4', type: 'video' },
    { zone: 2, chef: 'Zen', name: 'Zen의 디저트 2', media: '/works/zone2/Zen-2.mp4', type: 'video' },
    { zone: 2, chef: 'Remi', name: 'Remi의 디저트 2', media: '/works/zone2/Remi-2.mp4', type: 'video' },
    { zone: 2, chef: 'Lara', name: 'Lara의 디저트 2', media: '/works/zone2/Lara-2.mp4', type: 'video' },
    { zone: 3, chef: 'Tea Cocktail', name: '티 칵테일 3', media: '/works/zone3/Tea-3.mp4', type: 'video' },
    { zone: 3, chef: 'Zen', name: 'Zen의 디저트 3', media: '/works/zone3/Zen-3.mp4', type: 'video' },
    { zone: 3, chef: 'Remi', name: 'Remi의 디저트 3', media: '/works/zone3/Remi-3.mp4', type: 'video' },
    { zone: 3, chef: 'Lara', name: 'Lara의 디저트 3', media: '/works/zone3/Lara-3.mp4', type: 'video' },
    { zone: 4, chef: 'Tea Cocktail', name: '티 칵테일 4', media: '/works/zone4/Tea-4.mp4', type: 'video' },
    { zone: 4, chef: 'Zen', name: 'Zen의 디저트 4', media: '/works/zone4/Zen-4.mp4', type: 'video' },
    { zone: 4, chef: 'Remi', name: 'Remi의 디저트 4', media: '/works/zone4/Remi-4.mp4', type: 'video' },
    { zone: 4, chef: 'Lara', name: 'Lara의 디저트 4', media: '/works/zone4/Lara-4.mp4', type: 'video' }
  ];

  return (
    <div className="all-works-container">
      <HomeButton />
      <div className="all-works-content">
        <h1 className="all-works-title luxury-title">작품 전체 보기</h1>
        <p className="all-works-description">
          전시된 모든 작품을 한눈에 감상해보세요.
        </p>
        <div className="works-grid">
          {allWorks.map((work, index) => (
            <div key={index} className="work-card">
              <div className="work-media-placeholder">
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
              <div className="work-info">
                <span className="work-zone">Zone {work.zone}</span>
                <h3 className="work-chef">{work.chef}</h3>
                <p className="work-name">{work.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="all-works-footer">
          <button 
            className="home-button"
            onClick={() => navigate('/')}
          >
            처음으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllWorks;

