# Netlify 배포 가이드

## Netlify 배포 방법

### 방법 1: Netlify 웹사이트에서 배포 (권장)

1. **Netlify 로그인**
   - https://www.netlify.com 접속
   - GitHub 계정으로 로그인

2. **새 사이트 추가**
   - "Add new site" → "Import an existing project" 클릭
   - GitHub 선택
   - 저장소 `js97lee/HCI25-Amuse-oeil` 선택

3. **빌드 설정**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (비워두기)

4. **환경 변수 설정** (선택사항)
   - Site settings → Environment variables
   - 필요시 추가

5. **배포 실행**
   - "Deploy site" 클릭
   - 자동으로 빌드 및 배포 시작

### 방법 2: Netlify CLI로 배포

```bash
# Netlify CLI 설치
npm install -g netlify-cli

# Netlify 로그인
netlify login

# 배포
netlify deploy --prod
```

### 커스텀 도메인 설정

1. **Netlify 대시보드에서**
   - Site settings → Domain management
   - "Add custom domain" 클릭
   - 도메인 입력 (예: `amuse-oeil.com`)

2. **DNS 설정**
   - Netlify가 제공하는 DNS 레코드를 도메인 제공업체에 추가
   - A 레코드 또는 CNAME 레코드 설정

### 배포 후 확인

- **Netlify 자동 생성 URL**: `https://hci25-amuse-oeil.netlify.app` (또는 랜덤 이름)
- **커스텀 도메인**: 설정한 도메인

### 주의사항

1. **React Router**: `netlify.toml`과 `public/_redirects` 파일이 SPA 라우팅을 처리합니다.
2. **환경 변수**: 필요시 Netlify 대시보드에서 환경 변수 설정
3. **빌드 시간**: 무료 플랜은 빌드 시간 제한이 있습니다.

### 자동 배포

- GitHub에 푸시하면 자동으로 Netlify에서 빌드 및 배포됩니다.
- Pull Request마다 미리보기 배포도 자동 생성됩니다.

