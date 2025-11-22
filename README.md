# HCI Amuse-Oeil - 전시 아카이브 웹사이트

React로 제작된 전시 아카이브 웹사이트입니다.

## 프로젝트 구조

```
HCI_Amuse-Oeil/
├── public/
│   ├── poster.jpg          # 전시 포스터 이미지
│   ├── remu.jpg            # 레뮤아 캐릭터 이미지
│   └── works/
│       ├── zone1/
│       │   ├── tea1.jpg    # Zone 1 - 티 칵테일 작품
│       │   ├── zen1.jpg    # Zone 1 - Zen 쉐프 작품
│       │   ├── remi1.jpg   # Zone 1 - Remi 쉐프 작품
│       │   └── lara1.jpg   # Zone 1 - Lara 쉐프 작품
│       ├── zone2/
│       │   ├── tea2.jpg    # Zone 2 - 티 칵테일 작품
│       │   ├── zen2.jpg    # Zone 2 - Zen 쉐프 작품
│       │   ├── remi2.jpg   # Zone 2 - Remi 쉐프 작품
│       │   └── lara2.jpg   # Zone 2 - Lara 쉐프 작품
│       ├── zone3/
│       │   ├── tea3.jpg    # Zone 3 - 티 칵테일 작품
│       │   ├── zen3.jpg    # Zone 3 - Zen 쉐프 작품
│       │   ├── remi3.jpg   # Zone 3 - Remi 쉐프 작품
│       │   └── lara3.jpg   # Zone 3 - Lara 쉐프 작품
│       └── zone4/
│           ├── tea4.jpg    # Zone 4 - 티 칵테일 작품
│           ├── zen4.jpg    # Zone 4 - Zen 쉐프 작품
│           ├── remi4.jpg   # Zone 4 - Remi 쉐프 작품
│           └── lara4.jpg   # Zone 4 - Lara 쉐프 작품
├── src/
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── Overview.jsx    # 전시 개요
│   │   ├── RemuInteraction.jsx  # 레뮤아 인터랙션
│   │   ├── Zone1-4.jsx     # Zone 1-4 전시 페이지
│   │   ├── Closing.jsx     # 클로징 멘트
│   │   ├── Survey.jsx      # 설문조사
│   │   └── AllWorks.jsx    # 작품 전체 보기
│   ├── App.jsx             # 메인 앱 컴포넌트 (라우팅)
│   └── main.jsx            # 엔트리 포인트
└── package.json
```

## 이미지 파일 추가 방법

각 쉐프의 작업물 이미지를 다음 경로에 추가하세요:

1. **포스터 이미지**: `public/poster.jpg`
2. **레뮤아 이미지**: `public/remu.jpg`
3. **작품 이미지들** (파일명 규칙: `쉐프이름 + 존번호.jpg`): 
   - Zone 1: `public/works/zone1/tea1.jpg`, `zen1.jpg`, `remi1.jpg`, `lara1.jpg`
   - Zone 2: `public/works/zone2/tea2.jpg`, `zen2.jpg`, `remi2.jpg`, `lara2.jpg`
   - Zone 3: `public/works/zone3/tea3.jpg`, `zen3.jpg`, `remi3.jpg`, `lara3.jpg`
   - Zone 4: `public/works/zone4/tea4.jpg`, `zen4.jpg`, `remi4.jpg`, `lara4.jpg`
   
   **파일명 규칙**:
   - 티 칵테일: `tea + 존번호.jpg` (예: `tea1.jpg`, `tea2.jpg`)
   - 쉐프 작품: `쉐프이름(소문자) + 존번호.jpg` (예: `zen1.jpg`, `remi2.jpg`, `lara3.jpg`)

> **참고**: 이미지 파일이 없어도 웹사이트는 정상 작동하며, 자동으로 placeholder가 표시됩니다.

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 페이지 구조

1. **전시 개요** (`/`) - 전시 소개 및 시작
2. **레뮤아 인터랙션** (`/remu-interaction`) - 쉐프 추천 받기
3. **Zone 1-4** (`/zone1`, `/zone2`, `/zone3`, `/zone4`) - 각 존의 작품 전시 (티 칵테일 + 3명의 쉐프 작품)
4. **클로징** (`/closing`) - 전시 마무리
5. **설문조사** (`/survey`) - 사용자 피드백 수집
6. **작품 전체 보기** (`/all-works`) - 16개 작품을 4x4 그리드로 표시

## 기술 스택

- React 19
- React Router DOM
- Vite
- CSS3

