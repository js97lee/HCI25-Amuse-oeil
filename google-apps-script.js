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
const SPREADSHEET_ID = '1gnfF0vkAmZ7Ja1Hu1qQ6s7FT9zN_N4MP6T9pDVJ3XrM';

// 시트 이름
const SHEET_NAME = 'Survey Responses';
const EXHIBITION_SHEET_NAME = 'Exhibition Survey Responses';

// GET 요청 처리 (테스트용)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      message: 'Google Apps Script is running',
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// OPTIONS 요청 처리 (CORS preflight)
function doOptions() {
  return HtmlService.createHtmlOutput('');
}

function doPost(e) {
  try {
    // 스프레드시트 열기
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // POST 데이터 파싱
    const data = JSON.parse(e.postData.contents);
    
    // 디버깅: 로그에 데이터 출력
    Logger.log('Received data: ' + JSON.stringify(data));
    Logger.log('Survey type: ' + (data.surveyType || 'not set'));
    
    // 설문 유형에 따라 다른 시트 사용
    const isExhibitionSurvey = data.surveyType === 'exhibition';
    const sheetName = isExhibitionSurvey ? EXHIBITION_SHEET_NAME : SHEET_NAME;
    Logger.log('Sheet name: ' + sheetName);
    
    let sheet = ss.getSheetByName(sheetName);
    
    // 시트가 없으면 생성
    if (!sheet) {
      Logger.log('Creating new sheet: ' + sheetName);
      sheet = ss.insertSheet(sheetName);
      
      if (isExhibitionSurvey) {
        // 전시 설문조사 헤더
        sheet.appendRow([
          'Timestamp',
          'Language',
          'Satisfaction',
          'Favorite Chef',
          'Favorite Zone',
          'Comments',
          'User Agent',
          'IP Address'
        ]);
      } else {
        // Remu Interaction 설문조사 헤더
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
      }
      
      // 헤더 스타일링
      const headerRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // 타임스탬프
    const timestamp = new Date();
    
    // 설문 유형에 따라 다른 데이터 형식으로 저장
    if (isExhibitionSurvey) {
      // 전시 설문조사 데이터
      sheet.appendRow([
        timestamp,
        data.language || 'ko',
        data.satisfaction || '',
        data.favoriteChef || '',
        data.favoriteZone || '',
        data.comments || '',
        data.userAgent || '',
        data.ipAddress || ''
      ]);
    } else {
      // Remu Interaction 설문조사 데이터
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
    }
    
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

// 테스트 함수 - Remu Interaction 설문조사
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
  Logger.log('Remu Interaction Test Result:', result.getContent());
}

// 테스트 함수 - 전시 설문조사
function testExhibitionSurvey() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        language: 'ko',
        satisfaction: 'very-satisfied',
        favoriteChef: 'zen',
        favoriteZone: 'zone1',
        comments: '테스트 댓글입니다.',
        surveyType: 'exhibition'
      })
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Exhibition Survey Test Result:', result.getContent());
}

