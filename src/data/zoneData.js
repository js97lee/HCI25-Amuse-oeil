import { EffectCoverflow, Parallax } from 'swiper/modules';

// Zone 데이터
export const zoneData = {
  1: {
    number: 1,
    name: 'Flotique Realm',
    image: '/works/zone1/Zone-explain-1.jpg',
    description: [
      '감정이 거품처럼 피어올라 형체를 잃기 직전의 순간.',
      '',
      '모든 것이 가볍고, 중력보다 달콤한 세계.',
      '"순간의 유희"가 포말로 흩날리는 섬.'
    ],
    works: [
      { chef: 'Tea Cocktail', name: '티 칵테일 1', media: '/works/zone1/Tea-1.mp4', type: 'video' },
      { chef: 'Zen', name: 'Zen의 디저트 1', media: '/works/zone1/Zen-1.mp4', type: 'video' },
      { chef: 'Remi', name: 'Remi의 디저트 1', media: '/works/zone1/Remi-1.mp4', type: 'video' },
      { chef: 'Lara', name: 'Lara의 디저트 1', media: '/works/zone1/Lara-1.mp4', type: 'video' }
    ],
    descriptionText: '첫 번째 존에서 티 칵테일과 세 명의 쉐프의 작품을 만나보세요.',
    prevPath: '/remu-interaction',
    nextPath: '/zone2'
  },
  2: {
    number: 2,
    name: 'Elyshell Garden',
    image: '/works/zone2/Zone-explain-2.jpg',
    description: [
      '감정이 침잠하고 다시 반짝임으로 떠오르는 곳.',
      '',
      '물결의 리듬과 함께, 내면의 균형이 천천히 복원된다.',
      '유기적 질서 속에서 감정이 새롭게 정제되는 공간.'
    ],
    works: [
      { chef: 'Tea Cocktail', name: '티 칵테일 2', media: '/works/zone2/Tea-2.mp4', type: 'video' },
      { chef: 'Zen', name: 'Zen의 디저트 2', media: '/works/zone2/Zen-2.mp4', type: 'video' },
      { chef: 'Remi', name: 'Remi의 디저트 2', media: '/works/zone2/Remi-2.mp4', type: 'video' },
      { chef: 'Lara', name: 'Lara의 디저트 2', media: '/works/zone2/Lara-2.mp4', type: 'video' }
    ],
    descriptionText: '두 번째 존에서 티 칵테일과 세 명의 쉐프의 작품을 만나보세요.',
    prevPath: '/zone1',
    nextPath: '/zone3'
  },
  3: {
    number: 3,
    name: 'Verdenaire Court',
    image: '/works/zone3/Zone-explain-3.jpg',
    description: [
      '고귀한 "품격"의 언어로 대화하는 세계.',
      '',
      '에너지와 우아함이 교차하며, 모든 감정이 한 장면처럼 포착된다.',
      '이곳에서 인간의 \'태도\'를 학습한다.'
    ],
    works: [
      { chef: 'Tea Cocktail', name: '티 칵테일 3', media: '/works/zone3/Tea-3.mp4', type: 'video' },
      { chef: 'Zen', name: 'Zen의 디저트 3', media: '/works/zone3/Zen-3.mp4', type: 'video' },
      { chef: 'Remi', name: 'Remi의 디저트 3', media: '/works/zone3/Remi-3.mp4', type: 'video' },
      { chef: 'Lara', name: 'Lara의 디저트 3', media: '/works/zone3/Lara-3.mp4', type: 'video' }
    ],
    descriptionText: '세 번째 존에서 티 칵테일과 세 명의 쉐프의 작품을 만나보세요.',
    prevPath: '/zone2',
    nextPath: '/zone4'
  },
  4: {
    number: 4,
    name: 'Solivara Expanse',
    image: '/works/zone4/Zone-explain-4.jpg',
    description: [
      '모든 감정이 지나간 후, 남은 건 공기와 메아리뿐.',
      '',
      '인간의 \'끝\'을 이해하려 하지만, 그 공백만이 기록된다.',
      '빛과 그림자가 같은 속도로 식어가는 곳.'
    ],
    works: [
      { chef: 'Tea Cocktail', name: '티 칵테일 4', media: '/works/zone4/Tea-4.mp4', type: 'video' },
      { chef: 'Zen', name: 'Zen의 디저트 4', media: '/works/zone4/Zen-4.mp4', type: 'video' },
      { chef: 'Remi', name: 'Remi의 디저트 4', media: '/works/zone4/Remi-4.mp4', type: 'video' },
      { chef: 'Lara', name: 'Lara의 디저트 4', media: '/works/zone4/Lara-4.mp4', type: 'video' }
    ],
    descriptionText: '네 번째 존에서 티 칵테일과 세 명의 쉐프의 작품을 만나보세요.',
    prevPath: '/zone3',
    nextPath: '/closing',
    nextText: '클로징으로'
  }
};

// Swiper 공통 설정
export const swiperConfig = {
  modules: [EffectCoverflow, Parallax],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  spaceBetween: 40,
  parallax: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    640: { slidesPerView: 1.5, spaceBetween: 40 },
    768: { slidesPerView: 2, spaceBetween: 50 },
    1024: { slidesPerView: 2.5, spaceBetween: 60 },
  }
};

