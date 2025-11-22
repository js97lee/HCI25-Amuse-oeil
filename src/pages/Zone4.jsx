import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Zone from '../components/Zone';
import { zoneData } from '../data/zoneData';

function Zone4() {
  return <Zone zoneNumber={4} zoneInfo={zoneData[4]} />;
}

export default Zone4;

