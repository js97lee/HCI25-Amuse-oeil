# Git LFS (Large File Storage) 설명

## Git LFS란?

**Git LFS (Large File Storage)**는 Git 저장소에서 큰 파일을 효율적으로 관리하기 위한 확장 도구입니다.

### 왜 필요한가?

GitHub는 기본적으로 **단일 파일 100MB 제한**이 있습니다:
- 50MB 이상: 경고
- 100MB 초과: **푸시 거부**

우리 프로젝트의 비디오 파일들:
- `Remi-3.mp4`: **224.55 MB** ❌ (100MB 초과!)
- `Zen-3.mp4`: 96.66 MB (경고)
- `Amuse-oeil-sound-poster10-15.mp4`: 57.73 MB (경고)
- 기타 비디오 파일들: 각각 수십 MB

**Git LFS 없이는 GitHub에 푸시할 수 없습니다!**

## Git LFS 작동 방식

### 일반 Git (LFS 없이)
```
비디오 파일 (224MB) → Git 저장소에 직접 저장
→ 저장소 크기 급증
→ 클론/푸시 시간 매우 느림
→ GitHub 100MB 제한 초과로 푸시 불가
```

### Git LFS 사용
```
비디오 파일 (224MB) → Git LFS 서버에 저장
→ Git 저장소에는 작은 포인터 파일만 저장 (약 130 bytes)
→ 저장소 크기 작음
→ 클론/푸시 빠름
→ GitHub 제한 통과 ✅
```

## 현재 프로젝트 상태

### Git LFS로 추적 중인 파일
- **17개 비디오 파일** (.mp4)
- **총 용량**: 약 611 MB
- **Git 저장소 크기**: 작음 (포인터만 저장)

### .gitattributes 설정
```
*.mp4 filter=lfs diff=lfs merge=lfs -text
```
이 설정으로 모든 .mp4 파일이 자동으로 Git LFS로 추적됩니다.

## Git LFS를 빼면 안 되는 이유

### 1. 파일 크기 제한
- `Remi-3.mp4` (224MB)는 Git LFS 없이는 **절대 푸시 불가**
- 다른 큰 비디오 파일들도 문제 발생

### 2. 저장소 성능
- LFS 없이: 저장소가 수백 MB로 커짐
- LFS 사용: 저장소는 작고, 실제 파일은 LFS 서버에

### 3. 협업 효율성
- LFS 없이: 클론 시 모든 큰 파일 다운로드 (느림)
- LFS 사용: 필요할 때만 다운로드 (빠름)

### 4. GitHub 정책
- GitHub는 큰 파일을 LFS 사용을 권장
- 무료 계정도 LFS 1GB까지 지원

## Git LFS 확인 방법

### 현재 추적 중인 파일 확인
```bash
git lfs ls-files
```

### LFS 파일 상태 확인
```bash
git lfs status
```

### LFS 파일 강제 푸시
```bash
git lfs push origin main --all
```

## 주의사항

### ⚠️ Git LFS를 제거하면 안 됩니다!

1. **이미 LFS로 추적 중인 파일을 일반 Git으로 변경하면:**
   - 파일이 손상될 수 있음
   - GitHub 푸시 실패
   - 저장소 문제 발생

2. **.gitattributes를 삭제하면:**
   - 새로운 .mp4 파일이 LFS로 추적되지 않음
   - 큰 파일 푸시 시 에러 발생

3. **Git LFS를 제거하면:**
   - 기존 LFS 파일들이 포인터로만 남음
   - 실제 파일 접근 불가

## 현재 설정 확인

### ✅ 올바른 설정
- `.gitattributes` 파일 존재
- `*.mp4` 파일이 LFS로 추적됨
- 17개 비디오 파일 모두 LFS로 관리됨
- GitHub 푸시 성공

### ✅ 유지해야 할 것
- `.gitattributes` 파일 유지
- Git LFS 설치 유지
- LFS 추적 설정 유지

## 결론

**Git LFS는 필수입니다!**

- 큰 비디오 파일들을 GitHub에 올리기 위해 필요
- 저장소 성능을 위해 필요
- GitHub 정책 준수를 위해 필요
- **절대 제거하면 안 됩니다!**

현재 설정이 올바르게 되어 있으므로 그대로 유지하세요.

