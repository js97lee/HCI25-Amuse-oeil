import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import './Closing.css';

function Closing() {
  const navigate = useNavigate();

  return (
    <div className="closing-container">
      <HomeButton />
      <div className="closing-content">
        <h1 className="closing-title luxury-title">감사합니다</h1>
        <div className="closing-message">
          <p>
            HCI Amuse-Oeil 전시를 관람해주셔서 감사합니다.
          </p>
          <p>
            Zen, Remi, Lara 세 명의 쉐프의 작품을 통해 
            디저트와 예술의 아름다운 만남을 경험하셨기를 바랍니다.
          </p>
          <p>
            여러분의 소중한 의견을 들려주시면 더 나은 전시를 만들 수 있습니다.
          </p>
        </div>
        <div className="closing-buttons">
          <button 
            className="closing-button survey"
            onClick={() => navigate('/survey')}
          >
            설문조사 참여하기
          </button>
          <button 
            className="closing-button all-works"
            onClick={() => navigate('/all-works')}
          >
            작품 전체 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Closing;

