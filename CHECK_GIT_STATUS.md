# Git 상태 확인 가이드

## 커밋 내역 확인 방법

### 1. GitHub 웹사이트에서 확인
- 저장소: https://github.com/js97lee/HCI25-Amuse-oeil
- "Commits" 클릭 또는 URL: https://github.com/js97lee/HCI25-Amuse-oeil/commits/main

### 2. 터미널에서 확인
```bash
# 최근 10개 커밋
git log --oneline -10

# 상세 커밋 내역
git log --stat -5

# 그래프로 확인
git log --all --oneline --graph --decorate -15
```

## Git LFS 파일 상태 확인

### 현재 LFS 추적 파일
```bash
# LFS로 추적되는 파일 목록
git lfs ls-files

# LFS 파일 상태 확인
git lfs status
```

### LFS 파일이 제대로 푸시되었는지 확인
```bash
# LFS 파일 강제 푸시
git lfs push origin main --all

# 원격 저장소와 비교
git ls-remote origin main
```

## 문제 해결

### 일부 파일만 올라가는 경우

1. **LFS 파일 확인**
   ```bash
   git lfs ls-files
   git lfs push origin main --all
   ```

2. **모든 파일 추가 확인**
   ```bash
   git add -A
   git status
   ```

3. **누락된 파일 확인**
   ```bash
   # 추적되지 않는 파일 찾기
   git ls-files --others --exclude-standard
   
   # 특정 폴더 확인
   ls -la public/works/zone4/
   git ls-files public/works/zone4/
   ```

## 현재 상태

- ✅ 모든 .mp4 파일이 Git LFS로 추적됨 (17개 파일, 611MB)
- ✅ 모든 Zone 설명 이미지 (.jpg) 추적됨
- ✅ 모든 소스 코드 파일 추적됨
- ✅ 최신 커밋: `90caec5` - "refactor: Zone 페이지 공통 컴포넌트로 경량화"

