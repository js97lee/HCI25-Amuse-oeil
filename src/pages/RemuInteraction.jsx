import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import GlassOverlay from '../components/GlassOverlay';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';
import './RemuInteraction.css';

function RemuInteraction() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendedChef, setRecommendedChef] = useState(null);
  const [language, setLanguage] = useState('ko'); // 'ko' or 'en'

  // 5개의 설문 질문
  const questions = [
    {
      id: 1,
      question: '오늘 당신의 감정은 어떤 온도에 더 가까운가요?',
      questionEn: 'What temperature is your emotion closest to today?',
      options: ['차가움', '미지근함', '따뜻함', '뜨거움'],
      optionsEn: ['Cold', 'Lukewarm', 'Warm', 'Hot']
    },
    {
      id: 2,
      question: '당신의 감정이 디저트라면, 어떤 질감일까요?',
      questionEn: 'If your emotion were a dessert, what texture would it be?',
      options: ['크리미한', '쫀득한', '바삭한', '촉촉한'],
      optionsEn: ['Creamy', 'Chewy', 'Crispy', 'Moist']
    },
    {
      id: 3,
      question: '지금의 감정은 입안에서 얼마나 오래 남나요?',
      questionEn: 'How long does your current emotion linger in your mouth?',
      options: ['은은하게', '진하게', '빠르게 사라짐', '오래 남음'],
      optionsEn: ['Subtly', 'Boldly', 'Quickly fades', 'Lingers long']
    },
    {
      id: 4,
      question: '당신의 감정은 향이라면 어떻게 퍼질까요?',
      questionEn: 'If your emotion were a scent, how would it spread?',
      options: ['천천히 스며듦', '한순간 확 퍼짐', '은은하게 머뭄', '맑고 가벼움'],
      optionsEn: ['Slowly seeps in', 'Bursts instantly', 'Softly lingers', 'Clear and light']
    },
    {
      id: 5,
      question: '감정이 지나간 뒤, 어떤 여운이 남나요?',
      questionEn: 'What aftertaste remains after the emotion passes?',
      options: ['고요함', '따뜻함', '새로움', '공허함'],
      optionsEn: ['Calm', 'Warmth', 'Freshness', 'Emptiness']
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

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowRecommendation(false);
    setRecommendedChef(null);
  };

  const chefs = {
    1: { 
      name: 'Nara', 
      description: '클래식한 맛의 달인',
      image: '/Poster/Chef1.png',
      video: '/works/chef/teaset-nara.mp4'
    },
    2: { 
      name: 'Remi', 
      description: '모던한 창의성의 대가',
      image: '/Poster/Chef2.png',
      video: '/works/chef/teaset-remi.mp4'
    },
    3: { 
      name: 'Zen', 
      description: '감각적인 조화의 마법사',
      image: '/Poster/Chef3.png',
      video: '/works/chef/teaset-zen.mp4'
    }
  };

  return (
    <div className={`remu-container ${currentQuestion > 0 && !showRecommendation ? 'has-question' : ''}`}>
      <HomeButton />
      <div className="remu-content">
        {!showRecommendation && currentQuestion === 0 && (
          <div className="remu-character">
            <video 
              src="/Poster/Emotier_remuer_loop.mp4" 
              className="remu-image"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
            <div className="remu-text-overlay">
              <button 
                className="language-toggle"
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              >
                {language === 'ko' ? 'EN' : '한글'}
              </button>
              <h2 className="remu-greeting">
                Hello!<br />I am Emotier Remua.
              </h2>
                    <p className="remu-message">
                      {language === 'ko'
                        ? <>전시를 시작하기 전에, 몇 가지<br />질문을 통해 당신에게 맞는 쉐프를 추천해드리겠습니다.</>
                        : 'Before starting the exhibition, I will recommend a chef that suits you through a few questions.'}
                    </p>
              <button 
                className="start-survey-button"
                onClick={() => setCurrentQuestion(1)}
              >
                {language === 'ko' ? '시작하기' : 'Start'}
              </button>
            </div>
          </div>
        )}
        <div className="interaction-section">
          {!showRecommendation ? (
            <>
              
              {currentQuestion > 0 && currentQuestion <= questions.length && (
                <div className="survey-question-section">
                  <button 
                    className="language-toggle"
                    onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                  >
                    {language === 'ko' ? 'EN' : '한글'}
                  </button>
                  <div className="question-progress">
                    {language === 'ko' ? '질문' : 'Question'} {currentQuestion} / {questions.length}
                  </div>
                  <div className="question-header">
                    <h3 className="question-title">
                      {language === 'ko' 
                        ? questions[currentQuestion - 1].question 
                        : questions[currentQuestion - 1].questionEn}
                    </h3>
                    {language === 'ko' && questions[currentQuestion - 1].questionEn && (
                      <p className="question-title-en">
                        {questions[currentQuestion - 1].questionEn}
                      </p>
                    )}
                  </div>
                  <div className="word-cards-grid">
                    {questions[currentQuestion - 1].options.map((option, index) => (
                      <button
                        key={index}
                        className="word-card"
                        onClick={() => handleOptionSelect(option)}
                      >
                        <span className="word-card-ko">
                          {language === 'ko' ? option : questions[currentQuestion - 1].optionsEn[index]}
                        </span>
                        {language === 'ko' && questions[currentQuestion - 1].optionsEn && (
                          <span className="word-card-en">
                            {questions[currentQuestion - 1].optionsEn[index]}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <GlassOverlay>
              <GlassCard className="recommendation-card">
                <h2 className="recommendation-card-title">Remua's Recommendation</h2>
                <h3 className="recommendation-chef-name">Chef. {chefs[recommendedChef]?.name}</h3>
                <div className="chef-video-container">
                  <video 
                    src={chefs[recommendedChef]?.video}
                    className="chef-recommendation-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                  />
                </div>
                <p className="recommendation-card-message">
                  {language === 'ko' 
                    ? `${chefs[recommendedChef]?.name} 셰프의 특별한 디저트 컬렉션을 경험해보세요. 각 디저트는 고유한 의미와 스토리를 담고 있으며, 당신의 감정과 어울리는 완벽한 조화를 제공합니다.`
                    : `Experience Chef ${chefs[recommendedChef]?.name}'s special dessert collection. Each dessert contains unique meanings and stories, providing a perfect harmony that matches your emotions.`}
                </p>
                <div className="recommendation-buttons">
                  <GlassButton variant="primary" onClick={handleRetry}>
                    <span>↻</span> {language === 'ko' ? '다시하기' : 'Retry'}
                  </GlassButton>
                  <GlassButton variant="secondary" onClick={handleContinue}>
                    {language === 'ko' ? '아일랜드로 이동하기' : 'Go to Island'}
                  </GlassButton>
                </div>
              </GlassCard>
            </GlassOverlay>
          )}
        </div>
      </div>
    </div>
  );
}

export default RemuInteraction;
