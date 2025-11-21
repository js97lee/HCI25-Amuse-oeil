import { useNavigate } from 'react-router-dom';
import './Zone.css';

function Zone3() {
  const navigate = useNavigate();

  const works = [
    { chef: 'Tea Cocktail', name: '티 칵테일 3', media: '/works/zone3/Tea-3.mp4', type: 'video' },
    { chef: 'Zen', name: 'Zen의 디저트 3', media: '/works/zone3/Zen-3.mp4', type: 'video' },
    { chef: 'Remi', name: 'Remi의 디저트 3', media: '/works/zone3/Remi-3.mp4', type: 'video' },
    { chef: 'Lara', name: 'Lara의 디저트 3', media: '/works/zone3/Lara-3.mp4', type: 'video' }
  ];

  return (
    <div className="zone-container">
      <div className="zone-content">
        <h1 className="zone-title luxury-title">Zone 3</h1>
        <p className="zone-description">
          세 번째 존에서 티 칵테일과 세 명의 쉐프의 작품을 만나보세요.
        </p>
        <div className="works-grid">
          {works.map((work, index) => (
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
              <h3 className="work-chef">{work.chef}</h3>
              <p className="work-name">{work.name}</p>
            </div>
          ))}
        </div>
        <div className="zone-navigation">
          <button 
            className="nav-button prev"
            onClick={() => navigate('/zone2')}
          >
            이전
          </button>
          <button 
            className="nav-button next"
            onClick={() => navigate('/zone4')}
          >
            다음 Zone으로
          </button>
        </div>
      </div>
    </div>
  );
}

export default Zone3;

