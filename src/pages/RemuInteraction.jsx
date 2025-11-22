import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import './RemuInteraction.css';

function RemuInteraction() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendedChef, setRecommendedChef] = useState(null);

  // 5개의 설문 질문 (추후 내용 업데이트 예정)
  const questions = [
    {
      id: 1,
      question: '질문 1',
      options: ['옵션 1', '옵션 2', '옵션 3', '옵션 4']
    },
    {
      id: 2,
      question: '질문 2',
      options: ['옵션 1', '옵션 2', '옵션 3', '옵션 4']
    },
    {
      id: 3,
      question: '질문 3',
      options: ['옵션 1', '옵션 2', '옵션 3', '옵션 4']
    },
    {
      id: 4,
      question: '질문 4',
      options: ['옵션 1', '옵션 2', '옵션 3', '옵션 4']
    },
    {
      id: 5,
      question: '질문 5',
      options: ['옵션 1', '옵션 2', '옵션 3', '옵션 4']
    }
  ];

  const handleOptionSelect = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    // 다음 질문으로 이동
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 모든 질문 답변 완료 - 쉐프 추천
      calculateRecommendation(newAnswers);
    }
  };

  const calculateRecommendation = (allAnswers) => {
    // 선택한 답변에 따라 쉐프 추천 (임시 로직 - 추후 수정)
    // 현재는 랜덤하게 추천하지만, 실제로는 답변 패턴에 따라 결정
    const chefScores = { 1: 0, 2: 0, 3: 0 };
    
    // 각 답변에 따라 점수 계산 (임시 로직)
    allAnswers.forEach((answer, index) => {
      const optionIndex = questions[index].options.indexOf(answer);
      if (optionIndex === 0 || optionIndex === 1) chefScores[1]++;
      if (optionIndex === 1 || optionIndex === 2) chefScores[2]++;
      if (optionIndex === 2 || optionIndex === 3) chefScores[3]++;
    });

    // 가장 높은 점수의 쉐프 추천
    const recommended = Object.keys(chefScores).reduce((a, b) => 
      chefScores[a] > chefScores[b] ? a : b
    );

    setRecommendedChef(parseInt(recommended));
    setShowRecommendation(true);
  };

  const handleContinue = () => {
    navigate('/zone1');
  };

  const chefs = {
    1: { 
      name: '쉐프 1', 
      description: '클래식한 맛의 달인',
      image: '/Poster/Chef1.png' // 쉐프 1 이미지 경로
    },
    2: { 
      name: '쉐프 2', 
      description: '모던한 창의성의 대가',
      image: '/Poster/Chef2.png' // 쉐프 2 이미지 경로
    },
    3: { 
      name: '쉐프 3', 
      description: '감각적인 조화의 마법사',
      image: '/Poster/Chef3.png' // 쉐프 3 이미지 경로
    }
  };

  return (
    <div className="remu-container">
      <HomeButton />
      <div className="remu-content">
        {!showRecommendation && (
          <div className="remu-character">
            <img 
              src="/Poster/Emotier_remuer.png" 
              alt="레뮤아" 
              className="remu-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}
        <div className="interaction-section">
          {!showRecommendation ? (
            <>
              {currentQuestion === 0 && (
                <>
                  <h2 className="remu-greeting luxury-title">안녕하세요! 저는 레뮤아입니다.</h2>
                  <p className="remu-message">
                    전시를 시작하기 전에, 몇 가지 질문을 통해 당신에게 맞는 쉐프를 추천해드리겠습니다.
                  </p>
                  <button 
                    className="start-survey-button"
                    onClick={() => setCurrentQuestion(1)}
                  >
                    시작하기
                  </button>
                </>
              )}
              
              {currentQuestion > 0 && currentQuestion <= questions.length && (
                <div className="survey-question-section">
                  <div className="question-progress">
                    질문 {currentQuestion} / {questions.length}
                  </div>
                  <h3 className="question-title">
                    {questions[currentQuestion - 1].question}
                  </h3>
                  <div className="word-cards-grid">
                    {questions[currentQuestion - 1].options.map((option, index) => (
                      <button
                        key={index}
                        className="word-card"
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="recommendation-section">
              <div className="chef-image-container">
                <img 
                  src={chefs[recommendedChef]?.image || '/Poster/Emotier_remuer.png'} 
                  alt={chefs[recommendedChef]?.name}
                  className="chef-recommendation-image"
                  onError={(e) => {
                    // 이미지가 없으면 레뮤아 이미지로 대체
                    e.target.src = '/Poster/Emotier_remuer.png';
                  }}
                />
              </div>
              <h2 className="recommendation-title luxury-title">
                {chefs[recommendedChef]?.name}의 디저트를 추천드립니다!
              </h2>
              <p className="recommendation-message">
                전시장에서 {chefs[recommendedChef]?.name}의 작품을 
                특히 주목해서 보시기 바랍니다. 멋진 경험이 될 것입니다!
              </p>
              <button className="continue-button" onClick={handleContinue}>
                아일랜드로 이동하기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RemuInteraction;
