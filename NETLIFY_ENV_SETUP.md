# Netlify 환경변수 설정 가이드

## 문제
Netlify에 배포된 웹사이트에서 Google Sheets 연동이 작동하지 않는 경우, 환경변수가 설정되지 않았기 때문입니다.

## 해결 방법

### 1. Netlify 대시보드 접속
1. https://app.netlify.com 접속
2. 로그인 후 사이트 선택 (`HCI25-Amuse-oeil` 또는 해당 사이트)

### 2. 환경변수 설정
1. **Site settings** 클릭
2. 왼쪽 메뉴에서 **Environment variables** 클릭
3. **Add a variable** 클릭
4. 다음 정보 입력:
   - **Key**: `VITE_GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value**: `https://script.google.com/macros/s/AKfycby4hU4CszIwnLzZZgNn_iRBxYZJwn1b3BVNMCX2AdXGkHzEM9vcNlr6laYqRpyDYYUpJA/exec`
5. **Save** 클릭

### 3. 재배포
환경변수를 추가한 후:
1. **Deploys** 탭으로 이동
2. 최신 배포의 **Trigger deploy** → **Deploy site** 클릭
   또는
   - GitHub에 빈 커밋을 푸시하여 자동 재배포:
   ```bash
   git commit --allow-empty -m "Trigger rebuild for env vars"
   git push origin main
   ```

### 4. 확인
재배포 완료 후:
1. 배포된 사이트에서 설문조사 제출
2. 브라우저 개발자 도구(F12) > Console에서 확인:
   - 성공: `Survey data saved successfully`
   - 실패: 에러 메시지 확인
3. Google Sheets에서 데이터 확인

## 현재 Web App URL
```
https://script.google.com/macros/s/AKfycby4hU4CszIwnLzZZgNn_iRBxYZJwn1b3BVNMCX2AdXGkHzEM9vcNlr6laYqRpyDYYUpJA/exec
```

## 주의사항
- 환경변수 이름은 반드시 `VITE_`로 시작해야 합니다 (Vite의 요구사항)
- 환경변수를 변경한 후에는 반드시 재배포해야 합니다
- 환경변수는 빌드 시점에 주입되므로, 빌드 후에는 변경해도 적용되지 않습니다

