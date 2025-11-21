# 배포 가이드

## 현재 상태

✅ **완료된 설정:**
- `gh-pages` 패키지 설치 완료
- `vite.config.js`에 base path 설정 완료
- 배포 스크립트 추가 완료
- 404.html 파일 생성 완료

## 배포 방법

### 1. GitHub 저장소 생성 및 초기화

```bash
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: AMUSE OEIL 전시 아카이브 웹사이트"

# GitHub에 저장소 생성 후 연결 (저장소 이름: HCI_Amuse-Oeil)
git remote add origin https://github.com/YOUR_USERNAME/HCI_Amuse-Oeil.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

### 2. GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** → **Pages** 메뉴 클릭
3. **Source**에서 **Deploy from a branch** 선택
4. **Branch**에서 `gh-pages` 선택
5. **Save** 클릭

### 3. 배포 실행

```bash
# 배포 실행 (빌드 + GitHub Pages에 배포)
npm run deploy
```

또는

```bash
# 빌드만 실행
npm run build

# 배포만 실행
npx gh-pages -d dist
```

### 4. 배포 확인

배포 후 약 1-2분 후 다음 주소에서 확인 가능:
- **GitHub Pages URL**: `https://YOUR_USERNAME.github.io/HCI_Amuse-Oeil/`

## 커스텀 도메인 설정 (선택사항)

### 도메인을 사용하는 경우:

1. **vite.config.js 수정**
   ```js
   base: '/',  // base를 '/'로 변경
   ```

2. **GitHub 저장소 설정**
   - Settings → Pages → Custom domain에 도메인 입력
   - 예: `amuse-oeil.com` 또는 `www.amuse-oeil.com`

3. **도메인 DNS 설정**
   - A 레코드: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 또는 CNAME 레코드: `YOUR_USERNAME.github.io`

4. **public 폴더에 CNAME 파일 생성**
   ```bash
   echo "amuse-oeil.com" > public/CNAME
   ```

## 주의사항

1. **저장소 이름 변경 시**: `vite.config.js`의 `base` 값을 저장소 이름에 맞게 수정
2. **React Router**: GitHub Pages에서는 직접 URL 접근 시 404가 발생할 수 있음. `404.html` 파일이 이를 처리합니다.
3. **비디오 파일**: 큰 비디오 파일은 GitHub의 파일 크기 제한(100MB)에 걸릴 수 있습니다. 필요시 외부 호스팅 고려

## 배포 후 확인사항

- [ ] 메인 페이지 로드 확인
- [ ] 모든 라우팅 경로 작동 확인
- [ ] 비디오 파일 재생 확인
- [ ] 폰트 로드 확인
- [ ] 모바일 반응형 확인

