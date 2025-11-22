import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Zone from '../components/Zone';
import { zoneData } from '../data/zoneData';

function Zone1() {
  return <Zone zoneNumber={1} zoneInfo={zoneData[1]} />;
}

export default Zone1;

