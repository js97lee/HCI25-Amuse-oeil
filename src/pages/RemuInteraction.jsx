import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RemuInteraction.css';

function RemuInteraction() {
  const navigate = useNavigate();
  const [selectedChef, setSelectedChef] = useState(null);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const chefs = [
    { id: 1, name: '쉐프 1', description: '클래식한 맛의 달인' },
    { id: 2, name: '쉐프 2', description: '모던한 창의성의 대가' },
    { id: 3, name: '쉐프 3', description: '감각적인 조화의 마법사' }
  ];

  const handleChefSelect = (chefId) => {
    setSelectedChef(chefId);
    setShowRecommendation(true);
  };

  const handleContinue = () => {
    navigate('/zone1');
  };

  return (
    <div className="remu-container">
      <div className="remu-content">
        <div className="remu-character">
          <img 
            src="/remu.jpg" 
            alt="레뮤아" 
            className="remu-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <div className="interaction-section">
          {!showRecommendation ? (
            <>
              <h2 className="remu-greeting luxury-title">안녕하세요! 저는 레뮤아입니다.</h2>
              <p className="remu-message">
                전시를 시작하기 전에, 어떤 쉐프의 디저트를 추천받고 싶으신가요?
              </p>
              <div className="chef-selection">
                {chefs.map((chef) => (
                  <button
                    key={chef.id}
                    className="chef-card"
                    onClick={() => handleChefSelect(chef.id)}
                  >
                    <h3>{chef.name}</h3>
                    <p>{chef.description}</p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="recommendation-section">
              <h2 className="recommendation-title luxury-title">
                {chefs.find(c => c.id === selectedChef)?.name}의 디저트를 추천드립니다!
              </h2>
              <p className="recommendation-message">
                전시장에서 {chefs.find(c => c.id === selectedChef)?.name}의 작품을 
                특히 주목해서 보시기 바랍니다. 멋진 경험이 될 것입니다!
              </p>
              <button className="continue-button" onClick={handleContinue}>
                전시장으로 이동하기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RemuInteraction;

