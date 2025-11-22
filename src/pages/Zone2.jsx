import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Zone from '../components/Zone';
import { zoneData } from '../data/zoneData';

function Zone2() {
  return <Zone zoneNumber={2} zoneInfo={zoneData[2]} />;
}

export default Zone2;

