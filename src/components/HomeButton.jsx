import { useNavigate } from 'react-router-dom';
import './HomeButton.css';

function HomeButton() {
  const navigate = useNavigate();

  return (
    <button className="home-button-fixed" onClick={() => navigate('/')}>
      홈
    </button>
  );
}

export default HomeButton;

