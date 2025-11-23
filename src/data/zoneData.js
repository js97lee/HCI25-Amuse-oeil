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
      { 
        chef: 'Tea Cocktail', 
        name: 'Ephemeral Delight (순간의 행복)', 
        media: '/works/zone1/Tea-1.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney',
        dimensions: '1920*1920/1:1',
        description: {
          ko: 'Flotique Bloom은 Oeil Island의 첫 번째 아일랜드〈Flotique Realm〉을 대표하는 티 칵테일로, 감정이 피어올라 공기 중으로 흩어지는 찰나의 행복을 담고 있다. 마시는 순간, 하늘빛이 입안에서 부유한다. 달콤하지만 잡히지 않는 — 행복의 분자. 감정이 증발하며, 한 모금의 빛으로 남는다.',
          en: 'Flotique Bloom is a tea cocktail representing the first island of Oeil Island, 〈Flotique Realm〉, containing the fleeting happiness of emotions blooming and scattering into the air. The moment you drink it, the sky blue floats in your mouth. Sweet but elusive — molecules of happiness. Emotions evaporate, leaving behind a sip of light.'
        },
        ingredients: [
          'White peach oolong tea infused with rose vapor',
          'Cotton sugar foam',
          'Crystalized cherry essence',
          'A drop of cloud syrup'
        ]
      },
      { 
        chef: 'Zen', 
        name: 'Sky Parfait', 
        media: '/works/zone1/Zen-1.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney / ComfyUI',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '〈The Promise in the Air〉은 감정이 형태를 갖추기 이전의 상태, 즉 그리움이 감지되기 시작하는 순간의 공기층을 시각화한 오브제다. 작품은 투명한 유리잔 안에 그린 아이스크림과 핑크 솜사탕을 병치해 감정의 밀도 차이를 공간적으로 표현한다. 솜사탕은 부유하는 기억의 조각이며, 백합은 순수한 감정의 잔재다. 줄자 리본은 닿지 못한 거리의 단위이자 관계의 한계를 상징한다. 그린은 희미해진 기억의 투명함을, 핑크는 감정의 잔열을 나타낸다. 두 색이 맞물려 형성하는 그라데이션은 \'기억과 현실 사이의 공명\'을 조형 언어로 번역한다. 작품은 감정의 언어를 향·색·질감으로 해석하여 보이지 않는 그리움을 시각적 밀도로 전환한다. 공기와 빛으로 구성된 하나의 디저트이자, 사라진 감정을 형태로 서빙하는 조용한 장치다.',
          en: '〈The Promise in the Air〉visualizes the layer of air at the moment when longing begins to be sensed, before emotions take form. The work spatially expresses the density difference of emotions by juxtaposing green ice cream and pink cotton candy in a transparent glass. Cotton candy is a fragment of floating memory, and lilies are remnants of pure emotion. The ruler ribbon symbolizes the unit of unreachable distance and the limits of relationships. Green represents the transparency of faded memories, pink represents the residual heat of emotions. The gradient formed by the interlocking of these two colors translates \'resonance between memory and reality\' into sculptural language. The work interprets the language of emotions through scent, color, and texture, converting invisible longing into visual density. A dessert composed of air and light, a quiet device that serves vanished emotions in form.'
        }
      },
      { 
        chef: 'Remi', 
        name: 'Peace of Dice', 
        media: '/works/zone1/Remi-1.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney / Nanobanana',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '〈The Sweet Gamble of Emotion〉 Emotion: Anticipation (기대, 설렘) 감정의 시작은 언제나 예측할 수 없는 우연에서 비롯된다. 사랑도, 첫 만남도 주사위를 던지듯 우발적이며, 그 안에는 설렘이 깃든다. 〈piece of Dice〉는 붉은 열정과 달콤한 위험 사이에서, 감정의 확률을 시각화한 디저트 조각이다. 주사위의 각 면에는 다른 기억이 새겨져 있다. 딸기와 하트는 그 중 가장 뜨거운 면 — 사랑의 단면을 상징하며, 우연히 마주친 감정이 인생의 가장 달콤한 놀라움임을 말한다. 이 작품은 감정이 계산될 수 없음을 보여준다. 우리가 던지는 감정의 주사위는 때로 상처를, 때로 달콤함을 남긴다. 그럼에도 불구하고, 인간은 다시 사랑을 굴린다. 빛과 질감으로 조형된 이 조각은, 감정이 가진 불확실함의 아름다움을 담아낸다.',
          en: '〈The Sweet Gamble of Emotion〉 Emotion: Anticipation The beginning of emotions always stems from unpredictable chance. Love, like a first meeting, is as accidental as rolling dice, and within it lies excitement. 〈piece of Dice〉is a dessert piece that visualizes the probability of emotions between red passion and sweet danger. Each face of the dice is engraved with different memories. Strawberries and hearts symbolize the hottest face—the cross-section of love, speaking of how emotions encountered by chance become life\'s sweetest surprise. This work shows that emotions cannot be calculated. The dice of emotions we throw sometimes leave wounds, sometimes sweetness. Nevertheless, humans roll the dice of love again. This piece, sculpted with light and texture, contains the beauty of uncertainty that emotions possess.'
        }
      },
      { 
        chef: 'Lara', 
        name: 'Whisper of Chance', 
        media: '/works/zone1/Lara-1.mp4', 
        type: 'video',
        year: '2025/10',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '우연의 속삭임 감정은 언제나 공기처럼 스며든다. 예상치 못한 한순간, 새벽의 빛처럼 조용히 내려앉는다. 〈Whisper of Chance〉는 사랑과 우연 사이, 그 미세한 떨림을 시각화한 디저트 조각이다. 부드러운 핑크와 하얀 레이어는 감정의 층위를 표현하며, 얇은 금속의 선은 두 사람 사이의 긴장과 설렘을 나타낸다. 그 위에 놓인 작은 구와 꽃잎은, 마치 감정이 하늘로부터 떨어진 하나의 가능성처럼 반짝인다. 이 작품은 "감정은 선택이 아니라, 닿음이다."라는 질문을 던진다. 빛과 질감이 만들어낸 찰나의 구조 속에서, 우연이 사랑으로 변하는 그 순간의 숨결을 포착한다.',
          en: 'Whisper of Chance Emotions always seep in like air. In an unexpected moment, they settle quietly like dawn light. 〈Whisper of Chance〉is a dessert piece that visualizes the subtle tremor between love and chance. Soft pink and white layers express the layers of emotion, and thin metallic lines represent the tension and excitement between two people. The small spheres and petals placed on top sparkle like a single possibility that emotion has fallen from the sky. This work poses the question, "Emotion is not a choice, but a touch." Within the momentary structure created by light and texture, it captures the breath of that moment when chance transforms into love.'
        }
      }
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
      { 
        chef: 'Tea Cocktail', 
        name: 'Elyshell Whisper', 
        media: '/works/zone2/Tea-2.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '〈Elyshell Whisper〉 Emotion: Serene Introspection (내면의 고요함) Elyshell Whisper는 Oeil Island의 두 번째 아일랜드 〈Elyshell Garden〉을 대표하는 티 칵테일로, 감정이 침잠하고 다시 맑게 정제되는 순간을 담고 있다. 잔을 기울이면, 고요가 파문처럼 번진다. 향은 부드럽게 흐르고, 감정은 투명하게 정화된다. 혀끝에 닿는 진주는 차갑고도 따뜻하며, 그 이중성 속에서 마음은 균형을 되찾는다.',
          en: '〈Elyshell Whisper〉 Emotion: Serene Introspection Elyshell Whisper is a tea cocktail representing the second island of Oeil Island, 〈Elyshell Garden〉, containing the moment when emotions sink and are purified again. When you tilt the glass, serenity spreads like ripples. The fragrance flows gently, and emotions are purified transparently. The pearl that touches the tip of the tongue is both cold and warm, and within this duality, the heart regains balance.'
        },
        ingredients: [
          'Jasmine silver needle tea',
          'Pearl dust honey',
          'Shell-shaped ice crystal',
          'Vanilla mist'
        ]
      },
      { 
        chef: 'Zen', 
        name: 'Pond Shaved Ice', 
        media: '/works/zone2/Zen-2.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney / ComfyUI',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '<Small Tremor of Warmth>는 사라질 감정을 굳이 꿰매어 붙잡으려는, 감정의 아이러니를 시각화한 오브제다. 빙수 위에 흰색과 분홍색 딸기, 딸기 시럽이 겹겹이 놓인다. 얼음은 녹아내리며 형태를 잃지만, 그 표면에는 여전히 온도의 흔적이 남는다. 빙수는 결국 사라지지만, 그 위에서 감정은 봉합의 형태로 마지막 온기를 유지한다. 연꽃 장식은 고요히 감정을 받아들이는 연못의 상징이고, 접시 위의 핑크색 실과 핀쿠션은 사라지는 감정을 붙잡으려는 인간의 욕망을 은유한다. 차가움 속에서 피어오르는 작은 떨림은, 그리움이 봉합된 자리에서 다시 태어나는 감정의 미묘한 진동이다. 〈Small Tremor of Warmth〉는 그렇게 사라지는 것을 붙잡으려는 모순, 그리고 그 모순 속에서 피어나는 조용한 아름다움을 담고 있다.',
          en: '<Small Tremor of Warmth>is an object that visualizes the irony of emotions, trying to forcibly stitch and hold onto emotions that are about to disappear. White and pink strawberries and strawberry syrup are layered on top of shaved ice. The ice melts and loses its form, but traces of temperature still remain on its surface. The shaved ice eventually disappears, but on it, emotions maintain their last warmth in the form of sutures. The lotus decoration symbolizes a pond that quietly receives emotions, and the pink thread and pincushion on the plate metaphorize human desire to hold onto disappearing emotions. The small tremor that blooms in the cold is the subtle vibration of emotions being reborn at the place where longing has been sutured. 〈Small Tremor of Warmth〉thus contains the contradiction of trying to hold onto what is disappearing, and the quiet beauty that blooms within that contradiction.'
        }
      },
      { 
        chef: 'Remi', 
        name: 'Axis of Serenity', 
        media: '/works/zone2/Remi-2.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '〈Axis of Serenity〉 Emotion: Acceptance & Direction (수용과 방향성) 감정은 바다의 파도처럼 흔들리며, 때로는 그 중심을 잃는다. 〈Axis of Serenity〉는 그 흔들림 속에서 다시 균형을 찾아가는 여정을 담은 조각이다. 짙은 남색의 돔은 내면의 깊은 바다를 상징하고, 그 위를 관통하는 황금빛 축은 감정의 중심축, 곧 \'Serenity(평온)\'의 좌표를 나타낸다. 보석처럼 반짝이는 질감은 감정이 혼란 속에서도 잃지 않는 본연의 방향감각을 상징한다. 층층이 쌓인 파이스트리와 부드러운 크림은 감정이 겹겹이 쌓여 숙성되어 가는 과정을 표현하며, 입안에서 녹아내리는 질감은 수용을 통해 감정이 흘러가는 순간의 해방을 의미한다. 감정을 통제하지 않고, 흘러가는 파도를 따라 중심을 되찾는 것— 그것이 바로 Remi가 말하는 \'감정을 지혜롭게 다루는 법\'이다.',
          en: '〈Axis of Serenity〉 Emotion: Acceptance & Direction Emotions sway like ocean waves, sometimes losing their center. 〈Axis of Serenity〉is a piece that contains the journey of finding balance again within that swaying. The deep navy dome symbolizes the deep sea within, and the golden axis penetrating through it represents the central axis of emotions, the coordinates of \'Serenity\'. The jewel-like sparkling texture symbolizes the innate sense of direction that emotions do not lose even in confusion. The layered pastry and soft cream express the process of emotions stacking and maturing layer by layer, and the texture melting in the mouth means the liberation of the moment when emotions flow through acceptance. Not controlling emotions, but regaining the center by following the flowing waves—that is what Remi calls \'the way to handle emotions wisely\'.'
        }
      },
      { 
        chef: 'Lara', 
        name: 'Frozen Whisper', 
        media: '/works/zone2/Lara-2.mp4', 
        type: 'video',
        year: '2025/10',
        dimensions: '1920*1920/1:1',
        description: {
          ko: 'Emotion: Nostalgia (그리움, 회상) 차가운 유리 안에 갇힌 듯한 기억의 파편. 〈Frozen Whisper〉는 얼어붙은 감정의 잔향을 설탕 결정으로 빚어낸 조형이다. 돔 안의 설탕 나무와 눈송이는 지나간 시간의 메모리, 차가운 아름다움 속에서도 사라지지 않는 따뜻한 그리움을 품는다. 디저트는 여기서 단순한 달콤함이 아니라, 시간의 결정체로 기능한다. 이 작품은 기억이 얼마나 섬세하게 깨지기 쉬운지를 보여준다. 감정은 얼음처럼 투명하고, 동시에 그 안에서만 영원하다. 그리움의 감정은 이처럼 얼어붙은 달콤함으로 우리 곁에 남는다.',
          en: 'Emotion: Nostalgia Fragments of memory trapped as if in cold glass. 〈Frozen Whisper〉is a form sculpted from sugar crystals, the lingering echo of frozen emotions. The sugar tree and snowflakes inside the dome are memories of past time, containing warm longing that does not disappear even in cold beauty. Here, dessert functions not as simple sweetness, but as a crystal of time. This work shows how delicately fragile memories are. Emotions are transparent like ice, and at the same time, eternal only within it. The emotion of longing remains with us like this frozen sweetness.'
        }
      }
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
      { 
        chef: 'Tea Cocktail', 
        name: 'Verdenaire Poise', 
        media: '/works/zone3/Tea-3.mp4', 
        type: 'video',
        year: '2025/10',
        dimensions: '1080*1920/9:16',
        description: {
          ko: '〈Verdenaire Poise〉 Verdenaire Poise는 Oeil Island의 세 번째 영역 〈Verdenaire Court〉를 대표하는 티 칵테일로, Graceful Energy (품격 있는 활력) 을 한 잔에 담고 있다. 정원의 바람이 입 안에 머문다. 허브의 리듬, 과실의 투명한 긴장감 — 승리의 순간보다 더 찬란한, 품격의 온도.',
          en: '〈Verdenaire Poise〉 Verdenaire Poise is a tea cocktail representing the third area of Oeil Island, 〈Verdenaire Court〉, containing Graceful Energy in a single glass. The garden breeze lingers in the mouth. The rhythm of herbs, the transparent tension of fruits—a temperature of grace more brilliant than the moment of victory.'
        },
        ingredients: [
          'Green sencha tea',
          'Bergamot zest',
          'Sweet basil syrup',
          'Crushed grape ice'
        ]
      },
      { 
        chef: 'Zen', 
        name: 'Forest Pancake', 
        media: '/works/zone3/Zen-3.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney / ComfyUI',
        dimensions: '2720*1440/16:9',
        description: {
          ko: '<The Still Balance>는 감정이 회복되기 전, 균형을 되찾아가는 과정을 시각화한 오브제다. 겹겹이 쌓인 팬케이크는 불완전하지만 안정된 감정의 층위를 보여주며, 패치워크로 이어진 표면은 흩어진 마음을 다시 꿰매려는 손의 흔적을 남긴다. 주변의 레이스와 핀쿠션, 느슨하게 풀린 실타래는 감정을 정리하기보다 흘려보내는 태도를 상징한다. 거미줄처럼 엮인 실 사이로 스치는 빛과 바람은, 감정이 다시 호흡을 되찾는 순간을 만들어낸다. 그 틈새로 스며든 초록빛 공기와 잔잔한 이끼의 향은, 감정이 완전히 식기 전에 머무는 가장 따뜻한 평형의 상태를 남긴다.',
          en: '<The Still Balance>is an object that visualizes the process of regaining balance before emotions recover. The stacked pancakes show incomplete but stable layers of emotion, and the patchwork-connected surface leaves traces of hands trying to stitch together scattered hearts. The surrounding lace and pincushion, the loosely untangled thread, symbolize an attitude of letting emotions flow rather than organizing them. The light and wind passing through the threads woven like spider webs create the moment when emotions regain their breath. The green air seeping through those gaps and the scent of quiet moss leave the warmest state of equilibrium where emotions remain before completely cooling.'
        }
      },
      { 
        chef: 'Remi', 
        name: 'Emerald Accord', 
        media: '/works/zone3/Remi-3.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney',
        dimensions: '2720*1440/16:9',
        description: {
          ko: '〈Emerald Accord〉 Emotion: Trust (신뢰) 감정은 타인과의 관계 속에서 다듬어진다. 〈Emerald Accord〉는 서로의 마음이 교차하며 조율되는 순간, 감정이 가장 단단한 형태로 정제되는 과정을 시각화한 디저트 조각이다. 에메랄드빛 표면은 평온한 신뢰의 균형을, 왕관의 조형은 관계 속에서 세워지는 존중과 품격을 상징한다. 층층이 쌓인 단면은 이해와 공감이 서서히 축적되는 감정의 구조를 드러낸다. 이 작품은 신뢰가 단순한 믿음이 아닌, 서로를 향한 태도와 책임의 결과임을 보여준다. 감정이 대립을 넘어 조화를 이룰 때, 비로소 우리는 관계의 예술을 배운다. 빛과 질감으로 조형된 이 조각은, 감정이 신뢰로 성숙하는 순간의 평온한 아름다움을 담아낸다.',
          en: '〈Emerald Accord〉 Emotion: Trust Emotions are refined within relationships with others. 〈Emerald Accord〉is a dessert piece that visualizes the process of emotions being refined into their strongest form, the moment when hearts intersect and harmonize. The emerald surface symbolizes the balance of serene trust, and the crown form represents respect and dignity built within relationships. The layered cross-section reveals the structure of emotions where understanding and empathy gradually accumulate. This work shows that trust is not simply belief, but the result of attitude and responsibility toward each other. When emotions achieve harmony beyond opposition, we finally learn the art of relationships. This piece, sculpted with light and texture, contains the serene beauty of the moment when emotions mature into trust.'
        }
      },
      { 
        chef: 'Lara', 
        name: 'Soft Pavilion', 
        media: '/works/zone3/Lara-3.mp4', 
        type: 'video',
        year: '2025/10',
        dimensions: '2720*1440/16:9',
        description: {
          ko: 'Emotion: Serenity (평온, 안정감) 감정의 정점은 언제나 고요 속에서 드러난다. 〈Soft Pavilion〉은 디저트의 곡선을 통해 마음의 평온을 설계한 건축적 조형이다. 부드러운 크림빛 표면과 금빛 라인은 긴 여정의 끝에서 만나는 안정감을 상징한다. 녹색 언덕과 벚꽃의 조화는 감정이 자연과 어우러지는 순간을 표현하며, 디저트의 질감은 삶의 속도를 늦추는 쉼표처럼 작용한다. 이 작품은 \'감정의 건축\'을 이야기한다. 흐르듯 이어지는 형태 속에서, 감정은 굳어 있지 않고 흘러간다. 평온함은 멈춤이 아닌, 부드럽게 이어지는 감정의 리듬이다.',
          en: 'Emotion: Serenity The peak of emotions always reveals itself in stillness. 〈Soft Pavilion〉is an architectural form that designs the serenity of the heart through the curves of dessert. The soft cream-colored surface and golden lines symbolize the stability encountered at the end of a long journey. The harmony of green hills and cherry blossoms expresses the moment when emotions blend with nature, and the texture of the dessert acts like a comma that slows the pace of life. This work speaks of \'the architecture of emotions\'. Within the flowing, connected forms, emotions do not harden but flow. Serenity is not a stop, but the rhythm of emotions that gently continues.'
        }
      }
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
      { 
        chef: 'Tea Cocktail', 
        name: 'Solivara Ember', 
        media: '/works/zone4/Tea-4.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '< Solivara Ember > Solivara Ember는 Amuse-oeil의 네번째 아일랜드 <Solivara Expanse>을 대표하는 티칵테일로, Lingering Solitude (여운의 고독)을 한잔에 담고 있다. 마시는 순간, 시간의 끝이 느리게 녹아내린다. 사막의 공기처럼 건조하지만, 여운은 오래 머문다. 감정의 잔향은 황혼처럼 빛나며 사라진다.',
          en: '< Solivara Ember > Solivara Ember is a tea cocktail representing the fourth island of Amuse-oeil, <Solivara Expanse>, containing Lingering Solitude in a single glass. The moment you drink it, the end of time slowly melts away. Dry like desert air, but the lingering echo remains for a long time. The lingering echo of emotions shines like twilight and disappears.'
        },
        ingredients: [
          'Smoked black tea',
          'Dried apricot reduction',
          'Warm honey mist',
          'Time-melted ice'
        ]
      },
      { 
        chef: 'Remi', 
        name: 'The Lumen Key', 
        media: '/works/zone4/Remi-4.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '〈The Lumen Key〉 Emotion: Wisdom (지혜) 겹겹이 쌓인 감정의 결은 결국 하나의 열쇠가 된다. 그 열쇠는 우리 안의 문을 열고, 스스로의 빛을 발견하게 한다. 〈The Lumen Key〉는 감정이 응축되어 통찰의 빛으로 변하는 과정을 시각화한 디저트 조각이다. 겉으로는 황금빛으로 빛나지만, 그 속에는 부서진 감정의 조각들이 층층이 자리한다. 한 겹 한 겹이 지나온 마음의 궤적이며, 그 결들이 맞물릴 때 비로소 내면의 문이 열린다. 이 작품은 지혜란 완벽한 제어가 아니라, 모든 감정을 온전히 마주할 용기에서 비롯된다는 사실을 보여준다. 빛과 결로 조형된 이 조각은, 감정이 숙성되어 자신을 비추는 \'이해의 빛\'으로 완성되는 순간을 담아낸다.',
          en: '〈The Lumen Key〉 Emotion: Wisdom The layers of accumulated emotions eventually become a single key. That key opens the door within us and allows us to discover our own light. 〈The Lumen Key〉is a dessert piece that visualizes the process of emotions condensing and transforming into the light of insight. Outwardly it shines golden, but within it, fragments of broken emotions are layered. Each layer is a trajectory of the heart that has passed, and only when these layers interlock does the inner door open. This work shows that wisdom does not come from perfect control, but from the courage to fully face all emotions. This piece, sculpted with light and texture, captures the moment when emotions mature and complete as the \'light of understanding\' that illuminates oneself.'
        }
      },
      { 
        chef: 'Zen', 
        name: 'Remnant Oasis', 
        media: '/works/zone4/Zen-4.mp4', 
        type: 'video',
        year: '2025/10',
        medium: 'Midjourney / ComfyUI',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '〈Remnant Oasis〉는 모든 감정이 지나간 뒤, 내면에 남은 온도의 잔열이 다시 숨을 품는 순간을 시각화한 오브제다. 작품은 Zen 정원의 원형 결을 기반으로, 시간에 퇴적된 감정의 흔적과 균열을 중심에 두고 구성되었다. 그 위의 분홍빛 아이스크림과 연두색 젤리의 층은 차가움과 따뜻함이 교차하는 감정의 경계면을 드러내며, 부서진 마음의 조각들이 다시 이어지는 과정을 상징한다. 특히 작품의 표면은 \'킨츠키(Kintsugi)\' 기법의 개념을 차용하여, 금빛의 선으로 감정의 틈을 봉합한 형태로 표현되었다. 이 금의 흐름은 단순한 복구가 아니라, 상처의 자리를 온기로 재탄생시키는 치유의 과정을 의미한다. 한쪽에 세워진 건조된 잎과 금빛 구슬은 시간이 지나도 완전히 식지 않는 생명의 맥박을 암시하고, 그 주변의 원형 모래결은 감정이 파도처럼 다시 순환으로 돌아가는 흐름을 담고 있다. 〈Remnant Oasis〉는 그렇게, 부서진 감정이 다시 이어지고, 흔적이 빛으로 변하는 회귀의 순간을 그려낸다.',
          en: '〈Remnant Oasis〉visualizes the moment when the residual heat of temperature remaining within, after all emotions have passed, breathes again. The work is based on the circular pattern of a Zen garden, centered on the traces and cracks of emotions deposited over time. The layers of pink ice cream and light green jelly above reveal the boundary surface where cold and warmth intersect, symbolizing the process of broken pieces of the heart reconnecting. Particularly, the surface of the work borrows the concept of the \'Kintsugi\' technique, expressed as a form where the gaps of emotions are sealed with golden lines. This flow of gold means not simple restoration, but a healing process that rebirths the place of wounds into warmth. The dried leaves and golden beads standing on one side suggest the pulse of life that never completely cools even as time passes, and the circular sand patterns around them contain the flow of emotions returning to circulation like waves. 〈Remnant Oasis〉thus depicts the moment of return when broken emotions reconnect and traces transform into light.'
        }
      },
      { 
        chef: 'Lara', 
        name: 'Bloom in Silence', 
        media: '/works/zone4/Lara-4.mp4', 
        type: 'video',
        year: '2025/10',
        dimensions: '1920*1920/1:1',
        description: {
          ko: '고요 속의 피움 사막의 고요함 속에서도 생명은 자란다. 〈Bloom in Silence〉는 회복과 내면의 강인함을 상징한다. 선인장 형태의 조형은 외로움 속에서도 자신을 지키는 마음을, 그 위의 흰 꽃은 그 끝에서 피어난 평온을 의미한다. 모래 위로 번지는 빛과 그림자는, 시간이 남긴 상처 위로 내리는 용서와 성장의 흔적이다. 이 작품은 "진정한 강함은, 조용히 피어나는 부드러움 속에 있다."는 깨달음을 전한다.',
          en: 'Bloom in Silence Even in the silence of the desert, life grows. 〈Bloom in Silence〉symbolizes recovery and inner strength. The cactus-shaped form represents the heart that protects itself even in loneliness, and the white flower above means the serenity that blooms at its end. The light and shadows spreading over the sand are traces of forgiveness and growth falling over the wounds left by time. This work conveys the realization that "true strength lies in the softness that blooms quietly."'
        }
      }
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

