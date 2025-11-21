import { useNavigate } from 'react-router-dom';
import './Overview.css';

function Overview() {
  const navigate = useNavigate();

  return (
    <div className="overview-container">
      <div className="overview-content">
        <div className="poster-section">
          <img 
            src="/poster.jpg" 
            alt="전시 포스터" 
            className="poster-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <h1 className="exhibition-title luxury-title">AMUSE OEIL</h1>
        <div className="exhibition-description">
          <p>
            환영합니다. HCI Amuse-Oeil 전시에 오신 것을 환영합니다.
          </p>
          <p>
            이 전시는 디저트와 예술의 만남을 통해 새로운 감각적 경험을 제공합니다.
            레뮤아와 함께 여러 쉐프들의 작품을 탐험해보세요.
          </p>
          <p>
            총 4개의 존에서 Zen, Remi, Lara 쉐프의 작품을 만나보실 수 있습니다.
          </p>
        </div>
        <button 
          className="start-button"
          onClick={() => navigate('/remu-interaction')}
        >
          전시 시작하기
        </button>
      </div>
    </div>
  );
}

export default Overview;

