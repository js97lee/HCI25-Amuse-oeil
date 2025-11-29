# CORS 문제 해결 방법

## 문제
Google Apps Script Web App에서 CORS 에러가 발생합니다:
```
Access to fetch at 'https://script.google.com/macros/s/...' from origin '...' has been blocked by CORS policy
```

## 해결 방법

### 방법 1: Google Apps Script 배포 재확인 (가장 중요)

1. **Google Apps Script 편집기에서**
   - Deploy > Manage deployments 클릭
   - 현재 배포의 "Edit" (연필 아이콘) 클릭
   - **Who has access**가 **"Anyone"**로 설정되어 있는지 확인
   - **"Anyone"**가 아니면 변경하고 **Deploy** 클릭

2. **새 버전으로 배포**
   - 코드를 업데이트한 경우, 새 버전으로 배포해야 합니다
   - Deploy > New deployment 클릭
   - 또는 기존 배포를 수정하고 새 버전으로 배포

### 방법 2: Google Apps Script 코드 업데이트

현재 `google-apps-script.js` 파일의 최신 코드를 Google Apps Script 편집기에 복사하여 붙여넣기:

1. Google Apps Script 편집기 열기
2. `google-apps-script.js` 파일의 전체 내용 복사
3. Apps Script 편집기에 붙여넣기 (기존 코드 덮어쓰기)
4. 저장
5. **새 버전으로 배포** (중요!)

### 방법 3: Web App URL 확인

현재 Web App URL:
```
https://script.google.com/macros/s/AKfycby4hU4CszIwnLzZZgNn_iRBxYZJwn1b3BVNMCX2AdXGkHzEM9vcNlr6laYqRpyDYYUpJA/exec
```

이 URL이 최신 배포 버전인지 확인하세요.

## 중요 사항

1. **"Anyone" 접근 권한 필수**: Google Apps Script Web App은 CORS를 허용하려면 반드시 "Anyone"로 배포되어야 합니다.

2. **코드 업데이트 후 재배포 필수**: 코드를 수정한 후에는 반드시 새 버전으로 배포해야 합니다.

3. **로컬 개발 환경**: `http://localhost:5173`에서도 작동해야 합니다. Google Apps Script는 모든 origin에서 접근을 허용해야 합니다.

## 테스트

1. Google Apps Script 편집기에서 `testDoPost` 함수 실행
2. 브라우저에서 설문조사 제출
3. 브라우저 콘솔에서 에러 확인
4. Google Sheets에서 데이터 확인

