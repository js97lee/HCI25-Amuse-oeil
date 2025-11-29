/**
 * Google Apps Script 코드
 * 
 * 사용 방법:
 * 1. Google Sheets를 열고 Extensions > Apps Script로 이동
 * 2. 이 코드를 붙여넣기
 * 3. SPREADSHEET_ID를 본인의 스프레드시트 ID로 변경
 * 4. Deploy > New deployment > Web app으로 배포
 * 5. Execute as: Me, Who has access: Anyone로 설정
 * 6. 배포 후 나오는 Web App URL을 복사하여 .env 파일의 VITE_GOOGLE_SHEETS_WEBHOOK_URL에 설정
 */

// 스프레드시트 ID를 여기에 입력하세요
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

// 시트 이름
const SHEET_NAME = 'Survey Responses';

function doPost(e) {
  try {
    // 스프레드시트 열기
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // 시트가 없으면 생성
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // 헤더 추가
      sheet.appendRow([
        'Timestamp',
        'Language',
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4',
        'Question 5',
        'Recommended Chef',
        'Chef Name',
        'User Agent',
        'IP Address'
      ]);
      // 헤더 스타일링
      const headerRange = sheet.getRange(1, 1, 1, 11);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // POST 데이터 파싱
    const data = JSON.parse(e.postData.contents);
    
    // 타임스탬프
    const timestamp = new Date();
    
    // 데이터 행 추가
    sheet.appendRow([
      timestamp,
      data.language || 'ko',
      data.answers[0] || '',
      data.answers[1] || '',
      data.answers[2] || '',
      data.answers[3] || '',
      data.answers[4] || '',
      data.recommendedChef || '',
      data.chefName || '',
      data.userAgent || '',
      data.ipAddress || ''
    ]);
    
    // 성공 응답
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        timestamp: timestamp.toISOString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // 에러 응답
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// 테스트 함수 (선택사항)
function testDoPost() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        language: 'ko',
        answers: ['차가움', '크리미한', '은은하게', '천천히 스며듦', '고요함'],
        recommendedChef: 1,
        chefName: 'Nara'
      })
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

