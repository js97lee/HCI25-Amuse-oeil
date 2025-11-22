# Netlify 배포 설정 가이드

## 현재 상태 확인

### GitHub 저장소
- 저장소: https://github.com/js97lee/HCI25-Amuse-oeil
- 브랜치: `main`
- 최신 커밋: `5c501a5` - "docs: Git 상태 확인 가이드 추가"

### Netlify 설정 파일
- `netlify.toml` 존재 ✅
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

## Netlify 배포 설정 단계

### 1. Netlify 대시보드에서 저장소 연결

1. **Netlify 대시보드 접속**
   - https://app.netlify.com

2. **프로젝트 선택**
   - "HCI25-Amuse-oeil" 또는 "splendorous-liger-8ff9ab" 프로젝트 선택

3. **Site settings → Build & deploy → Continuous deployment**
   - "Link repository" 버튼 클릭
   - GitHub 선택
   - 저장소: `HCI25-Amuse-oeil` 선택
   - 브랜치: `main` 선택

4. **빌드 설정 확인**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (netlify.toml이 있으면 자동으로 인식됨)

### 2. 수동 배포 (임시 해결책)

1. **Netlify 대시보드 → Deploys 탭**
2. **"Trigger deploy" → "Deploy site" 클릭**
3. **"Deploy manually" 선택**
   - GitHub 저장소 선택
   - 브랜치: `main` 선택
   - Deploy 클릭

### 3. 배포 확인

배포가 성공하면:
- "Production" 배포가 표시됨
- "Published" 상태로 변경됨
- 사이트 URL로 접속 가능

## 문제 해결

### Netlify가 main 브랜치를 인식하지 않는 경우

1. **저장소 연결 확인**
   - Site settings → Build & deploy → Continuous deployment
   - "Current repository"가 연결되어 있는지 확인

2. **브랜치 설정 확인**
   - Production branch: `main`으로 설정
   - Branch deploys: 활성화

3. **빌드 로그 확인**
   - Deploys 탭에서 배포 클릭
   - "Deploy log" 확인
   - 에러 메시지 확인

### 빌드 실패 시

1. **로컬에서 빌드 테스트**
   ```bash
   npm run build
   ```

2. **에러 확인**
   - 빌드 로그에서 에러 메시지 확인
   - package.json 의존성 확인

3. **환경 변수 확인**
   - Netlify → Site settings → Environment variables
   - 필요한 환경 변수 설정

## 현재 파일 구조

```
HCI_Amuse-Oeil/
├── netlify.toml          # Netlify 설정
├── package.json          # 프로젝트 설정
├── vite.config.js        # Vite 설정
├── public/               # 정적 파일
│   ├── works/            # 작품 파일들
│   └── Poster/           # 포스터 파일들
└── src/                  # 소스 코드
    ├── components/       # 공통 컴포넌트
    ├── data/             # 데이터 파일
    └── pages/            # 페이지 컴포넌트
```

## 다음 단계

1. ✅ GitHub에 모든 파일 푸시 완료
2. ⏳ Netlify에서 저장소 연결 필요
3. ⏳ 자동 배포 활성화 필요
4. ⏳ Production 배포 확인 필요

