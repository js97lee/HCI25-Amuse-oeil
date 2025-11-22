import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Zone from '../components/Zone';
import { zoneData } from '../data/zoneData';

function Zone3() {
  return <Zone zoneNumber={3} zoneInfo={zoneData[3]} />;
}

export default Zone3;

