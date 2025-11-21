import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Survey.css';

function Survey() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    satisfaction: '',
    favoriteChef: '',
    favoriteZone: '',
    comments: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 실제 설문조사 제출 로직을 추가할 수 있습니다
    console.log('Survey submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="survey-container">
        <div className="survey-content">
          <h1 className="thank-you-title luxury-title">감사합니다!</h1>
          <p className="thank-you-message">
            소중한 의견을 주셔서 감사합니다. 
            여러분의 피드백은 더 나은 전시를 만드는 데 큰 도움이 됩니다.
          </p>
          <button 
            className="back-button"
            onClick={() => navigate('/all-works')}
          >
            작품 전체 보기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="survey-container">
      <div className="survey-content">
        <h1 className="survey-title luxury-title">설문조사</h1>
        <p className="survey-intro">
          전시에 대한 여러분의 소중한 의견을 들려주세요.
        </p>
        <form onSubmit={handleSubmit} className="survey-form">
          <div className="form-group">
            <label htmlFor="satisfaction">전체적인 만족도는 어떠셨나요?</label>
            <select 
              id="satisfaction" 
              name="satisfaction" 
              value={formData.satisfaction}
              onChange={handleChange}
              required
            >
              <option value="">선택해주세요</option>
              <option value="very-satisfied">매우 만족</option>
              <option value="satisfied">만족</option>
              <option value="neutral">보통</option>
              <option value="dissatisfied">불만족</option>
              <option value="very-dissatisfied">매우 불만족</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="favoriteChef">가장 좋아하신 쉐프는 누구인가요?</label>
            <select 
              id="favoriteChef" 
              name="favoriteChef" 
              value={formData.favoriteChef}
              onChange={handleChange}
              required
            >
              <option value="">선택해주세요</option>
              <option value="zen">Zen</option>
              <option value="remi">Remi</option>
              <option value="lara">Lara</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="favoriteZone">가장 인상 깊었던 Zone은 어느 것이었나요?</label>
            <select 
              id="favoriteZone" 
              name="favoriteZone" 
              value={formData.favoriteZone}
              onChange={handleChange}
              required
            >
              <option value="">선택해주세요</option>
              <option value="zone1">Zone 1</option>
              <option value="zone2">Zone 2</option>
              <option value="zone3">Zone 3</option>
              <option value="zone4">Zone 4</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comments">추가 의견이나 제안사항이 있으시면 적어주세요.</label>
            <textarea 
              id="comments" 
              name="comments" 
              value={formData.comments}
              onChange={handleChange}
              rows="5"
              placeholder="의견을 입력해주세요..."
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              제출하기
            </button>
            <button 
              type="button" 
              className="cancel-button"
              onClick={() => navigate('/all-works')}
            >
              건너뛰기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Survey;

