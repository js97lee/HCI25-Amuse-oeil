# Google Sheets 연동 설정 가이드

설문조사 결과를 Google Sheets에 자동으로 저장하는 기능을 설정하는 방법입니다.

## 1단계: Google Sheets 생성

1. [Google Sheets](https://sheets.google.com)에 접속
2. 새로운 스프레드시트 생성
3. 스프레드시트 이름을 원하는 이름으로 변경 (예: "Amuse-Oeil Survey Responses")

## 2단계: Google Apps Script 설정

1. 생성한 스프레드시트에서 **Extensions** > **Apps Script** 클릭
2. `google-apps-script.js` 파일의 내용을 복사하여 Apps Script 편집기에 붙여넣기
3. **SPREADSHEET_ID** 찾기:
   - 스프레드시트 URL에서 찾을 수 있습니다
   - URL 형식: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - 예: `https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j/edit` → ID는 `1a2b3c4d5e6f7g8h9i0j`
4. 코드에서 `YOUR_SPREADSHEET_ID_HERE`를 실제 스프레드시트 ID로 변경
5. 파일 저장 (Ctrl+S 또는 Cmd+S)

## 3단계: Apps Script 배포

1. Apps Script 편집기에서 **Deploy** > **New deployment** 클릭
2. **Select type** 옆의 톱니바퀴 아이콘 클릭
3. **Web app** 선택
4. 설정:
   - **Description**: "Survey Data Webhook" (원하는 설명)
   - **Execute as**: Me
   - **Who has access**: Anyone
5. **Deploy** 클릭
6. 권한 승인:
   - "Authorize access" 클릭
   - Google 계정 선택
   - "Advanced" > "Go to [프로젝트 이름] (unsafe)" 클릭
   - "Allow" 클릭
7. 배포 완료 후 나타나는 **Web App URL** 복사
   - 형식: `https://script.google.com/macros/s/SCRIPT_ID/exec`

## 4단계: 환경변수 설정

1. 프로젝트 루트에 `.env` 파일 생성 (`.env.example` 참고)
2. 복사한 Web App URL을 `.env` 파일에 추가:

```env
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. 개발 서버 재시작:
   ```bash
   npm run dev
   ```

## 5단계: 테스트

1. 웹사이트에서 설문조사를 완료
2. Google Sheets를 확인하여 데이터가 저장되었는지 확인
3. 첫 번째 행에는 자동으로 헤더가 생성됩니다:
   - Timestamp
   - Language
   - Question 1-5
   - Recommended Chef
   - Chef Name
   - User Agent
   - IP Address

## 문제 해결

### 데이터가 저장되지 않는 경우

1. **Webhook URL 확인**
   - `.env` 파일의 URL이 올바른지 확인
   - Apps Script 배포 URL과 일치하는지 확인

2. **권한 확인**
   - Apps Script 배포 시 "Who has access"가 "Anyone"로 설정되었는지 확인

3. **브라우저 콘솔 확인**
   - 개발자 도구(F12) > Console 탭에서 에러 메시지 확인
   - "Survey data saved successfully" 메시지가 보이는지 확인

4. **Apps Script 로그 확인**
   - Apps Script 편집기 > Executions 탭에서 실행 로그 확인

### CORS 에러가 발생하는 경우

- Google Apps Script는 CORS를 자동으로 처리하므로 일반적으로 문제가 없습니다
- 만약 문제가 있다면, Apps Script 코드에서 `doPost` 함수가 올바르게 구현되었는지 확인

## 추가 기능

### 로컬 백업

설문 데이터는 Google Sheets 저장 실패 시에도 자동으로 로컬 스토리지에 백업됩니다.
- 브라우저 개발자 도구 > Application > Local Storage > `surveyBackup` 키에서 확인 가능
- 최대 100개의 설문 결과가 저장됩니다

### 데이터 형식

각 설문 응답은 다음 형식으로 저장됩니다:

| 필드 | 설명 |
|------|------|
| Timestamp | 응답 시간 (ISO 8601 형식) |
| Language | 언어 설정 ('ko' 또는 'en') |
| Question 1-5 | 각 질문에 대한 답변 |
| Recommended Chef | 추천된 쉐프 ID (1, 2, 또는 3) |
| Chef Name | 쉐프 이름 (Nara, Remi, 또는 Zen) |
| User Agent | 사용자 브라우저 정보 |
| IP Address | IP 주소 (현재는 빈 값) |

## 보안 고려사항

- Web App URL은 공개되어 있지만, 스프레드시트 자체는 비공개로 설정할 수 있습니다
- 민감한 정보가 포함된 경우 추가 보안 조치를 고려하세요
- 프로덕션 환경에서는 환경변수를 안전하게 관리하세요

